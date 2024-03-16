import TournamentRound, { determineRound, getNextRound } from '@/app/common/enums/tournament-round-enum';
import TextObject from '../types/text-object';
import TextAlignEnum from '../enums/text-align-enum';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './canvas-builder';

/**
 * Build a list of text objects to display on the bracket canvas.
 * @param matchHistory A list of college names based on their placements in the tournament
 * @returns A list of objects holding the college name, and their coordinates.
 */
function generateCollegeTextObjects(matchHistory: string[]): TextObject[] {
    const collegeTextObjects: TextObject[] = [];

    matchHistory.forEach((college, idx) => {
        collegeTextObjects.push({
            text: college,
            x: determineX(idx),
            y: determineY(idx),
            textAlign: determineTextAlign(idx)
        });
    });
    return collegeTextObjects;
}

/**
 * Determine the x value of a college on the bracket.
 * @param idx the index of the college in the match history.
 * @returns the x coordinate associated with the college.
 */
function determineX(idx: number): number {
    const currentRound = determineRound(idx);

    if (currentRound === TournamentRound.FirstFour) return determineFirstFourX(idx);

    // x here is either xStep, or the width of the bracket
    // minus xStep, based on whether the college is on the left
    // or right hand side.
    let x = getXStep(currentRound);
    if (isRight(idx)) {
        x = CANVAS_WIDTH - x;
    }

    return x;
}

/**
 * Determine the y value of a college on the bracket.
 * @param idx the index of the college in the match history.
 * @returns the y coordinate associated with the college.
 */
function determineY(idx: number): number {
    const currentRound = determineRound(idx);
    const nextRound = getNextRound(currentRound);

    if (!nextRound) return getYStart(currentRound);
    if (currentRound === TournamentRound.FirstFour) return determineFirstFourY(idx);

    const midpoint = (nextRound - currentRound) / 2;
    const quarterpoint = midpoint / 2;
    // We want to wrap around at the midpoint, since past that the college
    // will return to to the top, but on the other side of the bracket.
    const relativePosition = (idx - currentRound) % midpoint;

    // The formula here is:
    // y = start + step (+ gap if any)
    const yStep = relativePosition * getYStep(currentRound);
    let y = getYStart(currentRound) + yStep;
    // If the college is in the bottom half of the bracket (which would be
    // the 2nd or 4th quartile of the round), we should account for the gap
    // between the matches.
    if (relativePosition !== relativePosition % quarterpoint) {
        y += getYGap(currentRound)
    }

    return y;
}

/**
 * Determine the appropriate x value for a first four college.
 * @param idx The index of the college in the match history. 
 * @returns a number representing the x value.
 */
export function determineFirstFourX(idx: number): number {
    switch (Math.floor(idx / 2)) {
    case 0:
        return 280;
    case 1:
        return 395;
    case 2:
        return 575; 
    default:
        return 690;
    }
}

/**
 * Determine the appropriate y value for a first four college.
 * @param idx The index of the college in the match history. 
 * @returns a number representing the y value.
 */
export function determineFirstFourY(idx: number): number {
    let y = 659;
    const yStep = 15;

    // if the college is on the bottom of the bracket, add the step.
    if (idx % 2 === 1) {
    y += yStep;
    }
    return y;
}

/**
 * Determine whether the college should be on the left or right hand side of the bracket.
 * @param idx The index of the college in the match history.
 * @returns A boolean representing if the college should be on the right of the bracket.
 */
function determineTextAlign(idx: number): TextAlignEnum {
    const currentRound = determineRound(idx);
    const nextRound = getNextRound(currentRound);

    if (!nextRound) return TextAlignEnum.Center

    return isRight(idx) ? TextAlignEnum.Right : TextAlignEnum.Left;
}

/**
 * Determine whether the college should be on the left or right hand side of the bracket.
 * @param idx The index of the college in the match history.
 * @param currentRound The round the college is currently in.
 * @returns A boolean representing if the college should be on the right of the bracket.
 */
function isRight(idx: number): boolean {
    const currentRound = determineRound(idx);
    const nextRound = getNextRound(currentRound);

    // Winner should be centered.
    if (!nextRound) return false;

    return idx >= nextRound - ((nextRound - currentRound) / 2);
}

/**
 * Map the round enum to a xStep value.
 * @param currentRound The round we want to find the xStep for.
 * @returns The xStep associated with the round.
 */
function getXStep(currentRound: TournamentRound): number {
    switch (currentRound) {
        case TournamentRound.First:
            return 31;
        case TournamentRound.Second:
            return 112;
        case TournamentRound.Sixteen:
            return 205;
        case TournamentRound.Eight:
            return 295;
        case TournamentRound.FinalFour:
            return 385;
        case TournamentRound.Championship:
            return 350;
        default:
            return CANVAS_WIDTH / 2;
    }
}
  
/**
 * Map the round enum to a yStart value.
 * @param currentRound The round we want to find the yStart for.
 * @returns The yStart associated with the round.
 */
function getYStart(currentRound: TournamentRound): number {
    switch (currentRound) {
        case TournamentRound.First:
            return 115;
        case TournamentRound.Second:
            return 123;
        case TournamentRound.Sixteen:
            return 140;
        case TournamentRound.Eight:
            return 170;
        case TournamentRound.FinalFour:
            return 230;
        default:
            return (CANVAS_HEIGHT / 2) - 15;
    }
  }
  
/**
 * Map the round enum to a yStep value.
 * @param currentRound The round we want to find the yStep for.
 * @returns The yStep associated with the round.
 */
function getYStep(currentRound: TournamentRound): number {
    switch (currentRound) {
        case TournamentRound.First:
            return 15.25;
        case TournamentRound.Second:
            return 30.25;
        case TournamentRound.Sixteen:
            return 60;
        case TournamentRound.Eight:
            return 120;
        case TournamentRound.FinalFour:
            return 260;
        case TournamentRound.Championship:
            return 0;
        default:
            return 0;
    }
}
  
/**
 * Map the round enum to a yGap value.
 * @param currentRound The round we want to find the yGap for.
 * @returns The yGap associated with the round.
 */
export function getYGap(currentRound: TournamentRound): number {
    switch (currentRound) {
        case TournamentRound.First:
            return 15;
        case TournamentRound.Second:
            return 17;
        case TournamentRound.Sixteen:
            return 19;
        case TournamentRound.Eight:
            return 19;
        default:
            return 0;
    }
}

export default generateCollegeTextObjects;