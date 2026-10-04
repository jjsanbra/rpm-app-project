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
 * Genera todos los pares de enfrentamientos round-robin para una lista de equipos.
 * @param {string[]} teamIds - Array de IDs de equipo
 * @returns {{ teamOneId: string, teamTwoId: string }[]} Lista de pares de partidos
 */
function generateRoundRobinPairs(teamIds) {
  if (!Array.isArray(teamIds) || teamIds.length < 2) {
    throw new Error('Se necesitan al menos 2 equipos para generar partidos.');
  }

  const pairs = [];
  for (let i = 0; i < teamIds.length; i++) {
    for (let j = i + 1; j < teamIds.length; j++) {
      pairs.push({
        teamOneId: teamIds[i],
        teamTwoId: teamIds[j],
      });
    }
  }
  return pairs;
}

/**
 * Calcula el número esperado de partidos en un round-robin.
 * Fórmula: n*(n-1)/2 donde n = número de equipos
 * @param {number} teamCount
 * @returns {number}
 */
function expectedMatchCount(teamCount) {
  return (teamCount * (teamCount - 1)) / 2;
}

module.exports = { generateRoundRobinPairs, expectedMatchCount };
