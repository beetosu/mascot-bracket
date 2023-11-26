import CollegeEnum from "./college-enum"

export type MascotData = {
    id: CollegeEnum
    collegeName: string,
    mascotName: string,
    imgSrc: string,
    rank: number,
    firstFour?: number
}

const MascotStore: MascotData[] = [
    {
        id: CollegeEnum.TexasSouthern,
        collegeName: 'Texas Southern',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.TexasAMCC,
        collegeName: 'Texas A&M CC',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.Wyoming,
        collegeName: 'Wyoming',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg',
        rank: 12
    },
    {
        id: CollegeEnum.Indiana,
        collegeName: 'Indiana',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg',
        rank: 12
    },
    {
        id: CollegeEnum.WrightSt,
        collegeName: 'WrightSt',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.Indiana,
        collegeName: 'Indiana',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.Rutgers,
        collegeName: 'Rutgers',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg',
        rank: 11
    },
    {
        id: CollegeEnum.NotreDame,
        collegeName: 'NotreDame',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg',
        rank: 11
    },
    {
        id: CollegeEnum.Gonzaga,
        collegeName: 'Gonzaga',
        mascotName: 'Spike the Bulldog',
        imgSrc: 'gonzaga.jpg',
        rank: 1
    },
    {
        id: CollegeEnum.GeorgiaSt,
        collegeName: 'Georgia St',
        mascotName: 'Pounce',
        imgSrc: 'georgiastate.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.BoiseSt,
        collegeName: 'Boise St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 8
    },
    {
        id: CollegeEnum.Memphis,
        collegeName: 'Memphis',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 9
    },
    {
        id: CollegeEnum.UConn,
        collegeName: 'UConn',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 5
    },
    {
        id: CollegeEnum.NewMexicoSt,
        collegeName: 'New Mexico St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 12
    },
    {
        id: CollegeEnum.Arkansas,
        collegeName: 'Arkansas',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 4
    },
    {
        id: CollegeEnum.Vermont,
        collegeName: 'Vermont',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 13
    },
    {
        id: CollegeEnum.Alabama,
        collegeName: 'Alabama',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 6
    },
    {
        id: CollegeEnum.Unknown,
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'gonzaga.jpg',
        rank: 11,
        firstFour: 3
    },
    {
        id: CollegeEnum.TexasTech,
        collegeName: 'Texas Tech',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 3
    },
    {
        id: CollegeEnum.MontanaSt,
        collegeName: 'Montana St',
        mascotName: 'Fake Mascot / Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 14
    },
    {
        id: CollegeEnum.MichiganSt,
        collegeName: 'Michigan St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 7
    },
    {
        id: CollegeEnum.Davidson,
        collegeName: 'Davidson',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 10
    },
    {
        id: CollegeEnum.Duke,
        collegeName: 'Duke',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 2
    },
    {
        id: CollegeEnum.CSFullerton,
        collegeName: 'Cal St Fullerton',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 15
    },
    {
        id: CollegeEnum.Baylor,
        collegeName: 'Baylor',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 1
    },
    {
        id: CollegeEnum.NorfolkSt,
        collegeName: 'Norfolk St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 16
    },
    {
        id: CollegeEnum.NorthCarolina,
        collegeName: 'North Carolina',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 8
    },
    {
        id: CollegeEnum.Marquette,
        collegeName: 'Marquette',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 9
    },
    {
        id: CollegeEnum.StMarys,
        collegeName: 'Saint Mary\'s',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 5
    },
    {
        id: CollegeEnum.Unknown,
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'georgiastate.jpg',
        rank: 12,
        firstFour: 1
    },
    {
        id: CollegeEnum.UCLA,
        collegeName: 'UCLA',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 4
    },
    {
        id: CollegeEnum.Akron,
        collegeName: 'Akron',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 13
    },
    {
        id: CollegeEnum.Texas,
        collegeName: 'Texas',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 6
    },
    {
        id: CollegeEnum.VirginiaTech,
        collegeName: 'Virginia Tech',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 11
    },
    {
        id: CollegeEnum.Purdue,
        collegeName: 'Purdue',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 3
    },
    {
        id: CollegeEnum.Yale,
        collegeName: 'Yale',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 14
    },
    {
        id: CollegeEnum.MurraySt,
        collegeName: 'Murray St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 7
    },
    {
        id: CollegeEnum.SanFrancisco,
        collegeName: 'San Francisco',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 10
    },
    {
        id: CollegeEnum.Kentucky,
        collegeName: 'Kentucky',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 2
    },
    {
        id: CollegeEnum.StPeters,
        collegeName: 'St Peter\'s',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 15
    },
    {
        id: CollegeEnum.Arizona,
        collegeName: 'Arizona',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'georgiastate.jpg',
        rank: 16,
        firstFour: 2
    },
    {
        id: CollegeEnum.SetonHall,
        collegeName: 'Seton Hall',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 8
    },
    {
        id: CollegeEnum.TCU,
        collegeName: 'TCU',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 9
    },
    {
        id: CollegeEnum.Houston,
        collegeName: 'Houston',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 5
    },
    {
        id: CollegeEnum.UAB,
        collegeName: 'UAB',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 12
    },
    {
        id: CollegeEnum.Illinois,
        collegeName: 'Illinois',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 4
    },
    {
        id: CollegeEnum.Chattanooga,
        collegeName: 'Chattanooga',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 13
    },
    {
        id: CollegeEnum.ColoradoSt,
        collegeName: 'Colorado St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 6
    },
    {
        id: CollegeEnum.Michigan,
        collegeName: 'Michigan',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 11
    },
    {
        id: CollegeEnum.Tennessee,
        collegeName: 'Tennessee',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 3
    },
    {
        id: CollegeEnum.Longwood,
        collegeName: 'Longwood',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 14
    },
    {
        id: CollegeEnum.OhioSt,
        collegeName: 'Ohio St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 7
    },
    {
        id: CollegeEnum.LoyolaChicago,
        collegeName: 'Loyola Chicago',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 10
    },
    {
        id: CollegeEnum.Villanova,
        collegeName: 'Villanova',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 2
    },
    {
        id: CollegeEnum.Delaware,
        collegeName: 'Delaware',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 15
    },
    {
        id: CollegeEnum.Kansas,
        collegeName: 'Kansas',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 1
    },
    {
        id: CollegeEnum.Unknown,
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'georgiastate.jpg',
        rank: 16,
        firstFour: 0
    },
    {
        id: CollegeEnum.SanDiegoSt,
        collegeName: 'San Diego St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 8
    },
    {
        id: CollegeEnum.Creighton,
        collegeName: 'Creighton',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 9
    },
    {
        id: CollegeEnum.Iowa,
        collegeName: 'Iowa',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 5
    },
    {
        id: CollegeEnum.Richmond,
        collegeName: 'Richmond',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 12
    },
    {
        id: CollegeEnum.Providence,
        collegeName: 'Providence',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 4
    },
    {
        id: CollegeEnum.SDakotaSt,
        collegeName: 'S Dakota St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 13
    },
    {
        id: CollegeEnum.LSU,
        collegeName: 'LSU',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 6
    },
    {
        id: CollegeEnum.IowaSt,
        collegeName: 'Iowa St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 11
    },
    {
        id: CollegeEnum.Wisconsin,
        collegeName: 'Wisconsin',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 3
    },
    {
        id: CollegeEnum.Colgate,
        collegeName: 'Colgate',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 14
    },
    {
        id: CollegeEnum.USC,
        collegeName: 'USC',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 7
    },
    {
        id: CollegeEnum.Miami,
        collegeName: 'Miami (FL)',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 10
    },
    {
        id: CollegeEnum.Auburn,
        collegeName: 'Auburn',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 2
    },
    {
        id: CollegeEnum.JacksonvilleSt,
        collegeName: 'Jacksonville St.',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg',
        rank: 15
    },
]

export default MascotStore