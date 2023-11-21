"use client";

import { Dispatch, SetStateAction, useState } from 'react'
import styles from './tournament-state.module.css'
import { MascotData } from '@/app/common/mascot-store';
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { ExtraData, MatchQueue } from '@/app/page';
import GameStateEnum from '@/app/common/game-state-enum';

type TournamentStateProps = { 
  matchQueue: MatchQueue,
  updateMatchQueue: Dispatch<SetStateAction<MatchQueue>>,
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void
}

export default function TournamentState({ matchQueue, updateMatchQueue, handleGameStateTransition }: TournamentStateProps ) {
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
    const winnerIdx = lastMatch?.findIndex(m => m?.id === winner.id) ?? 0;

    matchHistory += winnerIdx.toString();
    updateMatchHistory(matchHistory);
    updateMatchQueue(matchQueue);

    if (matchQueue.length === 1 && matchQueue[0][1] === undefined) {
      handleGameStateTransition(GameStateEnum.Win, { matchHistory });
    }
  }

  const currentMatch = matchQueue[0]
  const leftMascot = currentMatch[0];
  const rightMascot = currentMatch[1];

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
