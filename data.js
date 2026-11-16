// Add or edit players here. Order does NOT matter: the page ranks everyone automatically.
// Keep a comma after every player except the last one.
const PLAYERS = [
  {"player": "piñata", "kills": 31105, "rounds": 9158, "deaths": 10387, "xp": 14648693, "level": 1465}, //UPDATED
  {"player": "minionbob", "kills": 27001, "rounds": 7251, "deaths": 11691, "xp": 11398704, "level": 1140}, //UPDATED
  {"player": "NQ", "kills": 23824, "rounds": 9018, "deaths": 12590, "xp": 8864609, "level": 887}, //UPDATED//
  {"player": "CADAVER", "kills": 21724, "rounds": 4476, "deaths": 4829, "xp": 8445456, "level": 845},
  {"player": "Lunar (Citizen)", "kills": 20076, "rounds": 6479, "deaths": 6382, "xp": 9092366, "level": 910},
  {"player": "Sleepy T", "kills": 19368, "rounds": 7441, "deaths": 10938, "xp": 9496893, "level": 950},
  {"player": "Ivceski965", "kills": 19271, "rounds": 7274, "deaths": 9368, "xp": 7942036, "level": 795},
  {"player": "AnarchyzZ", "kills": 17107, "rounds": 7135, "deaths": 7494, "xp": 7034510, "level": 704},
  {"player": "Chibiusagi", "kills": 17018, "rounds": 9051, "deaths": 21302, "xp": 6088256, "level": 609}, //UPDATED//
  {"player": "JOHN", "kills": 16120, "rounds": 5873, "deaths": 11937, "xp": 6363478, "level": 637},
  {"player": "StandingTrain", "kills": 16286, "rounds": 4366, "deaths": 6445, "xp": 4824425, "level": 483}, //UPDATED
  {"player": "Cheeto", "kills": 14889, "rounds": 5323, "deaths": 7809, "xp": 5853892, "level": 586},
  {"player": "coltmp4", "kills": 13519, "rounds": 5400, "deaths": 8895, "xp": 5905319, "level": 591},
  {"player": "GoldenGrave2025", "kills": 13449, "rounds": 4120, "deaths": 8217, "xp": 5083872, "level": 509},
  {"player": "Qwuetsy", "kills": 13494, "rounds": 5218, "deaths": 5843, "xp": 5361786, "level": 537}, //UPDATED//
  {"player": "Mr. Strawberry", "kills": 13987, "rounds": 4862, "deaths": 9215, "xp": 5321390, "level": 533}, //UPDATED//
  {"player": "MRBUNGLE", "kills": 11266, "rounds": 2669, "deaths": 2122, "xp": 5084877, "level": 600}, "retired": true}, //UPDATED//
  {"player": "Tancred Payans", "kills": 11448, "rounds": 3036, "deaths": 5280, "xp": 4589025, "level": 459}, //UPDATED//
  {"player": "Mr Cookie", "kills": 10756, "rounds": 5560, "deaths": 10389, "xp": 4622403, "level": 463},
  {"player": "Dorky", "kills": 10317, "rounds": 4716, "deaths": 4162, "xp": 4670074, "level": 468},
  {"player": "puaggy", "kills": 10869, "rounds": 4385, "deaths": 6521, "xp": 4204742, "level": 421}, //UPDATED//
  {"player": "C.A.S.S.I.E. \"Ra", "kills": 9620, "rounds": 4601, "deaths": 6343, "xp": 4588564, "level": 459},
  {"player": "NE0N", "kills": 9036, "rounds": 4169, "deaths": 6362, "xp": 4945111, "level": 495},
  {"player": "Awaremez", "kills": 8815, "rounds": 3459, "deaths": 4001, "xp": 4435842, "level": 444},
  {"player": "bosh", "kills": 8599, "rounds": 2828, "deaths": 2956, "xp": 3141494, "level": 315},
  {"player": "Night", "kills": 8447, "rounds": 2742, "deaths": 6082, "xp": 2742314, "level": 274},
  {"player": "Dabudebu", "kills": 10455, "rounds": 2724, "deaths": 7531, "xp": 3938026, "level": 394}, //UPDATED//
  {"player": "fluffypotato", "kills": 8721, "rounds": 2595, "deaths": 5446, "xp": 2438024, "level": 244}, //UPDATED//
  {"player": "IHATEMYNAME", "kills": 7845, "rounds": 6133, "deaths": 10987, "xp": 2390168, "level": 240},
  {"player": "business monke", "kills": 7507, "rounds": 4885, "deaths": 6810, "xp": 3011794, "level": 302},
  {"player": "Grapefruit", "kills": 8125, "rounds": 3647, "deaths": 4733, "xp": 3755509, "level": 376}, //UPDATED//
  {"player": ":)", "kills": 7105, "rounds": 2497, "deaths": 4277, "xp": 2113871, "level": 212},
  {"player": "iquov", "kills": 6396, "rounds": 2370, "deaths": 2904, "xp": 3024889, "level": 303},
  {"player": "Grandwizardmar", "kills": 6268, "rounds": 1744, "deaths": 3670, "xp": 2647991, "level": 265},
  {"player": "RADIODEMON", "kills": 6148, "rounds": 2432, "deaths": 5219, "xp": 2085168, "level": 209},
  {"player": "wizbuck", "kills": 9428, "rounds": 2091, "deaths": 2477, "xp": 3583012, "level": 359}, //UPDATED//
  {"player": "Timur Titan", "kills": 5516, "rounds": 6631, "deaths": 8405, "xp": 1904246, "level": 191},
  {"player": "brochacho", "kills": 5420, "rounds": 2176, "deaths": 3570, "xp": 1945273, "level": 195},
  {"player": "Visi", "kills": 5209, "rounds": 3939, "deaths": 4623, "xp": 3026660, "level": 303},
  {"player": "MIGUEL", "kills": 5202, "rounds": 3248, "deaths": 4271, "xp": 2399338, "level": 240},
  {"player": "David Martinez", "kills": 4692, "rounds": 2823, "deaths": 5745, "xp": 1718867, "level": 172},
  {"player": "Lime", "kills": 4587, "rounds": 4563, "deaths": 4932, "xp": 5367651, "level": 537},
  {"player": "Sterling", "kills": 4573, "rounds": 3040, "deaths": 4018, "xp": 2122422, "level": 213},
  {"player": "Moddogski", "kills": 4127, "rounds": 3988, "deaths": 5723, "xp": 1878358, "level": 188},
  {"player": "ExtraRares", "kills": 5064, "rounds": 2232, "deaths": 4757, "xp": 2475571, "level": 248}, //UPDATED//
  {"player": "Luxxy", "kills": 4377, "rounds": 1697, "deaths": 2811, "xp": 1848502, "level": 185}, //UPDATED//
  {"player": "IVCESKI", "kills": 4540, "rounds": 939, "deaths": 1138, "xp": 1882032, "level": 189}, //UPDATED//
  {"player": "Booonaana", "kills": 3658, "rounds": 1950, "deaths": 4017, "xp": 1496025, "level": 150},
  {"player": "Tmouse", "kills": 3535, "rounds": 1411, "deaths": 3068, "xp": 1131676, "level": 114},
  {"player": "DuckDucer", "kills": 3505, "rounds": 1692, "deaths": 3798, "xp": 1527802, "level": 153},
  {"player": "Silver Surfer", "kills": 3481, "rounds": 1963, "deaths": 3614, "xp": 1393085, "level": 140},
  {"player": "Bean", "kills": 3451, "rounds": 1336, "deaths": 2070, "xp": 1707196, "level": 171},
  {"player": "Ess/Splitcolor", "kills": 3381, "rounds": 2085, "deaths": 4434, "xp": 1239507, "level": 124},
  {"player": "Pib", "kills": 3147, "rounds": 1528, "deaths": 3475, "xp": 1154786, "level": 116},
  {"player": "tonycliftonshade", "kills": 2726, "rounds": 571, "deaths": 787, "xp": 1350115, "level": 136},
  {"player": "diamondguy", "kills": 2396, "rounds": 1532, "deaths": 1844, "xp": 825908, "level": 83},
  {"player": "Zork", "kills": 2358, "rounds": 840, "deaths": 1626, "xp": 1077078, "level": 108},
  {"player": "Synthetic", "kills": 2341, "rounds": 952, "deaths": 2252, "xp": 924869, "level": 93},
  {"player": "Purify", "kills": 2340, "rounds": 1022, "deaths": 1107, "xp": 1080986, "level": 109},
  {"player": "Mastooper", "kills": 2374, "rounds": 2059, "deaths": 3081, "xp": 1144618, "level": 115}, //UPDATED//
  {"player": "Blue Sparrow", "kills": 2171, "rounds": 678, "deaths": 1702, "xp": 755460, "level": 76},
  {"player": "Scratcher", "kills": 2051, "rounds": 1516, "deaths": 3042, "xp": 773895, "level": 90},
  {"player": "knucklehead", "kills": 2014, "rounds": 719, "deaths": 912, "xp": 796235, "level": 80},
  {"player": "Sikmatan", "kills": 1834, "rounds": 928, "deaths": 1986, "xp": 738910, "level": 74},
  {"player": "Barney", "kills": 1766, "rounds": 890, "deaths": 1414, "xp": 605618, "level": 61},
  {"player": "Manhole", "kills": 1723, "rounds": 990, "deaths": 1623, "xp": 734813, "level": 74},
  {"player": "yteg", "kills": 1742, "rounds": 1146, "deaths": 2478, "xp": 660215, "level": 67}, //UPDATED//
  {"player": "Burkey658", "kills": 1677, "rounds": 1930, "deaths": 3050, "xp": 731410, "level": 74},
  {"player": "naydoe", "kills": 1648, "rounds": 1610, "deaths": 3306, "xp": 625927, "level": 63},
  {"player": "ᓚᘏᗢ Lobb", "kills": 1530, "rounds": 779, "deaths": 1136, "xp": 655113, "level": 66},
  {"player": "Lain", "kills": 1454, "rounds": 821, "deaths": 2138, "xp": 493255, "level": 50},
  {"player": "Kirby", "kills": 1400, "rounds": 720, "deaths": 1775, "xp": 253809, "level": 26},
  {"player": "Dundee", "kills": 1389, "rounds": 687, "deaths": 1685, "xp": 563562, "level": 57},
  {"player": "SableV6", "kills": 1325, "rounds": 866, "deaths": 1229, "xp": 648287, "level": 65},
  {"player": "Godseeker Yhar", "kills": 1294, "rounds": 801, "deaths": 1863, "xp": 669716, "level": 67},
  {"player": "bisha53", "kills": 1252, "rounds": 779, "deaths": 1561, "xp": 607180, "level": 61},
  {"player": "Matt", "kills": 1234, "rounds": 468, "deaths": 423, "xp": 543974, "level": 55},
  {"player": "wafffles", "kills": 1207, "rounds": 1085, "deaths": 1685, "xp": 568952, "level": 57},
  {"player": "bobert", "kills": 1111, "rounds": 1259, "deaths": 2415, "xp": 418962, "level": 42},
  {"player": "simall", "kills": 7381, "rounds": 3696, "deaths": 7037, "xp": 2567534, "level": 257}, //UPDATED//
  {"player": "Ducky [Vox]", "kills": 4689, "rounds": 1717, "deaths": 2415, "xp": 2339484, "level": 234}, //UPDATED//
];
