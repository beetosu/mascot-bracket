"use client";

import styles from './menu-state.module.css'

export default function MenuState() {
  return (
    <div className={styles.menuState}>
      <h1>🏀 March Mascots! 🏀</h1>
      <p>Create a printable bracket for the 2024 NCAA March Madness based on the college's mascots!</p>
      <h2>Select Tournament:</h2>
      <div className={styles.buttons}>
        <button>Mens</button>
        <button>Womens</button>
      </div>
    </div>
  )
}
