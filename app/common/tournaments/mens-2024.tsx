import BracketInfo from "../types/bracket-info";
import CollegeEnum from "../enums/college-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates from "../types/round-dates";
import Tournament from "../types/tournament";

const mens2024Bracket: BracketInfo[] = [
    {
        id: CollegeEnum.Merrimack,
        rank: 16
    },
    {
        id: CollegeEnum.NorfolkSt,
        rank: 16
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 0
    },
    {
        id: CollegeEnum.Unknown,
        rank: 8
    },
    {
        id: CollegeEnum.Unknown,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.McNesseSt,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.UCIrvine,
        rank: 13
    },
    {
        id: CollegeEnum.StMarys,
        rank: 6
    },
    {
        id: CollegeEnum.IndianaSt,
        rank: 11
    },
    {
        id: CollegeEnum.Alabama,
        rank: 3
    },
    {
        id: CollegeEnum.HighPoint,
        rank: 14
    },
    {
        id: CollegeEnum.WashingtonSt,
        rank: 7
    },
    {
        id: CollegeEnum.Unknown,
        rank: 10
    },
    {
        id: CollegeEnum.Unknown,
        rank: 2
    },
    {
        id: CollegeEnum.MoreheadSt,
        rank: 15
    },
    {
        id: CollegeEnum.Unknown,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 8
    },
    {
        id: CollegeEnum.Unknown,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.Richmond,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.AppalachianSt,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 2
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.Charleston,
        rank: 14
    },
    {
        id: CollegeEnum.Unknown,
        rank: 7
    },
    {
        id: CollegeEnum.Unknown,
        rank: 10
    },
    {
        id: CollegeEnum.Unknown,
        rank: 2
    },
    {
        id: CollegeEnum.EasternWashington,
        rank: 15
    },
    {
        id: CollegeEnum.UConn,
        rank: 1
    },
    {
        id: CollegeEnum.EasternKentucky,
        rank: 16
    },
    {
        id: CollegeEnum.Unknown,
        rank: 8
    },
    {
        id: CollegeEnum.Unknown,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.Samford,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.Yale,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.GrandCanyon,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.Oakland,
        rank: 14
    },
    {
        id: CollegeEnum.Unknown,
        rank: 7
    },
    {
        id: CollegeEnum.Unknown,
        rank: 10
    },
    {
        id: CollegeEnum.NorthCarolina,
        rank: 2
    },
    {
        id: CollegeEnum.Colgate,
        rank: 15
    },
    {
        id: CollegeEnum.Houston,
        rank: 1
    },
    {
        id: CollegeEnum.SamHouston,
        rank: 16
    },
    {
        id: CollegeEnum.UtahSt,
        rank: 8
    },
    {
        id: CollegeEnum.Unknown,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.Unknown,
        rank: 12,
        firstFour: 3
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.Akron,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.SouthFlorida,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.Vermont,
        rank: 14
    },
    {
        id: CollegeEnum.Unknown,
        rank: 7
    },
    {
        id: CollegeEnum.Unknown,
        rank: 10
    },
    {
        id: CollegeEnum.Unknown,
        rank: 2
    },
    {
        id: CollegeEnum.Quinnipiac,
        rank: 15
    }
];

const mens2024Rounds: RoundDates = {
    [TournamentRound.FirstFour]: "March 19-20",
    [TournamentRound.First]: "March 21-22",
    [TournamentRound.Second]: "March 23-24",
    [TournamentRound.Sixteen]: "March 28-29",
    [TournamentRound.Eight]: "March 30-31",
    [TournamentRound.FinalFour]: "April 6",
    [TournamentRound.Championship]: "April 8"
}

const mens2024: Tournament = {
    name: "Mens 2024 🏀",
    bracket: mens2024Bracket,
    roundDates: mens2024Rounds
}

export default mens2024;