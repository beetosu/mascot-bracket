import TextAlignEnum from "../enums/text-align-enum";
import BracketInfo from "../types/bracket-info";
import TextObject from "../types/text-object";
import { determineFirstFourX, determineFirstFourY } from "./college-text-builder";

function generateFirstFourRankTextObjects(bracketInfo: BracketInfo[]): TextObject[] {
    const textObjects: TextObject[] = [];

    for (let i = 0; i < 8; i++) {
        textObjects.push(generateTextObject(bracketInfo[i].rank, i));
    }
    return textObjects
}

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