"use client";

import { useState } from 'react'
import styles from './page.module.css'
import MascotStore, { MascotData } from './common/mascot-store'
import TournamentState from './components/states/tournament-state/tournament-state';
import GameStateEnum from './common/game-state-enum';

export type MatchQueue = [MascotData, MascotData?][];
export type ExtraData = {
  matchHistory?: string
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

export default function Home() {
  const initialMatchQueue = generateMatchQueue();
  const [matchQueue, updateMatchQueue] = useState<MatchQueue>(initialMatchQueue);
  const [gameState, updateGameState] = useState<GameStateEnum>(GameStateEnum.Tournament);
  const [matchHistory, updateMatchHistory] = useState<string>('');

  function handleGameStateTransition(upcomingGameState: GameStateEnum, extraData?: ExtraData) {  
    switch(upcomingGameState) {
      case GameStateEnum.Win:
        if (!extraData?.matchHistory) {
          updateGameState(GameStateEnum.Unknown);
          return;
        }

        updateMatchHistory(extraData.matchHistory);
        break;
      default:
        updateGameState(GameStateEnum.Unknown);
        return;
    }

    updateGameState(upcomingGameState);
  }

  let game: JSX.Element = (<p>hi</p>);
  switch(gameState) {
    case GameStateEnum.Tournament:
      game = (
        <TournamentState 
          matchQueue={matchQueue}
          updateMatchQueue={updateMatchQueue}
          handleGameStateTransition={handleGameStateTransition}
        />
      );
      break;
    case GameStateEnum.Win:
      const winner = matchQueue[0][0];
      game = (
        <div>
          <p>{winner.collegeName} wins x3</p>
          <p>look at these winz: {matchHistory}</p>
        </div>
      );
      break;
    default:
      game = (
        <p>error 😭</p>
      )
  }

  return (
    <main className={styles.main}>
      {game}
    </main>
  )
}
