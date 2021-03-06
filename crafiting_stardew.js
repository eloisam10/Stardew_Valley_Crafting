const itens_recipes = {
  CherryBomb: { CopperOre: 4, Coal: 1 },
  Bomb: { IronOre: 4, Coal: 1 },
  MegaBomb: { GoldOre: 4, SolarEssence: 1, VoidEssence: 1 },
  Gate: { Wood: 10 },
  WoodFence: { Wood: 2 },
  StoneFence: { Stone: 2 },
  IronFence: { IronBar: 1 },
  HardwoodFence: { Hardwood: 1 },
  Sprinkler: { CopperBar: 1, IronBar: 1 },
  QualitySprinkler: { IronBar: 1, GoldBar: 1, RefinedQuartz: 1 },
  IridiumSprinkler: { GoldBar: 1, IridiumBar: 1, BatteryPack: 1 },
  MayonnaiseMachine: { Wood: 15, Stone: 15, EarthCrystal: 1, CopperBar: 1 },
  BeeHouse: { Wood: 40, Coal: 8, IronBar: 1, MapleSyrup: 1 },
  PreservesJar: { Wood: 50, Stone: 40, Coal: 8 },
  CheesePress: { Wood: 45, Stone: 45, Hardwood: 10, CopperBar: 1 },
  Loom: { Wood: 60, Fiber: 30, PineTar: 1 },
  Keg: { Wood: 30, CopperBar: 1, IronBar: 1, OakResin: 1 },
  OilMaker: { Slime: 50, Hardwood: 20, GoldBar: 1 },
  Cask: { Wood: 20, Hardwood: 1 },
  BasicFertilizer: { Sap: 2 },
  BasicRetainingSoil: { Stone: 2 },
  DeluxeFertilizer: { IridiumBar: 1, Sap: 40 },
  DeluxeRetainingSoil: { Stone: 5, Fiber: 3, Clay: 1 },
  DeluxeSpeedGro: { OakResin: 1, Coral: 1 },
  HyperSpeedGro: { RadioactiveOre: 1, BoneFragment: 3, SolarEssence: 1 },
  QualityFertilizer: { Sap: 2, AnyFish: 1 },
  QualityRetainingSoil: { Stone: 3, Clay: 1 },
  SpeedGro: { PineTar: 1, Clam: 1 },
  TreeFertilizer: { Fiber: 5, Stone: 5 },
  WildSeeds_Sp: { WildHorseradish: 1, Daffodil: 1, Leek: 1, Dandelion: 1 },
  WildSeeds_Su: { SpiceBerry: 1, Grape: 1, SweetPea: 1 },
  WildSeeds_Fa: { CommonMushroom: 1, WildPlum: 1, Hazelnut: 1, Blackberry: 1 },
  WildSeeds_Wi: { WinterRoot: 1, CrystalFruit: 1, SnowYam: 1, Crocus: 1 },
  AncientSeeds: { AncientSeed: 1 },
  GrassStarter: { Fiber: 10 },
  TeaSapling: { WildSeeds: 2, Fiber: 5, Wood: 5 },
  FiberSeeds: { MixedSeeds: 1, Sap: 5, Clay: 1 },
  WoodFloor: { Wood: 1 },
  RusticPlankFloor: { Wood: 1 },
  StrawFloor: { Wood: 1, Fiber: 1 },
  WeatheredFloor: { Wood: 1 },
  CrystalFloor: { RefinedQuartz: 1 },
  StoneFloor: { Stone: 1 },
  StoneWalkwayFloor: { Stone: 1 },
  BrickFloor: { Clay: 2, Stone: 5 },
  WoodPath: { Wood: 1 },
  GravelPath: { Stone: 1 },
  CobblestonePath: { Stone: 1 },
  SteppingStonePath: { Stone: 1 },
  CrystalPath: { RefinedQuartz: 1 },
  Spinner: { IronBar: 2 },
  TrapBobber: { CopperBar: 1, Sap: 10 },
  CorkBobber: { Wood: 10, Hardwood: 5, Slime: 10 },
  QualityBobber: { CopperBar: 1, Sap: 20, SolarEssence: 5 },
  TreasureHunter: { GoldBar: 2 },
  DressedSpinner: { IronBar: 2, Cloth: 1 },
  BarbedHook: { CopperBar: 1, IronBar: 1, GoldBar: 1 },
  Magnet: { IronBar: 1 },
  Bait: { BugMeat: 1 },
  WildBait: { Fiber: 10, BugMeat: 5, Slime: 5 },
  MagicBait: { RadioactiveOre: 1, BugMeat: 3 },
  CrabPot: { Wood: 40, IronBar: 3 },
  SturdyRing: { CopperBar: 2, BugMeat: 25, Slime: 25 },
  WarriorRing: { IronBar: 10, Coal: 25, FrozenTear: 10 },
  RingofYoba: { GoldBar: 5, IronBar: 5, Diamond: 1 },
  ThornsRing: { BoneFragment: 50, Stone: 50, GoldBar: 1 },
  GlowstoneRing: { SolarEssence: 5, IronBar: 5 },
  IridiumBand: { IridiumBar: 5, SolarEssence: 50, VoidEssence: 50 },
  FieldSnack: { Acorn: 1, MapleSeed: 1, PineCone: 4 },
  BugSteak: { BugMeat: 10 },
  LifeElixir: { RedMushroom: 1, PurpleMushroom: 1, Chanterelle: 1, Morel: 1 },
  OilofGarlic: { Garlic: 10, Oil: 1 },
  MonsterMusk: { BatWing: 30, Slime: 30 },
  FairyDust: { Diamond: 1, FairyRose: 1 },
  WarpTotemBeach: { Hardwood: 1, Coral: 2, Fiber: 10 },
  WarpTotemMountains: { Hardwood: 1, IronBar: 1, Stone: 25 },
  WarpTotemFarm: { Hardwood: 1, Honey: 1, Fiber: 20 },
  WarpTotemDesert: { Hardwood: 2, Coconut: 1, IridiumOre: 4 },
  WarpTotemIsland: { Hardwood: 5, DragonTooth: 1, Ginger: 1 },
  RainTotem: { Hardwood: 1, TruffleOil: 1, PineTar: 5 },
  Torch: { Wood: 1, Sap: 2 },
  Campfire: { Stone: 10, Wood: 10, Fiber: 10 },
  WoodenBrazier: { Wood: 10, Coal: 1, Fiber: 5 },
  StoneBrazier: { Stone: 10, Coal: 1, Fiber: 5 },
  GoldBrazier: { GoldBar: 1, Coal: 1, Fiber: 5 },
  CarvedBrazier: { Hardwood: 10, Coal: 1 },
  StumpBrazier: { Hardwood: 5, Coal: 1 },
  BarrelBrazier: { Wood: 50, SolarEssence: 1, Coal: 1 },
  SkullBrazier: { Hardwood: 10, SolarEssence: 1, Coal: 1, BoneFragment: 10 },
  MarbleBrazier: { Marble: 1, Aquamarine: 1, Stone: 100 },
  WoodLamppost: { Wood: 50, BatteryPack: 1 },
  IronLamppost: { IronBar: 1, BatteryPack: 1 },
  JackOLantern: { Pumpkin: 1, Torch: 1 },
  CharcoalKiln: { Wood: 20, CopperBar: 2 },
  Crystalarium: { Stone: 99, GoldBar: 5, IridiumBar: 2, BatteryPack: 1 },
  Furnace: { CopperOre: 20, Stone: 25 },
  LightningRod: { IronBar: 1, RefinedQuartz: 1, BatWing: 5 },
  SolarPanel: { RefinedQuartz: 10, IronBar: 5, GoldBar: 5 },
  RecyclingMachine: { Wood: 25, Stone: 25, IronBar: 1 },
  SeedMaker: { Wood: 25, Coal: 10, GoldBar: 1 },
  SlimeIncubator: { IridiumBar: 2, Slime: 100 },
  OstrichIncubator: { BoneFragment: 50, Hardwood: 50, CinderShard: 20 },
  SlimeEggPress: { Coal: 25, FireQuartz: 1, BatteryPack: 1 },
  Tapper: { Wood: 40, CopperBar: 2 },
  HeavyTapper: { Hardwood: 30, RadioactiveBar: 1 },
  WormBin: { Hardwood: 25, GoldBar: 1, IronBar: 1, Fiber: 50 },
  BoneMill: { BoneFragment: 10, Clay: 3, Stone: 20 },
  GeodeCrusher: { GoldBar: 2, Stone: 50, Diamond: 1 },
  TuboFlowers: {
    Wood: 15,
    TulipBulb: 1,
    JazzSeeds: 1,
    PoppySeeds: 1,
    SpangleSeeds: 1,
  },
  WickedStatue: { Stone: 25, Coal: 5 },
  FluteBlock: { Wood: 10, CopperOre: 2, Fiber: 20 },
  DrumBlock: { Stone: 10, CopperOre: 2, Fiber: 20 },
  Chest: { Wood: 50 },
  StoneChest: { Stone: 12 },
  WoodSign: { Wood: 25 },
  StoneSign: { Stone: 25 },
  DarkSign: { BatWing: 5, BoneFragment: 5 },
  GardenPot: { Clay: 1, Stone: 10, RefinedQuartz: 1 },
  Scarecrow: { Wood: 50, Coal: 1, Fiber: 20 },
  DeluxeScarecrow: { Wood: 50, Fiber: 40, IridiumOre: 1 },
  Staircase: { Stone: 99 },
  ExplosiveAmmo: { IronBar: 1, Coal: 2 },
  TransmuteFe: { CopperBar: 3 },
  TransmuteAu: { IronBar: 2 },
  MiniJukebox: { IronBar: 2, BatteryPack: 1 },
  MiniObelisk: { Hardwood: 30, SolarEssence: 20, GoldBar: 3 },
  FarmComputer: { DwarfGadget: 1, BatteryPack: 1, RefinedQuartz: 10 },
  Hopper: { Hardwood: 10, IridiumBar: 1, RadioactiveBar: 1 },
  CookoutKit: { Wood: 15, Fiber: 10, Coal: 3 },
};

