import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundManagerProps {
  enabled: boolean;
  onToggle: () => void;
}

export const SoundManager: React.FC<SoundManagerProps> = ({ enabled, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
    >
      {enabled ? (
        <Volume2 className="w-5 h-5 text-white" />
      ) : (
        <VolumeX className="w-5 h-5 text-white" />
      )}
    </motion.button>
  );
};