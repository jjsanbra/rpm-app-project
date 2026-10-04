'use strict';

const { getDb } = require('../../database/db');

/**
 * classification.service.js — Cálculo de clasificación del ranking.
 *
 * La clasificación oficial solo incluye resultados CONFIRMED.
 * La clasificación provisional incluye también PENDING_CONFIRMATION.
 *
 * Ordenada principalmente por puntos. La arquitectura permite añadir
 * criterios de desempate (diferencia de sets, puntos) en el futuro.
 */

/**
 * Obtiene la clasificación oficial de un ranking.
 * Solo cuenta resultados en estado CONFIRMED.
 * @param {string} rankingId
 * @returns {object[]} Clasificación ordenada por puntos desc
 */
function getOfficialClassification(rankingId) {
  return _buildClassification(rankingId, ['CONFIRMED']);
}

/**
 * Obtiene la clasificación provisional (incluye PENDING_CONFIRMATION).
 * Debe mostrarse claramente diferenciada de la oficial.
 * @param {string} rankingId
 * @returns {object[]}
 */
function getProvisionalClassification(rankingId) {
  return _buildClassification(rankingId, ['CONFIRMED', 'PENDING_CONFIRMATION']);
}

/**
 * Construye la clasificación para un ranking con los estados de partido especificados.
 */
function _buildClassification(rankingId, statuses) {
  const db = getDb();
  const statusPlaceholders = statuses.map(() => '?').join(', ');

  // Obtener todos los equipos activos del ranking
  const teams = db.prepare(`
    SELECT t.id, t.name, t.player1Name, t.player1Surname, t.player2Name, t.player2Surname
    FROM teams t
    JOIN ranking_teams rt ON rt.teamId = t.id
    WHERE rt.rankingId = ? AND rt.status = 'ACTIVE'
    ORDER BY t.name
  `).all(rankingId);

  if (teams.length === 0) return [];

  // Obtener partidos con resultados en los estados indicados
  const matches = db.prepare(`
    SELECT teamOneId, teamTwoId, setsTeamOne, setsTeamTwo, pointsTeamOne, pointsTeamTwo, status
    FROM matches
    WHERE rankingId = ? AND status IN (${statusPlaceholders})
  `).all(rankingId, ...statuses);

  // Construir mapa de estadísticas por equipo
  const stats = {};
  for (const team of teams) {
    stats[team.id] = {
      teamId: team.id,
      teamName: team.name,
      player1: `${team.player1Name} ${team.player1Surname}`,
      player2: `${team.player2Name} ${team.player2Surname}`,
      played: 0,
      wins: 0,
      losses: 0,
      setsWon: 0,
      setsLost: 0,
      setsDiff: 0,
      pointsFor: 0,
      pointsAgainst: 0,
      pointsDiff: 0,
      totalPoints: 0,
    };
  }

  // Acumular estadísticas por partido
  for (const match of matches) {
    const s1 = stats[match.teamOneId];
    const s2 = stats[match.teamTwoId];

    if (!s1 || !s2) continue;

    s1.played++;
    s2.played++;

    s1.setsWon += match.setsTeamOne;
    s1.setsLost += match.setsTeamTwo;
    s2.setsWon += match.setsTeamTwo;
    s2.setsLost += match.setsTeamOne;

    s1.pointsFor += match.pointsTeamOne;
    s1.pointsAgainst += match.pointsTeamTwo;
    s2.pointsFor += match.pointsTeamTwo;
    s2.pointsAgainst += match.pointsTeamOne;

    s1.totalPoints += match.pointsTeamOne;
    s2.totalPoints += match.pointsTeamTwo;

    if (match.setsTeamOne > match.setsTeamTwo) {
      s1.wins++;
      s2.losses++;
    } else {
      s2.wins++;
      s1.losses++;
    }
  }

  // Calcular diferencias
  for (const teamId of Object.keys(stats)) {
    stats[teamId].setsDiff = stats[teamId].setsWon - stats[teamId].setsLost;
    stats[teamId].pointsDiff = stats[teamId].pointsFor - stats[teamId].pointsAgainst;
  }

  // Ordenar: 1º por totalPoints, 2º por setsDiff, 3º por pointsDiff (preparado para desempates)
  const sorted = Object.values(stats).sort((a, b) => {
    if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
    if (b.setsDiff !== a.setsDiff) return b.setsDiff - a.setsDiff;
    if (b.pointsDiff !== a.pointsDiff) return b.pointsDiff - a.pointsDiff;
    return a.teamName.localeCompare(b.teamName);
  });

  // Asignar posiciones
  return sorted.map((team, index) => ({
    position: index + 1,
    ...team,
  }));
}

module.exports = { getOfficialClassification, getProvisionalClassification };
