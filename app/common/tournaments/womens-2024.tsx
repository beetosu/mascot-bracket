import BracketInfo from "../types/bracket-info";
import CollegeEnum from "../enums/college-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates from "../types/round-dates";
import Tournament from "../types/tournament";

const womens2024Bracket: BracketInfo[] = [
    {
        id: CollegeEnum.IncarnateWord,
        rank: 16
    },
    {
        id: CollegeEnum.SacredHeart,
        rank: 16
    },
    {
        id: CollegeEnum.BethuneCookman,
        rank: 16
    },
    {
        id: CollegeEnum.Presbyterian,
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
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11
    },
    {
        id: CollegeEnum.SouthCarolina,
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
        id: CollegeEnum.Davidson,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.Clemson,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.Chattanooga,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.Princeton,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.MurraySt,
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
        id: CollegeEnum.Albany,
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
        id: CollegeEnum.Gonzaga,
        rank: 5
    },
    {
        id: CollegeEnum.ClevelandSt,
        rank: 12
    },
    {
        id: CollegeEnum.Marquette,
        rank: 4
    },
    {
        id: CollegeEnum.GeorgiaSouthern,
        rank: 13
    },
    {
        id: CollegeEnum.UNLV,
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
        id: CollegeEnum.SouthDakota,
        rank: 14
    },
    {
        id: CollegeEnum.Washington,
        rank: 7
    },
    {
        id: CollegeEnum.Unknown,
        rank: 10
    },
    {
        id: CollegeEnum.Texas,
        rank: 2
    },
    {
        id: CollegeEnum.Lehigh,
        rank: 15
    },
    {
        id: CollegeEnum.Unknown,
        rank: 1
    },
    {
        id: CollegeEnum.WesternIllinois,
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
        id: CollegeEnum.BallState,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.CaliforniaBaptist,
        rank: 13
    },
    {
        id: CollegeEnum.Unknown,
        rank: 6
    },
    {
        id: CollegeEnum.MiddleTennessee,
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.Fairfield,
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
        id: CollegeEnum.UCIrvine,
        rank: 15
    },
    {
        id: CollegeEnum.Iowa,
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
        id: CollegeEnum.NorthTexas,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.StonyBrook,
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
        id: CollegeEnum.NorfolkSt,
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
        id: CollegeEnum.NorthernArizona,
        rank: 15
    }
];

const womens2024Rounds: RoundDates = {
    [TournamentRound.FirstFour]: "March 20-21",
    [TournamentRound.First]: "March 22-23",
    [TournamentRound.Second]: "March 24-25",
    [TournamentRound.Sixteen]: "March 29-30",
    [TournamentRound.Eight]: "March 31-April 1",
    [TournamentRound.FinalFour]: "April 5",
    [TournamentRound.Championship]: "April 7"
}

const womens2024: Tournament = {
    name: "Womens 2024 🏀",
    bracket: womens2024Bracket,
    roundDates: womens2024Rounds
}

export default womens2024;