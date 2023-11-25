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

export default function Home() {
  const [gameState, updateGameState] = useState<GameStateEnum>(GameStateEnum.Tournament);
  const [matchHistory, updateMatchHistory] = useState<string[]>(MascotStore.map(m => m.collegeName));

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

        matchHistory.push(...extraData.matchHistory)
        updateMatchHistory(matchHistory);
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
