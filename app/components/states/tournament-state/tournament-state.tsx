"use client";

import { Dispatch, SetStateAction, useState } from 'react'
import styles from './tournament-state.module.css'
import { MascotData } from '@/app/common/mascot-store';
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { MatchQueue } from '@/app/page';

export default function TournamentState({ matchQueue, updateMatchQueue }: { matchQueue: MatchQueue, updateMatchQueue: Dispatch<SetStateAction<MatchQueue>> } ) {
  let [matchHistory, updateMatchHistory] = useState<string>('');
  
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

    const lastMatch = matchQueue.shift();
    const winnerIdx = lastMatch?.findIndex(m => m?.id === winner.id);

    matchHistory += winnerIdx;
    updateMatchHistory(matchHistory);

    // TODO: If only 1 unfufilled match remains in the queue, intiate winstate.

    updateMatchQueue(matchQueue);
  }

  function binaryToHex(): string {
    const decimal = parseInt(matchHistory, 2)

    if (Number.isNaN(decimal)) {
      return '';
    }

    return decimal.toString(16)
  }

  const currentMatch = matchQueue[0]
  const leftMascot = currentMatch[0];
  const rightMascot = currentMatch[1];

  return (
    <div className={styles.gameState}>
      <p>{matchHistory}</p>
      <p>{binaryToHex()}</p>
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
    </div>
  )
}
