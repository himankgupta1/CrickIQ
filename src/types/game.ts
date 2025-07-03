export type Challenge = 'batting' | 'bowling';
export type Format = 'Test' | 'ODI' | 'T20I';
export type GameState = 'menu' | 'challenge-select' | 'format-select' | 'playing' | 'results';

export interface Player {
  name: string;
  country: string;
  batting: {
    Test: number;
    ODI: number;
    T20I: number;
  };
  bowling: {
    Test: number;
    ODI: number;
    T20I: number;
  };
  image?: string;
  position: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
}

export interface AssignedPlayer extends Player {
  multiplier: number;
  contribution: number;
  stat: number;
}

export interface ScoreEntry {
  username: string;
  score: number;
  date: string;
  streak: number;
  combo: number;
}

export interface PlayerStats {
  gamesPlayed: number;
  totalScore: number;
  bestScore: number;
  achievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}