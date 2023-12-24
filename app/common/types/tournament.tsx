import BracketInfo from "./bracket-info";
import RoundDates from "./round-dates";

type Tournament = {
    name: string;
    bracket: BracketInfo[];
    roundDates: RoundDates;
}

export default Tournament;