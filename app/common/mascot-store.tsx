import CollegeEnum from "./enums/college-enum"

export type MascotData = {
    collegeName: string,
    shortCollegeName?: string,
    mascotName: string,
    imgSrc: string,
    isUnofficial?: boolean
}

const MascotStore: { [college in CollegeEnum]: MascotData } = {
    [CollegeEnum.Unknown]: {
        collegeName: 'Unknown',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
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
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.WrightSt]: {
        collegeName: 'Wright St.',
        mascotName: 'Rowdy Raider',
        imgSrc: 'wrightst.jpg'
    },
    [CollegeEnum.Bryant]: {
        collegeName: 'Bryant',
        mascotName: 'Tupper',
        imgSrc: 'bryant.png'
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
        collegeName: 'Georgia St.',
        mascotName: 'Pounce',
        imgSrc: 'georgiastate.jpg'
    },
    [CollegeEnum.BoiseSt]: {
        collegeName: 'Boise St.',
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
        collegeName: 'New Mexico St.',
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
        collegeName: 'Montana St.',
        mascotName: 'Spirit the Bobcat',
        imgSrc: 'montanast.jpg'
    },
    [CollegeEnum.MichiganSt]: {
        collegeName: 'Michigan St.',
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
        collegeName: 'Norfolk St.',
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
        collegeName: 'Murray St.',
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
        imgSrc: 'unknown.gif'
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
        collegeName: 'Colorado St.',
        mascotName: 'CAM the Ram',
        imgSrc: 'coloradost.jpg'
    },
    [CollegeEnum.Michigan]: {
        collegeName: 'Michigan',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.gif'
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
        collegeName: 'Ohio St.',
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
        collegeName: 'San Diego St.',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.gif'
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
        collegeName: 'S Dakota St.',
        mascotName: 'Jackrabbit',
        imgSrc: 'sdakotast.jpg'
    },
    [CollegeEnum.LSU]: {
        collegeName: 'LSU',
        mascotName: 'Fake Mascot',
        imgSrc: 'lsu.jpg'
    },
    [CollegeEnum.IowaSt]: {
        collegeName: 'Iowa St.',
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
        collegeName: 'Merrimack',
        mascotName: 'Mack the Warrior',
        imgSrc: 'merrimack.png'
    },
    [CollegeEnum.Southern]: {
        collegeName: 'Southern',
        mascotName: 'Lacumba',
        imgSrc: 'southern.jpg'
    },
    [CollegeEnum.OralRoberts]: {
        collegeName: 'Oral Roberts',
        mascotName: 'Eli',
        imgSrc: 'oralroberts.jpg'
    },
    [CollegeEnum.Dayton]: {
        collegeName: 'Dayton',
        mascotName: 'Rudy Flyer',
        imgSrc: 'dayton.jpg'
    },
    [CollegeEnum.IndianaSt]: {
        collegeName: 'Indiana St.',
        mascotName: 'Sycamore Sam',
        imgSrc: 'indianast.webp'
    },
    [CollegeEnum.Clemson]: {
        collegeName: 'Clemson',
        mascotName: 'The Tiger',
        imgSrc: 'clemson.jpg'
    },
    [CollegeEnum.FAU]: {
        collegeName: 'FAU',
        mascotName: 'Owlsley and Hoot',
        imgSrc: 'fau.jpg'
    },
    [CollegeEnum.MoreheadSt]: {
        collegeName: 'Morehead St.',
        mascotName: 'Beaker',
        imgSrc: 'moreheadst.jpg'
    },
    [CollegeEnum.Marist]: {
        collegeName: 'Marist',
        mascotName: 'Frankie the Red Fox',
        imgSrc: 'marist.jpg'
    },
    [CollegeEnum.Princeton]: {
        collegeName: 'Princeton',
        mascotName: 'The Tiger',
        imgSrc: 'princeton.png'
    },
    [CollegeEnum.UNCW]: {
        collegeName: 'UNCW',
        mascotName: 'Sammy C. Hawk',
        imgSrc: 'uncw.jpg'
    },
    [CollegeEnum.FortWayne]: {
        collegeName: 'Fort Wayne',
        mascotName: 'Ruby',
        imgSrc: 'fortwayne.png'
    },
    [CollegeEnum.WeberSt]: {
        collegeName: 'Weber St.',
        mascotName: 'Waldo the Wildcat',
        imgSrc: 'weberst.jpg'
    },
    [CollegeEnum.GrandCanyon]: {
        collegeName: 'Grand Canyon',
        mascotName: 'Thunder',
        imgSrc: 'grandcanyon.jpg'
    },
    [CollegeEnum.UCIrvine]: {
        collegeName: 'UC Irvine',
        mascotName: 'Peter the Anteater',
        imgSrc: 'ucirvine.jpg'
    },
    [CollegeEnum.Samford]: {
        collegeName: 'Samford',
        mascotName: 'Spike the Bulldog',
        imgSrc: 'samford.jpg'
    },
    [CollegeEnum.Lipscomb]: {
        collegeName: 'Lipscomb',
        mascotName: 'LU Bison',
        imgSrc: 'lipscomb.jpg'
    },
    [CollegeEnum.Liberty]: {
        collegeName: 'Liberty',
        mascotName: 'Sparky the Eagle',
        imgSrc: 'liberty.png'
    },
    [CollegeEnum.McNesseSt]: {
        collegeName: 'McNesse St.',
        mascotName: 'Rowdy the Cowboy',
        imgSrc: 'mcnessest.png'
    },
    [CollegeEnum.IncarnateWord]: {
        collegeName: 'Incarnate Word',
        mascotName: 'Red the Cardinal',
        imgSrc: 'incarnateword.jpg'
    },
    [CollegeEnum.SacredHeart]: {
        collegeName: 'Sacred Heart',
        mascotName: 'Big Red the Pioneer',
        imgSrc: 'sacredheart.jpg'
    },
    [CollegeEnum.BethuneCookman]: {
        collegeName: 'Bethune Cookman',
        shortCollegeName: 'B. Cookman',
        mascotName: 'Wil D Cat',
        imgSrc: 'bethunecookman.jpg'
    },
    [CollegeEnum.Presbyterian]: {
        collegeName: 'Presbyterian',
        mascotName: 'Blue Hose',
        imgSrc: 'presbyterian.jpg'
    },
    [CollegeEnum.SouthCarolina]: {
        collegeName: 'South Carolina',
        mascotName: 'Cocky',
        imgSrc: 'southcarolina.jpg'
    },
    [CollegeEnum.Albany]: {
        collegeName: 'Albany',
        mascotName: 'Damien',
        imgSrc: 'albany.jpg'
    },
    [CollegeEnum.ClevelandSt]: {
        collegeName: 'Cleveland St.',
        mascotName: 'Magnus',
        imgSrc: 'clevelandst.png'
    },
    [CollegeEnum.GeorgiaSouthern]: {
        collegeName: 'Georgia Southern',
        shortCollegeName: 'Georgia S.',
        mascotName: 'GUS the Eagle',
        imgSrc: 'georgiasouthern.jpg'
    },
    [CollegeEnum.UNLV]: {
        collegeName: 'UNLV',
        mascotName: '[No Mascot]',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.SouthDakota]: {
        collegeName: 'South Dakota',
        mascotName: 'Charlie Coyote',
        imgSrc: 'southdakota.jpg'
    },
    [CollegeEnum.Washington]: {
        collegeName: 'Washington',
        mascotName: 'Harry the Husky',
        imgSrc: 'washington.jpg'
    },
    [CollegeEnum.Lehigh]: {
        collegeName: 'Lehigh',
        mascotName: 'Clutch the Mointain Hawk',
        imgSrc: 'lehigh.png'
    },
    [CollegeEnum.WesternIllinois]: {
        collegeName: 'Western Illinois',
        mascotName: 'Rocky the Bulldog',
        imgSrc: 'wiu.jfif'
    },
    [CollegeEnum.BallState]: {
        collegeName: 'Ball State',
        mascotName: 'Charlie Cardinal',
        imgSrc: 'ballstate.jpg'
    },
    [CollegeEnum.CaliforniaBaptist]: {
        collegeName: 'California Baptist',
        shortCollegeName: 'Cali Baptist',
        mascotName: 'Lance the Lancer',
        imgSrc: 'calibaptist.png'
    },
    [CollegeEnum.MiddleTennessee]: {
        collegeName: 'Middle Tennessee',
        shortCollegeName: 'Mid Tennessee',
        mascotName: 'Lightning',
        imgSrc: 'midtennessee.jpg'
    },
    [CollegeEnum.Fairfield]: {
        collegeName: 'Fairfield',
        mascotName: 'Lucus the Stag',
        imgSrc: 'fairfield.jpg'
    },
    [CollegeEnum.EasternKentucky]: {
        collegeName: 'Eastern Kentucky',
        shortCollegeName: 'E. Kentucky',
        mascotName: 'The Colonel',
        imgSrc: 'eastkentucky.jpg'
    },
    [CollegeEnum.NorthTexas]: {
        collegeName: 'North Texas',
        mascotName: 'Scrappy',
        imgSrc: 'northtexas.png'
    },
    [CollegeEnum.StonyBrook]: {
        collegeName: 'Stony Brook',
        mascotName: 'Wolfie Seawolf',
        imgSrc: 'stonybrook.jpg'
    },
    [CollegeEnum.NorthernArizona]: {
        collegeName: 'Northern Arizona',
        shortCollegeName: 'N. Arizona',
        mascotName: 'Louie the Lumberjack',
        imgSrc: 'narizona.jpeg'
    },
    [CollegeEnum.HighPoint]: {
        collegeName: 'High Point',
        mascotName: 'Prowler',
        imgSrc: 'highpoint.jfif'
    },
    [CollegeEnum.WashingtonSt]: {
        collegeName: 'Washington St.',
        mascotName: 'Butch T. Cougar',
        imgSrc: 'washingtonst.jpg'
    },
    [CollegeEnum.AppalachianSt]: {
        collegeName: 'Appalachian St.',
        mascotName: 'Yosef',
        imgSrc: 'appstate.png'
    },
    [CollegeEnum.Charleston]: {
        collegeName: 'Charleston',
        mascotName: 'Clyde the Cougar',
        imgSrc: 'charleston.jpg'
    },
    [CollegeEnum.EasternWashington]: {
        collegeName: 'Eastern Washington',
        shortCollegeName: 'E. Washington',
        mascotName: 'Swoop',
        imgSrc: 'ewashington.jpg'
    },
    [CollegeEnum.SamHouston]: {
        collegeName: 'Sam Houston',
        mascotName: 'Sammy Bearkat',
        imgSrc: 'samhouston.jpg'
    },
    [CollegeEnum.UtahSt]: {
        collegeName: 'Utah St.',
        mascotName: 'Big Blue',
        imgSrc: 'utahst.jpg'
    },
    [CollegeEnum.SouthFlorida]: {
        collegeName: 'South Florida',
        mascotName: 'Rocky D. Bull',
        imgSrc: 'southflorida.jpg'
    },
    [CollegeEnum.Quinnipiac]: {
        collegeName: 'Quinnipiac',
        mascotName: 'Boomer the Bobcat',
        imgSrc: 'quinnipiac.jpg'
    },
    [CollegeEnum.Oakland]: {
        collegeName: 'Oakland',
        mascotName: 'Grizz',
        imgSrc: 'oakland.jpg'
    },
    [CollegeEnum.HolyCross]: {
        collegeName: 'Holy Cross',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.EasternIllinois]: {
        collegeName: 'Eastern Illinois',
        shortCollegeName: 'E Illinois',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.Marshall]: {
        collegeName: 'Marshall',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.Temple]: {
        collegeName: 'Temple',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.FloridaGulfCoast]: {
        collegeName: 'Florida Gulf Coast',
        shortCollegeName: 'FGCU',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.JacksonSt]: {
        collegeName: 'Jackson St.',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.Stanford]: {
        collegeName: 'Stanford',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.Lamar]: {
        collegeName: 'Lamar',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
    [CollegeEnum.Drake]: {
        collegeName: 'Drake',
        mascotName: 'Unknown',
        imgSrc: 'unknown.gif'
    },
}

export default MascotStore