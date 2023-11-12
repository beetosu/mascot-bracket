"use client";

import { useState } from 'react'
import styles from './page.module.css'
import MascotStore, { MascotData } from './common/mascot-store'
import TournamentState from './components/states/tournament-state/tournament-state';

export type MatchQueue = [MascotData, MascotData?][];

/**
 * Create a queue of matches for each college in the store.
 * (this presupposes that the MatchStore has an odd number of elements, which it should if it's valid info)
 * @returns A list of tuples of colleges, paired based on placement in the store.
 */
function generateMatchQueue(): MatchQueue {
  let queue: MatchQueue = [];

  for (let i = 0; i < MascotStore.length; i += 2) {
    const match: [MascotData, MascotData] = [MascotStore[i], MascotStore[i + 1]];
    queue.push(match);
  }

  return queue;
}

export default function Home() {
  const [matchQueue, updateMatchQueue] = useState<MatchQueue>(generateMatchQueue());

  return (
    <main className={styles.main}>
      <TournamentState 
        matchQueue={matchQueue}
        updateMatchQueue={updateMatchQueue}
      />
    </main>
  )
}
