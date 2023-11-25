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

const TEST_HISTORY = ['Gonzaga', 'Georgia St', 'Boise St', 'Memphis', 'UConn', 'New Mexico St', 'Arkansas', 
'Vermont', 'Alabama', 'Rutgers / Notre Dame', 'Texas Tech', 'Montana St', 'Michigan St', 'Davidson', 'Duke', 
'Cal St Fullerton', 'Baylor', 'Norfolk St', 'North Carolina', 'Marquette', "Saint Mary's", 'Wyoming / Indiana', 
'UCLA', 'Akron', 'Texas', 'Virginia Tech', 'Purdue', 'Yale', 'Murray St', 'San Francisco', 'Kentucky', "St Peter's", 
'Arizona', 'Wright St / Bryant', 'Seton Hall', 'TCU', 'Houston', 'UAB', 'Illinois', 'Chattanooga', 'Colorado St', 'Michigan', 
'Tennessee', 'Longwood', 'Ohio St', 'Loyola Chicago', 'Villanova', 'Delaware', 'Kansas', 'Texas Southern / Texas A&M CC', 
'San Diego St', 'Creighton', 'Iowa', 'Richmond', 'Providence', 'S Dakota St', 'LSU', 'Iowa St', 'Wisconsin', 'Colgate', 
'USC', 'Miami (FL)', 'Auburn', 'Jacksonville St.', 'Gonzaga', 'Boise St', 'UConn', 'Arkansas', 'Alabama', 'Texas Tech', 
'Michigan St', 'Duke', 'Baylor', 'North Carolina', "Saint Mary's", 'UCLA', 'Texas', 'Purdue', 'Murray St', 'Kentucky', 
'Arizona', 'Seton Hall', 'Houston', 'Illinois', 'Colorado St', 'Tennessee', 'Ohio St', 'Villanova', 'Kansas', 'San Diego St',
'Iowa', 'Providence', 'LSU', 'Wisconsin', 'USC', 'Auburn', 'Gonzaga', 'UConn', 'Alabama', 'Michigan St', 'Baylor', "Saint Mary's",
'Texas', 'Murray St', 'Arizona', 'Houston', 'Colorado St', 'Ohio St', 'Kansas', 'Iowa', 'LSU', 'USC', 'Gonzaga', 'Alabama',
'Baylor', 'Texas', 'Arizona', 'Colorado St', 'Kansas', 'LSU', 'Gonzaga', 'Baylor', 'Arizona', 'Kansas', 'Gonzaga', 'Arizona', 'Gonzaga'];

export default function Home() {
  const [gameState, updateGameState] = useState<GameStateEnum>(GameStateEnum.Win);
  const [matchHistory, updateMatchHistory] = useState<string[]>(TEST_HISTORY); //MascotStore.map(m => m.collegeName));

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

        matchHistory.push(...extraData.matchHistory);
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
