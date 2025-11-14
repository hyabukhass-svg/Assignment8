import React, { useEffect, useState } from 'react';
import styles from './ComputerThrow.module.css';

const CHOICES = ['rock', 'paper', 'scissors'];

export default function ComputerThrow({ playerSelected, onReveal }) {
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    
    if (!playerSelected) return;

    
    const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setChoice(randomChoice);

    
    const timer = setTimeout(() => {
      onReveal(randomChoice);
    }, 1000);

   
    return () => clearTimeout(timer);

  }, [playerSelected]); 

  return (
    <div className={styles.computerThrow}>
      {choice ? `Computer picked: ${choice}` : 'Computer is waiting...'}
    </div>
  );
}
