import TextAlignEnum from "../enums/text-align-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates, { RoundsWithoutWinner } from "../types/round-dates";
import TextObject from "../types/text-object";
import { CANVAS_WIDTH } from "./canvas-builder";

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

    const roundTextObjects = validRounds.map(r => buildRoundDate(r, roundDates[r]));

    const mirrorRounds: RoundsWithoutWinner[] = [
        TournamentRound.First,
        TournamentRound.Second,
        TournamentRound.Sixteen,
        TournamentRound.Eight,
        TournamentRound.FinalFour
    ]
    roundTextObjects.push(...mirrorRounds.map(r => buildRoundDate(r, roundDates[r], true)))

    return roundTextObjects;
}

function buildRoundDate(roundEnum: TournamentRound, dates: string, isRight?: boolean): TextObject {
    return {
        text: dates,
        x: isRight ? CANVAS_WIDTH - generateX(roundEnum) : generateX(roundEnum),
        y: generateY(roundEnum),
        textAlign: TextAlignEnum.Center
    }
}

function generateX(roundEnum: TournamentRound) {
    switch (roundEnum) {
        case TournamentRound.First:
            return 62;
        case TournamentRound.Second:
            return 150;
        case TournamentRound.Sixteen:
            return 245;
        case TournamentRound.Eight:
            return 332;
        case TournamentRound.FinalFour:
            return 420;
        default:
            return CANVAS_WIDTH / 2;
    }
}

function generateY(roundEnum: TournamentRound) {
    switch (roundEnum) {
        case TournamentRound.FirstFour:
            return 591;
        case TournamentRound.Championship:
            return 300;
        default:
            return 55;
    }
}

export default generateRoundDates;