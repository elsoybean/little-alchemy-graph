//@flow

const items = [
  "achilles",
  "acid-rain",
  "aegis",
  "aeolus",
  "airplane",
  "alarm-clock",
  "alchemist",
  "alcohol",
  "algae",
  "alien",
  "allergy",
  "alligator",
  "alpaca",
  "ambulance",
  "angel",
  "angler",
  "animal",
  "ankh",
  "ant",
  "ant-farm",
  "antarctica",
  "anthill",
  "apple-of-discord",
  "apron",
  "aquarium",
  "archeologist",
  "archipelago",
  "arctic",
  "armadillo",
  "armor",
  "arrow",
  "ash",
  "astronaut",
  "astronomer",
  "atmosphere",
  "atomic-bomb",
  "aurora",
  "avalanche",
  "aviary",
  "axe",
  "baast",
  "baba-yaga",
  "babe-the-blue-ox",
  "bacon",
  "bacteria",
  "baker",
  "bakery",
  "banana",
  "banana-bread",
  "bandage",
  "bank",
  "banshee",
  "barn",
  "barrel",
  "bat",
  "batter",
  "battery",
  "bayonet",
  "bbq",
  "beach",
  "beaver",
  "bee",
  "beehive",
  "beekeeper",
  "beer",
  "bell",
  "bicycle",
  "binoculars",
  "bird",
  "birdcage",
  "birdhouse",
  "black-hole",
  "blade",
  "blender",
  "blizzard",
  "blood",
  "blood-bag",
  "boat",
  "boiler",
  "bone",
  "bonsai-tree",
  "book",
  "book-of-the-dead",
  "bottle",
  "boulder",
  "bow",
  "box",
  "bread",
  "brick",
  "bridge",
  "broom",
  "bucket",
  "bullet",
  "bulletproof-vest",
  "bunyip",
  "bus",
  "butcher",
  "butter",
  "butterfly",
  "butterfly-net",
  "cable-car",
  "cactus",
  "cage",
  "cake",
  "calydonian-boar",
  "camazotz",
  "camel",
  "campfire",
  "candle",
  "candy-cane",
  "cannon",
  "canvas",
  "car",
  "caramel",
  "carbon-dioxide",
  "carrot",
  "cart",
  "cashmere",
  "castle",
  "cat",
  "catnip",
  "cauldron",
  "cave",
  "caviar",
  "centaur",
  "cereal",
  "chain",
  "chainsaw",
  "chameleon",
  "chang'e",
  "changeling",
  "charcoal",
  "cheese",
  "cheeseburger",
  "chicken",
  "chicken-coop",
  "chicken-soup",
  "chicken-wing",
  "chill",
  "chimera",
  "chimney",
  "chinese-dragon",
  "chocolate",
  "chocolate-milk",
  "christmas-stocking",
  "christmas-tree",
  "cigarette",
  "circus",
  "city",
  "clay",
  "clock",
  "closet",
  "cloud",
  "coal",
  "cockatrice",
  "coconut",
  "coconut-milk",
  "coffin",
  "cold",
  "combustion-engine",
  "computer",
  "computer-mouse",
  "confetti",
  "constellation",
  "continent",
  "cook",
  "cookbook",
  "cookie",
  "cookie-cutter",
  "cookie-dough",
  "coral",
  "corpse",
  "cosmic-egg",
  "cotton",
  "cotton-candy",
  "cow",
  "crayon",
  "crow",
  "crystal-ball",
  "cthulhu",
  "cuckoo",
  "cup",
  "cupid",
  "current",
  "curse",
  "cutting-board",
  "cyborg",
  "cyclist",
  "cyclops",
  "dam",
  "darkness",
  "dawn",
  "day",
  "death",
  "deity",
  "demon",
  "desert",
  "dew",
  "diamond",
  "dinosaur",
  "dionysus",
  "diver",
  "djinn",
  "doctor",
  "dog",
  "doge",
  "doghouse",
  "domestication",
  "domovoi",
  "don-quixote",
  "donut",
  "double-rainbow!",
  "dough",
  "dragon",
  "drone",
  "drum",
  "drunk",
  "dry-ice",
  "dryad",
  "duck",
  "duckling",
  "dune",
  "durendal",
  "dust",
  "dynamite",
  "eagle",
  "earthquake",
  "eclipse",
  "egg",
  "egg-timer",
  "electric-car",
  "electric-eel",
  "electrician",
  "electricity",
  "elf",
  "elixir-of-life",
  "email",
  "energy",
  "engineer",
  "epona",
  "eruption",
  "excalibur",
  "excavator",
  "explosion",
  "fabric",
  "factory",
  "faerie",
  "fairy-tale",
  "family",
  "family-tree",
  "farm",
  "farmer",
  "father-time",
  "faun",
  "fence",
  "fenrir",
  "field",
  "fire-extinguisher",
  "firefighter",
  "fireplace",
  "firestation",
  "firetruck",
  "firewall",
  "fireworks",
  "fish",
  "fishing-rod",
  "flamethrower",
  "flashlight",
  "flood",
  "flour",
  "flower",
  "flute",
  "flying-fish",
  "flying-squirrel",
  "fog",
  "force-knight",
  "forest",
  "fork",
  "fortune-cookie",
  "fossil",
  "fountain",
  "fountain-of-youth",
  "fox",
  "frankenstein's-monster",
  "french-fries",
  "fridge",
  "frog",
  "frozen-yogurt",
  "fruit",
  "fruit-tree",
  "galaxy",
  "galaxy-cluster",
  "garage",
  "garden",
  "gardener",
  "gargoyle",
  "garuda",
  "gas",
  "gashadokuro",
  "geyser",
  "ghost",
  "giant",
  "gift",
  "gingerbread-house",
  "gingerbread-man",
  "glacier",
  "glass",
  "glasses",
  "gnome",
  "goat",
  "goblin",
  "gold",
  "golem",
  "granite",
  "grass",
  "grave",
  "gravestone",
  "graveyard",
  "green-man",
  "greenhouse",
  "gremlin",
  "grenade",
  "griffin",
  "grilled-cheese",
  "grim-reaper",
  "gun",
  "gunpowder",
  "gust",
  "hacker",
  "hail",
  "ham",
  "hamburger",
  "hammer",
  "hamster",
  "hangar",
  "harp",
  "hay",
  "hay-bale",
  "heat",
  "heaven",
  "hedge",
  "hedgehog",
  "helicopter",
  "hell",
  "hellhound",
  "hero",
  "hill",
  "hippo",
  "holy-grail",
  "holy-water",
  "honey",
  "horizon",
  "horse",
  "horseshoe",
  "hospital",
  "hot-chocolate",
  "hourglass",
  "house",
  "human",
  "hummingbird",
  "hurricane",
  "husky",
  "hydra",
  "ice",
  "ice-cream",
  "ice-cream-truck",
  "ice-sculpture",
  "iceberg",
  "iced-tea",
  "idea",
  "igloo",
  "internet",
  "island",
  "ivy",
  "jack-o-lantern",
  "jackalope",
  "jam",
  "jar",
  "jerky",
  "jiangshi",
  "jormungandr",
  "jotunn",
  "juice",
  "jupiter",
  "kaiju",
  "kanab",
  "kappa",
  "katana",
  "kelpie",
  "kite",
  "kitsune",
  "knife",
  "knight",
  "kraken",
  "krampus",
  "lake",
  "lamp",
  "land",
  "laptop",
  "lasso",
  "lava",
  "lava-lamp",
  "lawn",
  "lawn-mower",
  "leaf",
  "leather",
  "legend",
  "lens",
  "letter",
  "librarian",
  "library",
  "life",
  "light-bulb",
  "light-sword",
  "lighthouse",
  "lightning",
  "lion",
  "liquid",
  "little-alchemy",
  "livestock",
  "lizard",
  "log-cabin",
  "love",
  "lumberjack",
  "maahes",
  "mac-and-cheese",
  "machine",
  "magic",
  "magic-lamp",
  "magma",
  "mail-truck",
  "mailbox",
  "mailman",
  "manatee",
  "map",
  "maple-syrup",
  "mara",
  "mars",
  "marshmallows",
  "maui",
  "maui's-fishhook",
  "mayonnaise",
  "meat",
  "medusa",
  "mercury",
  "mermaid",
  "meteor",
  "meteoroid",
  "microscope",
  "milk",
  "milk-shake",
  "mimic",
  "mineral",
  "minotaur",
  "mirror",
  "mist",
  "mjolnir",
  "mold",
  "monarch",
  "money",
  "monkey",
  "moon",
  "moon-rover",
  "moss",
  "moth",
  "mothman",
  "motorcycle",
  "mount-olympus",
  "mountain",
  "mountain-goat",
  "mountain-range",
  "mouse",
  "mousetrap",
  "mud",
  "mummy",
  "music",
  "musician",
  "narwhal",
  "necromancer",
  "necronomicon",
  "needle",
  "nessie",
  "nest",
  "net",
  "newspaper",
  "night",
  "ninja",
  "ninja-turtle",
  "nuts",
  "oasis",
  "obsidian",
  "ocean",
  "oil",
  "omelette",
  "oni",
  "ooze",
  "optical-fiber",
  "orc",
  "orchard",
  "ore",
  "organic-matter",
  "origami",
  "ostrich",
  "ouroboros",
  "owl",
  "oxygen",
  "ozone",
  "paint",
  "painter",
  "painting",
  "paladin",
  "paleontologist",
  "palm",
  "pan-flute",
  "pandora's-box",
  "paper",
  "paper-airplane",
  "paper-cup",
  "parachute",
  "paraglider",
  "park",
  "parrot",
  "pasta",
  "paul-bunyan",
  "peach-of-immortality",
  "peacock",
  "peanut-butter",
  "peat",
  "pebble",
  "pegasus",
  "pencil",
  "pencil-sharpener",
  "penguin",
  "penicillin",
  "perfume",
  "petroleum",
  "philosopher's-stone",
  "phoenix",
  "picnic",
  "pie",
  "pig",
  "pigeon",
  "piggy-bank",
  "pilot",
  "pinocchio",
  "pipe",
  "piranha",
  "pirate",
  "pirate-ship",
  "pitchfork",
  "pizza",
  "planet",
  "plankton",
  "plant",
  "plasma",
  "platypus",
  "plow",
  "polar-bear",
  "pollen",
  "pond",
  "popsicle",
  "poseidon",
  "post-office",
  "potato",
  "potter",
  "pottery",
  "pressure",
  "primordial-soup",
  "printer",
  "prism",
  "prometheus",
  "pterodactyl",
  "puddle",
  "pumpkin",
  "pyramid",
  "quetzalcoatl",
  "quicksand",
  "quicksilver",
  "ra",
  "rabbit",
  "rain",
  "rainbow",
  "rainbow-serpent",
  "rainforest",
  "rat",
  "recipe",
  "reed",
  "reindeer",
  "restaurant",
  "ring",
  "river",
  "rivulet",
  "robot",
  "robot-vacuum",
  "roc",
  "rock",
  "rocket",
  "roe",
  "roller-coaster",
  "rope",
  "rose",
  "ruins",
  "ruler",
  "rust",
  "rv",
  "sack",
  "saddle",
  "safe",
  "safety-glasses",
  "sailboat",
  "sailor",
  "salamander",
  "salt",
  "samurai",
  "sand",
  "sand-castle",
  "sandman",
  "sandpaper",
  "sandstone",
  "sandstorm",
  "sandwich",
  "santa",
  "sap",
  "saturn",
  "scalpel",
  "scarecrow",
  "scissors",
  "scorpion",
  "scuba-tank",
  "scythe",
  "sea",
  "seagull",
  "seahorse",
  "seal",
  "seaplane",
  "seasickness",
  "seaweed",
  "seed",
  "selkie",
  "sewing-machine",
  "shark",
  "sheep",
  "sheet-music",
  "shipwreck",
  "shovel",
  "shuriken",
  "sickness",
  "silo",
  "skateboard",
  "skeleton",
  "ski-goggles",
  "skier",
  "sky",
  "skyscraper",
  "sleigh",
  "sloth",
  "smartphone",
  "smog",
  "smoke",
  "smoke-signal",
  "smoothie",
  "snake",
  "snow",
  "snow-globe",
  "snowball",
  "snowboard",
  "snowboarder",
  "snowman",
  "snowmobile",
  "soap",
  "soda",
  "soil",
  "solar-cell",
  "solar-system",
  "solid",
  "sound",
  "space",
  "space-station",
  "spaceship",
  "spaghetti",
  "sphinx",
  "spider",
  "spoon",
  "spotlight",
  "sprinkles",
  "squirrel",
  "star",
  "starfish",
  "statue",
  "steak",
  "steam",
  "steam-engine",
  "steamboat",
  "steel",
  "steel-wool",
  "stethoscope",
  "stone",
  "storm",
  "story",
  "stream",
  "string-phone",
  "stun-gun",
  "sugar",
  "sun",
  "sun-wukong",
  "sundial",
  "sunflower",
  "sunglasses",
  "supernova",
  "surfer",
  "sushi",
  "swamp",
  "sweater",
  "swim-goggles",
  "swimmer",
  "swimming-pool",
  "sword",
  "swordfish",
  "syringe",
  "tablet",
  "tailor",
  "tank",
  "tawaret",
  "tea",
  "telescope",
  "tengu",
  "tent",
  "the-one-ring",
  "thermometer",
  "thor",
  "thread",
  "tide",
  "titanic",
  "toast",
  "tobacco",
  "tool",
  "toolbox",
  "tornado",
  "toucan",
  "tractor",
  "train",
  "trainyard",
  "treasure",
  "treasure-map",
  "tree",
  "treehouse",
  "trojan-horse",
  "troll",
  "tsunami",
  "tunnel",
  "turtle",
  "twilight",
  "tyrannosaurus-rex",
  "ufo",
  "umbrella",
  "unicorn",
  "universe",
  "vacuum-cleaner",
  "valhalla",
  "valkyrie",
  "vampire",
  "vase",
  "vault",
  "vegetable",
  "venus",
  "village",
  "vine",
  "vinegar",
  "vodyanoy",
  "volcano",
  "vulcan",
  "vulture",
  "wagon",
  "wall",
  "wand",
  "warmth",
  "warrior",
  "watch",
  "water-gun",
  "water-lily",
  "water-pipe",
  "waterfall",
  "wave",
  "wax",
  "web",
  "werewolf",
  "wheat",
  "wheel",
  "wild-boar",
  "will-o'-the-wisp",
  "wind",
  "wind-turbine",
  "windmill",
  "windsurfer",
  "wine",
  "wire",
  "witch",
  "wizard",
  "wolf",
  "wolpertinger",
  "wood",
  "woodpecker",
  "wool",
  "world-turtle",
  "wrapping-paper",
  "writer",
  "yeti",
  "yggdrasil",
  "yogurt",
  "zeus",
  "ziz",
  "zombie",
  "zoo"
];

export default items;