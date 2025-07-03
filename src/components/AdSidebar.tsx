import React from 'react';
import { motion } from 'framer-motion';
import { AdBanner } from './AdBanner';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

export const AdSidebar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden lg:block w-64 space-y-6"
    >
      {/* Primary Ad Space */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
          <Zap className="w-4 h-4 mr-2 text-yellow-400" />
          Sponsored
        </h3>
        <AdBanner 
          slot={import.meta.env.VITE_AD_UNIT_SIDEBAR || 'sidebar-1'} 
          size="rectangle"
          className="mx-auto"
        />
      </div>

      {/* Game Stats Widget */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
          Live Stats
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-green-200">
            <span>Games Played Today:</span>
            <span className="font-semibold text-white">1,247</span>
          </div>
          <div className="flex justify-between text-green-200">
            <span>Highest Score:</span>
            <span className="font-semibold text-white">892,450</span>
          </div>
          <div className="flex justify-between text-green-200">
            <span>Active Players:</span>
            <span className="font-semibold text-white">156</span>
          </div>
        </div>
      </div>

      {/* Community Links */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
          <Users className="w-4 h-4 mr-2 text-blue-400" />
          Community
        </h3>
        <div className="space-y-2">
          <a 
            href="#" 
            className="flex items-center text-sm text-green-200 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3 h-3 mr-2" />
            Join Discord
          </a>
          <a 
            href="#" 
            className="flex items-center text-sm text-green-200 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3 h-3 mr-2" />
            Follow on Twitter
          </a>
          <a 
            href="#" 
            className="flex items-center text-sm text-green-200 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3 h-3 mr-2" />
            Cricket News
          </a>
        </div>
      </div>

      {/* Secondary Ad Space */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        <h3 className="text-sm font-semibold text-white mb-3">More Games</h3>
        <AdBanner 
          slot={import.meta.env.VITE_AD_UNIT_SIDEBAR || 'sidebar-2'} 
          size="rectangle"
          className="mx-auto"
        />
      </div>
    </motion.div>
  );
};