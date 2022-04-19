//DOM cache


var word = document.getElementById("word");
var RO = document.getElementById("ro");
var EN = document.getElementById("en");
var IT = document.getElementById("it");
var A = document.getElementById("A");
var Ă = document.getElementById("Ă");
var Â = document.getElementById("Â");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var I = document.getElementById("I");
var Î = document.getElementById("Î");
var J = document.getElementById("J");
var K = document.getElementById("K");
var L = document.getElementById("L");
var M = document.getElementById("M");
var N = document.getElementById("N");
var O = document.getElementById("O");
var P = document.getElementById("P");
var Q = document.getElementById("Q");
var R = document.getElementById("R");
var S = document.getElementById("S");
var Ș = document.getElementById("Ș");
var T = document.getElementById("T");
var Ț = document.getElementById("Ț");
var U = document.getElementById("U");
var V = document.getElementById("V");
var W = document.getElementById("W");
var X = document.getElementById("X");
var Y = document.getElementById("Y");
var Z = document.getElementById("Z");
var txt = document.getElementById("text");

//elements
var head = document.getElementById("head");
var body = document.getElementById("body");
var arm1 = document.getElementById("arm1");
var arm2 = document.getElementById("arm2");
var leg1 = document.getElementById("leg1");
var leg2 = document.getElementById("leg2");
var wrong = document.getElementById("mistakes");

