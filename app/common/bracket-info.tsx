import CollegeEnum from "./college-enum"

type BracketInfo = {
    id: CollegeEnum
    rank: number,
    firstFour?: number
}

export default BracketInfo;