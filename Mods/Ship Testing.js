const Game_Options = {
    Mod_Name: "Ship Testing",
    Starting_ship: 101,
    Subspace_Allow: false,
    Auto_Pickup_Gems: true,
};


const Ships = {
    // All Ships Go here...
    // For Example:
    // 101: {
    //     name: "Fly",
    //     code: '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}',
    // }
};

Object.assign(Game_Options, {
    spectatorShip: 191,
    adminShips: [791],
});

this.options = {
    map_name: Game_Options.Mod_Name || "Ship Testing",
    max_players: 12,
    starting_ship: 800,
    max_level: 6,
    choose_ship: [Game_Options.Starting_ship],
    speed_mod: 1.2,
    reset_tree: true,
    weapons_store: false,
    soundtrack: "argon.mp3",
    custom_map: "",
    map_size: 100,
    vocabulary: [
        { text: "You", icon: "\u004e", key: "O" },
        { text: "Me", icon: "\u004f", key: "E" },
        { text: "Wait", icon: "\u0048", key: "T" },
        { text: "Yes", icon: "\u004c", key: "Y" },

        { text: "No", icon: "\u004d", key: "N" },
        { text: "Heal", icon: "\u0037", key: "H" },
        { text: "Sorry", icon: "\u00a1", key: "S" },
        { text: "My ship", icon: "\u0061", key: "M" },

        { text: "Attack", icon: "\u0049", key: "A" },
        { text: "Follow", icon: "\u0050", key: "F" },
        { text: "Good Game", icon: "\u00a3", key: "G" },
        { text: "Thanks", icon: "\u0041", key: "X" },

        { text: "Stats", icon: "\u0078", key: "K" },
        { text: "Hmm?", icon: "\u004b", key: "Q" },
        { text: "Discord", icon: "\u007b", key: "D" },
        { text: "No Prob", icon: "\u0047", key: "P" },

        { text: "Strick", icon: "\u0057", key: "U" },
        { text: "Idiot", icon: "\u0079", key: "I" },
        { text: " ", icon: "𝗟𝗮𝗴", key: "V" },
        { text: "Spectate", icon: "\u0059", key: "L" },
    ],
    ships: [
        ...Object.values(Ships).flatMap(a => a.code),
        '{"name":"Spectator","level":1.9,"model":1,"size":0.025,"zoom":2.45063709469745,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":200}}',
        '{"name":"Trisbaena","level":7.9,"model":1,"size":0.6,"zoom":0.75,"specs":{"shield":{"capacity":[1000,1000],"reload":[1e+308,1e+308]},"generator":{"capacity":[1e+308,1e+308],"reload":[1e+308,1e+308]},"ship":{"mass":1e+308,"speed":[1,1],"rotation":[360,360],"acceleration":[1,1]}},"bodies":{"main":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-310,-310,-320,-320,-320,-320,-320,-330,-350,-350,-310,-310,-300,-300,-270,-266,-230,-230,-200,-200,-180,-180,-150,-150,-130,-130,-100,-100,-80,-80,-50,-50,-30,-30,0,0,40,44,230,230,270,270,370,370,350,350],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,16,17,18,19,20,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0],"height":[0,15,16,17,18,19,20,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0],"texture":[5,17,5,17,5,17,5,17,5.1,5.1,5,17,5,5.1,5,5,5,5,17,17,17,5,17,17,17,5,17,17,17,5,17,17,17,5,5,5.1,5.1,5,5.1,5.1,5,5.1,17,5,17],"propeller":true},"front_spike1":{"section_segments":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-340,-340,-335,-330,-330,-340,-340,-345,-330],"z":[0,0,0,0,0,0,0,0,0]},"width":[20,40,45,45,20,20,0,0,10],"height":[20,40,45,45,20,20,0,0,10],"laser":{"damage":[1000,1000],"rate":1,"type":1,"speed":[400,400],"number":1,"angle":0,"error":0,"recoil":0},"texture":5},"front_spike2":{"section_segments":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-340,-340,-335,-330,-330,-340,-340,-345,-330],"z":[0,0,0,0,0,0,0,0,0]},"width":[20,40,45,45,20,20,0,0,10],"height":[20,40,45,45,20,20,0,0,10],"laser":{"damage":[1000,1000],"rate":1,"type":1,"speed":[400,400],"number":1,"angle":0,"error":0,"recoil":0},"texture":5},"cockpit":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":0,"z":50},"position":{"x":[0,0,0,0,0],"y":[60,65,100,140,165],"z":[0,0,0,0,20]},"width":[0,35,35,35,0],"height":[0,30,60,64,0],"texture":[49,49,49,5]},"cockpit_detail1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":90,"z":98},"position":{"x":[0,0,0,0],"y":[-40,10,50,50],"z":[-35,-5,0,0]},"width":[5,5,5,0],"height":[5,5,5,0],"texture":[5]},"cockpit_detail2":{"section_segments":[90,180,270,360],"offset":{"x":23,"y":90,"z":97},"position":{"x":[0,0,0,0],"y":[-40,10,50,50],"z":[-35,-5,0,0]},"width":[5,5,5,0],"height":[5,5,5,0],"texture":[5]},"cockpit_detail3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":140,"z":98},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-27,-27,-23,-23,23,23,27,27],"z":[-11,-11,0,0,0,0,-11,-11]},"width":[0,5,5,5,5,5,5,0],"height":[0,17,5,5,5,5,17,0],"texture":[5],"angle":90},"cockpit_detail4":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":100,"z":95},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-27,-27,-23,-23,23,23,27,27],"z":[-12,-12,0,0,0,0,-12,-12]},"width":[0,5,5,5,5,5,5,0],"height":[0,15,5,5,5,5,15,0],"texture":[5],"angle":90},"cockpit_back1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":60},"position":{"x":[0,0,0,0,0],"y":[120,120,180,190,190],"z":[0,0,0,0,0,0,0]},"width":[0,60,60,60,0],"height":[0,40,40,30,0],"texture":[5,5,5]},"cockpit_back2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":40},"position":{"x":[0,0,0,0],"y":[130,130,195,195],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,70,70,0],"height":[0,60,60,0],"texture":[5,17]},"cockpit_back3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-10,"z":35},"position":{"x":[0,0,0,0],"y":[140,140,205,205],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,80,80,0],"height":[0,60,60,0],"texture":[5,5]},"back_joint1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":15,"y":195,"z":69},"position":{"x":[0,0,0,0,0],"y":[0,0,30,60,60],"z":[0,0,0,-10,-10]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,5,17,5]},"back_joint2":{"section_segments":[90,180,270,360],"offset":{"x":37,"y":195,"z":60},"position":{"x":[0,0,0,-5,-5],"y":[0,0,30,60,60],"z":[0,0,0,-5,-5]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,5,17,5]},"back_joint3":{"section_segments":[90,180,270,360],"offset":{"x":57,"y":195,"z":40},"position":{"x":[0,0,0,-5,-5],"y":[0,0,30,60,60],"z":[0,0,0,-5,-5]},"width":[0,10,10,10,0],"height":[0,10,10,10,0],"texture":[17,5,17,5]},"wing_shields1":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0,"y":95,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,30,50,50,60,60,90,105,125,125],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,30,30,30,25,25,25,25,25,25,0],"texture":[5,5,5,5,5,5,5.1,5,5]},"wing_shields2":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0.01,"y":95,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[1,0,30,50,50,59,59,90,105,125,126],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,6,6,6,5,5,5,5,5,5,0],"texture":[17]},"wing_shields3":{"section_segments":[35,45,55,125,135,145,215,225,235,305,315,325],"offset":{"x":0.01,"y":95,"z":-7},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[1,0,30,50,50,59,59,90,105,125,126],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,100,130,130,120,123,140,140,120,115,0],"height":[0,6,6,6,5,5,5,5,5,5,0],"texture":[17]},"joint1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":0},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,210,210,0],"height":[0,15,15,0],"texture":[5]},"joint2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":5},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,211,211,0],"height":[0,5,5,0],"texture":[17]},"joint3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":150,"z":-5},"position":{"x":[0,0,0,0],"y":[-5,10,30,50],"z":[0,0,0,0]},"width":[0,211,211,0],"height":[0,5,5,0],"texture":[17]},"disc1":{"section_segments":12,"offset":{"x":80,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.5,6.5,0,0,0,0,0,6.5,6.5,6.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[5,5,5,5,5,5,17,5],"angle":-90},"disc2":{"section_segments":12,"offset":{"x":90,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.5,6.5,0,0,0,0,0,6.5,6.5,6.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[5,5,5,5,5,5,17,5],"angle":-90},"disc3":{"section_segments":12,"offset":{"x":100,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.5,6.5,0,0,0,0,0,6.5,6.5,6.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"height":[24,24,24,28.8,28.8,28.8,28.8,28.8,24,24],"texture":[5,5,5,5,5,5,17,5],"angle":-90},"disc4":{"section_segments":12,"offset":{"x":115,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.5,6.5,0,0,0,0,0,6.5,6.5,6.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[15,15,15,5,5,5,5,5,15,15],"texture":[16],"angle":90},"disc5":{"section_segments":12,"offset":{"x":125,"y":170,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[6.5,6.5,0,0,0,0,0,6.5,6.5,6.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[15,15,15,5,5,5,5,5,15,15],"texture":[16],"angle":90},"disc6":{"section_segments":16,"offset":{"x":0,"y":200,"z":75},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[6,6,6,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,6,6],"texture":[5,5,5,5,5,17,5]},"disc7":{"section_segments":16,"offset":{"x":0,"y":210,"z":75},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[6,6,6,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,7.199999999999999,6,6],"texture":[5,5,5,5,5,17,5]},"disc8":{"section_segments":16,"offset":{"x":45,"y":200,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[17,17,17,20.5,20.5,20.5,20.5,20.5,17,17],"texture":[5,5,5,5,5,17,5]},"disc9":{"section_segments":16,"offset":{"x":45,"y":210,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[7,7,0,0,0,2,5,7,7,7],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,5,5,5,5,5,15,15],"height":[17,17,17,20.5,20.5,20.5,20.5,20.5,17,17],"texture":[5,5,5,5,5,17,5]},"disc10":{"section_segments":16,"offset":{"x":45,"y":90,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,24,24,24,24,24,20,20],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[5,5,5,5,17,5,17,5]},"disc11":{"section_segments":16,"offset":{"x":45,"y":70,"z":47},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,24,24,24,24,24,20,20],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[5,5,5,5,17,5,17,5]},"disc12":{"section_segments":16,"offset":{"x":50,"y":50,"z":-160},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[16,16,16,19.200000000000003,19.200000000000003,19.200000000000003,19.200000000000003,19.200000000000003,16,16],"height":[20,20,20,24,24,24,24,24,20,20],"texture":[5,5,5,5,17,5,17,5],"angle":45,"vertical":true},"disc13":{"section_segments":24,"offset":{"x":0,"y":160,"z":80},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[40,40,40,48,48,48,48,48,40,40],"height":[15,15,15,5,5,5,5,5,15,15],"texture":[5,5,5,5,5,17,5,5],"angle":180},"disc14":{"section_segments":24,"offset":{"x":0,"y":160,"z":80},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,0,0,0,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[40,40,40,48,48,48,48,48,40,40],"height":[15,15,15,5,5,5,5,5,15,15],"texture":[5,5,5,5,5,17,5,5]},"disc15":{"section_segments":6,"offset":{"x":0,"y":-17.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5]},"disc16":{"section_segments":6,"offset":{"x":0,"y":-12.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5],"angle":180},"disc17":{"section_segments":6,"offset":{"x":0,"y":-67.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5]},"disc18":{"section_segments":6,"offset":{"x":0,"y":-62.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5],"angle":180},"disc19":{"section_segments":6,"offset":{"x":0,"y":-117.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5]},"disc20":{"section_segments":6,"offset":{"x":0,"y":-112.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5],"angle":180},"disc21":{"section_segments":6,"offset":{"x":0,"y":-167.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5]},"disc22":{"section_segments":6,"offset":{"x":0,"y":-162.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5],"angle":180},"disc23":{"section_segments":6,"offset":{"x":0,"y":-217.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5]},"disc24":{"section_segments":6,"offset":{"x":0,"y":-212.5,"z":57},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[10.5,10.5,1.5,1.5,1.5,5,7.5,10.5,10.5,10.5],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,5,21.6,21.6,21.6,21.6,21.6,5,5],"height":[5,5,5,6,6,6,6,6,5,5],"texture":[5,5,5,5,5,17,5,5],"angle":180},"box":{"section_segments":[45,135,225,315],"offset":{"x":50,"y":35,"z":-85},"position":{"x":[0,0,0,0,0],"y":[-10,15,15,19,19],"z":[0,0,0,0,0]},"width":[10,10,20,20,20],"height":[30,30,50,35,0],"texture":[5,5,5,17],"vertical":true,"angle":50},"hubs1":{"section_segments":20,"offset":{"x":80,"y":20,"z":-128},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[5,15,17,12,10,0],"height":[5,15,17,12,10,0],"texture":[5,17,17,5,5],"vertical":true},"hubs2":{"section_segments":20,"offset":{"x":80,"y":15,"z":-204},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[12.6,10.5,9.1,8.399999999999999,7,0],"height":[12.6,10.5,9.1,8.399999999999999,7,0],"texture":[5,17,17,5,5],"vertical":true},"hubs3":{"section_segments":20,"offset":{"x":0,"y":45,"z":-310},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[32.5,27,23.400000000000002,21.6,5,0],"height":[32.5,27,23.400000000000002,21.6,5,0],"texture":[5,17,17,5,5],"vertical":true},"hubs4":{"section_segments":20,"offset":{"x":50,"y":55,"z":-160},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,5,5,10,6],"z":[0,0,0,0,0,0,0]},"width":[5,15,17,12,10,0],"height":[5,15,17,12,10,0],"texture":[5,17,17,5,5],"vertical":true,"angle":70},"hubs5":{"section_segments":20,"offset":{"x":35,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,17,10.5,9.1,6.5,0],"height":[15.600000000000001,17,10.5,9.1,6.5,0],"texture":[5,5,17,17,5],"angle":90},"hubs6":{"section_segments":20,"offset":{"x":35,"y":-65,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,17,10.5,9.1,6.5,0],"height":[15.600000000000001,17,10.5,9.1,6.5,0],"texture":[5,5,17,17,5],"angle":90},"hubs7":{"section_segments":20,"offset":{"x":35,"y":-115,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,17,10.5,9.1,6.5,0],"height":[15.600000000000001,17,10.5,9.1,6.5,0],"texture":[5,5,17,17,5],"angle":90},"hubs8":{"section_segments":20,"offset":{"x":35,"y":-165,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,17,10.5,9.1,6.5,0],"height":[15.600000000000001,17,10.5,9.1,6.5,0],"texture":[5,5,17,17,5],"angle":90},"hubs9":{"section_segments":20,"offset":{"x":35,"y":-215,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[23,29,28,28,29,28],"z":[0,0,0,0,0,0,0]},"width":[15.600000000000001,17,10.5,9.1,6.5,0],"height":[15.600000000000001,17,10.5,9.1,6.5,0],"texture":[5,5,17,17,5],"angle":90},"propeller1":{"section_segments":10,"offset":{"x":20,"y":350,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-10,-10,30,30,30,20],"z":[0,0,0,0,0,0]},"width":[0,15,15,14,14,0],"height":[0,15,15,14,14,0],"propeller":true,"texture":[5,5,17,17]},"propeller2":{"section_segments":10,"offset":{"x":20,"y":350,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-10,-10,30,30,30,20],"z":[0,0,0,0,0,0]},"width":[0,15,15,14,14,0],"height":[0,10,15,14,14,0],"propeller":true,"texture":[5,5,17,17]},"propeller_joint1":{"section_segments":5,"offset":{"x":10,"y":261,"z":-5},"position":{"x":[0,0,-30,-50,-50],"y":[0,0,60,70,70],"z":[0,0,0,-20,-20]},"width":[0,10,10,17,0],"height":[0,10,10,10,0],"angle":90,"texture":[17,5,17,17]},"propeller_joint2":{"section_segments":5,"offset":{"x":30,"y":305,"z":-5},"position":{"x":[0,0,-15,-30,-30],"y":[0,0,30,40,40],"z":[0,0,0,-20,-20]},"width":[0,10,10,17,0],"height":[0,10,10,10,0],"angle":90,"texture":[17,5,17,17]},"propeller_joint3":{"section_segments":5,"offset":{"x":10,"y":280,"z":-56},"position":{"x":[0,0,0,-30,-50,-50],"y":[0,0,20,60,70,70],"z":[15,15,0,0,20,20]},"width":[0,10,10,10,17,0],"height":[0,10,10,10,10,0],"angle":90,"texture":[5,5,5]},"propeller_joint4":{"section_segments":5,"offset":{"x":10,"y":310,"z":-56},"position":{"x":[0,0,0,-20,-40,-40],"y":[0,0,20,50,50,50],"z":[15,15,0,0,20,20]},"width":[0,10,10,10,17,0],"height":[0,10,10,10,10,0],"angle":90,"texture":[5,5,5]},"propeller_side":{"section_segments":16,"offset":{"x":80,"y":290,"z":-40},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,14,5,0,-6,0,60,66,48,48,78,72],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,20,22.5,25,25,20,20,14,10,0],"height":[0,5,20,20,22.5,25,25,20,20,14,10,0],"propeller":true,"texture":[5,12,5,5,5,5,5,5,17,5,17]},"propeller_side2":{"section_segments":16,"offset":{"x":80,"y":380,"z":-40},"position":{"x":[0],"y":[0],"z":[0]},"width":[25],"height":[25],"propeller":true},"top":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-220,"z":52.9},"position":{"x":[0,0,0,0],"y":[-20,-20,240,180],"z":[0,0,0,0]},"width":[0,35,35,0],"height":[0,10,10,0],"texture":[5]},"bottom":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-235,"z":-52.9},"position":{"x":[0,0,0,0],"y":[0,0,240,180],"z":[0,0,0,0]},"width":[0,35,35,0],"height":[0,10,10,0],"texture":[5]},"side":{"section_segments":[45,135,225,315],"offset":{"x":52.9,"y":-235,"z":0},"position":{"x":[0,0,0,0],"y":[0,0,240,180],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,35,35,0],"texture":[5]},"propeller_support1":{"section_segments":[45,135,225,315],"offset":{"x":15,"y":10,"z":-300},"position":{"x":[0,0,0,0],"y":[0,0,40,40],"z":[0,0,0,0]},"width":[0,25,10,0],"height":[0,100,80,0],"angle":45,"vertical":true,"texture":[17,5,17]},"propeller_support2":{"section_segments":[45,135,225,315],"offset":{"x":15,"y":-10,"z":-300},"position":{"x":[0,0,0,0],"y":[0,0,40,40],"z":[0,0,0,0]},"width":[0,25,10,0],"height":[0,100,80,0],"angle":135,"vertical":true,"texture":[17,5,17]},"gun_holder1":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":10},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,80,90,0],"texture":[17]},"gun_holder2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,100,90,0],"height":[0,20,20,0],"angle":180,"texture":[17]},"gun_holder3":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":40,"z":-10},"position":{"x":[0,0,0,0],"y":[-10,-10,10,10],"z":[0,0,0,0]},"width":[0,20,20,0],"height":[0,80,90,0],"texture":[17]},"bars_top1":{"section_segments":6,"offset":{"x":31,"y":-110,"z":41},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17]},"bars_top2":{"section_segments":6,"offset":{"x":40,"y":-110,"z":32},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17]},"bars_bottom1":{"section_segments":6,"offset":{"x":31,"y":-110,"z":-41},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17]},"bars_bottom2":{"section_segments":6,"offset":{"x":40,"y":-110,"z":-32},"position":{"x":[0,0,0,0],"y":[-120,-120,120,120],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17]}},"wings":{"main":{"length":[40,70,40],"width":[40,90,90,40],"angle":[50,90,130],"position":[0,0,0,0],"doubleside":true,"offset":{"x":120,"y":170,"z":-65},"bump":{"position":0,"size":15},"texture":[5,5,5]}},"typespec":{"name":"Trisbaena","level":7.9,"model":1,"code":791,"specs":{"shield":{"capacity":[1000,1000],"reload":[1e+308,1e+308]},"generator":{"capacity":[1e+308,1e+308],"reload":[1e+308,1e+308]},"ship":{"mass":1e+308,"speed":[1,1],"rotation":[360,360],"acceleration":[1,1]}},"shape":[4.208,4.252,3.606,2.332,1.76,1.433,1.205,1.053,0.891,0.859,0.826,0.793,0.774,0.768,0.743,0.774,0.9,1.093,2.477,2.902,3.117,2.735,4.076,4.546,4.579,4.569,4.579,4.546,4.076,2.735,3.117,2.902,2.477,1.093,0.9,0.774,0.743,0.768,0.774,0.793,0.826,0.859,0.891,1.053,1.205,1.433,1.76,2.332,3.606,4.252],"lasers":[{"x":0,"y":-4.14,"z":0,"angle":0,"damage":[1000,1000],"rate":1,"type":1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-4.14,"z":0,"angle":0,"damage":[1000,1000],"rate":1,"type":1,"speed":[400,400],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.579}}'
    ]
};

