import { useState, useEffect, useCallback } from 'react';
import { LeaderboardService } from '../services/leaderboardService';
import { LeaderboardEntry } from '../lib/supabase';
import { Challenge, Format } from '../types/game';

export const useSupabaseLeaderboard = () => {
  const [leaderboards, setLeaderboards] = useState<Record<string, LeaderboardEntry[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboards = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await LeaderboardService.getAllLeaderboards();
      if (result.success) {
        setLeaderboards(result.data);
      } else {
        setError('Failed to fetch leaderboards');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  const submitScore = useCallback(async (
    username: string,
    score: number,
    challenge: Challenge,
    format: Format,
    streak: number,
    combo: number,
    gameDuration: number
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = await LeaderboardService.submitScore({
        username,
        score,
        challenge,
        format,
        streak,
        combo,
        game_duration: gameDuration
      });

      if (result.success) {
        // Track analytics
        await LeaderboardService.trackAnalytics('game_complete', {
          username,
          challenge,
          format,
          score,
          streak,
          combo,
          duration: gameDuration
        });

        // Refresh leaderboards
        await fetchLeaderboards();
        return { success: true };
      } else {
        setError('Failed to submit score');
        return { success: false, error: result.error };
      }
    } catch (err) {
      setError('Network error occurred');
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  }, [fetchLeaderboards]);

  useEffect(() => {
    fetchLeaderboards();
  }, [fetchLeaderboards]);

  return {
    leaderboards,
    loading,
    error,
    submitScore,
    refreshLeaderboards: fetchLeaderboards
  };
};