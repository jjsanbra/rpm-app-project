'use strict';

/**
 * scoring.js — Lógica de cálculo de juegos, sets y puntos del ranking de pádel.
 *
 * Reglas oficiales:
 *   Victoria 2-0 → Ganador: 5 pts, Perdedor: 1 pt
 *   Victoria 2-1 → Ganador: 4 pts, Perdedor: 2 pts
 */

/**
 * Valida si el marcador de juegos de un set individual es reglamentario en pádel.
 * Marcadores estándar válidos:
 *   6-0, 6-1, 6-2, 6-3, 6-4 (y viceversa)
 *   7-5, 7-6 (y viceversa)
 *   En el 3er set se permite además formato super tie-break (ej: 10-8, 11-9).
 *
 * @param {number} g1 - Juegos del equipo 1
 * @param {number} g2 - Juegos del equipo 2
 * @param {boolean} isThirdSet - Si es el tercer set
 * @returns {{ valid: boolean, winner?: 1 | 2, error?: string }}
 */
function validateSetGames(g1, g2, isThirdSet = false) {
  const a = Number(g1);
  const b = Number(g2);

  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return { valid: false, error: 'Los juegos deben ser números enteros positivos.' };
  }

  if (a === b) {
    return { valid: false, error: `Un set no puede terminar en empate (${a}-${b}).` };
  }

  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const winner = a > b ? 1 : 2;

  // Set estándar de pádel (6-X con dif >= 2, o 7-5, o 7-6)
  if (max === 6 && min <= 4) {
    return { valid: true, winner };
  }
  if (max === 7 && (min === 5 || min === 6)) {
    return { valid: true, winner };
  }

  // Super tie-break en 3er set (opcional en algunos torneos/rankings, ej: 10-8)
  if (isThirdSet && max >= 10 && (max - min >= 2)) {
    return { valid: true, winner };
  }

  return {
    valid: false,
    error: `Marcador de set inválido (${a}-${b}). Marcadores estándar: 6-0..6-4, 7-5, 7-6.`
  };
}

/**
 * Valida y calcula todo el resultado del partido (sets, juegos totales y puntos de ranking)
 * a partir de los juegos de cada set.
 *
 * @param {object} gamesData
 * @param {number} gamesData.set1TeamOne
 * @param {number} gamesData.set1TeamTwo
 * @param {number} gamesData.set2TeamOne
 * @param {number} gamesData.set2TeamTwo
 * @param {number|null} [gamesData.set3TeamOne]
 * @param {number|null} [gamesData.set3TeamTwo]
 * @returns {{
 *   valid: boolean,
 *   error?: string,
 *   setsTeamOne?: number,
 *   setsTeamTwo?: number,
 *   gamesTeamOne?: number,
 *   gamesTeamTwo?: number,
 *   pointsTeamOne?: number,
 *   pointsTeamTwo?: number,
 *   set1TeamOne?: number,
 *   set1TeamTwo?: number,
 *   set2TeamOne?: number,
 *   set2TeamTwo?: number,
 *   set3TeamOne?: number|null,
 *   set3TeamTwo?: number|null
 * }}
 */