game.custom.gemspickup = game.custom.gemspickup || Game_Options.Auto_Pickup_Gems;

const heal = {
    id: "heal",
    position: [73.5 - 6.25, 0.5, 6, 4],
    clickable: true,
    visible: true,
    shortcut: "J",
    components: [
        { type: "box", position: [0, 0, 100, 100], fill: "hsla(210, 50%, 87%, 0.15)", stroke: "#cde", width: 3 },
        { type: "text", position: [0, 20, 100, 60], value: "Heal [J]", color: "#cde" },
    ]
}

const _options = {
    id: "options",
    position: [73.5, 0.5, 6, 4],
    clickable: true,
    visible: true,
    shortcut: "W",
    components: [
        { type: "box", position: [0, 0, 100, 100], fill: "hsla(210, 50%, 87%, 0.15)", stroke: "#cde", width: 3 },
        { type: "text", position: [0, 20, 100, 60], value: "Options [W]", color: "#cde" },
    ]
}

const adminn = {
    id: "adminShip",
    position: [22, 0.5, 6, 4],
    clickable: true,
    visible: true,
    shortcut: String.fromCharCode(20), // Caps-Lock key
    components: [
        { type: "box", position: [0, 0, 100, 100], fill: "hsla(0, 100%, 70%, 0.15)", stroke: "hsl(0, 100%, 70%)", width: 3 },
        { type: "text", position: [0, 20, 100, 60], value: "Admin", color: "hsl(0, 100%, 70%)" },
    ]
}

