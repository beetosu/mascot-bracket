"use client";

import { useState } from 'react'
import styles from './page.module.css'
import MascotStore, { MascotData } from './common/mascot-store'
import TournamentState from './components/states/tournament-state/tournament-state';
import GameStateEnum from './common/game-state-enum';
import WinState from './components/states/win-state/win-state';
import UnknownState from './components/states/unknown-state/unknown-state';
import MenuState from './components/states/menu-state/menu-state';

export type MatchQueue = [MascotData, MascotData?][];
export type ExtraData = {
  matchHistory?: string[]
}

/**
 * Rework the generated match history into the format the bracket expects
 * @param matchHistory The raw match history from the tournament stage
 * @returns A match history which looks like [first four], [first round,
 * where winners of first four replace "Unknown"], [second round], etc.
 */
function formatMatchHistory(matchHistory: string[]): string[] {
  const mascotStore = MascotStore;
  // for the first four winners, add their names in the appropriate slots
  // in the mascot store (which here represents the first four and the first round)
  for (let i = 0; i < 4; i++) {
    const firstFourWinnerName = matchHistory.shift();
    const unknownToReplaceIdx = mascotStore.findIndex(m => m.firstFour === i);

    if (firstFourWinnerName === undefined || unknownToReplaceIdx === -1) continue;
    mascotStore[unknownToReplaceIdx].collegeName = firstFourWinnerName;
  }

  const collegeNames = mascotStore.map(m => m.collegeName);
  collegeNames.push(...matchHistory);

  return collegeNames;
}

export default function Home() {
  const [gameState, updateGameState] = useState<GameStateEnum>(GameStateEnum.Tournament);
  const [matchHistory, updateMatchHistory] = useState<string[]>([]);

  /**
   * Transition the game from one state to another.
   * @param upcomingGameState The game state we are transitioning to.
   * @param extraData Any additional data from the previous state required to transition to the new state.
   */
  function handleGameStateTransition(upcomingGameState: GameStateEnum, extraData?: ExtraData): void {  
    switch(upcomingGameState) {
      case GameStateEnum.Win:
        // If we don't have any match history from the tournament,
        // we can't initiate the winstate!
        if (!extraData?.matchHistory) {
          updateGameState(GameStateEnum.Unknown);
          return;
        }

        const updatedMatchHistory = formatMatchHistory(extraData.matchHistory);
        updateMatchHistory(updatedMatchHistory);
        break;
      default:
        updateGameState(GameStateEnum.Unknown);
        return;
    }

    updateGameState(upcomingGameState);
  }

  function generateGameComponent(): JSX.Element {
    switch(gameState) {
      case GameStateEnum.Menu:
        return (<MenuState />);
      case GameStateEnum.Tournament:
        return (
          <TournamentState 
            handleGameStateTransition={handleGameStateTransition}
          />
        );
      case GameStateEnum.Win:
        return (
          <WinState 
            matchHistory={matchHistory}
          />
        );
      default:
        return (<UnknownState />);
    }
  }

  const game = generateGameComponent();

  return (
    <main className={styles.main}>
      {game}
    </main>
  )
}
