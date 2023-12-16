"use client";

import { ExtraData } from '@/app/page';
import styles from './menu-state.module.css'
import GameStateEnum from '@/app/common/enums/game-state-enum';
import BracketInfo from '@/app/common/bracket-info';
import TournamentButton from '../../tournament-button/tournament-button';
import mens2022 from '@/app/common/tournaments/mens-2022';

type MenuStateProps = { 
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void,
}

export default function MenuState({ handleGameStateTransition }: MenuStateProps) {
  function selectTournament(bracket: BracketInfo[]) {
    handleGameStateTransition(GameStateEnum.Tournament, { bracket });
  }

  return (
    <div className={styles.menuState}>
      <h1>🏀 March Mascots! 🏀</h1>
      <p>Create a printable bracket for the 2024 NCAA March Madness based on the college's mascots!</p>
      <h2>Select Tournament:</h2>
      <div className={styles.buttons}>
        <TournamentButton 
          key={"Mens"}
          selectTournament={selectTournament}
          name={"Mens"}
          bracket={mens2022}
        />
        <TournamentButton 
          key={"Womens"}
          selectTournament={selectTournament}
          name={"Womens"}
          bracket={mens2022}
        />
      </div>
    </div>
  )
}