const Disable_UI = {
    position: [0, 0, 0, 0],
    visible: false,
    shortcut: null,
    components: [],
};

function error(er) {
    game.modding.terminal.echo(`[[;#FF7733;]Error: ${er}]`);
}

function echo(ec, c) {
    game.modding.terminal.echo(`[[bg;${c ? c : "#61ff61"};]${ec}]`);
}

function warn(wa) {
    game.modding.terminal.echo(`[[g;#E6DB74;]${wa}]`);
}

function setSpectate(ship, type) {
    ship.custom.spectate = true;
    ship.custom.type = type ? type : !Object.keys(Ships).map(Number).includes(ship.type) ? ship.custom.type : ship.type;
    ship.set({ type: Game_Options.spectatorShip, collider: false, crystals: 0, stats: 0 });
}

function getMaxAttributes(type) {
    const baseType = Math.trunc(type / 100);
    const maxCrystals = Math.pow(baseType, 2) * 20;
    const stats = Number(Array(9).fill(String(type)[0]).join(''));

    return {
        crystals: game.custom.gemspickup ? maxCrystals - 1 : maxCrystals,
        stats: stats
    };
}

function getShipData(ship, color = true) {
    return color ? `[[gb;#ffb36c;]Name: ${ship.name}, ID: ${ship.id}]` : `Name: ${ship.name}, ID: ${ship.id}`;
}

