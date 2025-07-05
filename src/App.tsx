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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Compact Header */}
        <header className="px-4 py-3 border-b border-white/10 flex-shrink-0">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Cricket Challenge
                </h1>
                <p className="text-green-200 text-xs flex items-center space-x-1">
                  <span>Ultimate Cricket Stats Game</span>
                  {isOnline ? (
                    <Wifi className="w-3 h-3 text-green-400" />
                  ) : (
                    <WifiOff className="w-3 h-3 text-orange-400"/>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <SoundManager enabled={soundEnabled} onToggle={toggleSound} />
              {gameState === 'playing' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowStats(true)}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Award className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </header>

        {/* Main Content - Flexible Height */}
        <main className="flex-1 px-4 py-2 overflow-y-auto">
          <AnimatePresence mode="wait">
            {gameState === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-sm mx-auto h-full flex items-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 w-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold mb-1">Welcome to Cricket Challenge</h2>
                    <p className="text-green-200 text-sm">Test your cricket knowledge and strategy skills</p>
                    {!isOnline && (
                      <div className="mt-2 p-2 bg-orange-500/20 border border-orange-400/30 rounded-lg">
                        <p className="text-orange-200 text-xs">Playing in offline mode</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                      className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
                    />
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleNameSubmit}
                      disabled={!username.trim()}
                      className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-600 hover:to-orange-600 transition-all text-sm"
                    >
                      Start Game
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowLeaderboard(true)}
                      className="w-full py-2 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-sm"
                    >
                      View Leaderboard
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'challenge-select' && (
              <motion.div
                key="challenge-select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto h-full flex flex-col justify-center"
              >
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-1">Choose Your Challenge</h2>
                  <p className="text-green-200 text-sm">Welcome, {username}!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChallengeSelect('batting')}
                    className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl border border-blue-400/30 cursor-pointer group"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Batting Strategy Mode</h3>
                      <p className="text-blue-200 mb-3 text-sm">Build your dream batting lineup to smash run records!</p>
                      <div className="text-xs text-blue-300">
                        <p>• Select legendary batsmen</p>
                        <p>• Place them wisely in the multiplier slots</p>
                        <p>• Watch your scoreboard explode!</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChallengeSelect('bowling')}
                    className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl border border-red-400/30 cursor-pointer group"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Bowling Strategy Mode</h3>
                      <p className="text-red-200 mb-3 text-sm">Assemble a fearsome bowling attack to crush opponents!</p>
                      <div className="text-xs text-red-300">
                        <p>• Pick iconic pacers and spinners</p>
                        <p>• Time their deployment</p>
                        <p>• Take down top-order giants!</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBackToMenu}
                  className="mx-auto block px-4 py-2 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all text-sm"
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
                className="max-w-2xl mx-auto h-full flex flex-col justify-center"
              >
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-1">Choose Format</h2>
                  <p className="text-green-200 text-sm">
                    {challenge === 'batting' ? 'Batting Challenge' : 'Bowling Challenge'} - Select your preferred format
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {[
                    { format: 'Test' as Format, color: 'from-emerald-600 to-emerald-800', description: "Legends\' Arena. Dig deep into cricket's elite." },
                    { format: 'ODI' as Format, color: 'from-blue-600 to-blue-800', description: '50-50 Warfare. Balance aggression with strategy.' },
                    { format: 'IPL' as Format, color: 'from-purple-600 to-purple-800', description: 'T20 Blitz. Big hits. Big names. Bigger stakes.'}
                  ].map(({ format, color, description }) => (
                    <motion.div
                      key={format}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleFormatSelect(format)}
                      className={`bg-gradient-to-br ${color} p-4 rounded-xl border border-white/20 cursor-pointer group`}
                    >
                      <div className="text-center">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">{format}</h3>
                        <p className="text-xs opacity-80">{description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setGameState('challenge-select')}
                  className="mx-auto block px-4 py-2 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all text-sm"
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
                className="space-y-3 h-full flex flex-col"
              >
                <div className="text-center flex-shrink-0">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <span className="text-xl font-bold">{score.toLocaleString()}</span>
                    </div>
                    {!roundFinished && (
                      <div className="flex items-center space-x-1">
                        <Timer className="w-4 h-4 text-orange-400" />
                        <span className="text-lg font-mono">{timer}s</span>
                      </div>
                    )}
                    {streak > 1 && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold">{streak}x Streak</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-green-200">
                    {challenge === 'batting' ? '🏏 Batting Challenge' : '🎯 Bowling Challenge'} - {format}
                  </h3>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-3">
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
                      className="text-center space-y-3"
                    >
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-xl">
                        <h3 className="text-lg font-bold mb-1">🎉 Round Complete!</h3>
                        <p className="text-2xl font-bold">{score.toLocaleString()} Points</p>
                        {streak > 1 && <p className="text-sm">Amazing {streak}x streak!</p>}
                        {combo > 0 && <p className="text-xs">Combo bonus: +{combo}</p>}
                      </div>

                      <div className="flex flex-wrap justify-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleSubmitScore}
                          disabled={leaderboardLoading}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all disabled:opacity-50 text-sm"
                        >
                          {leaderboardLoading ? 'Submitting...' : 'Submit Score'}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowLeaderboard(true)}
                          className="px-4 py-2 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-sm"
                        >
                          View Leaderboard
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {gameState === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-sm mx-auto text-center h-full flex items-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 w-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3">Score Submitted!</h2>
                  <p className="text-green-200 mb-1 text-sm">Your score has been saved</p>
                  {isOnline ? (
                    <p className="text-green-300 text-xs mb-4">✓ Synced to global leaderboard</p>
                  ) : (
                    <p className="text-orange-300 text-xs mb-4">📱 Saved locally (will sync when online)</p>
                  )}
                  
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePlayAgain}
                      className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all text-sm"
                    >
                      Play Again
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowLeaderboard(true)}
                      className="w-full py-2 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-sm"
                    >
                      View Leaderboard
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBackToMenu}
                      className="w-full py-1 text-green-200 hover:text-white transition-colors text-sm"
                    >
                      Back to Menu
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Compact Footer */}
        <footer className="px-4 py-2 border-t border-white/10 text-center text-green-200 flex-shrink-0">
          <p className="text-xs mb-1">🔧 Developed by <strong className="text-white">Himank Gupta</strong></p>
          <div className="flex justify-center space-x-4 text-xs">
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
        </footer>

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
            className="fixed bottom-4 right-4 bg-red-500/90 backdrop-blur-sm text-white p-3 rounded-lg border border-red-400/30 max-w-sm"
          >
            <p className="text-xs">Network error: Scores saved locally</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;