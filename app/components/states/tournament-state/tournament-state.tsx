"use client";

import { useState } from 'react'
import styles from './tournament-state.module.css'
import MascotStore, { MascotData } from '@/app/common/mascot-store';
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { ExtraData, MatchQueue } from '@/app/page';
import GameStateEnum from '@/app/common/game-state-enum';

type TournamentStateProps = { 
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void
}

/**
 * Create a queue of matches for each college in the store.
 * @returns A list of tuples of colleges, paired based on placement in the store.
 */
function generateMatchQueue(): MatchQueue {
  // PRECONDITIONS:
  // The MatchStore has an odd number of elements, which it should if it's valid info)

  let queue: MatchQueue = [];

  for (let i = 0; i < MascotStore.length; i += 2) {
    const match: [MascotData, MascotData] = [MascotStore[i], MascotStore[i + 1]];
    queue.push(match);
  }

  return queue;
}

export default function TournamentState({ handleGameStateTransition }: TournamentStateProps ) {
  const initialMatchQueue = generateMatchQueue();
  const [matchQueue, updateMatchQueue] = useState<MatchQueue>(initialMatchQueue);
  const [leftMatch, updateLeftMatch] = useState<MascotData>(initialMatchQueue[0][0]);
  const [rightMatch, updateRightMatch] = useState<MascotData | undefined>(initialMatchQueue[0][1]);

  const [matchHistory, updateMatchHistory] = useState<string[]>([]);
  
  /**
   * Advance the match queue forward.
   * @param winner The mascot that will advance to the next round.
   */
  function handleQueueUpdate(winner: MascotData): void {
    const lastElement = matchQueue.length - 1;

    if (matchHistory.length < 4) {
      const matchToFillIdx = matchQueue.findIndex(m => m[1]?.firstFour === matchHistory.length);
      matchQueue[matchToFillIdx][1] = winner;
    } else {
      // Either create a new match, or pair an existing match with an opponent.
      if (matchQueue[lastElement][1] === undefined) {
        matchQueue[lastElement][1] = winner;
      } else {
        matchQueue.push([winner, undefined]);
      }
    }

    matchQueue.shift();

    matchHistory.push(winner.collegeName);
    updateMatchHistory(matchHistory);

    updateMatchQueue(matchQueue);
    updateLeftMatch(matchQueue[0][0])
    updateRightMatch(matchQueue[0][1])

    if (matchQueue.length === 1 && matchQueue[0][1] === undefined) {
      handleGameStateTransition(GameStateEnum.Win, { matchHistory });
    }
  }

  return (
    <div className={styles.gameState}>
      <MascotCard 
        key={leftMatch.id}
        mascotData={leftMatch}
        handleQueueUpdate={handleQueueUpdate}
        isLeft={true}
      />
      <MascotCard 
        key={rightMatch?.id ?? -1}
        mascotData={rightMatch}
        handleQueueUpdate={handleQueueUpdate}
        isLeft={false}
      />
    </div>
  )
}