function updateShip(ship, type, upgrade = true) {
    ship.custom.spectate = false;

    const ships = Object.keys(Ships).map(Number);
    ship.set({ type: type, shield: 99999, stats: !ships.includes(type) || !upgrade ? 0 : getMaxAttributes(type).stats, crystals: getMaxAttributes(type).crystals, collider: true, vx: 0, vy: 0 });

    if (ships.includes(type)) {
        ship.custom.type = type;
        if (ship.custom.shipSelection) {
            const tier = String(type).charAt(0);
            if (ship.custom.selectedTier !== tier) ship.custom.selectedTier = tier;
            shipsSelection.updateUIs(ship);
        } else {
            displayMessage(ship, `Ship: ${Ships[type].name}`);
        }
    }
}

function warp(ship) {
    const registeredShips = game.ships.filter(s => s.custom.registered);

    if (registeredShips.length <= 1) return displayMessage(ship, "Nobody to Teleport");

    let tp = (ship.custom.lastTeleported + 1) % registeredShips.length || 0;

    if (registeredShips[tp].id === ship.id) {
        tp = (tp + 1) % registeredShips.length;
    }

    ship.custom.lastTeleported = tp;
    const targetShip = registeredShips[tp];

    if (!ship.custom.spectate) setSpectate(ship);

    ship.set({
        x: targetShip.x,
        y: targetShip.y,
        vx: 0,
        vy: 0
    });
}

