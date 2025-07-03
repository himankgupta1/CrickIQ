import { useState, useCallback } from 'react';
import { Achievement, PlayerStats } from '../types/game';

const achievementDefinitions: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
  {
    id: 'first-game',
    title: 'Welcome to Cricket!',
    description: 'Play your first game',
    icon: '🏏'
  },
  {
    id: 'high-scorer',
    title: 'High Scorer',
    description: 'Score over 100,000 points in a single game',
    icon: '🎯'
  },
  {
    id: 'perfect-strategy',
    title: 'Perfect Strategy',
    description: 'Score over 500,000 points in a single game',
    icon: '🧠'
  },
  {
    id: 'streak-master',
    title: 'Streak Master',
    description: 'Achieve a 5x streak',
    icon: '🔥'
  },
  {
    id: 'combo-king',
    title: 'Combo King',
    description: 'Build a combo of 3 or more',
    icon: '⚡'
  },
  {
    id: 'veteran-player',
    title: 'Veteran Player',
    description: 'Play 10 games',
    icon: '🏆'
  },
  {
    id: 'cricket-legend',
    title: 'Cricket Legend',
    description: 'Accumulate 1,000,000 total points',
    icon: '👑'
  },
  {
    id: 'consistent-performer',
    title: 'Consistent Performer',
    description: 'Maintain an average score of 50,000+',
    icon: '📈'
  }
];

export const useAchievements = (playerStats: PlayerStats) => {
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    return achievementDefinitions.map(def => ({
      ...def,
      unlocked: playerStats.achievements.includes(def.id),
      unlockedAt: playerStats.achievements.includes(def.id) ? undefined : undefined
    }));
  });

  const checkAchievements = useCallback((stats: PlayerStats, currentScore: number, streak: number, combo: number) => {
    const newUnlocked: string[] = [];

    // Check each achievement
    achievementDefinitions.forEach(def => {
      if (stats.achievements.includes(def.id)) return; // Already unlocked

      let shouldUnlock = false;

      switch (def.id) {
        case 'first-game':
          shouldUnlock = stats.gamesPlayed >= 1;
          break;
        case 'high-scorer':
          shouldUnlock = currentScore >= 100000;
          break;
        case 'perfect-strategy':
          shouldUnlock = currentScore >= 500000;
          break;
        case 'streak-master':
          shouldUnlock = streak >= 5;
          break;
        case 'combo-king':
          shouldUnlock = combo >= 3;
          break;
        case 'veteran-player':
          shouldUnlock = stats.gamesPlayed >= 10;
          break;
        case 'cricket-legend':
          shouldUnlock = stats.totalScore >= 1000000;
          break;
        case 'consistent-performer':
          shouldUnlock = stats.gamesPlayed >= 5 && (stats.totalScore / stats.gamesPlayed) >= 50000;
          break;
      }

      if (shouldUnlock) {
        newUnlocked.push(def.id);
      }
    });

    if (newUnlocked.length > 0) {
      setAchievements(prev => prev.map(achievement => {
        if (newUnlocked.includes(achievement.id)) {
          return {
            ...achievement,
            unlocked: true,
            unlockedAt: new Date().toISOString()
          };
        }
        return achievement;
      }));

      // Update player stats with new achievements
      const updatedStats = {
        ...stats,
        achievements: [...stats.achievements, ...newUnlocked]
      };
      
      localStorage.setItem('cricket-challenge-stats', JSON.stringify(updatedStats));
    }
  }, []);

  return { achievements, checkAchievements };
};