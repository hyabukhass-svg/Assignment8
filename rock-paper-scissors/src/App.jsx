import React, { useState } from 'react';
import PlayerThrow from './components/PlayerThrow';
import ComputerThrow from './components/ComputerThrow';
import ResultDisplay from './components/ResultDisplay';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import styles from './App.module.css';

const CHOICES = ['rock', 'paper', 'scissors'];

const BEATS = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [outcome, setOutcome] = useState(null); 
  const [scores, setScores] = useState({ wins: 0, losses: 0, ties: 0 });
  const [isAnimating, setIsAnimating] = useState(false);


  const handlePlayerSelect = (choice) => {
    if (isAnimating) return; 

    setPlayerChoice(choice);
    setOutcome(null);
    setComputerChoice(null);
    setIsAnimating(true);
  };

const onComputerReveal = (finalChoice) => {
  setComputerChoice(finalChoice);

  if (playerChoice === finalChoice) {
    setOutcome('tie');
    setScores((s) => ({ ...s, ties: s.ties + 1 }));
  } else if (BEATS[playerChoice] === finalChoice) {
    setOutcome('win');
    setScores((s) => ({ ...s, wins: s.wins + 1 }));
  } else {
    setOutcome('lose');
    setScores((s) => ({ ...s, losses: s.losses + 1 }));
  }

  setIsAnimating(false); 

  setPlayerChoice(null);
};


  const resetAll = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setOutcome(null);
    setScores({ wins: 0, losses: 0, ties: 0 });
    setIsAnimating(false);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Rock — Paper — Scissors (React / Vite)</h1>

      <ScoreBoard scores={scores} />

      <section className={styles.gameArea} aria-live="polite">
        <PlayerThrow
          choices={CHOICES}
          onSelect={handlePlayerSelect}
          selected={playerChoice}
          disabled={isAnimating} 
        />

        <ComputerThrow
          playerSelected={!!playerChoice}
          onReveal={onComputerReveal}
          disabled={!playerChoice}
        />

        <ResultDisplay
          outcome={outcome}
          player={playerChoice}
          computer={computerChoice}
        />
      </section>

      <div className={styles.controls}>
        <ResetButton onReset={resetAll} />
      </div>
    </main>
  );
}