function idleShip(ship, give = true, x0y0 = false, duration = 0, msg) {
    if (!give && ship.custom.idle) {
        ship.custom.idle = false;
        ship.custom.registered = true;
        ship.set({ idle: false });
        ship.setUIComponent(_options);
        ship.setUIComponent(heal);
        if (ship.custom.admin) ship.setUIComponent(adminn);
        displayMessage(ship, msg || "You've been unfrozen");
    } else {
        if (ship.custom.option) options(ship);
        if (ship.custom.shipSelection) shipsSelection.close(ship);

        const UIs = ["adminShip", "options", "heal"];
        UIs.forEach(id => {
            ship.setUIComponent({ id, ...Disable_UI });
        });

        ship.custom.idle = true;
        ship.custom.registered = false;
        if (!ship.custom.spectate) setSpectate(ship);
        ship.set({ idle: true, vx: 0, vy: 0 });
        if (x0y0) ship.set({ x: 0, y: 0 });
        displayMessage(ship, msg || "You've been frozen", duration > 0 ? duration * 1000 : 3000);

        if (duration > 0) {
            setTimeout(() => {
                idleShip(ship, false);
            }, duration * 1000);
        }
    }
}

function displayMessage(ship, text, duration = 3000) {
    clearTimeout(ship.custom.msgTimeout);
    ship.setUIComponent({
        id: "text",
        position: [25, ship.custom.shipSelection ? 9.5 : 82, 50, 5],
        visible: true,
        components: [
            {
                type: "text",
                position: [0, 0, 100, 100],
                color: "hsl(0, 100%, 75%)",
                value: text,
                align: "center",
            }
        ]
    });
    ship.custom.msgTimeout = setTimeout(() => {
        ship.setUIComponent({ id: "text", ...Disable_UI });
    }, duration);
}

this.tick = function (game) {
    for (let ship of game.ships) {
        if (!ship.alive || ship.custom.kicked || ship == null || ship.id == null || ship.type == Game_Options.spectatorShip) continue;
        if (Game_Options.adminShips.includes(ship.type) && !ship.custom.admin) return kick(ship.id, "Use admin ship without Permission");
        if (game.step % (game.ships.length * 2) == 0 && game.custom.gemspickup && Object.keys(Ships).map(Number).includes(ship.type)) {
            let maxCrystals = getMaxAttributes(ship.type).crystals;
            if (ship.crystals == (maxCrystals + 1)) {
                ship.set({ crystals: maxCrystals });
            }
        }
    }
};

game.modding.tick = function (t) {
    this.game.tick(t);
    if (this.context.tick != null) {
        this.context.tick(this.game);
    }
};

