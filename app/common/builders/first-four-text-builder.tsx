import TextAlignEnum from "../enums/text-align-enum";
import BracketInfo from "../types/bracket-info";
import TextObject from "../types/text-object";
import { determineFirstFourX, determineFirstFourY } from "./college-text-builder";

/**
 * Generate text for the rankings next to the names of the teams in the first four round.
 * @param bracketInfo The 8 teams playing in the first four.
 * @returns Text objects representing the rank of each of the first four teams.
 */
function generateFirstFourRankTextObjects(bracketInfo: BracketInfo[]): TextObject[] {
    return bracketInfo.map((bracketInfo, idx) => generateTextObject(bracketInfo.rank, idx));
}

/**
 * Generate a text object for a ranking.
 * @param rank The rank of the associated team.
 * @param idx The order of the specific team in the bracket.
 * @returns A text object representing the rank of the team.
 */
function generateTextObject(rank: number, idx: number): TextObject {
    const rankingXOffset = idx >= 4 ? 15 : -15;
    const x = determineFirstFourX(idx) + rankingXOffset;

    return {
        text: rank.toString(),
        x: x,
        y: determineFirstFourY(idx),
        textAlign: idx >= 4 ? TextAlignEnum.Right : TextAlignEnum.Left
    }
}

export default generateFirstFourRankTextObjects;