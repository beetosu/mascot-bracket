"use client";

import { ExtraData } from '@/app/page';
import styles from './menu-state.module.css'
import GameStateEnum from '@/app/common/enums/game-state-enum';
import TournamentButton from '../../tournament-button/tournament-button';
import Tournament from '@/app/common/types/tournament';
import mens2024 from '@/app/common/tournaments/mens-2024';
import womens2024 from '@/app/common/tournaments/womens-2024';

type MenuStateProps = { 
  handleGameStateTransition: (upcomingGameState: GameStateEnum, extraData?: ExtraData) => void,
}

export default function MenuState({ handleGameStateTransition }: MenuStateProps) {
  function selectTournament(tournament: Tournament) {
    handleGameStateTransition(GameStateEnum.Tournament, { tournament });
  }

  const MENS_NAME = "Mens";
  const WOMENS_NAME = "Womens";

  return (
    <div className={styles.menuState}>
      <h1>🏀 March Mascots! 🏀</h1>
      <p>Create a printable bracket for the 2024 NCAA March Madness tournament based on the college&apos;s mascots!</p>
      <h2>Select Tournament:</h2>
      <div className={styles.buttons}>
        <TournamentButton 
          key={MENS_NAME}
          selectTournament={selectTournament}
          name={MENS_NAME}
          tournament={mens2024}
        />
        <TournamentButton 
          key={WOMENS_NAME}
          selectTournament={selectTournament}
          name={WOMENS_NAME}
          tournament={womens2024}
        />
      </div>
    </div>
  )
}
