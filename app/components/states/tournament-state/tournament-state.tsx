"use client";

import { useState } from 'react'
import styles from './tournament-state.module.css'
import MascotStore, { MascotData } from '@/app/common/mascot-store';
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { ExtraData, MatchQueue } from '@/app/page';
import GameStateEnum from '@/app/common/enums/game-state-enum';
import BracketInfo from '@/app/common/bracket-info';
import CollegeEnum from '@/app/common/enums/college-enum';

type TournamentStateProps = { 
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void,
  bracket: BracketInfo[]
}

/**
 * Create a queue of matches for each college in the store.
 * @param bracket
 * @returns A list of tuples of colleges, paired based on placement in the store.
 */
function generateMatchQueue(bracket: BracketInfo[]): MatchQueue {
  // PRECONDITIONS:
  // The MatchStore has an odd number of elements, which it should if it's valid info)

  let queue: MatchQueue = [];

  for (let i = 0; i < bracket.length; i += 2) {
    const match: [BracketInfo, BracketInfo] = [bracket[i], bracket[i + 1]];
    queue.push(match);
  }

  return queue;
}

export default function TournamentState({ handleGameStateTransition, bracket }: TournamentStateProps ) {
  const initialMatchQueue = generateMatchQueue(bracket);
  const [matchQueue, updateMatchQueue] = useState<MatchQueue>(initialMatchQueue);
  const [leftMatch, updateLeftMatch] = useState<BracketInfo>(initialMatchQueue[0][0]);
  const [rightMatch, updateRightMatch] = useState<BracketInfo | undefined>(initialMatchQueue[0][1]);

  const [matchHistory, updateMatchHistory] = useState<CollegeEnum[]>([]);
  
  /**
   * Advance the match queue forward.
   * @param winner The mascot that will advance to the next round.
   */
  function handleQueueUpdate(winner: BracketInfo): void {
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

    matchHistory.push(winner.id);
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
        bracketInfo={leftMatch}
        handleQueueUpdate={handleQueueUpdate}
        isLeft={true}
      />
      <MascotCard 
        key={rightMatch?.id ?? -1}
        bracketInfo={rightMatch}
        handleQueueUpdate={handleQueueUpdate}
        isLeft={false}
      />
    </div>
  )
}
