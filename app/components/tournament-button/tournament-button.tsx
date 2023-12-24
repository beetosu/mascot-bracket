import styles from "./tournament-button.module.css";
import Tournament from "@/app/common/types/tournament";

type SelectTournamentMethod = (tournament: Tournament) => void;

type TournamentButtonProps = {
    selectTournament: SelectTournamentMethod,
    name: string,
    tournament: Tournament
}

export default function TournamentButton({ selectTournament, name, tournament }: TournamentButtonProps) {

    function handleTournamentSelection() { selectTournament(tournament) };

    return (
        <button className={styles.tournamentButton} onClick={handleTournamentSelection}>{name}</button>
    )
}