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
        id: CollegeEnum.Southern,
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
        id: CollegeEnum.NorfolkSt,
        rank: 16
    },
    {
        id: CollegeEnum.OralRoberts,
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
        id: CollegeEnum.Purdue,
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
        id: CollegeEnum.Dayton,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.IndianaSt,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.Indiana,
        rank: 13
    },
    {
        id: CollegeEnum.Villanova,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11
    },
    {
        id: CollegeEnum.Clemson,
        rank: 3
    },
    {
        id: CollegeEnum.Akron,
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
        id: CollegeEnum.FAU,
        rank: 2
    },
    {
        id: CollegeEnum.MoreheadSt,
        rank: 15
    },
    {
        id: CollegeEnum.Arizona,
        rank: 1
    },
    {
        id: CollegeEnum.Marist,
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
        id: CollegeEnum.Princeton,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.UNCW,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.FortWayne,
        rank: 14
    },
    {
        id: CollegeEnum.Gonzaga,
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
        id: CollegeEnum.WeberSt,
        rank: 15
    },
    {
        id: CollegeEnum.Houston,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 3
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
        id: CollegeEnum.GrandCanyon,
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
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.Samford,
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
        id: CollegeEnum.Longwood,
        rank: 15
    },
    {
        id: CollegeEnum.Unknown,
        rank: 1
    },
    {
        id: CollegeEnum.Lipscomb,
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
        id: CollegeEnum.ColoradoSt,
        rank: 5
    },
    {
        id: CollegeEnum.Liberty,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.McNesseSt,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 3
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
        id: CollegeEnum.Colgate,
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