//variables
var len;
var Baza_cuvinte_ro = ['MANUAL', "ACTUALITATE", "FRATE", 'ANTRENAMENT', 'CONSIMȚĂMÂNT', 'NECORESPUNZĂTOR', 'ABREVIAT', 'ABANDON', 'ABDICARE', 'ABAGIU',
    'PROBIOTIC', 'ARMISTIȚIU', 'ABRACADABRA', 'ACOMPANIATOR', 'ACCIDENT', 'ACCIDENTAL', 'ACAPARARE', 'ASPIRATOR', 'FABRICĂ', 'MAȘINĂ',
    'ACERBITATE', 'AMINOACID', 'PROTEINĂ', 'ABURI', 'CLIMATIZARE', 'ACTIVITATE', 'ADAOS', 'ADÂNC', 'ACUSTIC', 'ANAFURĂ',
    'AMINTIRE', 'AMORTIZOR', 'ANANAS', 'ANALIZATOR', 'AMUȚIRE', 'ANAEROB', 'ANALOG', 'ANARHIST', 'ANOSMIE', 'ANGIOSPERM',
    'ANGINĂ', 'VIRAL', 'VIRUS', 'PANDEMIE', 'MASCĂ', 'RAHAT', 'CERTIFIAT', 'SALAM', 'PARIZER', 'FIȘIER',
    'RAPORT', 'SPIRT', 'SOMNIFER', 'SPITAL', 'NEBUN', 'SPIRALĂ', 'DUMNEZEU', 'PIAȚĂ', 'ELICOPTER', 'AVION',
    'TELEFON', 'CURPU', 'FIER', 'ARGINT', 'AUR', 'AUTISM', 'ZIRCONIU', 'ALUMINIU', 'SULF', 'SUFERINȚĂ',
    'BRĂȚARĂ', 'COLIER', 'JANTĂ', 'GEANTĂ ', 'BALCON', 'FEREASTRĂ', 'PREȘ', 'CALENDAR', 'CARIOCĂ', 'MACHIAJ',
    'PĂPUȘĂ', 'PERIE', 'PASTĂ', 'DINTE', 'OCHI', 'GURMAND', 'TIMPAN', 'URECHE', 'CHITARĂ', 'ACORDEON',
    'CUTIE', 'LAMPĂ', 'CURIER', 'COLETĂRIE', 'PROIECTANT', 'ANTICARIAT', 'ANATOMIE', 'ANTILOPĂ', 'ANTINEVRALGIC', 'ANTIPATIE',
    'PROXIMITATE', 'APICAȚIE', 'UTILIZATOR', 'INTERFAȚĂ', 'APENDICE', 'INIMĂ', 'INTESTINE', 'FICAT', 'DRAGON', 'CĂMILĂ',
    'DROMADER', 'FELICITARE', 'CREMĂ', 'SPATULĂ', 'BĂTRÂN', 'ARMNISTIȚIE', 'COMUNISM', 'IMUNITATE', 'AUTOIMUN', 'AUTOMAT',
    'MANUAL', 'ATAȘAMENT', 'DETAȘAMENT', 'DEPARTAMENT', 'ANIMAL', 'FERMIER', 'AGRICULTOR', 'GERMINAȚIE', 'FACULTATE', 'UNIVERSITATE',
    'UNIUNE', 'AMPLASAMENT', 'REGIUNE', 'REGIONAL', 'ATACATOR', 'ÎNARMAT', 'ARAMTĂ', 'BINOCLU', 'TELESCOP', 'CAVITATE',
    'AUTOATELIER', 'ÎNCHINARE', 'CREȘTIN', 'BISERICĂ', 'MĂNĂSTIRE', 'CRUCE', 'PREOT', 'CLOPOTNIȚĂ', 'PAROHIE', 'PATRIARH',
    'CALCULATOR', 'TASTATURĂ', 'ȘOBOLAN', 'ȘOARECE', 'PISICĂ', 'CROCODIL', 'ȘARPE', 'HIPOPOTAM', 'HIPOTALAMUS', 'MEZANIN',
    'CEREBEL', 'METAMFETAMINĂ', 'AVALANȘĂ', 'URAGAN', 'BOSCORODEALĂ', 'BORMAȘINĂ', 'BOMBOANĂ', 'CASTRAVETE', 'SALAMANDRĂ', 'CAMELEON',
    'DICȚIONAR', 'CARTE', 'STILOU', 'PENIȚĂ', 'MANUSCRIS', 'MANEVRĂ', 'LETOPISEȚ', 'CÂRNĂCIOR', 'CIOARĂ', 'ELECTRICITATE',
    'ELECTRICIAN', 'SALAHOR', 'SALUBRITATE', 'GUNOI', 'IGIENĂ', 'DEZINFECTANT', 'INFECȚIE', 'CUPTOR', 'ARAGAZ', 'OCHELARI',
    'LENTILĂ', 'RAMĂ', 'METAMORFOZĂ', 'FOTOSINTEZĂ', 'MACARA', 'TRACTOR', 'EXCAVATOR', 'COMBINĂ', 'AMESTEC', 'SOLUȚIE',
    'CHIMIE', 'SULFURĂ', 'SPAȚIU', 'NAVETĂ', 'COMBINEZON', 'AMBULANȚĂ', 'MEDICAMENT', 'STERNOCLEIDOMASTOIDIAN', 'ADENOM', 'PROSTATĂ',
    'BALAMUC', 'OSPICIU', 'GRAJD', 'CARBON', 'PLASTIC', 'DEȘEURI', 'ELECTROMAGNET', 'ELECTROMAGNETISM', 'ELECTROSTIMUALTOR', 'CARDIOSTIMULATOR',
    'ELECTROCARDIOGRAMĂ', 'CARBOMETRU', 'INHALATOR', 'ÎNHUMARE', 'FUNERAR', 'CÂNTĂREAȚĂ', 'MICROFON', 'ȘTIULETE', 'STEREOTIP', 'PAPGAL',
    'CĂPITAN', 'FERIBOT', 'FREGATĂ', 'GARAJ', 'TABLĂ', 'ACOPERIȘ', 'ACOPERĂMÂNT', 'ACOSTAMENT', 'ASFALT', 'CAVINET',
    'MEDICINĂ', 'ÎNCĂPERE', 'ÎNRUCIȘARE', 'INTERSECȚIE', 'INSECTAR', 'IERBIVOR', 'CANIBAL', 'CARNIVOR', 'COPIL[RIE', 'NOSTALGIE',
    'MELANCOLEGIE', 'MELATONINĂ', 'ZGLOBIU', 'ZOPICLONĂ', 'CLONĂ', 'EXTRATERESTRU', 'ASTRONAUT', 'CANAMICINĂ', 'FELINAR', 'CONTESTAȚIE',
    'EXAMINARE', 'EXAMEN', 'COȘMAR', 'MOTORIZARE', 'COMBUSTIBIL', 'COMBUSTIE', 'CARBONIZARE', 'OXIGENARE', 'SUFLEOR', 'TUMOARE',
    'CAMELEON', 'JAGUAR', 'LEOPARD', 'ANTILOPĂ', 'ANVELOPĂ', 'CAMUFLAJ', 'ZGOMOT', 'EXTAVAGANȚĂ', 'CORPORATIST', 'CORPORAȚIE',
    'SEPARATIST', 'SEPAREU', 'ȘERBET', 'SALOPETĂ', 'CONSTRUCTOR', 'CALORIFER', 'CENTRALĂ', 'CENTRALIST', 'VÂNZĂTOR', 'ASISTENT',
    'VOCIFERARE', 'FEROS', 'MANDIBULĂ', 'COASTĂ', 'INTESTIN', 'CORP', 'MANIPULATOR', 'MOTOR', 'MOTOCICLETĂ', 'BICICLETĂ',
    'TROTINETĂ', 'SCUTER', 'FORMAȚIUNE', 'DESCHIDERE', 'HARPĂ', 'COMUNICARE', 'FLOTANT', 'FERMECĂTOR', 'EFERVESCENȚĂ', 'AERODINAMIC',
    'ASTRONOMIE', 'ȘTIINȚĂ', 'FIINȚĂ', 'FENOMEN', 'RECUPERARE', 'EMISIUNE', 'TELEVIZOR', 'VIZOR', 'AUDIENȚĂ', 'LIDER',
    'PATRON', 'COMERȚ', 'RĂSPUNS', 'MESAGERIE', 'ADRESĂ', 'CONTACT', 'PORTMONEU', 'REVIZOR', 'ÎNVĂȚĂTOR', 'ÎNVĂȚĂTURĂ',
    'LICHID', 'FRÂNĂ', 'ÎNFRÂNARE', 'DESFRÂNARE', 'DESMĂȚ', 'PETRECERE', 'PETRECĂREȚ', 'TRECĂTOR', 'COMPANIE', 'AFACERE',
    'PORT', 'ORIFICU', 'COARDĂ', 'CULMINANT', 'CULME', 'GLUMĂ', 'AMUZAMENT', 'DIVERSUNE', 'AMEȚITOR', 'FULICUL',
    'INSECTĂ', 'LIBELULĂ', 'CAMERISTĂ', 'HOTEL', 'PENSIUNE', 'REBELIUNE', 'COMERȚ', 'MARINAR', 'NAVIGATOR', 'LOCALIZARE',
    'DEZOXIRBIBONUCLEIC', 'NUCELU', 'ATOM', 'ELECTRON', 'AGITAȚIE', 'AGOMERAȚIE', 'DEȘEURI', 'ÎNFUNDĂTURĂ', 'COLOSEUM', 'CETATE',
    'ARTEFACT', 'STRĂMOȘESC', 'MOȘTENIRE', 'DEZNODĂMÂNT', 'TLEEOCMANDĂ', 'LIVRARE', 'COMANDĂ', 'COMANDANT', 'COMCEPT', 'ANAPODA',
    'DESCHIZĂTOR', 'COMPORTAMENT', 'COSTUM', 'COSTUMAȚIE', 'CONSUMAȚIE', 'ACHITARE', 'FISCALIZARE', 'FANTĂ', 'DEPUNERE', 'MONETAR',
    'DRĂCOVENIE', 'DORINȚĂ', 'DORNIC', 'ORAȘ', 'URBANIZARE', 'RURAL', 'REGULAMENT', 'ORDINE', 'DISCIPLINĂ', 'MORTAL',
    'FICUS', 'FIBRĂ', 'OPTIC', 'CABLU', 'CANAL', 'FIABILITATE', 'FIASCO', 'FEROMAGNETIC', 'FERICIRE', 'GELOZIE',
    'GENETICĂ', 'GENEZĂ', 'PALEOLITIC', 'ANTICHITATE', 'PREISTORIE', 'ISTORIE', 'VIITOR', 'AȘTEPTARE', 'VACANT', 'VACANȚĂ',
    'GÂNGĂVEALĂ', 'GĂRGĂRIȚĂ', 'GREUTATE', 'GRAȚIOS', 'GREVĂ', 'AUTOBUZ', 'MICROBUZ', 'ȘOFER', 'MACARAGIU', 'VATMAN',
    'CONDUCTOR', 'CONDUCTĂ', 'COPIL', 'COPILĂRIE', 'ADOLESCENȚĂ', 'ADVENTISM', 'CREȘTINISM', 'BAPTISM', 'CATOLICISM', 'ORTODOXIE',
    'MĂICUȚĂ', 'PĂTIMAȘ', 'FUMIGENĂ', 'GRAVITATE', 'PROBLEMĂ', 'FORTĂREAȚĂ', 'RUSOAICĂ', 'URSOAICĂ', 'PĂDURE', 'POMPIER',
    'POLIȚIST', 'JANDARM', 'AGENT', 'ANGRENARE', 'AREST', 'INFRACTOR', 'FURT', 'FOLOSINȚĂ', 'SĂRĂCIE', 'BOGĂȚIE',
    'GRĂUNȚE', 'COTEȚ', 'GĂINĂ', 'COCOȘ', 'HOMOSEXUALITATE', 'HOLOCAUST', 'FERTILITATE', 'NATALITATE', 'FORMAȚIUNE', 'SEXUALITATE',
    'DRAGOSTE', 'IUBIRE', 'SĂRUT', 'LĂCUSTĂ', 'PROTEST', 'SOCIALIZARE', 'SOCIALISM', 'DEMOCRAȚIE', 'DEMOGRAFIE', 'DEMOGRAF',
    'OMLETĂ', 'ÎNCINS', 'TIGAIE', 'BUCĂTĂRIE', 'TERMINOLOGIE', 'TRADUCTOLOGIE', 'TRADUCĂTOR', 'RETROVERSIUNE', 'INTERPRETARE', 'LEXICOGRAF',
    'FILOSOF', 'LINGVIST', 'SOCIOLOG', 'PSIHOLOG', 'PSIHOLOGIE', 'REFORMATOR', 'PSIHANALIZĂ', 'FILOSOFARE', 'NEVROZĂ', 'ASCULTARE',
    'COLEGIALITATE', 'SPIRITUALITATE', 'LUMINOZITATE', 'SPIRITISM', 'APATTAMENT', 'NIVEL', 'COMPARTIMENT', 'ASCENSOR', 'PROCESOR', 'ELEVATOR',
    'SUCCESOR', 'PREDECESOR', 'PREDICATOR', 'COMEMORATOR', 'MEMORANDUM', 'VÂNĂTOARE', 'FANTOMÂ', 'MONSTRU', 'DETECTIV', 'PROCUROR',
    'AVOCAT', 'DETECȚIE', 'MINCIUNĂ', 'ADEVĂR', 'PROCURĂ', 'ADEVERINȚĂ', 'ACORD', 'RACORD', 'RAPORT', 'PONTON',
    'INDEPENDENȚĂ', 'HUMUS', 'HRĂNITOR', 'HRIȘCĂ', 'DISTONIE', 'INTERPOLATOR', 'INTERLOCUTOR', 'INTERPRETATOR', 'INTERSTELAR', 'IRIGAȚIE',
    'IPOTENUZĂ', 'INVIDIE', 'INVINCIBIL', 'ÎMPUȘCĂTURĂ', 'ÎMPĂMÂNTARE', 'ÎMPUȚINARE', 'INSECTICID', 'ÎNȘTIINȚARE', 'CEAȚĂ', 'ÎNCÂLCIRE',
    'ÎNCEȚOȘARE', 'ZĂPADĂ', 'JUCĂRIE', 'JUDECATĂ', 'JUDECĂTOR', 'VINOVAT', 'LATERAL', 'FLUORESCENT', 'MAGAZIE', 'MAGAZIONER',
    'MONTARE', 'MONTURĂ', 'COPERTĂ', 'CALVINISM', 'ANTAGONISM', 'VENIN', 'MIRACULOS', 'MIRACOL', 'FEERIE', 'FASCINAȚIE',
    'IMAGINAȚIE', 'PERSEVERENȚĂ', 'IMPOZIT', 'PARVENIT', 'TELESCOP', 'MICROSCOP', 'CONDUCTIVITATE', 'MĂSURARE', 'MĂTASE', 'MEMBRANĂ',
    'PLÂNGĂREȚ', 'PLÂNGERE', 'PENALIZARE', 'PENAL', 'PLEN', 'POLIȚĂ', 'CORECTOR', 'PUNGĂ', 'CROCANT', 'CIZMĂ',
    'TRANSPORTOR', 'BLINDAT', 'CISTRNĂ', 'AMFIBIAN', 'CAMUFLAJ', 'ULTRAJ'
];
var Baza_cuvinte_en = ['MOTHER', "FAMILY", "ENGINE", 'CRACK-BRAINED', 'EQUIPMENT', 'LEVEL', 'AUTOMATIC', 'ADVENTIST', 'AERODYNAMICS', 'AGENCY',
    'AGRICULTURE', 'AGGRESOR', 'AIRCRAFT', 'SPACECRAFT', 'AIRPLANE', 'AIRPORT', 'ALPHABET', 'AMBASSADOR', 'AMBIGOUS', 'AMORTIZATION',
    'AMPHETAMINE', 'AMULET', 'ANCHOR', 'ANGLE', 'ANONYMUS', 'ANIMAL', 'FRUIT', 'ANNEXATION', 'ANSWER', 'ANSWERABLE',
    'ANTAGONISM', 'ANTHROPOMORPHISM', 'ANTIPHON', 'APPRENTICESHIP', 'AQUAMARINE', 'BABYLON', 'BACON', 'BACKER', 'BACKGROUND', 'BACK',
    'BATTLE', 'BUBBLE', 'BALLROOM', 'SHOWROOM', 'BARBER', 'BARBERSHOP', 'BANNER', 'BANKER', 'BANANA', 'PALM',
    'BANDY-LEGGED', 'BARBERRY', 'BATTALION', 'BATTLE-SHIP', 'BATMAN', 'SPIDER-MAN', 'BARRENNESS', 'BAY', 'BASKET', 'BEEHIVE',
    'BEACON', 'BEACH', 'BEATIFICATION', 'BEGINNER', 'BELIEVABLE', 'BENZENE', 'BOAT', 'BRUSH', 'BONE', 'BOOKSHOP',
    'BOOBY-TRAP', 'BOTANIST', 'BREAK', 'BOWIE KNIFE', 'BRANDY', 'CARTOUCHE', 'CAPRICORN', 'CARDIO-VASCULAR', 'CARELESSNESS', 'CARROT',
    'CARTON', 'CASE', 'CHAMP', 'CHAMPAGNE', 'CHAMPION', 'CAMPIONSHIP', 'CHICKEN', 'KITCHEN', 'OVEN', 'SPOON',
    'CHESS', 'CHOPSTICKS', 'STICK', 'CHROMOSOME', 'CHROMATIC', 'CHOPPER', 'CHAIN', 'CLIPBOARD', 'CLARINET', 'CLOTHES',
    'CLONE', 'CLOUD', 'SKY', 'COFFEE', 'COFEE-BREAK', 'COAL', 'CLUBMAN', 'STONE', 'STONEHENGE', 'COIL',
    'FUEL', 'SULFUR', 'ANDESITE', 'AMETHYST', 'DRAGON', 'IMAGE', 'ICON', 'CALENDAR', 'CLOCK', 'TIME',
    'TIME-TRAVEL', 'PENCIL', 'BRUSH', 'TOOTHBRUSH', 'COCA-COLA', 'FANTA', 'COFFEE-HOUSE', 'COCKTAIL',
    'FAIRITAYL', 'NIGHTMARE', 'ALIAN', 'ORGANS', 'COAST-GUARD', 'CLUB-HOUSE', 'CONDUCTIVITY', 'COOKERY-HOUSE', 'RESTAURANT', 'CROISSANT',
    'CROCHET-HOOK', 'CROSS-EXAMINATION', 'CULTIVATION', 'DEFORMED', 'DELECTATION', 'DELIBERATION', 'DEPARTMENT', 'DEMOGRAPHY', 'DELIMITATION', 'DEPOPULATION',
    'DEPOSIT', 'DICE', 'DIELECTRIC', 'ELECTRIC', 'DICTIONARY', 'DEVICE', 'DETHRNE', 'DIGIT', 'DIGITAL', 'ANALOG',
    'DIRT', 'ADVANTAGE', 'DISADVANTAGE', 'DIRECT', 'FILM', 'FLOWER', 'FORM', 'DISH-CLOTH', 'DISCRIMINATING', 'DSCIPLE',
    'SATISFACTION', 'DISINFECTANT', 'DISPLACEMENT', 'DOCK', 'DOCKYARD', 'DISTILLERY', 'DOUBLE-FACED', 'DONNUT', 'DOLLY', 'DOPHIN',
    'DRAFT', 'DREAM', 'DRESSING-GOWN', 'DRESSING-CASE', 'EARTH-BORN', 'EASY-GOING', 'EAVES', 'EAVESDROPPER', 'EMIGRANT', 'ELEMENTARY',
    'ELECTRO-CARDIOGRAM', 'ELECTROCONVULSIVE', 'EMERGENCY', 'ENCHASE', 'ENIGMATIC', 'EPISCOPATE', 'EPIDEMICAL', 'EMPTY', 'ENTITY', 'EXCESS',
    'EXECUTANT', 'EYE-BALL', 'FAERIE', 'FACTORY', 'FAR-REACHING', 'FAR-OFF', 'FANCY', 'FAKYR', 'FELINE', 'FENDER',
    'FEMINISM', 'FERMENTATION', 'FERRY-BOAT', 'FINALITY', 'FINANCIAL', 'FIRST-BORN', 'FINESSE', 'FIXTURE', 'FOOT-BRIDGE', 'FLURRY',
    'FORMALDEHYDE', 'FORMALITY', 'FRENCH-TOAST', 'FREEBOOTER', 'GALLERY', 'GALLOWS', 'GARNITURE', 'GASKET', 'GENEROUS', 'GENDARM',
    'POLICEMAN', 'FIREMAN', 'FIRE-FIGHTER', 'GENETICS', 'GLOBAL', 'GLOOMY', 'GRATITUDE', 'GRANDMOTHER', 'GREY-HARIED', 'GROTESQUE',
    'GROSSNESS', 'GROOVE', 'GRAVEL', 'GYROSCOPE', 'GUNPOWDER', 'HAMSTER', 'HAND-BARROW', 'HAND-BAG', 'HAND', 'HARSHNESS',
    'HARP', 'HEAVEN', 'HEADY', 'HEART', 'HEAVY-WEIGHT', 'DISHWASH', 'HOOKED', 'HONEST', 'HORSEWOMAN', 'HOTHOUSE',
    'HOUR-HAND', 'HUMOURIST', 'HYBRYD', 'HOWBEIT', 'HUGGER-MUGGER', 'HUNGER', 'HUSBANDRY', 'HYPERSONIC', 'HYPOTENUSE', 'HYDROXIDE',
    'HYPHEN', 'HYDROSTATIC', 'HYPHENATE', 'HYPOCAUST', 'HOLOCAUST', 'HONEY', 'HELICOPTER', 'ICEBOAT', 'IDIOTIC', 'IGNITE',
    'KNIGHT', 'ILL-BRED', 'ILLEGAL', 'IMMOLATION', 'IMPERATOR', 'IMPORT', 'INACTION', 'INAUGURATION', 'INDECENCY', 'INDISCRETION',
    'INDIVIDUALISM', 'INEPT', 'INSTANCE', 'COURT', 'INSINUATE', 'INTRUDER', 'INTERN', 'ISOTOPE', 'IRIDESCENT', 'INVIOLABLE',
    'ISLAND', 'JAR', 'JASMINE', 'JACK-KNIFE', 'JOKER', 'JACKPOT', 'JOKE', 'JAUNT', 'JAMB', 'JOJOBA',
    'JIGGER', 'JIGGERY-POKERY', 'JEWERLY', 'JEALOUS', 'JERKY', 'JINGLE', 'JOINT', 'JUDICIAL', 'JUNIOR', 'JUSTIFICATION',
    'JUSTICE', 'JUXTAPOSE', 'KEYBOARD', 'KINETIC', 'KEYHOLE', 'KIDNAPPER', 'KNOWING', 'KNOCK-ABOUT', 'LANTERN', 'LASTING',
    'LATEX', 'LANOLINE', 'LANES', 'LEAKEAGE', 'LEAF', 'TREE', 'FOREST', 'CHAINSAW', 'LECTURE', 'LEXICOGRAPHER',
    'LICENCE', 'DRIVING-LICENCE', 'LIBERAL', 'LEGENDARY', 'LIKELIHOOD', 'LIMOUSINE', 'LINEMAN', 'LIQUOR', 'LITERALLY', 'LITOSPHERE',
    'LIVING-ROOM', 'LOCALIZATION', 'LOCOMOTION', 'LOCOMOTIVE', 'LONGITUDINAL', 'LONGSHOREMAN', 'LOQUACIOUS', 'LOTION', 'MAGNESIUM', 'COOPER',
    'STEEL', 'STONE', 'IRON', 'GOLD', 'SILVER', 'GUN-SHOP', 'MAINTENANCE', 'MAIL-COACH', 'MANIPULATION', 'MALEFACTOR',
    'MANDATORY', 'MALADJUSTMENT', 'MARROWBONE', 'MATHEMATICAL', 'MAUSOLEUM', 'MIASMA', 'METEOROLOGY', 'METER', 'MICRON', 'MICROCOMPUTER',
    'COMPUTER', 'MINUTE', 'CLOCK', 'MINEFIELD', 'MISAPPREHENSION', 'INQUIRY', 'MISSION', 'MONOCHROME', 'ORCHESTRATE', 'OPERA-HOUSE',
    'OVERTIME', 'OVUM', 'ZONE', 'OZONE', 'OVIPAROUS', 'PATERN', 'PATERNAL', 'PATHOGEN', 'PENTHOUSE', 'PENSIONER',
    'PENTAGON', 'PENETRATION', 'PERSPICIOUS', 'PERIOTNEAL', 'PICKER', 'PIRATE', 'PIGSKIN', 'PLEASURE', 'PLENTEOUS', 'PLUS-FOURS',
    'PLUMBER', 'POLEMIC', 'PORTRATY', 'PORTAL', 'PRESENT', 'PRSENTATION', 'PREDECESOR', 'PROCESS', 'PROCESSOR', 'PRESBYTERY',
    'BUTTER', 'MILK', 'MILKSHAKE', 'SMOOTHIE', 'PEAR', 'APPLE-JUICE', 'PRESCRIPTION', 'PRIESTHOOD', 'PRIMARY', 'PREVENTABLE',
    'PROSECTOR', 'PROPERTY-MAN', 'PROMOTER', 'PUBICIAN', 'PROWESS', 'PULVERIZE', 'PUNCHER', 'RAKE-OFF', 'RAIN', 'RADIO',
    'RAVIOLI', 'RECAP', 'CAPITOL', 'RECEPTIONIST', 'REPOSITORY', 'REPRESENTATION', 'RESENTFULLY', 'RESEMBLE', 'RHINOCEROS', 'REVOLVER',
    'ROVER', 'REVENUE', 'REVEALTION', 'RUM', 'ROUNDHOUSE', 'ROTTER', 'RULE', 'ROTUNDITY', 'RUNABOUT', 'RUTHLESSNESS',
    'SCOOLROOM', 'SCORCHER', 'SCENTLESS', 'SCRIBBLE', 'SEABOARD', 'SEA-FEARE', 'SEA-DOG', 'SEEDER', 'SEEP', 'SEERSUCKER',
    'SECOND-HAND', 'SEESAW', 'SEVERELY', 'SERIOUS', 'SEPSIS', 'SERENADE', 'SHAMEFACED', 'SHORTHAND', 'SHORELESS', 'SHIRT-FRONT',
    'SHIPOWNER', 'SHIPBOARD', 'SHIPMENT', 'ORDER', 'RECEIPT', 'SLATE', 'SKIN-DEEP', 'SLEEPER', 'SLAVE', 'SKEWBALD',
    'SMELTER', 'COMBINER', 'SMITE', 'SLIT', 'FIGHT', 'SOCIABLE', 'SNIPER', 'SMOOTH-TEMPERED', 'SNIVEL', 'SMOKE',
    'SOTTISH', 'SOCKS', 'SUMBER', 'SOLICITIOUS', 'SOFT-WOOD', 'SOFT-SPOKEN', 'SPEARMEN', 'STERN', 'SUBSCRIBE', 'SUBJUNCTIVE',
    'SWIPE', 'SWEAT', 'TATTERDEMALION', 'TART', 'TAPE-RECORDER', 'DUCK-TAPE', 'TAKEAWAY', 'DEPARTURE', 'VOYAGE', 'TATOO',
    'TENANCY', 'TOWNEE', 'TOPKNOT', 'TRIOXIDE', 'TRENDY', 'TEACHEROUR', 'TRIPARTITE', 'TUMBLE-DOWN', 'TOTHLESS', 'TWSTER',
    'SINGER', 'UMBRELLA', 'UNARMED', 'REQUIRED', 'UNREQUITED', 'EXIT', 'UNSTEADY', 'UNSKILLFULL', 'UTTERMOST', 'URBAN',
    'UTOPIA', 'VALUE', 'VAMP', 'VAMPIRE', 'DRACULA', 'VERDUROUS', 'VENTRICULAR', 'VERILY', 'VERMOUT', 'VIKING',
    'VULGARISM', 'ENVELOPE', 'POST', 'VULTURE', 'EAGLE', 'WAFFLE', 'WALK', 'WAGE-EARNER', 'WALLABY', 'EMPLOYER',
    'WAINSCOT', 'WATERMAN', 'WATER-SUPPLY', 'WATER-BOTTLE', 'WATERMELON', 'WATERMARK', 'WELL-BEING', 'WEIRD', 'WELL-INTENTIONED', 'WHIRLPOOL',
    'WESTERN', 'WHISKY', 'WOODWORK', 'FIREWOOD', 'WIRELESS', 'WOODWARD', 'XENON', 'XENOPHOBIA', 'X-RAY', 'XEROX',
    'XYLOPHONE', 'YOKEFELLOW', 'YESTERDAY', 'YOUNKER', 'ZEBRA', 'ZOOM', 'YUMMY', 'YOUNG', 'YOUTH', 'ZEST',
    'ZERO', 'ZODICIAL', 'ZOMBIE', 'ZEALOUS', 'ZUCCHINI', 'ZIRCONIUM'
];
var Baza_cuvinte_it = ['GIORNO', "VITA", "FABBRICHEREI", 'VELOCE', 'NASALMENTE', 'EBEFRENCIA'];
var alpha = ['A', 'Ă', 'Â', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Î', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'Ș', 'T', 'Ț', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var key = [A, Ă, Â, B, C, D, E, F, G, H, I, Î, J, K, L, M, N, O, P, Q, R, S, Ș, T, Ț, U, V, W, X, Y, Z];
var buttons = new Array();
var rnd;
var mstk = 0;
var ok = 0;
var cnt = 0;
var ver = 1;
var st = 0;
var lng = 1;
var points = 0;


rnd = Math.floor(Math.random() * 595) + 1;
Length(Baza_cuvinte_ro[rnd]);
RO.style.color = "Green";

//add event on language
RO.addEventListener("click", function() {
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }

    buttons = new Array();
    mstk = 0;
    ok = 0;
    cnt = 0;
    ver = 1;
    lng = 1;
    st = 0;

    wrong.innerHTML = " Ati folosit:  ";
    txt.innerHTML = "  ";

    rnd = Math.floor(Math.random() * 595) + 1;
    Length(Baza_cuvinte_ro[rnd]);

    RO.style.color = "Green";
    IT.style.color = "Orange";
    EN.style.color = "Orange";

    for (let j = 0; j < 31; j++) {
        key[j].disabled = false;
    }
    head.style.display = "none";
    body.style.display = "none";
    arm1.style.display = "none";
    arm2.style.display = "none";
    leg1.style.display = "none";
    leg2.style.display = "none";

    A.style.color = "white";
    Ă.style.color = "white";
    Ă.disabled = false;
    Ă.style.backgroundColor = "black";
    Â.style.color = "white";
    Â.disabled = false;
    Â.style.backgroundColor = "black";
    B.style.color = "white";
    C.style.color = "white";
    D.style.color = "white";
    E.style.color = "white";
    F.style.color = "white";
    G.style.color = "white";
    H.style.color = "white";
    I.style.color = "white";
    Î.style.color = "white";
    Î.disabled = false;
    Î.style.backgroundColor = "black";
    J.style.color = "white";
    K.style.color = "white";
    L.style.color = "white";
    M.style.color = "white";
    N.style.color = "white";
    O.style.color = "white";
    P.style.color = "white";
    Q.style.color = "white";
    R.style.color = "white";
    S.style.color = "white";
    Ș.disabled = false;
    Ș.style.backgroundColor = "black";
    Ș.style.color = "white";
    T.style.color = "white";
    Ț.disabled = false;
    Ț.style.backgroundColor = "balck";
    Ț.style.color = "white";
    U.style.color = "white";
    V.style.color = "white";
    W.style.color = "white";
    X.style.color = "white";
    Y.style.color = "white";
    Z.style.color = "white";

});
IT.addEventListener("click", function() {
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }

    buttons = new Array();

    mstk = 0;
    ok = 0;
    cnt = 0;
    ver = 1;
    lng = 3;
    st = 0;

    wrong.innerHTML = " Avete usato: ";
    txt.innerHTML = "  ";

    rnd = Math.floor(Math.random() * 595) + 1;
    Length(Baza_cuvinte_it[rnd]);

    IT.style.color = "Green";
    RO.style.color = "Orange";
    EN.style.color = "Orange";

    for (let j = 0; j < 31; j++) {
        key[j].disabled = false;
    }

    head.style.display = "none";
    body.style.display = "none";
    arm1.style.display = "none";
    arm2.style.display = "none";
    leg1.style.display = "none";
    leg2.style.display = "none";

    A.style.color = "white";
    Ă.disabled = true;
    Ă.style.backgroundColor = "grey";
    Ă.style.color = "red";
    Â.disabled = true;
    Â.style.backgroundColor = "grey";
    Â.style.color = "red";
    B.style.color = "white";
    C.style.color = "white";
    D.style.color = "white";
    E.style.color = "white";
    F.style.color = "white";
    G.style.color = "white";
    H.style.color = "white";
    I.style.color = "white";
    Î.disabled = true;
    Î.style.backgroundColor = "grey";
    Î.style.color = "red";
    J.style.color = "white";
    K.style.color = "white";
    L.style.color = "white";
    M.style.color = "white";
    N.style.color = "white";
    O.style.color = "white";
    P.style.color = "white";
    Q.style.color = "white";
    R.style.color = "white";
    S.style.color = "white";
    Ș.disabled = true;
    Ș.style.backgroundColor = "grey";
    Ș.style.color = "red";
    T.style.color = "white";
    Ț.disabled = true;
    Ț.style.backgroundColor = "grey";
    Ț.style.color = "red";
    U.style.color = "white";
    V.style.color = "white";
    W.style.color = "white";
    X.style.color = "white";
    Y.style.color = "white";
    Z.style.color = "white";
});
EN.addEventListener("click", function() {
    while (word.firstChild) {
        word.removeChild(word.firstChild);
    }

    buttons = new Array();

    mstk = 0;
    ok = 0;
    cnt = 0;
    ver = 1;
    lng = 2;
    st = 0;

    wrong.innerHTML = " Used: ";
    txt.innerHTML = "  ";

    rnd = Math.floor(Math.random() * 595) + 1;
    Length(Baza_cuvinte_en[rnd]);

    EN.style.color = "Green";
    IT.style.color = "Orange";
    RO.style.color = "Orange";

    for (let j = 0; j < 31; j++) {
        key[j].disabled = false;
    }

    head.style.display = "none";
    body.style.display = "none";
    arm1.style.display = "none";
    arm2.style.display = "none";
    leg1.style.display = "none";
    leg2.style.display = "none";

    A.style.color = "white";
    Ă.disabled = true;
    Ă.style.backgroundColor = "grey";
    Ă.style.color = "red";
    Â.disabled = true;
    Â.style.backgroundColor = "grey";
    Â.style.color = "red";
    B.style.color = "white";
    C.style.color = "white";
    D.style.color = "white";
    E.style.color = "white";
    F.style.color = "white";
    G.style.color = "white";
    H.style.color = "white";
    I.style.color = "white";
    Î.disabled = true;
    Î.style.backgroundColor = "grey";
    Î.style.color = "red";
    J.style.color = "white";
    K.style.color = "white";
    L.style.color = "white";
    M.style.color = "white";
    N.style.color = "white";
    O.style.color = "white";
    P.style.color = "white";
    Q.style.color = "white";
    R.style.color = "white";
    S.style.color = "white";
    Ș.disabled = true;
    Ș.style.backgroundColor = "grey";
    Ș.style.color = "red";
    T.style.color = "white";
    Ț.disabled = true;
    Ț.style.backgroundColor = "grey";
    Ț.style.color = "red";
    U.style.color = "white";
    V.style.color = "white";
    W.style.color = "white";
    X.style.color = "white";
    Y.style.color = "white";
    Z.style.color = "white";
});

