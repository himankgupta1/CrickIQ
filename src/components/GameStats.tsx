import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart3, TrendingUp, Award, Star, Target, Trophy } from 'lucide-react';
import { PlayerStats, Achievement } from '../types/game';

interface GameStatsProps {
  isOpen: boolean;
  onClose: () => void;
  stats: PlayerStats;
  achievements: Achievement[];
  placementAccuracy?: number;
  maxPossibleScore?: number;
}

export const GameStats: React.FC<GameStatsProps> = ({
  isOpen,
  onClose,
  stats,
  achievements,
  placementAccuracy,
  maxPossibleScore
}) => {
  const averageScore = stats.gamesPlayed > 0 ? Math.round(stats.totalScore / stats.gamesPlayed) : 0;
  const unlockedAchievements = achievements.filter(a => a.unlocked);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-hidden border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Your Stats</h2>
                <p className="text-green-200 text-sm">Track your cricket challenge progress</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Game Statistics */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Game Statistics</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-white">{stats.gamesPlayed}</div>
                  <div className="text-sm text-green-200">Games Played</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-white">{stats.bestScore.toLocaleString()}</div>
                  <div className="text-sm text-green-200">Best Score</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-white">{stats.totalScore.toLocaleString()}</div>
                  <div className="text-sm text-green-200">Total Score</div>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-white">{averageScore.toLocaleString()}</div>
                  <div className="text-sm text-green-200">Average Score</div>
                </div>

                {placementAccuracy !== undefined && (
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 col-span-2 flex items-center space-x-3">
                    <Target className="w-6 h-6 text-yellow-300" />
                    <div>
                      <div className="text-white font-bold">
                        You placed {placementAccuracy} player{placementAccuracy === 1 ? '' : 's'} in the best position!
                      </div>
                      <div className="text-green-200 text-sm">
                        Strategic accuracy in last round
                      </div>
                    </div>
                  </div>
                )}

                {maxPossibleScore !== undefined && (
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 col-span-2 flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="text-white font-bold">
                        Maximum possible score for that round was {maxPossibleScore.toLocaleString()}
                      </div>
                      <div className="text-green-200 text-sm">
                        Did you get close?
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Achievements ({unlockedAchievements.length}/{achievements.length})</span>
              </h3>
              <div className="max-h-48 overflow-y-auto space-y-3">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`
                      p-3 rounded-lg border flex items-center space-x-3
                      ${achievement.unlocked
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30'
                        : 'bg-white/5 border-white/10 opacity-60'}
                    `}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <p className="text-sm text-green-200">{achievement.description}</p>
                      {achievement.unlocked && achievement.unlockedAt && (
                        <p className="text-xs text-yellow-400 mt-1">
                          Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    {achievement.unlocked && (
                      <Star className="w-5 h-5 text-yellow-400 ml-auto" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
