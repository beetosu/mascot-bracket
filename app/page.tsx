"use client";

import { useState } from 'react'
import MascotCard from './components/mascot-card/mascot-card'
import styles from './page.module.css'
import MascotStore, { MascotData } from './common/mascot-store'

type MatchQueue = [MascotData, MascotData?][];

/**
 * Create a queue of matches for each college in the store.
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
  const [leftMascot, updateLeftMascot] = useState<MascotData>(matchQueue[0][0]);
  const [rightMascot, updateRightMascot] = useState<MascotData | undefined>(matchQueue[0][1]);
  
  /**
   * Advance the match queue forward.
   * @param winner The mascot that will advance to the next round.
   */
  function handleQueueUpdate(winner: MascotData): void {
    const lastElement = matchQueue.length - 1;

    // Either create a new match, or pair an existing match with an opponent.
    if (matchQueue[lastElement][1] === undefined) {
      matchQueue[lastElement][1] = winner;
    } else {
      matchQueue.push([winner, undefined]);
    }

    matchQueue.shift();

    // TODO: If only 1 unfufilled match remains in the queue, intiate winstate.

    updateMatchQueue(matchQueue);
    updateLeftMascot(matchQueue[0][0]);
    updateRightMascot(matchQueue[0][1]);
  }

  return (
    <main className={styles.main}>
      <MascotCard 
        key={leftMascot.id}
        mascotData={leftMascot}
        handleQueueUpdate={handleQueueUpdate}
      />
      <MascotCard 
        key={rightMascot?.id ?? -1}
        mascotData={rightMascot}
        handleQueueUpdate={handleQueueUpdate}
      />
    </main>
  )
}
