import React from 'react'
import styles from './ScoreBoard.module.css'

export default function ScoreBoard({ scores }) {
  return (
    <section className={styles.scoreboard} aria-label="Scoreboard">
      <div className={styles.cell}><strong>Wins</strong><div>{scores.wins}</div></div>
      <div className={styles.cell}><strong>Losses</strong><div>{scores.losses}</div></div>
      <div className={styles.cell}><strong>Ties</strong><div>{scores.ties}</div></div>
    </section>
  )
}
