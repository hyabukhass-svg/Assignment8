import React from 'react'
import styles from './PlayerThrow.module.css'

/**
 * PlayerThrow - displays clickable images for rock/paper/scissors
 */
export default function PlayerThrow({ choices = [], onSelect, selected, disabled }) {
  return (
    <section className={styles.playerSection} aria-label="Player Throw">
      <h2 className={styles.heading}>Your throw</h2>

      <div className={styles.choices} role="list">
        {choices.map((c) => (
          <button
            key={c}
            className={`${styles.choice} ${selected === c ? styles.selected : ''}`}
            onClick={() => onSelect(c)}
            disabled={disabled}
            aria-pressed={selected === c}
            title={c}
            type="button"
          >
            <img src={`/images/${c}.PNG`} alt={c} />
            <span className={styles.label}>{c}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