//add event on buttons
A.addEventListener("click", function() {
    cnt = 0;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        A.style.color = "lime";
    } else {
        A.style.color = "Red";
    }
    A.disabled = true;
});
Ă.addEventListener("click", function() {
    cnt = 1;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Ă.style.color = "lime";
    } else {
        Ă.style.color = "Red";
    }
    Ă.disabled = true;
});
Â.addEventListener("click", function() {
    cnt = 2;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Â.style.color = "lime";
    } else {
        Â.style.color = "Red";
    }
    Â.disabled = true;
});
B.addEventListener("click", function() {
    cnt = 3;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        B.style.color = "lime";
    } else {
        B.style.color = "Red";
    }
    B.disabled = true;
});
C.addEventListener("click", function() {
    cnt = 4;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        C.style.color = "lime";
    } else {
        C.style.color = "Red";
    }
    C.disabled = true;
});
D.addEventListener("click", function() {
    cnt = 5;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        D.style.color = "lime";
    } else {
        D.style.color = "Red";
    }
    D.disabled = true;
});
E.addEventListener("click", function() {
    cnt = 6;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        E.style.color = "lime";
    } else {
        E.style.color = "Red";
    }
    E.disabled = true;
});
F.addEventListener("click", function() {
    cnt = 7;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        F.style.color = "lime";
    } else {
        F.style.color = "Red";
    }
    F.disabled = true;
})
G.addEventListener("click", function() {
    cnt = 8;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        G.style.color = "lime";
    } else {
        G.style.color = "Red";
    }
    G.disabled = true;
});
H.addEventListener("click", function() {
    cnt = 9;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        H.style.color = "lime";
    } else {
        H.style.color = "Red";
    }
    H.disabled = true;
});
I.addEventListener("click", function() {
    cnt = 10;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        I.style.color = "lime";
    } else {
        I.style.color = "Red";
    }
    I.disabled = true;
});
Î.addEventListener("click", function() {
    cnt = 11;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Î.style.color = "lime";
    } else {
        Î.style.color = "Red";
    }
    Î.disabled = true;
});
J.addEventListener("click", function() {
    cnt = 12;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        J.style.color = "lime";
    } else {
        J.style.color = "Red";
    }
    J.disabled = true;
});
K.addEventListener("click", function() {
    cnt = 13;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        K.style.color = "lime";
    } else {
        K.style.color = "Red";
    }
    KS.disabled = true;
});
L.addEventListener("click", function() {
    cnt = 14;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        L.style.color = "lime";
    } else {
        L.style.color = "Red";
    }
    L.disabled = true;
});
M.addEventListener("click", function() {
    cnt = 15;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        M.style.color = "lime";
    } else {
        M.style.color = "Red";
    }
    M.disabled = true;
});
N.addEventListener("click", function() {
    cnt = 16;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        N.style.color = "lime";
    } else {
        N.style.color = "Red";
    }
    N.disabled = true;
});
O.addEventListener("click", function() {
    cnt = 17;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        O.style.color = "lime";
    } else {
        O.style.color = "Red";
    }
    O.disabled = true;
});
P.addEventListener("click", function() {
    cnt = 18;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        P.style.color = "lime";
    } else {
        P.style.color = "Red";
    }
    P.disabled = true;
});
Q.addEventListener("click", function() {
    cnt = 19;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Q.style.color = "lime";
    } else {
        Q.style.color = "Red";
    }
    Q.disabled = true;
});
R.addEventListener("click", function() {
    cnt = 20;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        R.style.color = "lime";
    } else {
        R.style.color = "Red";
    }
    R.disabled = true;
});
S.addEventListener("click", function() {
    cnt = 21;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        S.style.color = "lime";
    } else {
        S.style.color = "Red";
    }
    S.disabled = true;
});
Ș.addEventListener("click", function() {
    cnt = 22;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Ș.style.color = "lime";
    } else {
        Ș.style.color = "Red";
    }
    Ș.disabled = true;
});
T.addEventListener("click", function() {
    cnt = 23;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        T.style.color = "lime";
    } else {
        T.style.color = "Red";
    }
    T.disabled = true;
});
Ț.addEventListener("click", function() {
    cnt = 24;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Ț.style.color = "lime";
    } else {
        Ț.style.color = "Red";
    }
    Ț.disabled = true;
});
U.addEventListener("click", function() {
    cnt = 25;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        U.style.color = "lime";
    } else {
        U.style.color = "Red";
    }
    U.disabled = true;
});
V.addEventListener("click", function() {
    cnt = 26;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        V.style.color = "lime";
    } else {
        V.style.color = "Red";
    }
    V.disabled = true;
});
W.addEventListener("click", function() {
    cnt = 27;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        W.style.color = "lime";
    } else {
        W.style.color = "Red";
    }
    W.disabled = true;
});
X.addEventListener("click", function() {
    cnt = 28;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        X.style.color = "lime";
    } else {
        X.style.color = "Red";
    }
    X.disabled = true;
});
Y.addEventListener("click", function() {
    cnt = 29;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Y.style.color = "lime";
    } else {
        Y.style.color = "Red";
    }
    Y.disabled = true;
});
Z.addEventListener("click", function() {
    cnt = 30;
    if (lng == 1) {
        Letter(Baza_cuvinte_ro[rnd]);
    } else {
        if (lng == 2) {
            Letter(Baza_cuvinte_en[rnd]);
        } else {
            Letter(Baza_cuvinte_it[rnd]);
        }
    }
    if (ok == 1) {
        Z.style.color = "lime";
    } else {
        Z.style.color = "Red";
    }
    Z.disabled = true;
});


