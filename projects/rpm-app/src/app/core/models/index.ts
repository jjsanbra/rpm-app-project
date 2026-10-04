export type Role = 'ADMIN' | 'TEAM_USER';

export interface User {
  id: string;
  email: string;
  role: Role;
  teamId?: string | null;
  teamName?: string | null;
  active?: boolean;
}

export interface TeamEmail {
  id: string;
  teamId: string;
  email: string;
  isPrimary: boolean;
}

export interface Team {
  id: string;
  name: string;
  player1Name: string;
  player1Surname: string;
  player2Name: string;
  player2Surname: string;
  reserveName?: string | null;
  reserveSurname?: string | null;
  active: boolean;
  emails?: TeamEmail[] | string[];
  createdAt: string;
  updatedAt: string;
}

export interface Ranking {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  regulation?: string;
  active: boolean;
  poster?: string | null;
  rankingConfig?: string | null;
  locationId?: string | null;
  locationName?: string | null;
  levelId?: string | null;
  levelName?: string | null;
  categoryId?: string | null;
  categoryName?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type MatchStatus = 'PENDING_RESULT' | 'PENDING_CONFIRMATION' | 'CONFIRMED' | 'DISPUTED' | 'CANCELLED';

export interface Match {
  id: string;
  rankingId: string;
  rankingName?: string;
  rankingStartDate?: string;
  rankingEndDate?: string;
  teamOneId: string;
  teamOneName?: string;
  t1p1Name?: string;
  t1p1Surname?: string;
  t1p2Name?: string;
  t1p2Surname?: string;
  teamTwoId: string;
  teamTwoName?: string;
  t2p1Name?: string;
  t2p1Surname?: string;
  t2p2Name?: string;
  t2p2Surname?: string;
  matchDate?: string | null;
  resultSubmittedAt?: string | null;
  resultSubmittedBy?: string | null;
  submittedByEmail?: string | null;
  status: MatchStatus;
  set1TeamOne?: number | null;
  set1TeamTwo?: number | null;
  set2TeamOne?: number | null;
  set2TeamTwo?: number | null;
  set3TeamOne?: number | null;
  set3TeamTwo?: number | null;
  gamesTeamOne?: number | null;
  gamesTeamTwo?: number | null;
  setsTeamOne?: number | null;
  setsTeamTwo?: number | null;
  pointsTeamOne?: number | null;
  pointsTeamTwo?: number | null;
  confirmedAt?: string | null;
  confirmedBy?: string | null;
  confirmedByEmail?: string | null;
  disputedAt?: string | null;
  disputedBy?: string | null;
  disputedByEmail?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SubmitResultPayload {
  matchDate: string;
  set1TeamOne?: number;
  set1TeamTwo?: number;
  set2TeamOne?: number;
  set2TeamTwo?: number;
  set3TeamOne?: number | null;
  set3TeamTwo?: number | null;
  setsTeamOne?: number;
  setsTeamTwo?: number;
}

export interface ClassificationRow {
  position: number;
  teamId: string;
  teamName: string;
  player1: string;
  player2: string;
  played: number;
  wins: number;
  losses: number;
  setsWon: number;
  setsLost: number;
  setsDiff: number;
  gamesWon: number;
  gamesLost: number;
  gamesDiff: number;
  pointsFor: number;
  pointsAgainst: number;
  pointsDiff: number;
  totalPoints: number;
}

export interface Incident {
  id: string;
  matchId: string;
  reportedBy: string;
  reportedByEmail?: string;
  reportedAt: string;
  description: string;
  status: 'OPEN' | 'IN_REVIEW' | 'RESOLVED' | 'REJECTED';
  resolution?: string | null;
  resolvedBy?: string | null;
  resolvedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  userId?: string | null;
  userEmail?: string | null;
  action: string;
  entity: string;
  entityId: string;
  data?: any;
  createdAt: string;
}

export interface AuxiliaryItem {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  state?: string;
  country?: string;
}

export type LiveMatchStatus = 'REQUESTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CONFIRMED' | 'CANCELLED';

export interface LiveMatchSession {
  id: string;
  matchId: string;
  rankingId: string;
  rankingName?: string;
  teamOneId: string;
  teamOneName?: string;
  teamTwoId: string;
  teamTwoName?: string;
  requestedBy: string;
  requestedByEmail?: string;
  status: LiveMatchStatus;
  currentSet: number;
  pointsTeamOne: string;
  pointsTeamTwo: string;
  set1TeamOne: number;
  set1TeamTwo: number;
  set2TeamOne: number;
  set2TeamTwo: number;
  set3TeamOne: number | null;
  set3TeamTwo: number | null;
  setsTeamOne: number;
  setsTeamTwo: number;
  gamesTeamOne: number;
  gamesTeamTwo: number;
  gameMode?: 'GOLDEN_POINT' | 'ADVANTAGE';
  servingTeam: 1 | 2;
  isTiebreak: number; // 0 or 1
  tiebreakPointsTeamOne: number;
  tiebreakPointsTeamTwo: number;
  confirmedByTeamOne: number;
  confirmedByTeamTwo: number;
  startedAt?: string;
  endedAt?: string;
  updatedAt: string;
}

export interface LivePointPayload {
  team: 1 | 2;
}

