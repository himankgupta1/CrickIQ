import { useState, useCallback } from 'react';

type SoundType = 'button' | 'assign' | 'finish' | 'submit' | 'gameStart' | 'achievement';

export const useSoundEffects = () => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('cricket-sound-enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const playSound = useCallback((type: SoundType) => {
    if (!soundEnabled) return;

    // Create audio context for web audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createBeep = (frequency: number, duration: number, volume: number = 0.1) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };

    switch (type) {
      case 'button':
        createBeep(800, 0.1);
        break;
      case 'assign':
        createBeep(600, 0.15);
        setTimeout(() => createBeep(800, 0.1), 100);
        break;
      case 'finish':
        createBeep(400, 0.2);
        setTimeout(() => createBeep(600, 0.2), 150);
        setTimeout(() => createBeep(800, 0.3), 300);
        break;
      case 'submit':
        createBeep(1000, 0.2);
        setTimeout(() => createBeep(1200, 0.3), 200);
        break;
      case 'gameStart':
        createBeep(600, 0.2);
        setTimeout(() => createBeep(800, 0.2), 200);
        setTimeout(() => createBeep(1000, 0.3), 400);
        break;
      case 'achievement':
        for (let i = 0; i < 5; i++) {
          setTimeout(() => createBeep(800 + i * 100, 0.15), i * 100);
        }
        break;
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('cricket-sound-enabled', JSON.stringify(newValue));
  }, [soundEnabled]);

  return { playSound, toggleSound, soundEnabled };
};