const UIs = {
    prevShip: { label: "Prev Ship", shortcut: "1" },
    nextShip: { label: "Next Ship", shortcut: "2" },
    reset: { label: "Reset", shortcut: "3" },
    spectate: { label: "Spectate", shortcut: "4" },
    shipSelection: { label: "Ship-Selection", shortcut: "5" },
    heal: { label: "Heal", shortcut: "J" },
    spawn: { label: "Spawn" },
    warp: { label: "Warp" },
    stats: { label: "Upgrades" },
    fakedeath: { label: "In-Game Settings" },
};

function options(ship) {
    if (!ship.custom.option) {
        ship.custom.option = true;
        if (ship.custom.shipSelection) shipsSelection.close(ship);

        let line = 0, row = 0;
        const height = 10;
        const width = 12;
        const offsetX = 18.5;
        const offsetY = 22.5;
        const maxLine = 5;
        const gap = 0.25;

        Object.keys(UIs).forEach(id => {
            const position = [offsetX + line * (width + gap), offsetY + row * (height + gap), width, height];

            let compo = {
                main: [
                    { type: "box", position: [0, 0, 100, 100], fill: "hsla(210, 50%, 87%, 0.1)", stroke: "#cde0", width: 2 },
                    { type: "box", position: [0, 0, 2.5, 100], fill: "#cde" },
                    { type: "text", position: [10, UIs[id].shortcut ? 20 : 25, 80, 50], value: UIs[id].label || "Unknown", color: "#cde" },
                ],
                shortcut: [
                    { type: "box", position: [80, 68, 50, 30], fill: "hsla(210, 50%, 87%, 0.15)" },
                    { type: "text", position: [80, 70, 20, 30], align: "center", value: UIs[id].shortcut || "", color: "#cde" }
                ],
            }

            ship.setUIComponent({
                id,
                position,
                clickable: true,
                visible: true,
                shortcut: UIs[id].shortcut || null,
                components: [
                    ...compo.main,
                    ...(UIs[id].shortcut ? compo.shortcut : [])
                ],
            });

            line++;

            if (line >= maxLine) {
                line = 0;
                row++;
            }
        });
    } else {
        Object.keys(UIs).forEach(id => {
            ship.setUIComponent({ id, ...Disable_UI });
        });
        ship.setUIComponent(heal);

        ship.custom.option = false;
    }
}

