/*
  # Cricket Challenge Database Schema

  1. New Tables
    - `leaderboard_entries`
      - `id` (uuid, primary key)
      - `username` (text)
      - `score` (integer)
      - `challenge` (text) - 'batting' or 'bowling'
      - `format` (text) - 'Test', 'ODI', or 'T20I'
      - `streak` (integer)
      - `combo` (integer)
      - `game_duration` (integer) - in seconds
      - `created_at` (timestamp)
      - `user_agent` (text) - for analytics
      - `country` (text) - optional user location

    - `player_stats`
      - `id` (uuid, primary key)
      - `username` (text)
      - `total_games` (integer)
      - `total_score` (bigint)
      - `best_score` (integer)
      - `favorite_challenge` (text)
      - `favorite_format` (text)
      - `achievements` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `game_analytics`
      - `id` (uuid, primary key)
      - `event_type` (text) - 'game_start', 'game_complete', 'player_assign', etc.
      - `username` (text)
      - `challenge` (text)
      - `format` (text)
      - `metadata` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to leaderboards
    - Add policies for authenticated users to insert their own data
*/

-- Create leaderboard_entries table
CREATE TABLE IF NOT EXISTS leaderboard_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  challenge text NOT NULL CHECK (challenge IN ('batting', 'bowling')),
  format text NOT NULL CHECK (format IN ('Test', 'ODI', 'T20I')),
  streak integer DEFAULT 0,
  combo integer DEFAULT 0,
  game_duration integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  user_agent text,
  country text
);

-- Create player_stats table
CREATE TABLE IF NOT EXISTS player_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  total_games integer DEFAULT 0,
  total_score bigint DEFAULT 0,
  best_score integer DEFAULT 0,
  favorite_challenge text,
  favorite_format text,
  achievements jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create game_analytics table
CREATE TABLE IF NOT EXISTS game_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  username text,
  challenge text,
  format text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leaderboard_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for leaderboard_entries
CREATE POLICY "Anyone can view leaderboard entries"
  ON leaderboard_entries
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert leaderboard entries"
  ON leaderboard_entries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policies for player_stats
CREATE POLICY "Anyone can view player stats"
  ON player_stats
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert player stats"
  ON player_stats
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update player stats"
  ON player_stats
  FOR UPDATE
  TO public
  USING (true);

-- Create policies for game_analytics
CREATE POLICY "Anyone can insert analytics"
  ON game_analytics
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leaderboard_challenge_format ON leaderboard_entries(challenge, format);
CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard_entries(score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_created_at ON leaderboard_entries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_player_stats_username ON player_stats(username);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON game_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON game_analytics(created_at DESC);

-- Create function to update player stats
CREATE OR REPLACE FUNCTION update_player_stats()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO player_stats (username, total_games, total_score, best_score, favorite_challenge, favorite_format, updated_at)
  VALUES (NEW.username, 1, NEW.score, NEW.score, NEW.challenge, NEW.format, now())
  ON CONFLICT (username) 
  DO UPDATE SET
    total_games = player_stats.total_games + 1,
    total_score = player_stats.total_score + NEW.score,
    best_score = GREATEST(player_stats.best_score, NEW.score),
    favorite_challenge = CASE 
      WHEN (SELECT COUNT(*) FROM leaderboard_entries WHERE username = NEW.username AND challenge = NEW.challenge) >
           (SELECT COUNT(*) FROM leaderboard_entries WHERE username = NEW.username AND challenge != NEW.challenge)
      THEN NEW.challenge
      ELSE player_stats.favorite_challenge
    END,
    favorite_format = CASE 
      WHEN (SELECT COUNT(*) FROM leaderboard_entries WHERE username = NEW.username AND format = NEW.format) >
           (SELECT COUNT(*) FROM leaderboard_entries WHERE username = NEW.username AND format != NEW.format)
      THEN NEW.format
      ELSE player_stats.favorite_format
    END,
    updated_at = now();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update player stats
CREATE TRIGGER trigger_update_player_stats
  AFTER INSERT ON leaderboard_entries
  FOR EACH ROW
  EXECUTE FUNCTION update_player_stats();