function calculateMatchFromGames(gamesData) {
  const { set1TeamOne, set1TeamTwo, set2TeamOne, set2TeamTwo, set3TeamOne, set3TeamTwo } = gamesData;

  if (set1TeamOne === undefined || set1TeamTwo === undefined ||
      set2TeamOne === undefined || set2TeamTwo === undefined) {
    return { valid: false, error: 'Los sets 1 y 2 son obligatorios.' };
  }

  // 1. Validar Set 1
  const v1 = validateSetGames(set1TeamOne, set1TeamTwo, false);
  if (!v1.valid) return { valid: false, error: `Set 1: ${v1.error}` };

  // 2. Validar Set 2
  const v2 = validateSetGames(set2TeamOne, set2TeamTwo, false);
  if (!v2.valid) return { valid: false, error: `Set 2: ${v2.error}` };

  let setsOne = 0;
  let setsTwo = 0;

  if (v1.winner === 1) setsOne++; else setsTwo++;
  if (v2.winner === 1) setsOne++; else setsTwo++;

  let finalS3T1 = null;
  let finalS3T2 = null;

  // Si van 2-0 ó 0-2, el partido ya ha concluido
  if (setsOne === 2 || setsTwo === 2) {
    if (set3TeamOne !== null && set3TeamOne !== undefined && set3TeamOne !== '' &&
        set3TeamTwo !== null && set3TeamTwo !== undefined && set3TeamTwo !== '') {
      return {
        valid: false,
        error: 'No se debe introducir 3er set si un equipo ya ha ganado los 2 primeros sets.'
      };
    }
  } else {
    // Empate 1-1 tras 2 sets: El 3er set es OBLIGATORIO
    if (set3TeamOne === null || set3TeamOne === undefined || set3TeamOne === '' ||
        set3TeamTwo === null || set3TeamTwo === undefined || set3TeamTwo === '') {
      return {
        valid: false,
        error: 'El 3er set es obligatorio al haber empate 1-1 en sets.'
      };
    }

    const v3 = validateSetGames(set3TeamOne, set3TeamTwo, true);
    if (!v3.valid) return { valid: false, error: `Set 3: ${v3.error}` };

    if (v3.winner === 1) setsOne++; else setsTwo++;
    finalS3T1 = Number(set3TeamOne);
    finalS3T2 = Number(set3TeamTwo);
  }

  const s1T1 = Number(set1TeamOne);
  const s1T2 = Number(set1TeamTwo);
  const s2T1 = Number(set2TeamOne);
  const s2T2 = Number(set2TeamTwo);

  const gamesOne = s1T1 + s2T1 + (finalS3T1 ?? 0);
  const gamesTwo = s1T2 + s2T2 + (finalS3T2 ?? 0);

  const { pointsTeamOne, pointsTeamTwo } = calculatePoints(setsOne, setsTwo);

  return {
    valid: true,
    set1TeamOne: s1T1,
    set1TeamTwo: s1T2,
    set2TeamOne: s2T1,
    set2TeamTwo: s2T2,
    set3TeamOne: finalS3T1,
    set3TeamTwo: finalS3T2,
    setsTeamOne: setsOne,
    setsTeamTwo: setsTwo,
    gamesTeamOne: gamesOne,
    gamesTeamTwo: gamesTwo,
    pointsTeamOne,
    pointsTeamTwo
  };
}

/**
 * Valida si un resultado de sets es coherente para el pádel.
 * Resultados válidos: 2-0, 0-2, 2-1, 1-2
 */
function validateSets(setsA, setsB) {
  const a = Number(setsA);
  const b = Number(setsB);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return { valid: false, error: 'Los sets deben ser números enteros.' };
  }

  const validResults = [
    [2, 0], [0, 2], [2, 1], [1, 2],
  ];

  const isValid = validResults.some(([ra, rb]) => ra === a && rb === b);

  if (!isValid) {
    return {
      valid: false,
      error: `Resultado de sets inválido: ${a}-${b}. Resultados válidos: 2-0, 0-2, 2-1, 1-2.`,
    };
  }

  return { valid: true };
}

/**
 * Calcula los puntos para ambos equipos según el resultado de sets.
 */
function calculatePoints(setsTeamOne, setsTeamTwo) {
  const validation = validateSets(setsTeamOne, setsTeamTwo);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const a = Number(setsTeamOne);
  const b = Number(setsTeamTwo);

  // Victoria en 2 sets (2-0): Ganador 5pts, Perdedor 1pt
  if (a === 2 && b === 0) return { pointsTeamOne: 5, pointsTeamTwo: 1 };
  if (a === 0 && b === 2) return { pointsTeamOne: 1, pointsTeamTwo: 5 };

  // Victoria en 3 sets (2-1): Ganador 4pts, Perdedor 2pts
  if (a === 2 && b === 1) return { pointsTeamOne: 4, pointsTeamTwo: 2 };
  if (a === 1 && b === 2) return { pointsTeamOne: 2, pointsTeamTwo: 4 };

  throw new Error('Resultado de sets inválido.');
}

const previewPoints = calculatePoints;

module.exports = {
  validateSetGames,
  calculateMatchFromGames,
  validateSets,
  calculatePoints,
  previewPoints
};
