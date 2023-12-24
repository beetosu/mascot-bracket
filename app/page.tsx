"use client";

import { useState } from 'react'
import styles from './page.module.css'
import TournamentState from './components/states/tournament-state/tournament-state';
import GameStateEnum from './common/enums/game-state-enum';
import WinState from './components/states/win-state/win-state';
import UnknownState from './components/states/unknown-state/unknown-state';
import MenuState from './components/states/menu-state/menu-state';
import mens2022 from './common/tournaments/mens-2022';
import BracketInfo from './common/types/bracket-info';
import CollegeEnum from './common/enums/college-enum';
import Tournament from './common/types/tournament';

export type MatchQueue = [BracketInfo, BracketInfo?][];
export type ExtraData = {
  matchHistory?: CollegeEnum[],
  tournament?: Tournament
}

/**
 * Rework the generated match history into the format the bracket expects
 * @param matchHistory The raw match history from the tournament stage
 * @returns A match history which looks like [first four], [first round,
 * where winners of first four replace "Unknown"], [second round], etc.
 */
function formatMatchHistory(matchHistory: CollegeEnum[], bracket: BracketInfo[]): CollegeEnum[] {
  // for the first four winners, add their names in the appropriate slots
  // in the mascot store (which here represents the first four and the first round)
  for (let i = 0; i < 4; i++) {
    const firstFourWinnerName = matchHistory.shift();
    const unknownToReplaceIdx = bracket.findIndex(m => m.firstFour === i);

    if (firstFourWinnerName === undefined || unknownToReplaceIdx === -1) continue;
    
    bracket[unknownToReplaceIdx].id = firstFourWinnerName;
  }

  const fullHistory = bracket.map(m => m.id);
  fullHistory.push(...matchHistory);

  return fullHistory;
}

export default function Home() {
  const [gameState, updateGameState] = useState<GameStateEnum>(GameStateEnum.Menu);
  const [matchHistory, updateMatchHistory] = useState<CollegeEnum[]>([]);
  const [tournament, selectTournament] = useState<Tournament>(mens2022);

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

        const updatedMatchHistory = formatMatchHistory(extraData.matchHistory, tournament.bracket);
        updateMatchHistory(updatedMatchHistory);
        break;
      case GameStateEnum.Tournament:
        // If we don't have bracket info,
        // we can't start the tournament!
        if (!extraData?.tournament) {
          updateGameState(GameStateEnum.Unknown);
          return;
        }
        selectTournament(extraData.tournament)
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
        return (
          <MenuState 
            handleGameStateTransition={handleGameStateTransition}
          />
        );
      case GameStateEnum.Tournament:
        return (
          <TournamentState 
            handleGameStateTransition={handleGameStateTransition}
            tournament={tournament}
          />
        );
      case GameStateEnum.Win:
        return (
          <WinState 
            matchHistory={matchHistory}
            tournament={tournament}
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
