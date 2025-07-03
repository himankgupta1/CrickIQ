import React from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp, Target } from 'lucide-react';
import { Player, Challenge, Format } from '../types/game';

interface PlayerCardProps {
  player: Player;
  challenge: Challenge;
  format: Format;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, challenge, format }) => {
  const stat = player[challenge][format];
  const statLabel = challenge === 'batting' ? 'Runs' : 'Wickets';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="max-w-sm mx-auto"
    >
      <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
              {player.image ? (
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-semibold text-white">
                {player.country}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
          <p className="text-green-200 mb-4">{player.position}</p>

          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 p-3 bg-white/10 rounded-lg border border-white/20">
              {challenge === 'batting' ? (
                <Target className="w-5 h-5 text-blue-400" />
              ) : (
                <TrendingUp className="w-5 h-5 text-red-400" />
              )}
              <span className="text-sm text-green-200">Career {statLabel} ({format})</span>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">
                {stat.toLocaleString()}
              </div>
              <div className="text-sm text-green-200">{statLabel}</div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 text-center"
          >
            <p className="text-green-200 text-sm">Choose a multiplier slot!</p>
            <div className="text-2xl mt-2">👇</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};