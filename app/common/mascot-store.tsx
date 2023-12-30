import CollegeEnum from "./enums/college-enum"

export type MascotData = {
    collegeName: string,
    mascotName: string,
    imgSrc: string,
    isUnofficial?: boolean
}

const MascotStore: { [college in CollegeEnum]: MascotData } = {
    [CollegeEnum.Unknown]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.TexasSouthern]: {
        collegeName: 'Texas Southern',
        mascotName: 'Tiger',
        imgSrc: 'texassouthern.gif'
    },
    [CollegeEnum.TexasAMCC]: {
        collegeName: 'Texas A&M CC',
        mascotName: 'Izzy the Islander',
        imgSrc: 'texasamcc.jpg'
    },
    [CollegeEnum.Wyoming]: {
        collegeName: 'Wyoming',
        mascotName: 'Pistol Pete',
        imgSrc: 'wyoming.jpg'
    },
    [CollegeEnum.Indiana]: {
        collegeName: 'Indiana',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.WrightSt]: {
        collegeName: 'Wright St',
        mascotName: 'Rowdy Raider',
        imgSrc: 'wrightst.jpg'
    },
    [CollegeEnum.Bryant]: {
        collegeName: 'Bryant',
        mascotName: 'Tupper',
        imgSrc: 'bryant.jpg'
    },
    [CollegeEnum.Rutgers]: {
        collegeName: 'Rutgers',
        mascotName: 'Sir Henry',
        imgSrc: 'rutgers.jpg'
    },
    [CollegeEnum.NotreDame]: {
        collegeName: 'Notre Dame',
        mascotName: 'Leprechauns',
        imgSrc: 'notredame.jpg'
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
        mascotName: 'Buster Bronco',
        imgSrc: 'boisest.jpg'
    },
    [CollegeEnum.Memphis]: {
        collegeName: 'Memphis',
        mascotName: 'Pouncer the Tiger',
        imgSrc: 'memphis.jpg'
    },
    [CollegeEnum.UConn]: {
        collegeName: 'UConn',
        mascotName: 'Jonthan the Huskey',
        imgSrc: 'uconn.jpg'
    },
    [CollegeEnum.NewMexicoSt]: {
        collegeName: 'New Mexico St',
        mascotName: 'Pistol Pete',
        imgSrc: 'newmexicostate.jpg'
    },
    [CollegeEnum.Arkansas]: {
        collegeName: 'Arkansas',
        mascotName: 'Big Red & The Pigs',
        imgSrc: 'arkansas.jpg'
    },
    [CollegeEnum.Vermont]: {
        collegeName: 'Vermont',
        mascotName: 'Charlie Catamount',
        imgSrc: 'vermont.jpg'
    },
    [CollegeEnum.Alabama]: {
        collegeName: 'Alabama',
        mascotName: 'Big Al',
        imgSrc: 'alabama.jpg'
    },
    [CollegeEnum.TexasTech]: {
        collegeName: 'Texas Tech',
        mascotName: 'Raider Red',
        imgSrc: 'texastech.jpg'
    },
    [CollegeEnum.MontanaSt]: {
        collegeName: 'Montana St',
        mascotName: 'Spirit the Bobcat',
        imgSrc: 'montanast.jpg'
    },
    [CollegeEnum.MichiganSt]: {
        collegeName: 'Michigan St',
        mascotName: 'Sparty',
        imgSrc: 'michiganst.jpg'
    },
    [CollegeEnum.Davidson]: {
        collegeName: 'Davidson',
        mascotName: 'Lux the Wildcat',
        imgSrc: 'davidson.jpg'
    },
    [CollegeEnum.Duke]: {
        collegeName: 'Duke',
        mascotName: 'Blue Devil',
        imgSrc: 'duke.jpg'
    },
    [CollegeEnum.CSFullerton]: {
        collegeName: 'Cal St Fullerton',
        mascotName: 'Tuffy the Titan',
        imgSrc: 'calstfullerton.jpg'
    },
    [CollegeEnum.Baylor]: {
        collegeName: 'Baylor',
        mascotName: 'Bruiser and Marigold',
        imgSrc: 'baylor.jpg'
    },
    [CollegeEnum.NorfolkSt]: {
        collegeName: 'Norfolk St',
        mascotName: 'Spiro the Spartan',
        imgSrc: 'norfolkst.jpg'
    },
    [CollegeEnum.NorthCarolina]: {
        collegeName: 'North Carolina',
        mascotName: 'Rameses',
        imgSrc: 'northcarolina.jpg'
    },
    [CollegeEnum.Marquette]: {
        collegeName: 'Marquette',
        mascotName: 'Iggy',
        imgSrc: 'marquette.jpg'
    },
    [CollegeEnum.StMarys]: {
        collegeName: "Saint Mary's",
        mascotName: 'Gideon',
        imgSrc: 'stmarys.jpeg'
    },
    [CollegeEnum.UCLA]: {
        collegeName: 'UCLA',
        mascotName: 'Joe and Josie Bruin',
        imgSrc: 'ucla.jpg'
    },
    [CollegeEnum.Akron]: {
        collegeName: 'Akron',
        mascotName: 'Zippy',
        imgSrc: 'akron.png'
    },
    [CollegeEnum.Texas]: {
        collegeName: 'Texas',
        mascotName: 'Bevo',
        imgSrc: 'texas.jpg'
    },
    [CollegeEnum.VirginiaTech]: {
        collegeName: 'Virginia Tech',
        mascotName: 'HokieBird',
        imgSrc: 'virginiatech.jpg'
    },
    [CollegeEnum.Purdue]: {
        collegeName: 'Purdue',
        mascotName: 'Purdue Pete',
        imgSrc: 'purdue.jpg'
    },
    [CollegeEnum.Yale]: {
        collegeName: 'Yale',
        mascotName: 'Handsome Dan',
        imgSrc: 'yale.webp'
    },
    [CollegeEnum.MurraySt]: {
        collegeName: 'Murray St',
        mascotName: 'Dunker',
        imgSrc: 'murrayst.jpg'
    },
    [CollegeEnum.SanFrancisco]: {
        collegeName: 'San Francisco',
        mascotName: 'Don Francisco',
        imgSrc: 'sanfrancisco.jpg'
    },
    [CollegeEnum.Kentucky]: {
        collegeName: 'Kentucky',
        mascotName: 'The Kentucky Wildcat',
        imgSrc: 'kentucky.jpg'
    },
    [CollegeEnum.StPeters]: {
        collegeName: "St Peter's",
        mascotName: 'Peacock',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Arizona]: {
        collegeName: 'Arizona',
        mascotName: 'Wilbur and Wilma',
        imgSrc: 'arizona.jpg'
    },
    [CollegeEnum.SetonHall]: {
        collegeName: 'Seton Hall',
        mascotName: 'Pirate',
        imgSrc: 'setonhall.jpg'
    },
    [CollegeEnum.TCU]: {
        collegeName: 'TCU',
        mascotName: 'SuperFrog',
        imgSrc: 'tcu.jpg'
    },
    [CollegeEnum.Houston]: {
        collegeName: 'Houston',
        mascotName: 'Shasta and Sasha',
        imgSrc: 'houston.jpg'
    },
    [CollegeEnum.UAB]: {
        collegeName: 'UAB',
        mascotName: 'Blaze the Dragon',
        imgSrc: 'uab.jpg'
    },
    [CollegeEnum.Illinois]: {
        collegeName: 'Illinois',
        mascotName: 'The Kingfisher',
        imgSrc: 'illinois.webp',
        isUnofficial: true
    },
    [CollegeEnum.Chattanooga]: {
        collegeName: 'Chattanooga',
        mascotName: 'Scrappy Moc',
        imgSrc: 'chattanooga.jpg'
    },
    [CollegeEnum.ColoradoSt]: {
        collegeName: 'Colorado St',
        mascotName: 'CAM the Ram',
        imgSrc: 'coloradost.jpg'
    },
    [CollegeEnum.Michigan]: {
        collegeName: 'Michigan',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Tennessee]: {
        collegeName: 'Tennessee',
        mascotName: 'Smokey',
        imgSrc: 'tennessee.jpg'
    },
    [CollegeEnum.Longwood]: {
        collegeName: 'Longwood',
        mascotName: 'Elwood',
        imgSrc: 'longwood.jpg'
    },
    [CollegeEnum.OhioSt]: {
        collegeName: 'Ohio St',
        mascotName: 'Brutus Buckeye',
        imgSrc: 'ohiost.jpg'
    },
    [CollegeEnum.LoyolaChicago]: {
        collegeName: 'Loyola Chicago',
        mascotName: 'LU Wolf',
        imgSrc: 'loyolachicago.jpg'
    },
    [CollegeEnum.Villanova]: {
        collegeName: 'Villanova',
        mascotName: 'Will D. Cat',
        imgSrc: 'villanova.jpg'
    },
    [CollegeEnum.Delaware]: {
        collegeName: 'Delaware',
        mascotName: 'YouUDee',
        imgSrc: 'delaware.jpeg'
    },
    [CollegeEnum.Kansas]: {
        collegeName: 'Kansas',
        mascotName: 'Big Jay',
        imgSrc: 'kansas.jpg'
    },
    [CollegeEnum.SanDiegoSt]: {
        collegeName: 'San Diego St',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Creighton]: {
        collegeName: 'Creighton',
        mascotName: 'Billy Bluejay',
        imgSrc: 'creighton.jpg'
    },
    [CollegeEnum.Iowa]: {
        collegeName: 'Iowa',
        mascotName: 'Herky the Hawk',
        imgSrc: 'iowa.jpg'
    },
    [CollegeEnum.Richmond]: {
        collegeName: 'Richmond',
        mascotName: 'WebstUR',
        imgSrc: 'richmond.jpeg'
    },
    [CollegeEnum.Providence]: {
        collegeName: 'Providence',
        mascotName: 'Huxley and Friar Dom',
        imgSrc: 'providence.jpg'
    },
    [CollegeEnum.SDakotaSt]: {
        collegeName: 'S Dakota St',
        mascotName: 'Jackrabbit',
        imgSrc: 'sdakotast.jpg'
    },
    [CollegeEnum.LSU]: {
        collegeName: 'LSU',
        mascotName: 'Fake Mascot',
        imgSrc: 'lsu.jpg'
    },
    [CollegeEnum.IowaSt]: {
        collegeName: 'Iowa St',
        mascotName: 'Cy the Cardinal',
        imgSrc: 'iowast.jpg'
    },
    [CollegeEnum.Wisconsin]: {
        collegeName: 'Wisconsin',
        mascotName: 'Bucky Badger',
        imgSrc: 'wisconsin.jpg'
    },
    [CollegeEnum.Colgate]: {
        collegeName: 'Colgate',
        mascotName: 'Raider',
        imgSrc: 'colgate.jpg'
    },
    [CollegeEnum.USC]: {
        collegeName: 'USC',
        mascotName: 'Tommy Trojan',
        imgSrc: 'usc.jpeg'
    },
    [CollegeEnum.Miami]: {
        collegeName: 'Miami (FL)',
        mascotName: 'Sebastian the Ibis',
        imgSrc: 'miami.webp'
    },
    [CollegeEnum.Auburn]: {
        collegeName: 'Auburn',
        mascotName: 'Aubie the Tiger',
        imgSrc: 'auburn.jpg'
    },
    [CollegeEnum.JacksonvilleSt]: {
        collegeName: 'Jacksonville St.',
        mascotName: 'Cocky',
        imgSrc: 'jacksonvillest.jpg'
    },
    [CollegeEnum.Merrimack]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Southern]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.OralRoberts]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Dayton]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.IndianaSt]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Clemson]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.FAU]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.MoreheadSt]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Marist]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Princeton]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.UNCW]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.FortWayne]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.WeberSt]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.GrandCanyon]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.UCIrvine]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Samford]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Lipscomb]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.Liberty]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
    [CollegeEnum.McNesseSt]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.png'
    },
}

export default MascotStore