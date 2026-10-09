'use strict';

/**
 * schemas.js — Definiciones de componentes OpenAPI 3.0 para la API de Padel Ranking.
 */

const schemas = {
  Role: {
    type: 'string',
    enum: ['ADMIN', 'ORGANIZER', 'TEAM_USER'],
  },

  User: {
    type: 'object',
    required: ['id', 'email', 'role'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      email: { type: 'string', format: 'email' },
      role: { $ref: '#/components/schemas/Role' },
      firstName: { type: 'string', nullable: true },
      lastName: { type: 'string', nullable: true },
      phone: { type: 'string', nullable: true },
      teamId: { type: 'string', nullable: true },
      teamName: { type: 'string', nullable: true },
      rankingCount: { type: 'integer', nullable: true },
      active: { type: 'boolean' },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },

  LoginRequest: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string' },
    },
  },

  LoginResponse: {
    type: 'object',
    required: ['token', 'user'],
    properties: {
      token: { type: 'string' },
      user: { $ref: '#/components/schemas/User' },
    },
  },

  SetupPasswordRequest: {
    type: 'object',
    required: ['token', 'password'],
    properties: {
      token: { type: 'string' },
      password: { type: 'string', minLength: 6 },
    },
  },

  ForgotPasswordRequest: {
    type: 'object',
    required: ['email'],
    properties: {
      email: { type: 'string', format: 'email' },
    },
  },

  ResetPasswordRequest: {
    type: 'object',
    required: ['token', 'password'],
    properties: {
      token: { type: 'string' },
      password: { type: 'string', minLength: 6 },
    },
  },

  ChangePasswordRequest: {
    type: 'object',
    required: ['currentPassword', 'newPassword'],
    properties: {
      currentPassword: { type: 'string' },
      newPassword: { type: 'string', minLength: 6 },
    },
  },

  UpdateProfileRequest: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      phone: { type: 'string' },
    },
  },

  CreateOrganizerRequest: {
    type: 'object',
    required: ['email'],
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string' },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      phone: { type: 'string' },
    },
  },

  UpdateOrganizerRequest: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      phone: { type: 'string' },
      active: { type: 'boolean' },
    },
  },

  TeamEmail: {
    type: 'object',
    required: ['id', 'teamId', 'email', 'isPrimary'],
    properties: {
      id: { type: 'string' },
      teamId: { type: 'string' },
      email: { type: 'string', format: 'email' },
      isPrimary: { type: 'boolean' },
    },
  },

  Team: {
    type: 'object',
    required: ['id', 'name', 'player1Name', 'player1Surname', 'player2Name', 'player2Surname', 'active'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
      player1Name: { type: 'string' },
      player1Surname: { type: 'string' },
      player2Name: { type: 'string' },
      player2Surname: { type: 'string' },
      reserveName: { type: 'string', nullable: true },
      reserveSurname: { type: 'string', nullable: true },
      phone: { type: 'string', nullable: true },
      phone2: { type: 'string', nullable: true },
      active: { type: 'boolean' },
      emails: {
        type: 'array',
        items: {
          oneOf: [
            { $ref: '#/components/schemas/TeamEmail' },
            { type: 'string' },
          ],
        },
      },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },

  CreateTeamRequest: {
    type: 'object',
    required: ['name', 'player1Name', 'player1Surname', 'player2Name', 'player2Surname'],
    properties: {
      name: { type: 'string' },
      player1Name: { type: 'string' },
      player1Surname: { type: 'string' },
      player2Name: { type: 'string' },
      player2Surname: { type: 'string' },
      reserveName: { type: 'string' },
      reserveSurname: { type: 'string' },
      phone: { type: 'string' },
      phone2: { type: 'string' },
      emails: {
        type: 'array',
        items: { type: 'string' },
      },
    },
  },

  UpdateTeamRequest: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      player1Name: { type: 'string' },
      player1Surname: { type: 'string' },
      player2Name: { type: 'string' },
      player2Surname: { type: 'string' },
      reserveName: { type: 'string' },
      reserveSurname: { type: 'string' },
      phone: { type: 'string' },
      phone2: { type: 'string' },
      active: { type: 'boolean' },
      emails: {
        type: 'array',
        items: { type: 'string' },
      },
    },
  },

  EnrollTeamRequest: {
    type: 'object',
    required: ['teamId'],
    properties: {
      teamId: { type: 'string', format: 'uuid' },
    },
  },

  Ranking: {
    type: 'object',
    required: ['id', 'name', 'startDate', 'endDate', 'active'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
      description: { type: 'string', nullable: true },
      startDate: { type: 'string' },
      endDate: { type: 'string' },
      regulation: { type: 'string', nullable: true },
      active: { type: 'boolean' },
      poster: { type: 'string', nullable: true },
      rankingConfig: { type: 'string', nullable: true },
      locationId: { type: 'string', nullable: true },
      locationName: { type: 'string', nullable: true },
      levelId: { type: 'string', nullable: true },
      levelName: { type: 'string', nullable: true },
      categoryId: { type: 'string', nullable: true },
      categoryName: { type: 'string', nullable: true },
      createdBy: { type: 'string', nullable: true },
      creatorEmail: { type: 'string', nullable: true },
      teamCount: { type: 'integer', nullable: true },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },

  CreateRankingRequest: {
    type: 'object',
    required: ['name', 'startDate', 'endDate'],
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      startDate: { type: 'string' },
      endDate: { type: 'string' },
      regulation: { type: 'string' },
      locationId: { type: 'string' },
      levelId: { type: 'string' },
      categoryId: { type: 'string' },
      poster: { type: 'string' },
      rankingConfig: { type: 'string' },
    },
  },

  UpdateRankingRequest: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      startDate: { type: 'string' },
      endDate: { type: 'string' },
      regulation: { type: 'string' },
      locationId: { type: 'string' },
      levelId: { type: 'string' },
      categoryId: { type: 'string' },
      poster: { type: 'string' },
      rankingConfig: { type: 'string' },
      active: { type: 'boolean' },
    },
  },

  MatchStatus: {
    type: 'string',
    enum: ['PENDING_RESULT', 'PENDING_CONFIRMATION', 'CONFIRMED', 'DISPUTED', 'CANCELLED'],
  },

  Match: {
    type: 'object',
    required: ['id', 'rankingId', 'teamOneId', 'teamTwoId', 'status'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      rankingId: { type: 'string', format: 'uuid' },
      rankingName: { type: 'string', nullable: true },
      rankingStartDate: { type: 'string', nullable: true },
      rankingEndDate: { type: 'string', nullable: true },
      teamOneId: { type: 'string', format: 'uuid' },
      teamOneName: { type: 'string', nullable: true },
      t1p1Name: { type: 'string', nullable: true },
      t1p1Surname: { type: 'string', nullable: true },
      t1p2Name: { type: 'string', nullable: true },
      t1p2Surname: { type: 'string', nullable: true },
      teamTwoId: { type: 'string', format: 'uuid' },
      teamTwoName: { type: 'string', nullable: true },
      t2p1Name: { type: 'string', nullable: true },
      t2p1Surname: { type: 'string', nullable: true },
      t2p2Name: { type: 'string', nullable: true },
      t2p2Surname: { type: 'string', nullable: true },
      matchDate: { type: 'string', nullable: true },
      resultSubmittedAt: { type: 'string', nullable: true },
      resultSubmittedBy: { type: 'string', nullable: true },
      submittedByEmail: { type: 'string', nullable: true },
      status: { $ref: '#/components/schemas/MatchStatus' },
      set1TeamOne: { type: 'integer', nullable: true },
      set1TeamTwo: { type: 'integer', nullable: true },
      set2TeamOne: { type: 'integer', nullable: true },
      set2TeamTwo: { type: 'integer', nullable: true },
      set3TeamOne: { type: 'integer', nullable: true },
      set3TeamTwo: { type: 'integer', nullable: true },
      gamesTeamOne: { type: 'integer', nullable: true },
      gamesTeamTwo: { type: 'integer', nullable: true },
      setsTeamOne: { type: 'integer', nullable: true },
      setsTeamTwo: { type: 'integer', nullable: true },
      pointsTeamOne: { type: 'integer', nullable: true },
      pointsTeamTwo: { type: 'integer', nullable: true },
      confirmedAt: { type: 'string', nullable: true },
      confirmedBy: { type: 'string', nullable: true },
      confirmedByEmail: { type: 'string', nullable: true },
      disputedAt: { type: 'string', nullable: true },
      disputedBy: { type: 'string', nullable: true },
      disputedByEmail: { type: 'string', nullable: true },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },

  SubmitResultPayload: {
    type: 'object',
    required: ['matchDate'],
    properties: {
      matchDate: { type: 'string' },
      set1TeamOne: { type: 'integer' },
      set1TeamTwo: { type: 'integer' },
      set2TeamOne: { type: 'integer' },
      set2TeamTwo: { type: 'integer' },
      set3TeamOne: { type: 'integer', nullable: true },
      set3TeamTwo: { type: 'integer', nullable: true },
      setsTeamOne: { type: 'integer' },
      setsTeamTwo: { type: 'integer' },
    },
  },

  AdminOverridePayload: {
    type: 'object',
    required: ['status'],
    properties: {
      status: { $ref: '#/components/schemas/MatchStatus' },
      set1TeamOne: { type: 'integer' },
      set1TeamTwo: { type: 'integer' },
      set2TeamOne: { type: 'integer' },
      set2TeamTwo: { type: 'integer' },
      set3TeamOne: { type: 'integer', nullable: true },
      set3TeamTwo: { type: 'integer', nullable: true },
      setsTeamOne: { type: 'integer' },
      setsTeamTwo: { type: 'integer' },
      reason: { type: 'string' },
    },
  },

  ClassificationRow: {
    type: 'object',
    required: ['position', 'teamId', 'teamName', 'played', 'wins', 'losses', 'totalPoints'],
    properties: {
      position: { type: 'integer' },
      teamId: { type: 'string', format: 'uuid' },
      teamName: { type: 'string' },
      player1: { type: 'string' },
      player2: { type: 'string' },
      played: { type: 'integer' },
      wins: { type: 'integer' },
      losses: { type: 'integer' },
      setsWon: { type: 'integer' },
      setsLost: { type: 'integer' },
      setsDiff: { type: 'integer' },
      gamesWon: { type: 'integer' },
      gamesLost: { type: 'integer' },
      gamesDiff: { type: 'integer' },
      pointsFor: { type: 'integer' },
      pointsAgainst: { type: 'integer' },
      pointsDiff: { type: 'integer' },
      totalPoints: { type: 'integer' },
    },
  },

  Incident: {
    type: 'object',
    required: ['id', 'matchId', 'reportedBy', 'reportedAt', 'description', 'status'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      matchId: { type: 'string', format: 'uuid' },
      reportedBy: { type: 'string', format: 'uuid' },
      reportedByEmail: { type: 'string', nullable: true },
      reportedAt: { type: 'string' },
      description: { type: 'string' },
      status: {
        type: 'string',
        enum: ['OPEN', 'IN_REVIEW', 'RESOLVED', 'REJECTED'],
      },
      resolution: { type: 'string', nullable: true },
      resolvedBy: { type: 'string', nullable: true },
      resolvedAt: { type: 'string', nullable: true },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },

  AuditLog: {
    type: 'object',
    required: ['id', 'action', 'entity', 'entityId', 'createdAt'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      userId: { type: 'string', nullable: true },
      userEmail: { type: 'string', nullable: true },
      action: { type: 'string' },
      entity: { type: 'string' },
      entityId: { type: 'string' },
      data: { type: 'object', nullable: true },
      createdAt: { type: 'string', format: 'date-time' },
    },
  },

  AuxiliaryItem: {
    type: 'object',
    required: ['id', 'name'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      name: { type: 'string' },
      description: { type: 'string', nullable: true },
      logo: { type: 'string', nullable: true },
      street: { type: 'string', nullable: true },
      city: { type: 'string', nullable: true },
      postalCode: { type: 'string', nullable: true },
      state: { type: 'string', nullable: true },
      country: { type: 'string', nullable: true },
      createdAt: { type: 'string', format: 'date-time', nullable: true },
      updatedAt: { type: 'string', format: 'date-time', nullable: true },
    },
  },

  LiveMatchStatus: {
    type: 'string',
    enum: ['REQUESTED', 'IN_PROGRESS', 'COMPLETED', 'CONFIRMED', 'CANCELLED'],
  },

  LiveMatchSession: {
    type: 'object',
    required: ['id', 'matchId', 'rankingId', 'teamOneId', 'teamTwoId', 'status', 'currentSet', 'pointsTeamOne', 'pointsTeamTwo'],
    properties: {
      id: { type: 'string', format: 'uuid' },
      matchId: { type: 'string', format: 'uuid' },
      rankingId: { type: 'string', format: 'uuid' },
      rankingName: { type: 'string', nullable: true },
      teamOneId: { type: 'string', format: 'uuid' },
      teamOneName: { type: 'string', nullable: true },
      teamTwoId: { type: 'string', format: 'uuid' },
      teamTwoName: { type: 'string', nullable: true },
      requestedBy: { type: 'string' },
      requestedByName: { type: 'string', nullable: true },
      requestedByEmail: { type: 'string', nullable: true },
      requestedByTeamId: { type: 'string', nullable: true },
      requestedByTeamName: { type: 'string', nullable: true },
      status: { $ref: '#/components/schemas/LiveMatchStatus' },
      currentSet: { type: 'integer' },
      pointsTeamOne: { type: 'string' },
      pointsTeamTwo: { type: 'string' },
      set1TeamOne: { type: 'integer' },
      set1TeamTwo: { type: 'integer' },
      set2TeamOne: { type: 'integer' },
      set2TeamTwo: { type: 'integer' },
      set3TeamOne: { type: 'integer', nullable: true },
      set3TeamTwo: { type: 'integer', nullable: true },
      setsTeamOne: { type: 'integer' },
      setsTeamTwo: { type: 'integer' },
      gamesTeamOne: { type: 'integer' },
      gamesTeamTwo: { type: 'integer' },
      gameMode: { type: 'string', enum: ['GOLDEN_POINT', 'ADVANTAGE'], nullable: true },
      servingTeam: { type: 'integer', enum: [1, 2] },
      isTiebreak: { type: 'integer', enum: [0, 1] },
      tiebreakPointsTeamOne: { type: 'integer' },
      tiebreakPointsTeamTwo: { type: 'integer' },
      confirmedByTeamOne: { type: 'integer' },
      confirmedByTeamTwo: { type: 'integer' },
      startedAt: { type: 'string', nullable: true },
      endedAt: { type: 'string', nullable: true },
      updatedAt: { type: 'string' },
    },
  },

  LivePointPayload: {
    type: 'object',
    required: ['team'],
    properties: {
      team: { type: 'integer', enum: [1, 2] },
    },
  },
};

module.exports = { schemas };
