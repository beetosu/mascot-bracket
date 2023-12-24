import TournamentRound from "../enums/tournament-round-enum";

export type RoundsWithoutWinner = Exclude<TournamentRound, TournamentRound.Winner>;

type RoundDates = {
    [key in RoundsWithoutWinner]: string;
}

export default RoundDates;