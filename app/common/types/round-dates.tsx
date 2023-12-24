import TournamentRound from "../enums/tournament-round-enum";

type RoundsWithoutWinner = Exclude<TournamentRound, TournamentRound.Winner>;

type RoundDates = {
    [key in RoundsWithoutWinner]: string;
}

export default RoundDates;