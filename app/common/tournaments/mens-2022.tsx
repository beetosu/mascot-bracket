import BracketInfo from "../types/bracket-info";
import CollegeEnum from "../enums/college-enum";
import TournamentRound from "../enums/tournament-round-enum";
import RoundDates from "../types/round-dates";
import Tournament from "../types/tournament";

const mens2022Bracket: BracketInfo[] = [
    {
        id: CollegeEnum.TexasSouthern,
        rank: 16
    },
    {
        id: CollegeEnum.TexasAMCC,
        rank: 16
    },
    {
        id: CollegeEnum.Wyoming,
        rank: 12
    },
    {
        id: CollegeEnum.Indiana,
        rank: 12
    },
    {
        id: CollegeEnum.WrightSt,
        rank: 16
    },
    {
        id: CollegeEnum.Bryant,
        rank: 16
    },
    {
        id: CollegeEnum.Rutgers,
        rank: 11
    },
    {
        id: CollegeEnum.NotreDame,
        rank: 11
    },
    {
        id: CollegeEnum.Gonzaga,
        rank: 1
    },
    {
        id: CollegeEnum.GeorgiaSt,
        rank: 16
    },
    {
        id: CollegeEnum.BoiseSt,
        rank: 8
    },
    {
        id: CollegeEnum.Memphis,
        rank: 9
    },
    {
        id: CollegeEnum.UConn,
        rank: 5
    },
    {
        id: CollegeEnum.NewMexicoSt,
        rank: 12
    },
    {
        id: CollegeEnum.Arkansas,
        rank: 4
    },
    {
        id: CollegeEnum.Vermont,
        rank: 13
    },
    {
        id: CollegeEnum.Alabama,
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        rank: 11,
        firstFour: 3
    },
    {
        id: CollegeEnum.TexasTech,
        rank: 3
    },
    {
        id: CollegeEnum.MontanaSt,
        rank: 14
    },
    {
        id: CollegeEnum.MichiganSt,
        rank: 7
    },
    {
        id: CollegeEnum.Davidson,
        rank: 10
    },
    {
        id: CollegeEnum.Duke,
        rank: 2
    },
    {
        id: CollegeEnum.CSFullerton,
        rank: 15
    },
    {
        id: CollegeEnum.Baylor,
        rank: 1
    },
    {
        id: CollegeEnum.NorfolkSt,
        rank: 16
    },
    {
        id: CollegeEnum.NorthCarolina,
        rank: 8
    },
    {
        id: CollegeEnum.Marquette,
        rank: 9
    },
    {
        id: CollegeEnum.StMarys,
        rank: 5
    },
    {
        id: CollegeEnum.Unknown,
        rank: 12,
        firstFour: 1
    },
    {
        id: CollegeEnum.UCLA,
        rank: 4
    },
    {
        id: CollegeEnum.Akron,
        rank: 13
    },
    {
        id: CollegeEnum.Texas,
        rank: 6
    },
    {
        id: CollegeEnum.VirginiaTech,
        rank: 11
    },
    {
        id: CollegeEnum.Purdue,
        rank: 3
    },
    {
        id: CollegeEnum.Yale,
        rank: 14
    },
    {
        id: CollegeEnum.MurraySt,
        rank: 7
    },
    {
        id: CollegeEnum.SanFrancisco,
        rank: 10
    },
    {
        id: CollegeEnum.Kentucky,
        rank: 2
    },
    {
        id: CollegeEnum.StPeters,
        rank: 15
    },
    {
        id: CollegeEnum.Arizona,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 2
    },
    {
        id: CollegeEnum.SetonHall,
        rank: 8
    },
    {
        id: CollegeEnum.TCU,
        rank: 9
    },
    {
        id: CollegeEnum.Houston,
        rank: 5
    },
    {
        id: CollegeEnum.UAB,
        rank: 12
    },
    {
        id: CollegeEnum.Illinois,
        rank: 4
    },
    {
        id: CollegeEnum.Chattanooga,
        rank: 13
    },
    {
        id: CollegeEnum.ColoradoSt,
        rank: 6
    },
    {
        id: CollegeEnum.Michigan,
        rank: 11
    },
    {
        id: CollegeEnum.Tennessee,
        rank: 3
    },
    {
        id: CollegeEnum.Longwood,
        rank: 14
    },
    {
        id: CollegeEnum.OhioSt,
        rank: 7
    },
    {
        id: CollegeEnum.LoyolaChicago,
        rank: 10
    },
    {
        id: CollegeEnum.Villanova,
        rank: 2
    },
    {
        id: CollegeEnum.Delaware,
        rank: 15
    },
    {
        id: CollegeEnum.Kansas,
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        rank: 16,
        firstFour: 0
    },
    {
        id: CollegeEnum.SanDiegoSt,
        rank: 8
    },
    {
        id: CollegeEnum.Creighton,
        rank: 9
    },
    {
        id: CollegeEnum.Iowa,
        rank: 5
    },
    {
        id: CollegeEnum.Richmond,
        rank: 12
    },
    {
        id: CollegeEnum.Providence,
        rank: 4
    },
    {
        id: CollegeEnum.SDakotaSt,
        rank: 13
    },
    {
        id: CollegeEnum.LSU,
        rank: 6
    },
    {
        id: CollegeEnum.IowaSt,
        rank: 11
    },
    {
        id: CollegeEnum.Wisconsin,
        rank: 3
    },
    {
        id: CollegeEnum.Colgate,
        rank: 14
    },
    {
        id: CollegeEnum.USC,
        rank: 7
    },
    {
        id: CollegeEnum.Miami,
        rank: 10
    },
    {
        id: CollegeEnum.Auburn,
        rank: 2
    },
    {
        id: CollegeEnum.JacksonvilleSt,
        rank: 15
    }
];

const mens2022Rounds: RoundDates = {
    [TournamentRound.FirstFour]: "March 15-16",
    [TournamentRound.First]: "March 17-19",
    [TournamentRound.Second]: "March 18-20",
    [TournamentRound.Sixteen]: "March 24-26",
    [TournamentRound.Eight]: "March 25-27",
    [TournamentRound.FinalFour]: "April 2",
    [TournamentRound.Championship]: "April 4"
}

const mens2022: Tournament = {
    name: "Men's 2022",
    bracket: mens2022Bracket,
    roundDates: mens2022Rounds
}

export default mens2022;