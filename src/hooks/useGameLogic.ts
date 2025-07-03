import { useState, useCallback, useEffect } from 'react';
import { Challenge, Format, Player, AssignedPlayer } from '../types/game';
import { allPlayers } from '../data/players';
import { useSoundEffects } from './useSoundEffects';

export const useGameLogic = (challenge: Challenge | null, format: Format | null, multipliers: number[]) => {
  const [score, setScore] = useState(0);
  const [roundPlayers, setRoundPlayers] = useState<Player[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [assigned, setAssigned] = useState<Record<number, AssignedPlayer>>({});
  const [roundFinished, setRoundFinished] = useState(false);
  const [timer, setTimer] = useState(20);
  const [streak, setStreak] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lastAssignmentScore, setLastAssignmentScore] = useState(0);

  const { playSound } = useSoundEffects();

  const assignToMultiplier = useCallback((index: number) => {
    if (assigned[index] || !challenge || !format || roundFinished) return;

    const player = roundPlayers[currentPlayerIndex];
    const stat = player[challenge][format];
    let contribution = stat * multipliers[index];

    // Calculate streak bonus
    const currentScore = contribution;
    let streakBonus = 0;
    let comboBonus = 0;

    if (currentScore > lastAssignmentScore && lastAssignmentScore > 0) {
      setStreak(prev => prev + 1);
      streakBonus = Math.floor(contribution * 0.1 * streak);
    } else {
      setStreak(1);
    }

    // High multiplier combo bonus
    if (multipliers[index] >= 10) {
      setCombo(prev => prev + 1);
      comboBonus = Math.floor(contribution * 0.05 * combo);
    }

    contribution += streakBonus + comboBonus;
    setLastAssignmentScore(currentScore);

    const assignedPlayer: AssignedPlayer = {
      ...player,
      multiplier: multipliers[index],
      contribution,
      stat
    };

    setAssigned(prev => ({ ...prev, [index]: assignedPlayer }));
    setScore(prev => prev + contribution);
    setTimer(20);

    playSound('assign');

    if (currentPlayerIndex === 8) {
      setRoundFinished(true);
      playSound('finish');
    } else {
      setCurrentPlayerIndex(prev => prev + 1);
    }
  }, [assigned, challenge, format, roundPlayers, currentPlayerIndex, multipliers, roundFinished, streak, combo, lastAssignmentScore, playSound]);

  const autoAssignRandom = useCallback(() => {
    const availableIndexes = multipliers
      .map((_, idx) => idx)
      .filter((i) => !assigned[i]);

    if (availableIndexes.length > 0) {
      const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      assignToMultiplier(randomIndex);
    }
  }, [assigned, assignToMultiplier, multipliers]);

  const startNewRound = useCallback(() => {
    const shuffled = [...allPlayers].sort(() => 0.5 - Math.random()).slice(0, 9);
    setRoundPlayers(shuffled);
    setAssigned({});
    setScore(0);
    setCurrentPlayerIndex(0);
    setRoundFinished(false);
    setTimer(20);
    setStreak(0);
    setCombo(0);
    setLastAssignmentScore(0);
  }, []);

  const resetGame = useCallback(() => {
    setRoundPlayers([]);
    setAssigned({});
    setScore(0);
    setCurrentPlayerIndex(0);
    setRoundFinished(false);
    setTimer(20);
    setStreak(0);
    setCombo(0);
    setLastAssignmentScore(0);
  }, []);

  // Timer logic
  useEffect(() => {
    if (!roundFinished && challenge && format && roundPlayers.length > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            autoAssignRandom();
            return 20;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentPlayerIndex, roundFinished, challenge, format, roundPlayers.length, autoAssignRandom]);

  return {
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
  };
};