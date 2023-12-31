"use client";

import { useState } from 'react'
import styles from './tournament-state.module.css'
import MascotCard from '@/app/components/mascot-card/mascot-card';
import { ExtraData, MatchQueue } from '@/app/page';
import GameStateEnum from '@/app/common/enums/game-state-enum';
import BracketInfo from '@/app/common/types/bracket-info';
import CollegeEnum from '@/app/common/enums/college-enum';
import Tournament from '@/app/common/types/tournament';
import TournamentRound, { determineRound, getRoundName } from '@/app/common/enums/tournament-round-enum';

type TournamentStateProps = { 
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void,
  tournament: Tournament
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

export default function TournamentState({ handleGameStateTransition, tournament }: TournamentStateProps ) {
  const initialMatchQueue = generateMatchQueue(tournament.bracket);
  const [matchQueue, updateMatchQueue] = useState<MatchQueue>(initialMatchQueue);
  const [leftMatch, updateLeftMatch] = useState<BracketInfo>(initialMatchQueue[0][0]);
  const [rightMatch, updateRightMatch] = useState<BracketInfo | undefined>(initialMatchQueue[0][1]);

  const [matchHistory, updateMatchHistory] = useState<CollegeEnum[]>([]);
  const [currentRound, updateCurrentRound] = useState<TournamentRound>(TournamentRound.FirstFour);
  
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
    updateLeftMatch(matchQueue[0][0]);
    updateRightMatch(matchQueue[0][1]);

    if (matchQueue.length === 1 && matchQueue[0][1] === undefined) {
      handleGameStateTransition(GameStateEnum.Win, { matchHistory });
    }

    const collegesPassed = matchHistory.length * 2;
    const newRound = determineRound(collegesPassed);
    if (newRound !== currentRound) updateCurrentRound(newRound)
  }

  return (
    <div className={styles.gameState}>
      <p className={styles.header}>
        {getRoundName(currentRound)}
      </p>
      <div className={styles.buttons}>
        <MascotCard 
          key={`${leftMatch.id}-${leftMatch.rank}-left`}
          bracketInfo={leftMatch}
          handleQueueUpdate={handleQueueUpdate}
          isLeft={true}
        />
        <MascotCard 
          key={`${rightMatch?.id ?? -1}-${rightMatch?.rank ?? -1}-right`}
          bracketInfo={rightMatch}
          handleQueueUpdate={handleQueueUpdate}
          isLeft={false}
        />
      </div>
    </div>
  )
}
