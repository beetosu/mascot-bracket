"use client";

import { Dispatch, SetStateAction, useState } from 'react'
import styles from './tournament-state.module.css'
import { MascotData } from '@/app/common/mascot-store';
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { MatchQueue } from '@/app/page';

export default function TournamentState({ matchQueue, updateMatchQueue }: { matchQueue: MatchQueue, updateMatchQueue: Dispatch<SetStateAction<MatchQueue>> } ) {
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
    <div className={styles.gameState}>
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
