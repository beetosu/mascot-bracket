import TextObject from "./text-object"

type BracketTextObjects = {
    tournamentName: TextObject
    collegeNames: TextObject[],
    roundDates: TextObject[],
    firstFourRank: TextObject[]
}

export default BracketTextObjects;