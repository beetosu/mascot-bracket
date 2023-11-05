export type MascotData = {
    collegeName: string,
    mascotName: string,
    imgSrc: string,
    rank: number
}

const MascotStore: { [key: number]: MascotData } = {
    1: {
        collegeName: 'Fake University',
        mascotName: 'Fakey',
        imgSrc: '/next.svg',
        rank: 2
    },
    2: {
        collegeName: 'Not Real College',
        mascotName: 'L Nerd',
        imgSrc: '/vercel.svg',
        rank: 13
    }
}

export default MascotStore