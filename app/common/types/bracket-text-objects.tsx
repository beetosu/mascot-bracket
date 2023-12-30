import TextObject from "./text-object"

type BracketTextObjects = {
    tournamentName: TextObject
    collegeNames: TextObject[],
    roundDates: TextObject[]
}

export default BracketTextObjects;