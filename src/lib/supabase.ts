// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// ✅ Vite uses import.meta.env for env vars
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// (Optional) your DB interfaces
export interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  challenge: 'batting' | 'bowling';
  format: 'Test' | 'ODI' | 'T20I';
  streak: number;
  combo: number;
  game_duration: number;
  created_at: string;
  user_agent?: string;
  country?: string;
}

export interface PlayerStats {
  id: string;
  username: string;
  total_games: number;
  total_score: number;
  best_score: number;
  favorite_challenge?: string;
  favorite_format?: string;
  achievements: string[];
  created_at: string;
  updated_at: string;
}

export interface GameAnalytics {
  id: string;
  event_type: string;
  username?: string;
  challenge?: string;
  format?: string;
  metadata: Record<string, any>;
  created_at: string;
}
