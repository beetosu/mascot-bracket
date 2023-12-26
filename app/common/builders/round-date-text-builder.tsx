import TextAlignEnum from "../enums/text-align-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates, { RoundsWithoutWinner } from "../types/round-dates";
import TextObject from "../types/text-object";

function generateRoundDates(roundDates: RoundDates): TextObject[] {
    const validRounds: RoundsWithoutWinner[] = [
        TournamentRound.FirstFour,
        TournamentRound.First,
        TournamentRound.Second,
        TournamentRound.Sixteen,
        TournamentRound.Eight,
        TournamentRound.FinalFour,
        TournamentRound.Championship
    ]

    return validRounds.map(r => buildRoundDate(r, roundDates[r]))
}

function buildRoundDate(roundEnum: TournamentRound, dates: string): TextObject {
    return {
        text: dates,
        x: generateX(roundEnum),
        y: generateY(roundEnum),
        textAlign: TextAlignEnum.Center
    }
}

function generateX(roundEnum: TournamentRound) {
    switch (roundEnum) {
        case TournamentRound.FirstFour:
            return 1918 / 2
        default:
            return 20;
    }
}

function generateY(roundEnum: TournamentRound) {
    const isFirstFour = roundEnum === TournamentRound.FirstFour;
    return isFirstFour ? 1250 : 115
}

export default generateRoundDates;