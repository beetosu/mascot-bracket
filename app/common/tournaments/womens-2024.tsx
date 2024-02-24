import BracketInfo from "../types/bracket-info";
import CollegeEnum from "../enums/college-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates from "../types/round-dates";
import Tournament from "../types/tournament";

const womens2024Bracket: BracketInfo[] = [
    {
        id: CollegeEnum.HighPoint,
        rank: 16
    },
    {
        id: CollegeEnum.EasternIllinois,
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
        id: CollegeEnum.SacredHeart,
        rank: 16
    },
    {
        id: CollegeEnum.HolyCross,
        rank: 16
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
        id: CollegeEnum.Unknown,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.SDakotaSt,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.Fairfield,
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
        id: CollegeEnum.VirginiaTech,
        rank: 3
    },
    {
        id: CollegeEnum.Marshall,
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
        id: CollegeEnum.Temple,
        rank: 15
    },
    {
        id: CollegeEnum.Unknown,
        rank: 1
    },
    {
        id: CollegeEnum.NorfolkSt,
        rank: 16
    },
    {
        id: CollegeEnum.Unknown,
        rank: 8
    },
    {
        id: CollegeEnum.Princeton,
        rank: 9
    },
    {
        id: CollegeEnum.Unknown,
        rank: 5
    },
    {
        id: CollegeEnum.FloridaGulfCoast,
        rank: 12
    },
    {
        id: CollegeEnum.Unknown,
        rank: 4
    },
    {
        id: CollegeEnum.ClevelandSt,
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
        id: CollegeEnum.UConn,
        rank: 3
    },
    {
        id: CollegeEnum.Chattanooga,
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
        id: CollegeEnum.JacksonSt,
        rank: 15
    },
    {
        id: CollegeEnum.Stanford,
        rank: 1
    },
    {
        id: CollegeEnum.Lamar,
        rank: 16
    },
    {
        id: CollegeEnum.UNLV,
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
        id: CollegeEnum.Drake,
        rank: 12
    },
    {
        id: CollegeEnum.Gonzaga,
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
        rank: 11
    },
    {
        id: CollegeEnum.Unknown,
        rank: 3
    },
    {
        id: CollegeEnum.GrandCanyon,
        rank: 14
    },
    {
        id: CollegeEnum.Unknown,
        rank: 7
    },
    {
        id: CollegeEnum.MiddleTennessee,
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
        id: CollegeEnum.OhioSt,
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
        id: CollegeEnum.Miami,
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
        id: CollegeEnum.BallState,
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
        id: CollegeEnum.EasternWashington,
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
        id: CollegeEnum.JacksonSt,
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