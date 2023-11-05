"use client";

import { useState } from 'react'
import MascotCard from './components/mascot-card/mascot-card'
import styles from './page.module.css'
import MascotStore from './common/mascot-store'
import InitialMatchQueue from './common/initial-match-queue'

export default function Home() {
  const [matchQueue, updateMatchQueue] = useState<[number, number][]>(InitialMatchQueue);
  
  const currentMatch = matchQueue[0];
  const leftMatch = currentMatch[0];
  const rightMatch = currentMatch[1];

  return (
    <main className={styles.main}>
      <MascotCard 
        key={leftMatch}
        mascotData={MascotStore[leftMatch]}
      />
      <MascotCard 
        key={rightMatch}
        mascotData={MascotStore[rightMatch]}
      />
    </main>
  )
}