const shipsSelection = {
    layoutSettings: {
        offsetX: 0, /// Global X offset for UI components
        offsetY: 0, /// Global Y offset for UI components

        maxRows: 4,    // Defines the maximum number of rows to display for ship buttons
        maxColumns: 5, // Defines the maximum number of columns to display for ship buttons

        // Specific settings for ship grid UI components
        shipButtonLayout: {
            offsetX: 0,  // Additional X offset specific to ship buttons
            offsetY: 0,  // Additional Y offset specific to ship buttons
            width: 10,   // Width of each ship button
            height: 10,  // height of each ship button
            gap: 2,      // Gap between ship buttons (spacing between them)
        }
    },
    styles: {
        default: {
            borderWidth: 3,
            color: "hsla(210, 50%, 87%)", // Default text color
            borderColor: "hsla(210, 50%, 87%, 0.25)",  // Default border color
            background: "hsla(210, 50%, 87%, 0.15)",  // Default background color
        },
        selected: {
            borderWidth: 3,
            color: "hsla(120, 100%, 80%)", // Text color for selected ship
            borderColor: "hsla(120, 100%, 80%, 0.25)",// Border color for selected ship
            background: "hsla(120, 100%, 80%, 0.15)",  // Background color for selected ship
        }
    },
    UIs: ["tier", "nextTier", "prevTier", "nextShip", "prevShip", "shipName", "shipSelection"],
    show: function (ship) {
        if (ship.custom.option) options(ship);
        ship.custom.shipSelection = true;

        ship.custom.selectedTier = String(ship.custom.type).charAt(0);
        this.pervNextUIs(ship);
        this.updateUIs(ship);
    },
    close: function (ship) {
        this.UIs.forEach(id => {
            ship.setUIComponent({ id, ...Disable_UI });
        });

        for (let i = 0; i < (this.layoutSettings.maxRows * this.layoutSettings.maxColumns); i++) {
            ship.setUIComponent({ id: `ship_${i}`, ...Disable_UI });
        }

        ship.custom.shipSelection = false;
    },
    applyOffset(position) {
        return [
            position[0] + this.layoutSettings.offsetX,
            position[1] + this.layoutSettings.offsetY,
            position[2],
            position[3]
        ];
    },
    createUIComponent: function (ship, id, position, clickable, components) {
        return ship.setUIComponent({ id, position: this.applyOffset(position), clickable, visible: true, components });
    },
    pervNextUIs: function (ship) {
        this.createUIComponent(ship, "prevTier", [40, 17, 6, 10], true,
            [{ type: "text", position: [0, 0, 100, 100], align: "center", value: "<", color: this.styles.default.color }]
        );
        this.createUIComponent(ship, "nextTier", [54, 17, 6, 10], true,
            [{ type: "text", position: [0, 0, 100, 100], align: "center", value: ">", color: this.styles.default.color }]
        );
        this.createUIComponent(ship, "prevShip", [25, 82, 6, 10], true,
            [{ type: "text", position: [0, 0, 100, 100], align: "center", value: "<", color: this.styles.default.color }]
        );
        this.createUIComponent(ship, "nextShip", [70, 82, 6, 10], true,
            [{ type: "text", position: [0, 0, 100, 100], align: "center", value: ">", color: this.styles.default.color }]
        );
        this.createUIComponent(ship, "shipSelection", [73, 18.5, 4, 6], true,
            [
                { type: "box", position: [0, 0, 100, 100], fill: "hsla(0, 100%, 50%, 0.15)" },
                { type: "text", position: [0, - 1.75, 100, 100], align: "center", value: "🗙", color: "#ff0000" },
            ]
        );
    },

    updateUIs: function (ship) {
        this.createUIComponent(ship, "tier", [47, 17, 6, 10], false,
            [
                { type: "text", position: [0, 0, 100, 43], align: "center", value: "Tier", color: this.styles.default.color },
                { type: "box", position: [0, 47, 100, 53], fill: this.styles.default.background },
                { type: "text", position: [0, 47, 100, 53], align: "center", value: ship.custom.selectedTier, color: this.styles.default.color },
            ]
        );

        this.createUIComponent(ship, "shipName", [31, 85, 39, 5], false,
            [{ type: "text", position: [0, 0, 100, 100], align: "center", value: Ships[ship.custom.type].name, color: this.styles.default.color }]
        );

        this.createShipGrid(ship);
    },

    createShipGrid: function (ship) {
        const shipsInTier = Object.keys(Ships).filter(type => String(type).charAt(0) === ship.custom.selectedTier).map(Number);
        const maxColumns = this.layoutSettings.maxColumns;
        const maxRows = this.layoutSettings.maxRows;
        const { offsetX, offsetY, width, height, gap } = this.layoutSettings.shipButtonLayout;

        shipsInTier.forEach((shipType, index) => {
            if (index < maxColumns * maxRows) {
                const row = Math.floor(index / maxColumns);
                const col = index % maxColumns;
                const id = `ship_${index}`;

                const isSelected = shipType === ship.custom.type;
                const isClickable = isSelected && !ship.custom.spectate && !Game_Options.adminShips.includes(ship.type);
                const style = isSelected ? this.styles.selected : this.styles.default;

                const position = [
                    (22.975 + col * (10 + gap / 2)) + offsetX,
                    (32.5 + row * (10 + gap)) + offsetY,
                    width, height
                ];

                // UI components for the ship button
                const compo = {
                    main: [
                        { type: "box", position: [0, 0, 100, 100], fill: style.background },
                        { type: "box", position: [0, -15, style.borderWidth, 100], fill: style.borderColor },
                        { type: "box", position: [10, 0, 100, style.borderWidth * 2], fill: style.borderColor },
                        { type: "text", position: [5, 10, 90, 65], align: "center", value: Ships[shipType].name, color: style.color },
                    ],
                    shipType: [
                        { type: "box", position: [72.5, 68, 25, 30], fill: style.background },
                        { type: "text", position: [73.5, 68, 22.5, 30], align: "center", value: shipType, color: style.color }
                    ]
                };

                this.createUIComponent(ship, id, position, !isClickable, [...compo.main, ...compo.shipType]);
            }
        });

        for (let i = shipsInTier.length; i < (maxRows * maxColumns); i++) {
            ship.setUIComponent({ id: `ship_${i}`, ...Disable_UI });
        }
    },

    handleUIsOutput: function (id, ship) {
        if (id === "shipSelection") {
            if (!ship.custom.shipSelection) return shipsSelection.show(ship);
            shipsSelection.close(ship);
        } else if (id.startsWith("ship_")) {
            const index = parseInt(id.split("_")[1]);
            const shipsInTier = Object.keys(Ships).filter(type => String(type).charAt(0) === ship.custom.selectedTier).map(Number);

            updateShip(ship, shipsInTier[index]);
        } else if (id === "prevTier" || id === "nextTier") {
            const tiers = [...new Set(Object.keys(Ships).map(type => String(type).charAt(0)))];  // Unique tiers
            const currentIndex = tiers.indexOf(ship.custom.selectedTier);
            const newIndex = (id === "prevTier" ? currentIndex - 1 + tiers.length : currentIndex + 1) % tiers.length;

            ship.custom.selectedTier = tiers[newIndex];
            this.updateUIs(ship);
        } else if (id === "prevShip" || id === "nextShip") {
            if (ship.custom.spectate || ship.type == Game_Options.spectatorShip) return updateShip(ship, ship.custom.type);

            const ship_list = Object.keys(Ships).map(Number).sort((a, b) => a - b);
            const currentIndex = ship_list.indexOf(ship_list.includes(ship.type) ? ship.type : Game_Options.Starting_ship);
            const type = (id === "prevShip" ? currentIndex - 1 + ship_list.length : currentIndex + 1) % ship_list.length;

            updateShip(ship, ship_list[type]);
        }
    }
}