//List of all the craftable itens
const craftable_itens = [
  "CherryBomb",
  "Bomb",
  "MegaBomb",
  "Gate",
  "WoodFence",
  "StoneFence",
  "IronFence",
  "HardwoodFence",
  "Sprinkler",
  "QualitySprinkler",
  "IridiumSprinkler",
  "MayonnaiseMachine",
  "BeeHouse",
  "PreservesJar",
  "CheesePress",
  "Loom",
  "Keg",
  "OilMaker",
  "Cask",
  "BasicFertilizer",
  "BasicRetainingSoil",
  "DeluxeFertilizer",
  "DeluxeRetainingSoil",
  "DeluxeSpeedGro",
  "HyperSpeedGro",
  "QualityFertilizer",
  "QualityRetainingSoil",
  "SpeedGro",
  "TreeFertilizer",
  "TreeFertilizer",
  "WildSeeds_Sp",
  "WildSeeds_Su",
  "WildSeeds_Fa",
  "WildSeeds_Wi",
  "AncientSeeds",
  "GrassStarter",
  "TeaSapling",
  "FiberSeeds",
  "WoodFloor",
  "RusticPlankFloor",
  "StrawFloor",
  "WeatheredFloor",
  "CrystalFloor",
  "StoneFloor",
  "StoneWalkwayFloor",
  "BrickFloor",
  "WoodPath",
  "GravelPath",
  "CobblestonePath",
  "SteppingStonePath",
  "CrystalPath",
  "Spinner",
  "TrapBobber",
  "CorkBobber",
  "QualityBobber",
  "TreasureHunter",
  "DressedSpinner",
  "BarbedHook",
  "Magnet",
  "Bait",
  "WildBait",
  "MagicBait",
  "CrabPot",
  "SturdyRing",
  "WarriorRing",
  "RingofYoba",
  "ThornsRing",
  "GlowstoneRing",
  "IridiumBand",
  "FieldSnack",
  "BugSteak",
  "LifeElixir",
  "OilofGarlic",
  "MonsterMusk",
  "FairyDust",
  "WarpTotemBeach",
  "WarpTotemMountains",
  "WarpTotemFarm",
  "WarpTotemDesert",
  "WarpTotemIsland",
  "RainTotem",
  "Torch",
  "Campfire",
  "WoodenBrazier",
  "StoneBrazier",
  "GoldBrazier",
  "CarvedBrazier",
  "StumpBrazier",
  "BarrelBrazier",
  "SkullBrazier",
  "MarbleBrazier",
  "WoodLamppost",
  "IronLamppost",
  "JackOLantern",
  "CharcoalKiln",
  "Crystalarium",
  "Furnace",
  "LightningRod",
  "SolarPanel",
  "RecyclingMachine",
  "SeedMaker",
  "SlimeIncubator",
  "OstrichIncubator",
  "SlimeEggPress",
  "Tapper",
  "HeavyTapper",
  "WormBin",
  "BoneMill",
  "GeodeCrusher",
  "TuboFlowers",
  "WickedStatue",
  "FluteBlock",
  "DrumBlock",
  "Chest",
  "StoneChest",
  "WoodSign",
  "StoneSign",
  "DarkSign",
  "GardenPot",
  "Scarecrow",
  "DeluxeScarecrow",
  "Staircase",
  "ExplosiveAmmo",
  "TransmuteFe",
  "TransmuteAu",
  "MiniJukebox",
  "MiniObelisk",
  "FarmComputer",
  "Hopper",
  "CookoutKit",
];
//List of the resources needed for crafting
const resources = [
  "Acorn",
  "AncientSeed",
  "AnyFish",
  "Aquamarine",
  "BatteryPack",
  "BatWing",
  "Blackberry",
  "BoneFragment",
  "BugMeat",
  "Chanterelle",
  "CinderShard",
  "Clam",
  "Clay",
  "Cloth",
  "Coal",
  "Coconut",
  "CommonMushroom",
  "CopperBar",
  "CopperOre",
  "Coral",
  "Crocus",
  "CrystalFruit",
  "Daffodil",
  "Dandelion",
  "Diamond",
  "DragonTooth",
  "DwarfGadget",
  "EarthCrystal",
  "FairyRose",
  "Fiber",
  "FireQuartz",
  "FrozenTear",
  "Garlic",
  "Ginger",
  "GoldBar",
  "GoldOre",
  "Grape",
  "Hardwood",
  "Hazelnut",
  "Honey",
  "IridiumBar",
  "IridiumOre",
  "IronBar",
  "IronOre",
  "JazzSeeds",
  "Leek",
  "MapleSeed",
  "MapleSyrup",
  "Marble",
  "MixedSeeds",
  "OakResin",
  "Oil",
  "PineCone",
  "PineTar",
  "PoppySeeds",
  "Pumpkin",
  "PurpleMushroom",
  "RadioactiveBar",
  "RadioactiveOre",
  "RedMushroom",
  "RefinedQuartz",
  "Sap",
  "Slime",
  "SnowYam",
  "SolarEssence",
  "SpangleSeeds",
  "SpiceBerry",
  "Stone",
  "SweetPea",
  "Torch",
  "TruffleOil",
  "TulipBulb",
  "VoidEssence",
  "WildHorseradish",
  "WildPlum",
  "WildSeeds",
  "WinterRoot",
  "Wood",
];

