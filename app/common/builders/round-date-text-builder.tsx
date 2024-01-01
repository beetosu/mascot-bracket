import TextAlignEnum from "../enums/text-align-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates, { RoundsWithoutWinner } from "../types/round-dates";
import TextObject from "../types/text-object";
import { CANVAS_WIDTH } from "./canvas-builder";

/**
 * Create text objects for the dates specific tournament rounds are happening.
 * @param roundDates An object that maps tournament rounds to dates (i.e. "April 4", "March 18-19").
 * @returns Text objects representing the dates specific rounds are being played.
 */
function generateRoundDates(roundDates: RoundDates): TextObject[] {
    // "Winner" doesn't have an associated date, so we exclude it intentionally.
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

    // These are the rounds displayed at the top, which are mirrored. Because of this, we
    // want to make more text objects on the right hand side for them.
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

/**
 * Create a text object for a round date.
 * @param roundEnum The associated tournament round.
 * @param dateString The dates we want to display for the round.
 * @param isRight Whether we want to draw the string on the right hand side of the bracket.
 * @returns A text object representing the dates a specific round is being held.
 */
function buildRoundDate(roundEnum: TournamentRound, dateString: string, isRight?: boolean): TextObject {
    return {
        text: dateString,
        x: isRight ? CANVAS_WIDTH - generateX(roundEnum) : generateX(roundEnum),
        y: generateY(roundEnum),
        textAlign: TextAlignEnum.Center
    }
}

/**
 * Determine the x value of a round date, based on the round.
 * @param roundEnum The associated tounament round.
 * @returns An x value in which we should draw the round date.
 */
function generateX(roundEnum: TournamentRound): number {
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

/**
 * Determine the y value of a round date, based on the round.
 * @param roundEnum The associated tounament round.
 * @returns A y value in which we should draw the round date.
 */
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