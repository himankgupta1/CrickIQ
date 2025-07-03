import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Medal, Award, Filter, Calendar, Wifi, WifiOff, Loader } from 'lucide-react';

interface ScoreEntry {
  username: string;
  score: number;
  date: string;
  streak: number;
  combo: number;
  gameDuration?: number;
}
interface LocalScores {
  [key: string]: ScoreEntry[];
}

const localScores: LocalScores = {};

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  scores: Record<string, ScoreEntry[]>;
  isOnline?: boolean;
  loading?: boolean;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  scores,
  isOnline = true,
  loading = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState('batting-Test');

  const categories = [
    { key: 'batting-Test', label: '🏏 Batting - Test' },
    { key: 'batting-ODI', label: '🏏 Batting - ODI' },
    { key: 'batting-T20I', label: '🏏 Batting - T20I' },
    { key: 'bowling-Test', label: '🎯 Bowling - Test' },
    { key: 'bowling-ODI', label: '🎯 Bowling - ODI' },
    { key: 'bowling-T20I', label: '🎯 Bowling - T20I' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-400" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-green-200">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-500/20 to-yellow-600/20 border-yellow-400/30';
      case 2: return 'from-gray-400/20 to-gray-500/20 border-gray-400/30';
      case 3: return 'from-orange-500/20 to-orange-600/20 border-orange-400/30';
      default: return 'from-white/5 to-white/10 border-white/20';
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const currentScores = scores[selectedCategory] || [];

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
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
                  {isOnline ? (
                    <Wifi className="w-5 h-5 text-green-400" />
                  ) : (
                    <WifiOff className="w-5 h-5 text-orange-400"/>
                  )}
                </div>
                <p className="text-green-200 text-sm">
                  {isOnline ? 'Global rankings' : 'Local scores only'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <Filter className="w-4 h-4 text-green-200" />
              <span className="text-sm text-green-200">Filter by category:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`
                    px-3 py-2 rounded-lg text-sm transition-all
                    ${selectedCategory === category.key
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold'
                      : 'bg-white/10 text-green-200 hover:bg-white/20'
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-y-auto max-h-96 space-y-3">
            {loading ? (
              <div className="text-center py-12">
                <Loader className="w-8 h-8 text-green-400 mx-auto mb-4 animate-spin" />
                <p className="text-green-200">Loading leaderboard...</p>
              </div>
            ) : currentScores.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-green-400 mx-auto mb-4 opacity-50" />
                <p className="text-green-200 text-lg">No scores yet!</p>
                <p className="text-green-300 text-sm">Be the first to set a record.</p>
              </div>
            ) : (
              currentScores.map((entry, index) => (
                <motion.div
                  key={`${entry.username}-${entry.date}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    p-4 rounded-xl border backdrop-blur-sm bg-gradient-to-r
                    ${getRankColor(index + 1)}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getRankIcon(index + 1)}
                      <div>
                        <h3 className="font-semibold text-white">{entry.username}</h3>
                        <div className="flex items-center space-x-4 text-sm text-green-200">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(entry.date).toLocaleDateString()}</span>
                          </div>
                          {entry.streak > 1 && (
                            <span className="px-2 py-1 bg-purple-500/20 rounded-full text-purple-200">
                              {entry.streak}x streak
                            </span>
                          )}
                          {entry.gameDuration && (
                            <span className="text-xs text-gray-300">
                              {formatDuration(entry.gameDuration)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {entry.score.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-200">points</div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};