const select_all_categories = [
  "Bombs",
  "Gates",
  "Sprinklers",
  "ArtisanEquipment",
  "Fertilizers",
  "Seeds",
  "Floors",
  "Fishing",
  "Rings",
  "EdibleItems",
  "Consumables",
  "Lighting",
  "RefiningEquipment",
  "Furniture",
  "StorageEquipment",
  "Signs",
  "FarmingMisc",
  "MiningMisc",
  "Misc",
];

function calculate_resources() {
  //creates an array of the recipe itens
  const array = Object.values(itens_recipes);

  //counter for the resources
  const resources_count = resources.reduce(
    (acc, item) => ((acc[item] = 0), acc),
    {}
  );
  //For into all the craftable itens
  craftable_itens.forEach((craftable) => {
    //If the item is checked, is counted
    if (document.getElementById(craftable).checked) {
      //for where each element is a resource
      resources.forEach((material) => {
        if (itens_recipes[craftable][material] !== undefined) {
          resources_count[material] += itens_recipes[craftable][material];
        }
      });
    }
  });
  //Deletes all of the resources that are not needed
  for (var prop in resources_count) {
    if (resources_count[prop] === 0) {
      delete resources_count[prop];
    }
  }
  //Turns it into a string
  results_html = JSON.stringify(resources_count, null, " ");
  //Replace all the "": into a :
  results = results_html.replace(/"([^"]+)":/g, "$1:");
  //Removes all the {}
  results = results.replace(/[\{\})]/g, "");
  //Replaces the , into a break line
  results = results.replace(/\,/g, "</br>");
  document.getElementById("results").innerHTML = results;
  console.log(results);
}

const button_calculate = document.getElementById("button_calculate");
if (button_calculate) {
  button_calculate.addEventListener("click", calculate_resources, true);
}

function toggle(source) {
  //Passes by all the categories
  select_all_categories.forEach((category) => {
    let all_categories = document.getElementsByName(category);
    let selected_category = document.getElementById(category);
    for (let index = 0; index < all_categories.length; index++) {
      //Checks if the checkbox of "select/unselect all" is checked (select all)
      // Or if the items of the category is checked (unselect all)
      //Both statements can't be true at the same time, or will unselect everything
      if (
        (selected_category.checked || all_categories[index].checked) &
        !(selected_category.checked && all_categories[index].checked)
      ) {
        all_categories[index].checked = source.checked;
      }
    }
  });
}
