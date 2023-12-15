import CollegeEnum from "./enums/college-enum"

type BracketInfo = {
    id: CollegeEnum
    rank: number,
    firstFour?: number
}

export default BracketInfo;