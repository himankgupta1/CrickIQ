import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Achievement } from '../types/game';

interface AchievementToastProps {
  achievements: Achievement[];
}

export const AchievementToast: React.FC<AchievementToastProps> = ({ achievements }) => {
  const [visibleAchievement, setVisibleAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const recentlyUnlocked = achievements.find(a => 
      a.unlocked && a.unlockedAt && 
      Date.now() - new Date(a.unlockedAt).getTime() < 5000
    );

    if (recentlyUnlocked && !visibleAchievement) {
      setVisibleAchievement(recentlyUnlocked);
      setTimeout(() => setVisibleAchievement(null), 4000);
    }
  }, [achievements, visibleAchievement]);

  return (
    <AnimatePresence>
      {visibleAchievement && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl shadow-2xl border border-yellow-400/50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Achievement Unlocked!</h3>
                  <button
                    onClick={() => setVisibleAchievement(null)}
                    className="text-white/80 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xl">{visibleAchievement.icon}</span>
                  <p className="font-semibold text-white">{visibleAchievement.title}</p>
                </div>
                <p className="text-sm text-yellow-100 mt-1">{visibleAchievement.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};