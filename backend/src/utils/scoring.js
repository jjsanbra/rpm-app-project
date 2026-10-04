'use strict';

/**
 * scoring.js — Lógica de cálculo de puntos del ranking de pádel.
 *
 * Reglas oficiales:
 *   Victoria 2-0 → Ganador: 5 pts, Perdedor: 1 pt
 *   Victoria 2-1 → Ganador: 4 pts, Perdedor: 2 pts
 *
 * Arquitectura preparada para añadir sistemas de puntuación configurables
 * en el futuro sin modificar la lógica de negocio de los controladores.
 */

/**
 * Valida si un resultado de sets es coherente para el pádel.
 * Resultados válidos: 2-0, 0-2, 2-1, 1-2
 * @param {number} setsA
 * @param {number} setsB
 * @returns {{ valid: boolean, error?: string }}
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
 * @param {number} setsTeamOne - Sets ganados por el equipo 1
 * @param {number} setsTeamTwo - Sets ganados por el equipo 2
 * @returns {{ pointsTeamOne: number, pointsTeamTwo: number }}
 * @throws {Error} Si el resultado es inválido
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

  // Nunca debería llegar aquí dado la validación previa
  throw new Error('Resultado de sets inválido.');
}

/**
 * Genera los puntos esperados para mostrar en el frontend (preview).
 * Idéntico a calculatePoints — solo para uso informativo en la UI.
 * Los puntos definitivos siempre los calcula el backend.
 */
const previewPoints = calculatePoints;

module.exports = { validateSets, calculatePoints, previewPoints };