//function that detect the word`s length and create the button with the word
function Length(wrd) {

    len = wrd.length;

    for (let i = 0; i < len; i++) {

        let btn = document.createElement("button");
        buttons.push(btn);

        if (i == 0) {
            btn.style.marginLeft = "7px";
        }

        if (wrd[i] == "-") {
            btn.innerHTML = " - ";
        } else {
            btn.innerHTML = " _ ";
        }
        btn.style.width = "50px";
        btn.style.height = "50px";
        btn.style.color = "white";
        btn.style.fontSize = "33px";
        btn.style.border = "none";
        btn.style.marginTop = "50px";
        btn.disabled = true;
        btn.style.backgroundColor = "gray";

        word.appendChild(btn);
    }
}

//functions for displaying elements on drawing part
function mistakes() {
    if (mstk == 1) {
        head.style.display = "block";
    } else {
        if (mstk == 2) {
            body.style.display = "block";
        } else {
            if (mstk == 3) {
                arm1.style.display = "block";
            } else {
                if (mstk == 4) {
                    arm2.style.display = "block";
                } else {
                    if (mstk == 5) {
                        leg1.style.display = "block";
                    } else {
                        leg2.style.display = "block";

                        st = 1;

                        for (let j = 0; j < 31; j++) {
                            key[j].disabled = true;
                            key[j].style.color = "red";
                        }

                        if (lng == 1) {
                            txt.innerHTML = "UPS! AI PIERDUT!";
                            for (let i = 0; i < len; i++) {
                                buttons[i].innerHTML = Baza_cuvinte_ro[rnd][i];
                                buttons[i].style.color = "red";
                            }
                        } else {
                            if (lng == 2) {
                                txt.innerHTML = "OOPS! YOU LOST!";
                                for (let i = 0; i < len; i++) {
                                    buttons[i].innerHTML = Baza_cuvinte_en[rnd][i];
                                    buttons[i].style.color = "red";
                                }
                            } else {
                                txt.innerHTML = "OPS! AVETE PERSO!";
                                for (let i = 0; i < len; i++) {
                                    buttons[i].innerHTML = Baza_cuvinte_it[rnd][i];
                                    buttons[i].style.color = "red";
                                }
                            }
                        }
                    }
                    txt.style.color = "red";
                    txt.style.fontSize = "40px";
                    txt.style.textAlign = "center";
                    txt.style.weight = "bold";
                }
            }
        }
    }
}


//function for the button with button
function Letter(word) {
    ok = 0;

    for (let i = 0; i < len; i++) {
        if (word[i] == alpha[cnt]) {
            buttons[i].innerHTML = alpha[cnt];
            ok = 1;
        }
    }

    wrong.innerHTML += " " + alpha[cnt] + ", ";

    if (ok == 0) {
        mstk++;
        mistakes();
    }

    verify();
}

function verify() {

    ver = 1;

    for (let i = 0; i < len; i++) {
        if (buttons[i].innerText == "_") {
            ver = 0;
        }
    }

    if (ver == 1 && st == 0) {
        for (let j = 0; j < 31; j++) {
            key[j].disabled = true;
            key[j].style.color = "lime";
        }

        txt.innerHTML = "FELICITĂRI! AI CÂȘTIGAT!";
        txt.style.color = "red";
        txt.style.fontSize = "40px";
        txt.style.textAlign = "center";
        txt.style.weight = "bold";
    }


}