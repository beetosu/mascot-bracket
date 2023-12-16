import BracketInfo from "@/app/common/bracket-info"
import styles from "./tournament-button.module.css";

type SelectTournamentMethod = (bracket: BracketInfo[]) => void;

type TournamentButtonProps = {
    selectTournament: SelectTournamentMethod,
    name: string,
    bracket: BracketInfo[]
}

export default function TournamentButton({ selectTournament, name, bracket }: TournamentButtonProps) {

    function handleTournamentSelection() { selectTournament(bracket) };

    return (
        <button className={styles.tournamentButton} onClick={handleTournamentSelection}>{name}</button>
    )
}