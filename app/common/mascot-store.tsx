import CollegeEnum from "./college-enum"

export type MascotData = {
    collegeName: string,
    mascotName: string,
    imgSrc: string
}

const MascotStore: { [college in CollegeEnum]: MascotData } = {
    [CollegeEnum.Unknown]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.TexasSouthern]: {
        collegeName: 'Texas Southern',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.TexasAMCC]: {
        collegeName: 'Texas A&M CC',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Wyoming]: {
        collegeName: 'Wyoming',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Indiana]: {
        collegeName: 'Indiana',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.WrightSt]: {
        collegeName: 'Wright St',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Bryant]: {
        collegeName: 'Bryant',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Rutgers]: {
        collegeName: 'Rutgers',
        mascotName: 'Mascot Name',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.NotreDame]: {
        collegeName: 'Notre Dame',
        mascotName: 'Mascot Name',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Gonzaga]: {
        collegeName: 'Gonzaga',
        mascotName: 'Spike the Bulldog',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.GeorgiaSt]: {
        collegeName: 'Georgia St',
        mascotName: 'Pounce',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.BoiseSt]: {
        collegeName: 'Boise St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Memphis]: {
        collegeName: 'Memphis',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.UConn]: {
        collegeName: 'UConn',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.NewMexicoSt]: {
        collegeName: 'New Mexico St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Arkansas]: {
        collegeName: 'Arkansas',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Vermont]: {
        collegeName: 'Vermont',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Alabama]: {
        collegeName: 'Alabama',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.TexasTech]: {
        collegeName: 'Texas Tech',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.MontanaSt]: {
        collegeName: 'Montana St',
        mascotName: 'Fake Mascot / Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.MichiganSt]: {
        collegeName: 'Michigan St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Davidson]: {
        collegeName: 'Davidson',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Duke]: {
        collegeName: 'Duke',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.CSFullerton]: {
        collegeName: 'Cal St Fullerton',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Baylor]: {
        collegeName: 'Baylor',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.NorfolkSt]: {
        collegeName: 'Norfolk St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.NorthCarolina]: {
        collegeName: 'North Carolina',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Marquette]: {
        collegeName: 'Marquette',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.StMarys]: {
        collegeName: "Saint Mary's",
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.UCLA]: {
        collegeName: 'UCLA',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Akron]: {
        collegeName: 'Akron',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Texas]: {
        collegeName: 'Texas',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.VirginiaTech]: {
        collegeName: 'Virginia Tech',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Purdue]: {
        collegeName: 'Purdue',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Yale]: {
        collegeName: 'Yale',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.MurraySt]: {
        collegeName: 'Murray St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.SanFrancisco]: {
        collegeName: 'San Francisco',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Kentucky]: {
        collegeName: 'Kentucky',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.StPeters]: {
        collegeName: "St Peter's",
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Arizona]: {
        collegeName: 'Arizona',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.SetonHall]: {
        collegeName: 'Seton Hall',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.TCU]: {
        collegeName: 'TCU',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Houston]: {
        collegeName: 'Houston',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.UAB]: {
        collegeName: 'UAB',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Illinois]: {
        collegeName: 'Illinois',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Chattanooga]: {
        collegeName: 'Chattanooga',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.ColoradoSt]: {
        collegeName: 'Colorado St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Michigan]: {
        collegeName: 'Michigan',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Tennessee]: {
        collegeName: 'Tennessee',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Longwood]: {
        collegeName: 'Longwood',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.OhioSt]: {
        collegeName: 'Ohio St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.LoyolaChicago]: {
        collegeName: 'Loyola Chicago',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Villanova]: {
        collegeName: 'Villanova',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Delaware]: {
        collegeName: 'Delaware',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Kansas]: {
        collegeName: 'Kansas',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.SanDiegoSt]: {
        collegeName: 'San Diego St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Creighton]: {
        collegeName: 'Creighton',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Iowa]: {
        collegeName: 'Iowa',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Richmond]: {
        collegeName: 'Richmond',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Providence]: {
        collegeName: 'Providence',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.SDakotaSt]: {
        collegeName: 'S Dakota St',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.LSU]: {
        collegeName: 'LSU',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.IowaSt]: {
        collegeName: 'Iowa St',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Wisconsin]: {
        collegeName: 'Wisconsin',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Colgate]: {
        collegeName: 'Colgate',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.USC]: {
        collegeName: 'USC',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.Miami]: {
        collegeName: 'Miami (FL)',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.Auburn]: {
        collegeName: 'Auburn',
        mascotName: 'Fake Mascot',
        imgSrc: 'gonzaga.jpg'
    },
    [CollegeEnum.JacksonvilleSt]: {
        collegeName: 'Jacksonville St.',
        mascotName: 'Fake Mascot',
        imgSrc: 'georgiastate.jpg'
    }
}

export default MascotStore