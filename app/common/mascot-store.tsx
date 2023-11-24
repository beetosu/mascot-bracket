import CollegeEnum from "./college-enum"

export type MascotData = {
    id: CollegeEnum
    collegeName: string,
    mascotName: string,
    imgSrc: string,
    rank: number
}

const MascotStore: MascotData[] = [
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
        id: CollegeEnum.RutgersNotreDame,
        collegeName: 'Rutgers / Notre Dame',
        mascotName: 'Fake Mascot / Fake Mascot',
        imgSrc: 'gonzaga.jpg',
        rank: 11
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
]

export default MascotStore