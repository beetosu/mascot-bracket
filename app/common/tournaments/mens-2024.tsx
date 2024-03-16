import BracketInfo from "../types/bracket-info";
import CollegeEnum from "../enums/college-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates from "../types/round-dates";
import Tournament from "../types/tournament";

const mens2024Bracket: BracketInfo[] = [
    {
        id: CollegeEnum.Grambling,
        rank: 16
    },
    {
        id: CollegeEnum.MontanaSt,
        rank: 16
    },
    {
        id: CollegeEnum.Oklahoma,
        rank: 11
    },
    {
        id: CollegeEnum.Virginia,
        rank: 11
    },
    {
        id: CollegeEnum.Wagner,
        rank: 16
    },
    {
        id: CollegeEnum.Howard,
        rank: 16
    },
    {
        id: CollegeEnum.StJohns,
        rank: 11
    },
    {
        id: CollegeEnum.NewMexico,
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
        id: CollegeEnum.BoiseSt,
        rank: 8
    },
    {
        id: CollegeEnum.MississippiSt,
        rank: 9
    },
    {
        id: CollegeEnum.SanDiegoSt,
        rank: 5
    },
    {
        id: CollegeEnum.McNesseSt,
        rank: 12
    },
    {
        id: CollegeEnum.Kentucky,
        rank: 4
    },
    {
        id: CollegeEnum.Vermont,
        rank: 13
    },
    {
        id: CollegeEnum.WashingtonSt,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 1
    },
    {
        id: CollegeEnum.Creighton,
        rank: 3
    },
    {
        id: CollegeEnum.MoreheadSt,
        rank: 14
    },
    {
        id: CollegeEnum.UtahSt,
        rank: 7
    },
    {
        id: CollegeEnum.TexasAM,
        rank: 10
    },
    {
        id: CollegeEnum.IowaSt,
        rank: 2
    },
    {
        id: CollegeEnum.SDakotaSt,
        rank: 15
    },
    {
        id: CollegeEnum.NorthCarolina,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 2
    },
    {
        id: CollegeEnum.Northwestern,
        rank: 8
    },
    {
        id: CollegeEnum.Texas,
        rank: 9
    },
    {
        id: CollegeEnum.BYU,
        rank: 5
    },
    {
        id: CollegeEnum.GrandCanyon,
        rank: 12
    },
    {
        id: CollegeEnum.Alabama,
        rank: 4
    },
    {
        id: CollegeEnum.Samford,
        rank: 13
    },
    {
        id: CollegeEnum.StMarys,
        rank: 6
    },
    {
        id: CollegeEnum.Drake,
        rank: 11
    },
    {
        id: CollegeEnum.Baylor,
        rank: 3
    },
    {
        id: CollegeEnum.Oakland,
        rank: 14
    },
    {
        id: CollegeEnum.Nevada,
        rank: 7
    },
    {
        id: CollegeEnum.MichiganSt,
        rank: 10
    },
    {
        id: CollegeEnum.Arizona,
        rank: 2
    },
    {
        id: CollegeEnum.Longwood,
        rank: 15
    },
    {
        id: CollegeEnum.Houston,
        rank: 1
    },
    {
        id: CollegeEnum.UCDavis,
        rank: 16
    },
    {
        id: CollegeEnum.FloridaAtlantic,
        rank: 8
    },
    {
        id: CollegeEnum.ColoradoSt,
        rank: 9
    },
    {
        id: CollegeEnum.Wisconsin,
        rank: 5
    },
    {
        id: CollegeEnum.SouthFlorida,
        rank: 12
    },
    {
        id: CollegeEnum.Auburn,
        rank: 4
    },
    {
        id: CollegeEnum.VCU,
        rank: 13
    },
    {
        id: CollegeEnum.Florida,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 2
    },
    {
        id: CollegeEnum.Illinois,
        rank: 3
    },
    {
        id: CollegeEnum.Akron,
        rank: 14
    },
    {
        id: CollegeEnum.Gonzaga,
        rank: 7
    },
    {
        id: CollegeEnum.TCU,
        rank: 10
    },
    {
        id: CollegeEnum.Marquette,
        rank: 2
    },
    {
        id: CollegeEnum.WesternKentucky,
        rank: 15
    },
    {
        id: CollegeEnum.UConn,
        rank: 1
    },
    {
        id: CollegeEnum.Stetson,
        rank: 16
    },
    {
        id: CollegeEnum.Clemson,
        rank: 8
    },
    {
        id: CollegeEnum.Dayton,
        rank: 9
    },
    {
        id: CollegeEnum.SouthCarolina,
        rank: 5
    },
    {
        id: CollegeEnum.Princeton,
        rank: 12
    },
    {
        id: CollegeEnum.Kansas,
        rank: 4
    },
    {
        id: CollegeEnum.Charleston,
        rank: 13
    },
    {
        id: CollegeEnum.TexasTech,
        rank: 6
    },
    {
        id: CollegeEnum.JamesMadison,
        rank: 11
    },
    {
        id: CollegeEnum.Duke,
        rank: 3
    },
    {
        id: CollegeEnum.Colgate,
        rank: 14
    },
    {
        id: CollegeEnum.Nebraska,
        rank: 7
    },
    {
        id: CollegeEnum.Colorado,
        rank: 10
    },
    {
        id: CollegeEnum.Tennessee,
        rank: 2
    },
    {
        id: CollegeEnum.Fairfield,
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