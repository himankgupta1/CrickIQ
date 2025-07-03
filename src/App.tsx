import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Timer, Star, Award, Target, Zap, Wifi, WifiOff } from 'lucide-react';
import { PlayerCard } from './components/PlayerCard';
import { MultiplierGrid } from './components/MultiplierGrid';
import { LeaderboardModal } from './components/LeaderboardModal';
import { GameStats } from './components/GameStats';
import { AchievementToast } from './components/AchievementToast';
import { SoundManager } from './components/SoundManager';
import { AdBanner } from './components/AdBanner';
import { AdSidebar } from './components/AdSidebar';
import { allPlayers } from './data/players';
import { useGameLogic } from './hooks/useGameLogic';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAchievements } from './hooks/useAchievements';
import { useSoundEffects } from './hooks/useSoundEffects';
import { useSupabaseLeaderboard } from './hooks/useSupabaseLeaderboard';
import { LeaderboardService } from './services/leaderboardService';
import { Challenge, Format, Player, GameState } from './types/game';

const multipliers = [1, 1, 2, 3, 4, 5, 10, 10, 20];

function App() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [username, setUsername] = useState('');
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [format, setFormat] = useState<Format | null>(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [gameStartTime, setGameStartTime] = useState<number>(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const {
    score,
    roundPlayers,
    currentPlayerIndex,
    assigned,
    roundFinished,
    timer,
    streak,
    combo,
    assignToMultiplier,
    startNewRound,
    resetGame
  } = useGameLogic(challenge, format, multipliers);

  // Local storage fallback for offline mode
  const [localScores, setLocalScores] = useLocalStorage('cricket-challenge-scores', {});
  const [playerStats, setPlayerStats] = useLocalStorage('cricket-challenge-stats', {
    gamesPlayed: 0,
    totalScore: 0,
    bestScore: 0,
    achievements: []
  });

  // Supabase leaderboard hook
  const { 
    leaderboards: onlineLeaderboards, 
    loading: leaderboardLoading, 
    submitScore: submitOnlineScore,
    error: leaderboardError
  } = useSupabaseLeaderboard();

  const { achievements, checkAchievements } = useAchievements(playerStats);
  const { playSound, toggleSound, soundEnabled } = useSoundEffects();

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleNameSubmit = useCallback(() => {
    if (username.trim()) {
      setGameState('challenge-select');
      playSound('button');
      
      // Track analytics
      LeaderboardService.trackAnalytics('user_start', { username: username.trim() });
    }
  }, [username, playSound]);

  const handleChallengeSelect = useCallback((selectedChallenge: Challenge) => {
    setChallenge(selectedChallenge);
    setGameState('format-select');
    playSound('button');
    
    // Track analytics
    LeaderboardService.trackAnalytics('challenge_select', { 
      username, 
      challenge: selectedChallenge 
    });
  }, [username, playSound]);

  const handleFormatSelect = useCallback((selectedFormat: Format) => {
    setFormat(selectedFormat);
    setGameState('playing');
    setGameStartTime(Date.now());
    startNewRound();
    playSound('gameStart');
    
    // Track analytics
    LeaderboardService.trackAnalytics('game_start', { 
      username, 
      challenge, 
      format: selectedFormat 
    });
  }, [username, challenge, startNewRound, playSound]);

  const handleSubmitScore = useCallback(async () => {
    if (!challenge || !format) return;

    const gameDuration = Math.floor((Date.now() - gameStartTime) / 1000);
    
    // Always save locally first
    const key = `${challenge}-${format}`;
    const entry = { 
      username, 
      score, 
      date: new Date().toISOString(),
      streak,
      combo,
      gameDuration
    };

    const updatedLocalScores = {
      ...localScores,
      [key]: [...(localScores[key] || []), entry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 20)
    };
    setLocalScores(updatedLocalScores);

    // Update local player stats
    const newStats = {
      ...playerStats,
      gamesPlayed: playerStats.gamesPlayed + 1,
      totalScore: playerStats.totalScore + score,
      bestScore: Math.max(playerStats.bestScore, score)
    };
    setPlayerStats(newStats);
    checkAchievements(newStats, score, streak, combo);

    // Try to submit online if connected
    if (isOnline) {
      try {
        await submitOnlineScore(username, score, challenge, format, streak, combo, gameDuration);
      } catch (error) {
        console.error('Failed to submit online score:', error);
      }
    }
    
    playSound('submit');
    setGameState('results');
  }, [
    challenge, 
    format, 
    username, 
    score, 
    streak, 
    combo, 
    gameStartTime,
    localScores, 
    setLocalScores, 
    playerStats, 
    setPlayerStats, 
    checkAchievements, 
    isOnline,
    submitOnlineScore,
    playSound
  ]);

  const handlePlayAgain = useCallback(() => {
    resetGame();
    setGameState('challenge-select');
    playSound('button');
  }, [resetGame, playSound]);

  const handleBackToMenu = useCallback(() => {
    resetGame();
    setChallenge(null);
    setFormat(null);
    setGameState('menu');
    playSound('button');
  }, [resetGame, playSound]);

  // Use online leaderboards if available, otherwise fall back to local
  const currentLeaderboards = isOnline && Object.keys(onlineLeaderboards).length > 0 
    ? onlineLeaderboards 
    : localScores;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative z-10">

        <header className="container mx-auto px-4 py-6">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Cricket Challenge
                </h1>
                <p className="text-green-200 text-sm flex items-center space-x-2">
                  <span>Ultimate Cricket Stats Game</span>
                  {isOnline ? (
                    <Wifi className="w-4 h-4 text-green-400" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-orange-400"/>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <SoundManager enabled={soundEnabled} onToggle={toggleSound} />
              {gameState === 'playing' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowStats(true)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Award className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </header>

        <div className="container mx-auto px-4 pb-8 flex gap-8">
          <main className="flex-1">
            <AnimatePresence mode="wait">
              {gameState === 'menu' && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-md mx-auto"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Welcome to Cricket Challenge</h2>
                      <p className="text-green-200">Test your cricket knowledge and strategy skills</p>
                      {!isOnline && (
                        <div className="mt-3 p-2 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                          <p className="text-orange-200 text-sm">Playing in offline mode</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleNameSubmit}
                        disabled={!username.trim()}
                        className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-600 hover:to-orange-600 transition-all"
                      >
                        Start Game
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowLeaderboard(true)}
                        className="w-full py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                      >
                        View Leaderboard
                      </motion.button>
                    </div>
                  </div>

                  {/* Ad space below menu */}
                  <div className="mt-8">
                    <AdBanner 
                      slot={import.meta.env.VITE_AD_UNIT_BANNER || 'banner-menu'} 
                      size="rectangle"
                      className="mx-auto"
                    />
                  </div>
                </motion.div>
              )}

              {gameState === 'challenge-select' && (
                <motion.div
                  key="challenge-select"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Choose Your Challenge</h2>
                    <p className="text-green-200">Welcome, {username}!</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleChallengeSelect('batting')}
                      className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl border border-blue-400/30 cursor-pointer group"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                          <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Batting Challenge</h3>
                        <p className="text-blue-200 mb-4">Score 500,000 runs with strategic player placement</p>
                        <div className="text-sm text-blue-300">
                          <p>• Use batting averages and career runs</p>
                          <p>• Master the multiplier strategy</p>
                          <p>• Build massive run totals</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleChallengeSelect('bowling')}
                      className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-2xl border border-red-400/30 cursor-pointer group"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                          <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Bowling Challenge</h3>
                        <p className="text-red-200 mb-4">Take 1,000 wickets with bowling legends</p>
                        <div className="text-sm text-red-300">
                          <p>• Use bowling averages and career wickets</p>
                          <p>• Strategic wicket-taking approach</p>
                          <p>• Dominate with bowling skills</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBackToMenu}
                    className="mt-6 mx-auto block px-6 py-2 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all"
                  >
                    Back to Menu
                  </motion.button>
                </motion.div>
              )}

              {gameState === 'format-select' && (
                <motion.div
                  key="format-select"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Choose Format</h2>
                    <p className="text-green-200">
                      {challenge === 'batting' ? 'Batting Challenge' : 'Bowling Challenge'} - Select your preferred format
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { format: 'Test' as Format, color: 'from-emerald-600 to-emerald-800', description: 'Traditional cricket at its finest' },
                      { format: 'ODI' as Format, color: 'from-blue-600 to-blue-800', description: 'Limited overs excitement' },
                      { format: 'T20I' as Format, color: 'from-purple-600 to-purple-800', description: 'Fast-paced action' }
                    ].map(({ format, color, description }) => (
                      <motion.div
                        key={format}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleFormatSelect(format)}
                        className={`bg-gradient-to-br ${color} p-6 rounded-2xl border border-white/20 cursor-pointer group`}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                            <Trophy className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">{format}</h3>
                          <p className="text-sm opacity-80">{description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setGameState('challenge-select')}
                    className="mt-6 mx-auto block px-6 py-2 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all"
                  >
                    Back
                  </motion.button>
                </motion.div>
              )}

              {gameState === 'playing' && (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-6 mb-4">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                        <span className="text-2xl font-bold">{score.toLocaleString()}</span>
                      </div>
                      {!roundFinished && (
                        <div className="flex items-center space-x-2">
                          <Timer className="w-5 h-5 text-orange-400" />
                          <span className="text-xl font-mono">{timer}s</span>
                        </div>
                      )}
                      {streak > 1 && (
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-purple-400" />
                          <span className="text-lg font-semibold">{streak}x Streak</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-green-200">
                      {challenge === 'batting' ? '🏏 Batting Challenge' : '🎯 Bowling Challenge'} - {format}
                    </h3>
                  </div>

                  {!roundFinished && roundPlayers.length > 0 && (
                    <PlayerCard 
                      player={roundPlayers[currentPlayerIndex]}
                      challenge={challenge!}
                      format={format!}
                    />
                  )}

                  <MultiplierGrid
                    multipliers={multipliers}
                    assigned={assigned}
                    onAssign={assignToMultiplier}
                    disabled={roundFinished}
                    challenge={challenge!}
                  />

                  {roundFinished && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center space-y-4"
                    >
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-2">🎉 Round Complete!</h3>
                        <p className="text-3xl font-bold">{score.toLocaleString()} Points</p>
                        {streak > 1 && <p className="text-lg">Amazing {streak}x streak!</p>}
                        {combo > 0 && <p className="text-sm">Combo bonus: +{combo}</p>}
                      </div>

                      <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSubmitScore}
                          disabled={leaderboardLoading}
                          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all disabled:opacity-50"
                        >
                          {leaderboardLoading ? 'Submitting...' : 'Submit Score'}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowLeaderboard(true)}
                          className="px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                        >
                          View Leaderboard
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* In-game ad space */}
                  <div className="mt-8">
                    <AdBanner 
                      slot={import.meta.env.VITE_AD_UNIT_BANNER || 'banner-game'} 
                      size="banner"
                      className="mx-auto"
                    />
                  </div>
                </motion.div>
              )}

              {gameState === 'results' && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-md mx-auto text-center"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">Score Submitted!</h2>
                    <p className="text-green-200 mb-2">Your score has been saved</p>
                    {isOnline ? (
                      <p className="text-green-300 text-sm mb-6">✓ Synced to global leaderboard</p>
                    ) : (
                      <p className="text-orange-300 text-sm mb-6">📱 Saved locally (will sync when online)</p>
                    )}
                    
                    <div className="space-y-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePlayAgain}
                        className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
                      >
                        Play Again
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowLeaderboard(true)}
                        className="w-full py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                      >
                        View Leaderboard
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleBackToMenu}
                        className="w-full py-2 text-green-200 hover:text-white transition-colors"
                      >
                        Back to Menu
                      </motion.button>
                    </div>
                  </div>

                  {/* Results ad space */}
                  <div className="mt-8">
                    <AdBanner 
                      slot={import.meta.env.VITE_AD_UNIT_BANNER || 'banner-results'} 
                      size="rectangle"
                      className="mx-auto"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Sidebar with ads and widgets */}
          <AdSidebar />
        </div>

        <LeaderboardModal
          isOpen={showLeaderboard}
          onClose={() => setShowLeaderboard(false)}
          scores={currentLeaderboards}
          isOnline={isOnline}
          loading={leaderboardLoading}
        />

        <GameStats
          isOpen={showStats}
          onClose={() => setShowStats(false)}
          stats={playerStats}
          achievements={achievements}
        />

        <AchievementToast achievements={achievements} />

        {/* Error notification for network issues */}
        {leaderboardError && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 bg-red-500/90 backdrop-blur-sm text-white p-4 rounded-lg border border-red-400/30 max-w-sm"
          >
            <p className="text-sm">Network error: Scores saved locally</p>
          </motion.div>
        )}

        <footer className="mt-16 py-8 text-center text-green-200">
          <div className="container mx-auto px-4">
            {/* Footer ad space */}
            {/* <div className="mb-8">
              <AdBanner 
                slot={import.meta.env.VITE_AD_UNIT_BANNER || 'banner-footer'} 
                size="leaderboard"
                className="mx-auto"
              />
            </div> */}
            
            <p className="mb-2">🔧 Developed by <strong className="text-white">Himank Gupta</strong></p>
            <div className="flex justify-center space-x-6 text-sm">
              <a 
                href="https://www.linkedin.com/in/himank-gupta-hg2003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/himankgupta1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                📂 GitHub
              </a>
            </div>
            <p className="mt-2 text-xs">🤝 Open to collaborations | 🚀 More enhancements coming soon!</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;