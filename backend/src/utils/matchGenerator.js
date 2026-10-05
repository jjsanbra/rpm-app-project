'use strict';

/**
 * matchGenerator.js — Generador de partidos en formato Round-Robin.
 *
 * Genera todos los enfrentamientos posibles entre los equipos de un ranking
 * de forma que cada equipo se enfrente una vez a cada uno de los demás.
 *
 * Preparado para ampliar con otros formatos de competición en el futuro.
 */

/**
 * Genera todos los pares de enfrentamientos round-robin para una lista de equipos y número de vueltas.
 * @param {string[]} teamIds - Array de IDs de equipo
 * @param {number} [rounds=1] - Número de vueltas (1 = ida, 2 = ida y vuelta, etc.)
 * @returns {{ teamOneId: string, teamTwoId: string }[]} Lista de pares de partidos
 */
function generateRoundRobinPairs(teamIds, rounds = 1) {
  if (!Array.isArray(teamIds) || teamIds.length < 2) {
    throw new Error('Se necesitan al menos 2 equipos para generar partidos.');
  }

  const numRounds = Math.max(1, parseInt(rounds, 10) || 1);
  const pairs = [];

  for (let r = 1; r <= numRounds; r++) {
    for (let i = 0; i < teamIds.length; i++) {
      for (let j = i + 1; j < teamIds.length; j++) {
        if (r % 2 === 1) {
          pairs.push({
            teamOneId: teamIds[i],
            teamTwoId: teamIds[j],
          });
        } else {
          pairs.push({
            teamOneId: teamIds[j],
            teamTwoId: teamIds[i],
          });
        }
      }
    }
  }
  return pairs;
}

/**
 * Calcula el número esperado de partidos en un round-robin.
 * Fórmula: (n*(n-1)/2) * rounds donde n = número de equipos
 * @param {number} teamCount
 * @param {number} [rounds=1]
 * @returns {number}
 */
function expectedMatchCount(teamCount, rounds = 1) {
  const numRounds = Math.max(1, parseInt(rounds, 10) || 1);
  return ((teamCount * (teamCount - 1)) / 2) * numRounds;
}

module.exports = { generateRoundRobinPairs, expectedMatchCount };
