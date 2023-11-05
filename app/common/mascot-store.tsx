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
        id: CollegeEnum.FakeUniversity,
        collegeName: 'Fake University',
        mascotName: 'Fakey',
        imgSrc: '/next.svg',
        rank: 2
    },
    {
        id: CollegeEnum.NotRealCollege,
        collegeName: 'Not Real College',
        mascotName: 'L Nerd',
        imgSrc: '/vercel.svg',
        rank: 13
    },
    {
        id: CollegeEnum.CollegeA,
        collegeName: 'College A',
        mascotName: 'Freak (Yeah)',
        imgSrc: '/vercel.svg',
        rank: 4
    },
    {
        id: CollegeEnum.CollegeB,
        collegeName: 'College B',
        mascotName: 'The Rizzler',
        imgSrc: '/next.svg',
        rank: 2
    }
]

export default MascotStore