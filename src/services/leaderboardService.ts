import { supabase } from '../lib/supabase';
import { LeaderboardEntry, PlayerStats } from '../lib/supabase';

export class LeaderboardService {
  static async submitScore(entry: Omit<LeaderboardEntry, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('leaderboard_entries')
        .insert([{
          ...entry,
          user_agent: navigator.userAgent,
          country: await this.getUserCountry()
        }])
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error submitting score:', error);
      return { success: false, error };
    }
  }

  static async getLeaderboard(challenge: string, format: string, limit = 50) {
    try {
      const { data, error } = await supabase
        .from('leaderboard_entries')
        .select('*')
        .eq('challenge', challenge)
        .eq('format', format)
        .order('score', { ascending: false })
        .order('created_at', { ascending: true })
        .limit(limit);

      if (error) throw error;
      return { success: true, data: data || [] };
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      return { success: false, error, data: [] };
    }
  }

  static async getAllLeaderboards() {
    try {
      const { data, error } = await supabase
        .from('leaderboard_entries')
        .select('*')
        .order('score', { ascending: false })
        .limit(200);

      if (error) throw error;

      // Group by challenge and format
      const grouped: Record<string, LeaderboardEntry[]> = {};
      data?.forEach(entry => {
        const key = `${entry.challenge}-${entry.format}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(entry);
      });

      // Limit each category to top 20
      Object.keys(grouped).forEach(key => {
        grouped[key] = grouped[key].slice(0, 5);
      });

      return { success: true, data: grouped };
    } catch (error) {
      console.error('Error fetching all leaderboards:', error);
      return { success: false, error, data: {} };
    }
  }

  static async getPlayerStats(username: string) {
    try {
      const { data, error } = await supabase
        .from('player_stats')
        .select('*')
        .eq('username', username)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching player stats:', error);
      return { success: false, error, data: null };
    }
  }

  static async getTopPlayers(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('player_stats')
        .select('*')
        .order('best_score', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return { success: true, data: data || [] };
    } catch (error) {
      console.error('Error fetching top players:', error);
      return { success: false, error, data: [] };
    }
  }

  static async trackAnalytics(eventType: string, data: Record<string, any>) {
    try {
      await supabase
        .from('game_analytics')
        .insert([{
          event_type: eventType,
          username: data.username,
          challenge: data.challenge,
          format: data.format,
          metadata: data
        }]);
    } catch (error) {
      console.error('Error tracking analytics:', error);
    }
  }

  private static async getUserCountry(): Promise<string | undefined> {
    try {
      const response = await fetch('https://ipapi.co/country_name/');
      return await response.text();
    } catch {
      return undefined;
    }
  }
}