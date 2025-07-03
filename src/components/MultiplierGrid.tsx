import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from 'lucide-react';
import { AssignedPlayer, Challenge } from '../types/game';

interface MultiplierGridProps {
  multipliers: number[];
  assigned: Record<number, AssignedPlayer>;
  onAssign: (index: number) => void;
  disabled: boolean;
  challenge: Challenge;
}

export const MultiplierGrid: React.FC<MultiplierGridProps> = ({
  multipliers,
  assigned,
  onAssign,
  disabled,
  challenge
}) => {
  const getSlotColor = (multiplier: number, isAssigned: boolean) => {
    if (isAssigned) return 'from-emerald-500 to-emerald-700';
    if (multiplier >= 10) return 'from-purple-500 to-purple-700';
    if (multiplier >= 5) return 'from-orange-500 to-orange-700';
    if (multiplier >= 3) return 'from-blue-500 to-blue-700';
    return 'from-gray-500 to-gray-700';
  };

  const getSlotIcon = (multiplier: number) => {
    if (multiplier >= 10) return <Star className="w-4 h-4 text-yellow-300" />;
    if (multiplier >= 5) return <Zap className="w-4 h-4 text-orange-300" />;
    return null;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Multiplier Slots</h3>
        <p className="text-green-200 text-sm">Strategic placement is key to maximizing your score!</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-9 gap-3 md:gap-4">
        {multipliers.map((multiplier, index) => {
          const assignedPlayer = assigned[index];
          const isAssigned = !!assignedPlayer;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                whileHover={{ scale: disabled || isAssigned ? 1 : 1.05 }}
                whileTap={{ scale: disabled || isAssigned ? 1 : 0.95 }}
                onClick={() => onAssign(index)}
                disabled={disabled || isAssigned}
                className={`
                  w-full aspect-square rounded-xl border-2 transition-all duration-300
                  ${isAssigned 
                    ? 'border-emerald-400 bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/25' 
                    : disabled 
                      ? 'border-gray-600 bg-gradient-to-br from-gray-600 to-gray-800 cursor-not-allowed opacity-60'
                      : `border-white/30 bg-gradient-to-br ${getSlotColor(multiplier, false)} hover:border-white/50 hover:shadow-lg cursor-pointer`
                  }
                  flex flex-col items-center justify-center p-2 text-white
                `}
              >
                <div className="flex items-center space-x-1 mb-1">
                  {getSlotIcon(multiplier)}
                  <span className="text-lg md:text-xl font-bold">{multiplier}x</span>
                </div>
                
                {isAssigned && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="text-xs font-medium text-emerald-100 truncate max-w-full">
                      {assignedPlayer.name}
                    </div>
                    <div className="text-xs text-emerald-200 mt-1">
                      {assignedPlayer.stat.toLocaleString()} × {assignedPlayer.multiplier}
                    </div>
                    <div className="text-xs font-bold text-white">
                      = {assignedPlayer.contribution.toLocaleString()}
                    </div>
                  </motion.div>
                )}
              </motion.button>

              {!isAssigned && !disabled && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-20 -z-10"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 text-center text-sm text-green-200">
        <p>💡 Higher multipliers = bigger rewards, but choose wisely!</p>
      </div>
    </div>
  );
};