this.event = function (event) {
    const ship = event.ship;
    if (!ship?.id || ship.custom.kicked) return;
    switch (event.name) {
        case "ui_component_clicked":
            if (!ship.alive) return;

            if (event.id === "using_subspace" && !ship.custom.cheater) {
                ship.custom.cheater = true;
                displayMessage(ship, "You have been caught by using Subspace");
                echo(ship.name + " have been caught by using Subspace");
                if (!Game_Options.Subspace_Allow) kick(ship.id, "Using Subspace");
            }

            if (game.step <= ship.custom.delay) return displayMessage(ship, "Take a breather, you're too fast!");
            ship.custom.delay = game.step + 0.2 * 60;

            shipsSelection.handleUIsOutput(event.id, ship);

            const validShips = Object.keys(Ships).includes(String(ship.type));

            switch (event.id) {
                case "warp":
                    warp(ship);
                    break;
                case "options":
                    options(ship);
                    break;
                case "spawn":
                    ship.set({ x: 0, y: 0, vx: 0, vy: 0 });
                    break;
                case "fakedeath":
                    if (!ship.custom.spectate) setSpectate(ship);
                    ship.intermission({});
                    break;
                case "spectate":
                    if (ship.custom.spectate) return updateShip(ship, ship.custom.type);
                    setSpectate(ship);
                    break;
                case "reset":
                    if (ship.type != 101) updateShip(ship, 101);
                    break;
                case "stats":
                    if (ship.custom.spectate || !validShips) return displayMessage(ship, "You won't be able to upgrade using this ship");
                    let maxstats = Number(Array(9).join(String(ship.type)[0]));
                    if (ship.stats < maxstats) return ship.set({ stats: maxstats });
                    ship.set({ stats: 0 });
                    break;
                case "heal":
                    if (ship.custom.spectate || !validShips) return displayMessage(ship, "You won't be able to heal using this ship");
                    ship.set({ shield: 9999, crystals: getMaxAttributes(ship.type).crystals });
                    break;
                case "adminShip":
                    if (!ship.custom.admin) return idleShip(ship, true, true, 0, "You cannot get admin ship without Permission");
                    updateShip(ship, (Game_Options.adminShips[Game_Options.adminShips.indexOf(ship.type) + 1] || ship.custom.type));
                    break;
            }
            break;
        case "ship_disconnected":
            if (ship.custom.kicked) return;
            echo(`A player just left the game\n ${getShipData(ship)}\n`, "#ff6060");
            break;
        case "ship_destroyed":
            Object.assign(ship.custom, {
                x: ship.x,
                y: ship.y,
                type: ship.type,
            });
            if (event.killer.custom.admin && Game_Options.adminShips.includes(event.killer.type)) idleShip(ship, true, false, 60, "You've been frozen for 60 seconds");
            break;
        case "ship_spawned":
            if (ship.custom.kicked || ship.custom.idle) return ship.set({ x: ship.custom.x, y: ship.custom.y });

            if (!ship.custom.registered) {
                ship.custom = {
                    x: 0,
                    y: 0,
                    type: Game_Options.Starting_ship,
                    registered: true,
                };
                ship.setUIComponent(_options);
                ship.setUIComponent(heal);
                echo(`A player just joined the game\n ${getShipData(ship)}\n`);
            }

            ship.set({
                x: ship.custom.x,
                y: ship.custom.y,
                type: ship.custom.type,
                invulnerable: 300,
                shield: 9999,
                crystals: getMaxAttributes(ship.custom.type).crystals,
                stats: getMaxAttributes(ship.custom.type).stats,
                collider: true
            });
            break;
    }
};

function verify(id) {
    if (!id) throw new error("Invalid ship ID specified. Please provide a valid ship ID.");
    if (!game.findShip(id)) throw new error("Ship not found. Please check the ship ID and try again.");
    return game.findShip(id);
}

admin = (id) => {
    try {
        let ship = verify(id);
        if (!ship.custom.admin) {
            ship.custom.admin = true;
            ship.setUIComponent(adminn);
            echo(getShipData(ship) + " has been authorize", "#ff6060");
        } else {
            if (Game_Options.adminShips.includes(ship.type) || Game_Options.adminShips.includes(ship.custom.type)) setSpectate(ship);
            ship.setUIComponent({ id: "adminShip", ...Disable_UI });
            setTimeout(() => {
                ship.custom.admin = false;
            }, 2000);
            echo(getShipData(ship) + " has been unauthorize");
        }
    } catch { }
};

kick = (id, reason = "No reason has been provided", msg = true) => {
    try {
        let ship = verify(id);
        ship.custom = {
            kicked: true,
            registered: false
        };

        idleShip(ship, true, true, 0, "You've been kicked");
        setTimeout(() => {
            ship.gameover({
                "You've been kicked": " ",
                "Reason": reason
            });
        }, 2000);
        if (msg) echo(`${getShipData(ship)} has been kicked\nReason: ${reason}`, "#ff6060");
    } catch { }
}

idle = (id) => {
    try {
        let ship = verify(id);
        if (ship.custom.idle) {
            idleShip(ship, false);
            echo(`${getShipData(ship)} has been Unfrozen`);
        } else {
            idleShip(ship);
            echo(`${getShipData(ship)} has been Frozen`);
        }
    } catch { }
}

game.modding.commands.say = function (req) {
    let text = req.replace('say ', '');
    displayMessage(game, text, 6000);
    echo("Done!");
};

game.modding.commands.info = function () {
    const { echo } = game.modding.terminal;
    echo("[[g;#fffda2;]List of players and their IDs:]\n");
    for (let ship of game.ships) {
        echo(getShipData(ship) + "\n");
    }
};

game.modding.commands.apc = function () {
    if (game.custom.gemspickup) {
        game.custom.gemspickup = false;
        echo("Auto Pickup Gems Disabled", "#ff6060");
        return;
    }
    game.custom.gemspickup = true;
    echo("Auto Pickup Gems Enabled");
};

; (function () {
    var internals_init = function () {
        if (game.custom.shipDisconnected_init) return;
        const modding = game.modding;
        const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
        if (!internals) {
            modding.terminal.error(new Error("Failed to initialize 'ship_disconnected' event: modding internals object not found"));
            return;
        }
        if (!internals.shipDisconnected.old) {
            function shipDisconnected({ id } = {}) {
                if (modding.context.event && id) var ship = game.findShip(id);
                var result = shipDisconnected.old.apply(this, arguments);
                if (ship) {
                    try {
                        modding.context.event({ name: "ship_disconnected", ship }, game);
                    } catch (e) { }
                }
                return result;
            }
            shipDisconnected.old = internals.shipDisconnected;
            internals.shipDisconnected = shipDisconnected;
        }
        game.custom.shipDisconnected_init = true;
    }
    var tick = this.tick;
    this.tick = function () {
        this.tick = tick;
        try { internals_init() } catch (e) { }
        return typeof this.tick == "function" && this.tick.apply(this, arguments);
    }
}).call(this);
