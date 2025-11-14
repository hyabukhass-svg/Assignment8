import React from 'react'
import styles from './ResultDisplay.module.css'

export default function ResultDisplay({ outcome, player, computer }) {
  const message = (() => {
    if (!outcome) return 'Make your choice to start.'
    if (outcome === 'tie') return `It's a tie — both chose ${player}.`
    if (outcome === 'win') return `You win — ${player} beats ${computer}!`
    return `You lose — ${computer} beats ${player}.`
  })()

  return (
    <section className={styles.result} aria-live="polite">
      <p className={styles.message}>{message}</p>
    </section>
  )
}
