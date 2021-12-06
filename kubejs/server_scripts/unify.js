//priority: 10000
events.listen('recipes', function (e) {

    custom()
    // unify()
    // plate()
    // dust()
    // nugget()
    // block()
    dense()

    function custom() {
        replaceOutput('#forge:bitumen', 'thermal:bitumen');
        replaceOutput('#forge:chests/wooden', 'minecraft:chest');
        replaceOutput('#forge:ingots/aluminium', 'janoeo:aluminium_ingot');
        replaceOutput('#forge:ingots/aluminum', 'janoeo:aluminium_ingot');
        replaceOutput('#forge:ingots/brass', 'create:brass_ingot');
        replaceOutput('#forge:ingots/bronze', 'thermal:bronze_ingot');
        replaceOutput('#forge:ingots/constantan', 'thermal:constantan_ingot');
        replaceOutput('#forge:ingots/copper', 'thermal:copper_ingot');
        replaceOutput('#forge:ingots/electrum', 'thermal:electrum_ingot');
        replaceOutput('#forge:ingots/invar', 'thermal:invar_ingot');
        replaceOutput('#forge:ingots/lead', 'thermal:lead_ingot');
        replaceOutput('#forge:ingots/nickel', 'thermal:nickel_ingot');
        replaceOutput('#forge:ingots/osmium', 'mekanism:ingot_osmium');
        replaceOutput('#forge:ingots/silver', 'thermal:silver_ingot');
        replaceOutput('#forge:ingots/steel', 'mekanism:ingot_steel');
        replaceOutput('#forge:ingots/tin', 'thermal:tin_ingot');
        replaceOutput('#forge:ingots/uranium', 'mekanism:ingot_uranium');
        replaceOutput('#forge:ingots/zinc', 'janoeo:zinc_ingot');
        replaceOutput('#forge:ores/nickel', 'thermal:nickel_ore');
        replaceOutput('#forge:ores/ruby', 'thermal:ruby_ore');
        replaceOutput('#forge:ores/sapphire', 'thermal:sapphire_ore');
        replaceOutput('#forge:rods/iron', 'createaddition:iron_rod');
    }

    function unify() {
        /**********************REMOVE**********************/
        //tinker
        e.remove({id:'createaddition:rolling/copper_plate'})
        e.remove({id:'tconstruct:smeltery/casting/metal/copper/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/copper/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/tin/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/tin/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/aluminum/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/aluminum/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/bronze/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/bronze/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/constantan/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/constantan/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/electrum/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/electrum/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/lead/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/lead/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/nickel/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/nickel/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/silver/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/silver/ingot_sand_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/zinc/ingot_gold_cast'})
        e.remove({id:'tconstruct:smeltery/casting/metal/zinc/ingot_sand_cast'})
        //immersive
        e.remove({id:'immersiveengineering:arcfurnace/dust_copper'})
        e.remove({id:'immersiveengineering:arcfurnace/ore_copper'})
        e.remove({id:'immersiveengineering:arcfurnace/dust_aluminum'})
        e.remove({id:'immersiveengineering:arcfurnace/ore_aluminum'})
        e.remove({id:'immersiveengineering:arcfurnace/dust_zinc'})
        e.remove({id:'immersiveengineering:arcfurnace/ore_zinc'})
        //create
        e.remove({id:'createaddition:compat/immersiveengineering/electrum'})
        e.remove({id:'createaddition:compat/immersiveengineering/constantan'})
        //other
        e.remove({id:'create:blasting/lead_ingot_compat_eidolon'})
        e.remove({id:'create:smelting/lead_ingot_compat_eidolon'})
        e.remove({id:'eidolon:blast_lead_dust'})
        e.remove({id:'eidolon:blast_lead_ore'})
        e.remove({id:'eidolon:decompress_lead_block'})
        e.remove({id:'eidolon:lead_ingot'})
        e.remove({id:'eidolon:smelt_lead_dust'})
        e.remove({id:'eidolon:smelt_lead_ore'})
        e.remove({id:'iceandfire:sapphire_block_to_stones'})
        //replace
        replaceIO('forbidden_arcanus:arcane_gold_block', 'eidolon:arcane_gold_block')
        replaceIO('forbidden_arcanus:arcane_gold_ingot', 'eidolon:arcane_gold_ingot')
        replaceIO('forbidden_arcanus:arcane_gold_nugget', 'eidolon:arcane_gold_nugget')
        replaceIO('immersiveengineering:slag', 'thermal:slag')
        //witherbone
        replaceIO('#forge:bones/wither', 'tconstruct:necrotic_bone')
        replaceIO('#forge:wither_bones', 'tconstruct:necrotic_bone')
        //Cast ingot Tinker        
        tinkerCasting("tconstruct:molten_aluminum", 144, "janoeo:aluminium_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_aluminum", 144, "janoeo:aluminium_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_copper", 144, "thermal:copper_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_copper", 144, "thermal:copper_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_tin", 144, "thermal:tin_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_tin", 144, "thermal:tin_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_bronze", 144, "thermal:bronze_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_bronze", 144, "thermal:bronze_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_constantan", 144, "thermal:constantan_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_constantan", 144, "thermal:constantan_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_electrum", 144, "thermal:electrum_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_electrum", 144, "thermal:electrum_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_lead", 144, "thermal:lead_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_lead", 144, "thermal:lead_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_nickel", 144, "thermal:nickel_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_nickel", 144, "thermal:nickel_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_silver", 144, "thermal:silver_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_silver", 144, "thermal:silver_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_zinc", 144, "janoeo:zinc_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_zinc", 144, "janoeo:zinc_ingot", "tconstruct:casts/single_use/ingot", true, 100)
        tinkerCasting("tconstruct:molten_uranium", 144, "mekanism:ingot_uranium", "tconstruct:casts/multi_use/ingot", false, 100)
        tinkerCasting("tconstruct:molten_uranium", 144, "mekanism:ingot_uranium", "tconstruct:casts/single_use/ingot", true, 100)
        //Ingot Blast Chiller
        blastChiller("tconstruct:molten_brass", 144, "create:brass_ingot", 5000)
        blastChiller("tconstruct:molten_uranium", 144, "mekanism:ingot_uranium", 5000)
        blastChiller("kubejs:molten_enderium", 144, "thermal:enderium_ingot", 5000)
        blastChiller("kubejs:molten_lumium", 144, "thermal:lumium_ingot", 5000)
        blastChiller("kubejs:molten_signalum", 144, "thermal:signalum_ingot", 5000)
        blastChiller("tconstruct:molten_tungsten", 144, "kubejs:tungsten_ingot", 5000)
        //mekanism
        oreFromDustTag('forge:dusts/copper', 8, 'thermal:copper_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/tin', 8, 'thermal:tin_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/uranium', 8, 'janoeo:uranium_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/lead', 8, 'thermal:lead_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/silver', 8, 'thermal:silver_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/nickel', 8, 'thermal:nickel_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/aluminium', 8, 'janoeo:aluminium_ore', 'forge:cobblestone')
        oreFromDustTag('forge:shard/dimshard', 8, 'rftoolsbase:dimensionalshard_overworld', 'forge:cobblestone')
        oreFromDustTag('forge:shard/prosperity', 8, 'mysticalagriculture:prosperity_ore', 'forge:cobblestone')
        oreFromDustTag('forge:essence/inferium', 8, 'mysticalagriculture:inferium_ore', 'forge:cobblestone')
        oreFromDustTag('forge:bitumen', 8, 'mapperbase:bitumen_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/mana', 3, 'ars_nouveau:arcane_ore', 'forge:cobblestone')
        oreFromDustTag('forge:ingots/oratchalcum', 3, 'rats:oratchalcum_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/ratlantis', 8, 'rats:ratlantean_gem_ore', 'forge:cobblestone')
        oreFromDustTag('forge:cheese', 8, 'rats:cheese_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/apatite', 16, 'thermal:apatite_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/niter', 8, 'thermal:niter_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/sulfur', 8, 'thermal:sulfur_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/cinnabar', 8, 'thermal:cinnabar_ore', 'forge:cobblestone')
        oreFromDustTag('forge:gems/endumium', 8, 'farlanders:endumium_ore', 'forge:cobblestone')
        oreFromDustTag('forge:ingots/tungsten', 3, 'kubejs:tungsten_ore', 'forge:cobblestone')
        oreFromDustTag('forge:dusts/yellorium', 8, 'bigreactors:yellorite_ore', 'forge:cobblestone')
        oreFromDustTag('astralsorcery:stardust', 3, 'astralsorcery:starmetal_ore', 'forge:cobblestone')
        oreFromDust('betterendforge:ender_shard', 8, 'betterendforge:ender_ore', 'minecraft:end_stone')
        oreFromDust('betterendforge:raw_amber', 8, 'betterendforge:amber_ore', 'minecraft:end_stone')
        oreFromDust('betterendforge:thallasium_ingot', 3, 'betterendforge:thallasium_ore', 'minecraft:end_stone')
        oreFromDust('mysticalagriculture:soulium_dust', 8, 'mysticalagriculture:soulium_ore', 'mysticalagriculture:soulstone')
        oreFromDust('undergarden:cloggrum_ingot', 3, 'undergarden:cloggrum_ore', 'undergarden:depthrock')
        oreFromDust('undergarden:regalium_ingot', 3, 'undergarden:regalium_ore', 'undergarden:depthrock')
        oreFromDust('undergarden:utherium_chunk', 8, 'undergarden:utherium_ore', 'undergarden:depthrock')
        oreFromDust('undergarden:froststeel_ingot', 3, 'undergarden:froststeel_ore', 'undergarden:depthrock')
        oreFromDust('byg:raw_pendorite', 6, 'byg:pendorite_ore', 'byg:blue_netherrack')
        oreFromDust('minecraft:emerald', 3, 'byg:emeraldite_ore', 'byg:scoria_stone')
        oreFromDust('byg:lignite', 8, 'byg:lignite_ore', 'byg:ether_stone')
        oreFromDust('byg:ametrine_gems', 8, 'byg:ametrine_ore', 'byg:ether_stone')
        oreFromDust('byg:anthracite', 8, 'byg:anthracite_ore', 'byg:brimstone')
        e.custom({"type":"mekanism:metallurgic_infusing","itemInput":{"amount":3,"ingredient":{"tag":"forge:ingots/copper"}},"infusionInput":{"amount":10,"tag":"mekanism:tin"},"output":{"item":"thermal:bronze_ingot","count":4}})
        e.custom({"type":"createaddition:rolling","input": {"tag": "forge:plates/copper"},"result": {"item": "createaddition:copper_wire","count": 2}})
        e.custom({"type":"createaddition:rolling","input": {"tag": "forge:ingots/lead"},"result": {"item": "immersiveengineering:wire_lead","count": 2}})
        //gem
        createCrushingOre('forge:ores/amethyst', 'iceandfire:amythest_gem', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/sapphire', 'thermal:sapphire', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/ruby', 'thermal:ruby', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/cheese', 'rats:cheese', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/ratlantean', 'rats:gem_of_ratlantis', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/fluorite', 'mekanism:fluorite_gem', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/mana', 'ars_nouveau:mana_gem', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/bitumen', 'thermal:bitumen', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/endumium', 'farlanders:endumium_crystal', 2, 4, 'minecraft:cobblestone')
        createCrushingOre('forge:ores/yellorite', 'bigreactors:yellorium_dust', 2, 4, 'minecraft:cobblestone')
        pulverizerThermalOre('forge:ores/amethyst', 'iceandfire:amythest_gem')
        pulverizerThermalOre('forge:ores/sapphire', 'thermal:sapphire')
        pulverizerThermalOre('forge:ores/ruby', 'thermal:ruby')
        pulverizerThermalOre('forge:ores/ender', 'betterendforge:ender_shard')
        pulverizerThermalOre('forge:ores/amber', 'betterendforge:raw_amber')
        pulverizerThermalOre('forge:ores/prosperity', 'mysticalagriculture:prosperity_shard')
        pulverizerThermalOre('forge:ores/inferium', 'mysticalagriculture:inferium_essence')
        pulverizerThermalOre('forge:ores/mana', 'ars_nouveau:mana_gem')
        pulverizerThermalOre('forge:ores/bitumen', 'thermal:bitumen')
        pulverizerThermalOre('forge:ores/pendorite', 'byg:raw_pendorite')
        pulverizerThermalOre('forge:ores/emeraldite', 'byg:emeraldite_shards')
        pulverizerThermalOre('forge:ores/lignite', 'byg:lignite')
        pulverizerThermalOre('forge:ores/anthracite', 'byg:anthracite')
        pulverizerThermalOre('forge:ores/ratlantean', 'rats:gem_of_ratlantis')
        pulverizerThermalOre('forge:ores/soulium', 'mysticalagriculture:soulium_dust')
        pulverizerThermalOre('forge:ores/endumium', 'farlanders:endumium_crystal')
        pulverizerThermalOre('forge:ores/ametrine', 'byg:ametrine_gems')
        pulverizerThermalOre('forge:ores/cheese', 'rats:cheese')
        immersiveCrusher('forge:ores/amethyst', 'iceandfire:amythest_gem', 'minecraft:gravel')
        immersiveCrusher('forge:ores/sapphire', 'thermal:sapphire', 'minecraft:gravel')
        immersiveCrusher('forge:ores/ruby', 'thermal:ruby', 'minecraft:gravel')
        immersiveCrusher('forge:ores/dimshard', 'rftoolsbase:dimensionalshard', 'minecraft:gravel')
        immersiveCrusher('forge:ores/prosperity', 'mysticalagriculture:prosperity_shard', 'minecraft:gravel')
        immersiveCrusher('forge:ores/inferium', 'mysticalagriculture:inferium_essence', 'minecraft:gravel')
        immersiveCrusher('forge:ores/ender', 'betterendforge:ender_shard', 'minecraft:end_stone')
        immersiveCrusher('forge:ores/amber', 'betterendforge:raw_amber', 'minecraft:end_stone')
        immersiveCrusher('forge:ores/cinnabar', 'thermal:cinnabar_dust', 'minecraft:gravel')
        immersiveCrusher('forge:ores/sulfur', 'thermal:sulfur_dust', 'minecraft:gravel')
        immersiveCrusher('forge:ores/niter', 'thermal:niter_dust', 'minecraft:gravel')
        immersiveCrusher('forge:ores/apatite', 'thermal:apatite_dust', 'minecraft:gravel')
        immersiveCrusher('forge:ores/mana', 'ars_nouveau:mana_gem', 'minecraft:gravel')
        immersiveCrusher('forge:ores/bitumen', 'thermal:bitumen', 'minecraft:gravel')
        immersiveCrusher('forge:ores/yellorite', 'bigreactors:yellorium_dust', 'minecraft:gravel')
        immersiveCrusher('forge:ores/pendorite', 'byg:raw_pendorite', 'byg:blue_netherrack')
        immersiveCrusher('forge:ores/emeraldite', 'byg:emeraldite_shards', 'byg:scoria_stone')
        immersiveCrusher('forge:ores/lignite', 'byg:lignite', 'byg:ether_stone')
        immersiveCrusher('forge:ores/anthracite', 'byg:anthracite', 'byg:brimstone')
        immersiveCrusher('forge:ores/ratlantean', 'rats:gem_of_ratlantis', 'minecraft:gravel')
        immersiveCrusher('forge:ores/soulium', 'mysticalagriculture:soulium_dust', 'mysticalagriculture:soulstone_cobble')
        immersiveCrusher('forge:ores/endumium', 'farlanders:endumium_crystal', 'minecraft:gravel')
        immersiveCrusher('forge:ores/ametrine', 'byg:ametrine_gems', 'byg:ether_stone')
        immersiveCrusher('forge:ores/cheese', 'rats:cheese', 'minecraft:gravel')
        dustFromOre('forge:ores/amethyst', 'iceandfire:amythest_gem')
        dustFromOre('forge:ores/sapphire', 'thermal:sapphire')
        dustFromOre('forge:ores/ruby', 'thermal:ruby')
        dustFromOre('forge:ores/ender', 'betterendforge:ender_shard')
        dustFromOre('forge:ores/amber', 'betterendforge:raw_amber')
        dustFromOre('forge:ores/mana', 'ars_nouveau:mana_gem')
        dustFromOre('forge:ores/bitumen', 'thermal:bitumen')
        dustFromOre('forge:ores/yellorite', 'bigreactors:yellorium_dust')
        dustFromOre('forge:ores/pendorite', 'byg:raw_pendorite')
        dustFromOre('forge:ores/emeraldite', 'byg:emeraldite_shards')
        dustFromOre('forge:ores/lignite', 'byg:lignite')
        dustFromOre('forge:ores/anthracite', 'byg:anthracite')
        dustFromOre('forge:ores/ratlantean', 'rats:gem_of_ratlantis')
        dustFromOre('forge:ores/soulium', 'mysticalagriculture:soulium_dust')
        dustFromOre('forge:ores/endumium', 'farlanders:endumium_crystal')
        dustFromOre('forge:ores/ametrine', 'byg:ametrine_gems')
        dustFromOre('forge:ores/cheese', 'rats:cheese')
        dustFromOre('forge:ores/cinnabar', 'thermal:cinnabar_dust')
        dustFromOre('forge:ores/sulfur', 'thermal:sulfur_dust')
        dustFromOre('forge:ores/niter', 'thermal:niter_dust')
        dustFromOre('forge:ores/apatite', 'thermal:apatite_dust')
        intedynaSqueezer('forge:ores/amethyst', 'forge:gems/amethyst')
        intedynaSqueezer('forge:ores/sapphire', 'forge:gems/sapphire')
        intedynaSqueezer('forge:ores/ruby', 'forge:gems/ruby')
        intedynaMecaSqueezer('forge:ores/amethyst', 'forge:gems/amethyst')
        intedynaMecaSqueezer('forge:ores/sapphire', 'forge:gems/sapphire')
        intedynaMecaSqueezer('forge:ores/ruby', 'forge:gems/ruby')
        
        intedynaSqueezer('forge:ores/cinnabar', 'forge:dusts/cinnabar')
        intedynaSqueezer('forge:ores/sulfur', 'forge:dusts/sulfur')
        intedynaSqueezer('forge:ores/niter', 'forge:dusts/niter')
        intedynaSqueezer('forge:ores/apatite', 'forge:dusts/apatite')

        intedynaMecaSqueezer('forge:ores/cinnabar', 'forge:dusts/cinnabar')
        intedynaMecaSqueezer('forge:ores/sulfur', 'forge:dusts/sulfur')
        intedynaMecaSqueezer('forge:ores/niter', 'forge:dusts/niter')
        intedynaMecaSqueezer('forge:ores/apatite', 'forge:dusts/apatite')

        combinerMeka('iceandfire:amythest_gem', 'iceandfire:amythest_ore')
        combinerMeka('thermal:sapphire', 'thermal:sapphire_ore')
        combinerMeka('thermal:ruby', 'thermal:ruby_ore')
        //Arcfurnace
        arcFurnaceOre('forge:ores/aluminium', 'forge:ingots/aluminium')
        arcFurnaceDust('forge:dusts/aluminium', 'forge:ingots/aluminium')
        arcFurnaceOre('forge:ores/copper', 'forge:ingots/copper')
        arcFurnaceDust('forge:dusts/copper', 'forge:ingots/copper')
        arcFurnaceOre2('forge:ores/zinc', 'janoeo:zinc_ingot')
        arcFurnaceOre2('forge:ores/uranium', 'mekanism:ingot_uranium')
        arcFurnaceDust2('forge:dusts/uranium', 'mekanism:ingot_uranium')
        arcFurnaceOre('forge:ores/apatite', 'forge:gems/apatite')
        arcFurnaceOre('forge:ores/niter', 'forge:gems/niter')
        arcFurnaceOre('forge:ores/sulfur', 'forge:gems/sulfur')
        arcFurnaceOre('forge:ores/cinnabar', 'forge:gems/cinnabar')
        arcFurnaceOre2('forge:ores/cloggrum', 'undergarden:cloggrum_ingot')
        arcFurnaceOre2('forge:ores/regalium', 'undergarden:regalium_ingot')
        arcFurnaceOre2('forge:ores/froststeel', 'undergarden:froststeel_ingot')
        arcFurnaceOre2('forge:ores/utherium', 'undergarden:utherium_chunk')
        arcFurnaceOre2('forge:ores/ender', 'betterendforge:ender_shard')
        arcFurnaceOre2('forge:ores/amber', 'betterendforge:raw_amber')
        arcFurnaceOre2('forge:ores/thallasium', 'betterendforge:thallasium_ingot')
        arcFurnaceOre2('forge:ores/anthracite', 'byg:anthracite')
        arcFurnaceOre2('forge:ores/pendorite', 'byg:raw_pendorite')
        arcFurnaceOre2('forge:ores/emeraldite', 'byg:emeraldite_shards')
        arcFurnaceOre2('forge:ores/lignite', 'byg:lignite')
        arcFurnaceOre2('forge:ores/ametrine', 'byg:ametrine_gems')
        arcFurnaceOre2('forge:ores/cheese', 'rats:cheese')
        arcFurnaceOre2('forge:ores/ratlantean', 'rats:gem_of_ratlantis')
        arcFurnaceOre2('forge:ores/oratchalcum', 'rats:oratchalcum_ingot')
        arcFurnaceOre2('forge:ores/starmetal', 'astralsorcery:starmetal_ingot')
        arcFurnaceOre2('forge:ores/yellorite', 'bigreactors:yellorium_ingot')
        arcFurnaceOre2('forge:ores/fluorite', 'mekanism:fluorite_gem')
        arcFurnaceOre2('forge:ores/mana', 'ars_nouveau:mana_gem')
        arcFurnaceOre2('forge:ores/bitumen', 'thermal:bitumen')
        arcFurnaceOre2('forge:ores/endumium', 'farlanders:endumium_crystal')
        arcFurnaceOre2('forge:ores/soulium', 'mysticalagriculture:soulium_dust')
        //Furnace+Blast
        e.blasting('#forge:ingots/aluminium', '#forge:dusts/aluminium').xp(0.1)
        e.smelting('#forge:ingots/aluminium', '#forge:dusts/aluminium').xp(0.1)
        e.blasting('#forge:gems/lapis', 'gildedingot:basalt_lapis').xp(0.1)
        e.smelting('#forge:gems/lapis', 'gildedingot:basalt_lapis').xp(0.1)
        e.blasting('#forge:gems/quartz', 'byg:blue_nether_quartz_ore').xp(0.2)
        e.smelting('#forge:gems/quartz', 'byg:blue_nether_quartz_ore').xp(0.2)
        e.blasting('#forge:gems/quartz', 'byg:brimstone_nether_quartz_ore').xp(0.2)
        e.smelting('#forge:gems/quartz', 'byg:brimstone_nether_quartz_ore').xp(0.2)
        e.blasting('mysticalagriculture:prosperity_shard', '#forge:ores/prosperity').xp(0.1)
        e.smelting('mysticalagriculture:prosperity_shard', '#forge:ores/prosperity').xp(0.1)
        e.blasting('mysticalagriculture:inferium_essence', '#forge:ores/inferium').xp(0.1)
        e.smelting('mysticalagriculture:inferium_essence', '#forge:ores/inferium').xp(0.1)
        e.blasting('rftoolsbase:dimensionalshard', '#forge:ores/dimshard').xp(0.1)
        e.smelting('rftoolsbase:dimensionalshard', '#forge:ores/dimshard').xp(0.1)
        e.blasting('#forge:nuggets/utherium', '#forge:ores/utherium').xp(0.1)
        e.smelting('#forge:nuggets/utherium', '#forge:ores/utherium').xp(0.1)
        e.blasting('betterendforge:ender_shard', '#forge:ores/ender').xp(0.1)
        e.smelting('betterendforge:ender_shard', '#forge:ores/ender').xp(0.1)
        e.blasting('betterendforge:raw_amber', '#forge:ores/amber').xp(0.1)
        e.smelting('betterendforge:raw_amber', '#forge:ores/amber').xp(0.1)
        e.blasting('kubejs:tungsten_ingot', '#forge:ores/tungsten').xp(0.1)
        e.smelting('kubejs:tungsten_ingot', '#forge:ores/tungsten').xp(0.1)
        e.blasting('mekanism:fluorite_gem', '#forge:ores/fluorite').xp(0.1)
        e.smelting('mekanism:fluorite_gem', '#forge:ores/fluorite').xp(0.1)
        e.blasting('farlanders:endumium_crystal', '#forge:ores/endumium').xp(0.1)
        e.smelting('farlanders:endumium_crystal', '#forge:ores/endumium').xp(0.1)
        e.smelting('kubejs:mlsexy', 'twilightforest:spiral_bricks').xp(0.1)
        e.blasting('ars_nouveau:mana_gem', '#forge:ores/mana').xp(0.1)
        e.blasting('mysticalagriculture:soulium_dust', '#forge:ores/soulium').xp(0.1)
        e.smelting('byg:lignite', '#forge:ores/lignite').xp(0.1)
        e.smelting('byg:emeraldite_shards', '#forge:ores/emeraldite').xp(0.1)
        e.smelting('byg:raw_pendorite', '#forge:ores/pendorite').xp(0.1)
        e.smelting('byg:anthracite', '#forge:ores/anthracite').xp(0.1)
        e.smelting('byg:ametrine_gems', '#forge:ores/ametrine').xp(0.1)

        //Create
        e.custom({"type": "create:crushing","ingredients": [{"tag": "forge:ores/lapis"}],"results": [{"item": "minecraft:lapis_lazuli","count": 12},{"item": "minecraft:lapis_lazuli","count": 8,"chance": 0.25},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 300})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:coal_gravel_ore"}],"results": [{"item": "minecraft:coal","count": 2},{"item": "minecraft:coal","count": 2,"chance": 0.5},{"item": "minecraft:gravel","chance": 0.125}],"processingTime": 300})
        e.custom({"type": "create:crushing","ingredients": [{"item": "undergarden:coal_ore"}],"results": [{"item": "minecraft:coal","count": 2},{"item": "minecraft:coal","count": 2,"chance": 0.5},{"item": "undergarden:depthrock","chance": 0.125}],"processingTime": 300})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:cryptic_redstone_ore"}],"results": [{"item": "minecraft:redstone","count": 8},{"item": "minecraft:redstone","count": 6,"chance": 0.25},{"item": "byg:cryptic_stone","chance": 0.125}],"processingTime": 300})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:diamond_nether_ore"}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","chance": 0.25},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:diamond_end_ore"}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","chance": 0.25},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:diamond_gravel_ore"}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","chance": 0.25},{"item": "minecraft:gravel","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:diamond_basalt_ore"}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","chance": 0.25},{"item": "minecraft:basalt","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "undergarden:diamond_ore"}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","chance": 0.25},{"item": "undergarden:depthrock","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:emerald_nether_ore"}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","chance": 0.25},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:emerald_end_ore"}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","chance": 0.25},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:emerald_gravel_ore"}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","chance": 0.25},{"item": "minecraft:gravel","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "janoeo:emerald_basalt_ore"}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","chance": 0.25},{"item": "minecraft:basalt","chance": 0.125}],"processingTime": 500})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:blue_nether_quartz_ore"}],"results": [{"item": "minecraft:quartz","count": 2},{"item": "minecraft:quartz","count": 4,"chance": 0.5},{"item": "byg:blue_netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:brimstone_nether_quartz_ore"}],"results": [{"item": "minecraft:quartz","count": 2},{"item": "minecraft:quartz","count": 4,"chance": 0.5},{"item": "byg:brimstone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "rftoolsbase:dimensionalshard_overworld"}],"results": [{"item": "rftoolsbase:dimensionalshard","count": 2},{"item": "rftoolsbase:dimensionalshard","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "rftoolsbase:dimensionalshard_nether"}],"results": [{"item": "rftoolsbase:dimensionalshard","count": 2},{"item": "rftoolsbase:dimensionalshard","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "rftoolsbase:dimensionalshard_end"}],"results": [{"item": "rftoolsbase:dimensionalshard","count": 2},{"item": "rftoolsbase:dimensionalshard","count": 4,"chance": 0.5},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagriculture:inferium_ore"}],"results": [{"item": "mysticalagriculture:inferium_essence","count": 2},{"item": "mysticalagriculture:inferium_essence","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagradditions:nether_inferium_ore"}],"results": [{"item": "mysticalagriculture:inferium_essence","count": 2},{"item": "mysticalagriculture:inferium_essence","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagradditions:end_inferium_ore"}],"results": [{"item": "mysticalagriculture:inferium_essence","count": 2},{"item": "mysticalagriculture:inferium_essence","count": 4,"chance": 0.5},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagriculture:prosperity_ore"}],"results": [{"item": "mysticalagriculture:prosperity_shard","count": 2},{"item": "mysticalagriculture:prosperity_shard","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagradditions:nether_prosperity_ore"}],"results": [{"item": "mysticalagriculture:prosperity_shard","count": 2},{"item": "mysticalagriculture:prosperity_shard","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagradditions:end_prosperity_ore"}],"results": [{"item": "mysticalagriculture:prosperity_shard","count": 2},{"item": "mysticalagriculture:prosperity_shard","count": 4,"chance": 0.5},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "betterendforge:amber_ore"}],"results": [{"item": "betterendforge:raw_amber","count": 2},{"item": "betterendforge:raw_amber","count": 4,"chance": 0.5},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "betterendforge:ender_ore"}],"results": [{"item": "betterendforge:ender_shard","count": 2},{"item": "betterendforge:ender_shard","count": 4,"chance": 0.5},{"item": "minecraft:end_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:lignite_ore"}],"results": [{"item": "byg:lignite","count": 2},{"item": "byg:lignite","count": 4,"chance": 0.5},{"item": "byg:ether_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:emeraldite_ore"}],"results": [{"item": "byg:emeraldite_shards","count": 2},{"item": "byg:emeraldite_shards","count": 4,"chance": 0.5},{"item": "byg:scoria_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:pendorite_ore"}],"results": [{"item": "byg:raw_pendorite","count": 2},{"item": "byg:raw_pendorite","count": 4,"chance": 0.5},{"item": "byg:blue_netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:anthracite_ore"}],"results": [{"item": "byg:anthracite","count": 2},{"item": "byg:anthracite","count": 4,"chance": 0.5},{"item": "byg:brimstone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "byg:ametrine_ore"}],"results": [{"item": "byg:ametrine_gems","count": 2},{"item": "byg:ametrine_gems","count": 4,"chance": 0.5},{"item": "byg:ether_stone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": "mysticalagriculture:soulium_ore"}],"results": [{"item": "mysticalagriculture:soulium_dust","count": 2},{"item": "mysticalagriculture:soulium_dust","count": 4,"chance": 0.5},{"item": "mysticalagriculture:soulstone_cobble","chance": 0.125}],"processingTime": 350})

        //squeezer Dynamics
        intedynaSqueezer('forge:ores/dimshard', 'forge:shard/dimshard')
        intedynaMecaSqueezer('forge:ores/dimshard', 'forge:shard/dimshard')
        intedynaSqueezer('forge:ores/prosperity', 'forge:shard/prosperity')
        intedynaMecaSqueezer('forge:ores/prosperity', 'forge:shard/prosperity')
        intedynaSqueezer('forge:ores/inferium', 'forge:essence/inferium')
        intedynaMecaSqueezer('forge:ores/inferium', 'forge:essence/inferium')
        intedynaSqueezer('forge:ores/amber', 'forge:gems/amber')
        intedynaMecaSqueezer('forge:ores/amber', 'forge:gems/amber')
        intedynaSqueezer('forge:ores/ender', 'forge:shard/ender')
        intedynaMecaSqueezer('forge:ores/ender', 'forge:shard/ender')
        intedynaSqueezer('forge:ores/fluorite', 'forge:gems/fluorite')
        intedynaMecaSqueezer('forge:ores/fluorite', 'forge:gems/fluorite')
        intedynaSqueezer('forge:ores/mana', 'forge:gems/mana')
        intedynaMecaSqueezer('forge:ores/mana', 'forge:gems/mana')
        intedynaSqueezer('forge:ores/bitumen', 'forge:bitumen')
        intedynaMecaSqueezer('forge:ores/bitumen', 'forge:bitumen')
        intedynaSqueezer('forge:ores/yellorite', 'forge:dusts/yellorium')
        intedynaMecaSqueezer('forge:ores/yellorite', 'forge:dusts/yellorium')
        intedynaSqueezer('forge:ores/pendorite', 'forge:pendorite')
        intedynaMecaSqueezer('forge:ores/pendorite', 'forge:pendorite')
        intedynaSqueezer('forge:ores/emeraldite', 'forge:emeraldite')
        intedynaMecaSqueezer('forge:ores/emeraldite', 'forge:emeraldite')
        intedynaSqueezer('forge:ores/lignite', 'forge:lignite')
        intedynaMecaSqueezer('forge:ores/lignite', 'forge:lignite')
        intedynaSqueezer('forge:ores/anthracite', 'forge:anthracite')
        intedynaMecaSqueezer('forge:ores/anthracite', 'forge:anthracite')
        intedynaSqueezer('forge:ores/ametrine', 'forge:gems/ametrine')
        intedynaMecaSqueezer('forge:ores/ametrine', 'forge:gems/ametrine')
        intedynaSqueezer('forge:ores/soulium', 'forge:dusts/soulium')
        intedynaMecaSqueezer('forge:ores/soulium', 'forge:dusts/soulium')
        intedynaSqueezer('forge:ores/endumium', 'forge:gems/endumium')
        intedynaMecaSqueezer('forge:ores/endumium', 'forge:gems/endumium')
        intedynaSqueezer('forge:ores/ratlantean', 'forge:gems/ratlantis')
        intedynaMecaSqueezer('forge:ores/ratlantean', 'forge:gems/ratlantis')
        intedynaSqueezer('forge:ores/cheese', 'forge:rats/cheese')
        intedynaMecaSqueezer('forge:ores/cheese', 'forge:rats/cheese')

        //Tinker  
        tinkerMelt('forge:ores/redstone', 'kubejs:molten_redstone', 900, 500, 320)
    }

    function block() {
        // replaceIO('forge:storage_blocks/amethyst', 'iceandfire:amythest_block')
        // replaceIO('forge:storage_blocks/bronze', 'thermal:bronze_block')
        // replaceIO('forge:storage_blocks/constantan', 'thermal:constantan_block')
        // replaceIO('forge:storage_blocks/copper', 'thermal:copper_block')
        // replaceIO('forge:storage_blocks/lead', 'thermal:lead_block')
        // replaceIO('forge:storage_blocks/nickel', 'thermal:nickel_block')
        // replaceIO('forge:storage_blocks/ruby', 'thermal:ruby_block')
        // replaceIO('forge:storage_blocks/sapphire', 'thermal:sapphire_block')
        // replaceIO('forge:storage_blocks/silver', 'thermal:silver_block')
        // replaceIO('forge:storage_blocks/steel', 'mekanism:block_steel')
        // replaceIO('forge:storage_blocks/tin', 'thermal:tin_block')
        // replaceIO('forge:storage_blocks/uranium', 'mekanism:block_ranium')
        // replaceIO('forge:storage_blocks/zinc', 'create:zinc_block')

        /**********************REMOVE**********************/
        //blocks
        e.remove({id:'create:crafting/materials/copper_block_from_compacting'})
        e.remove({id:'eidolon:lead_block'})
        e.remove({id:'iceandfire:copper_block'})
        e.remove({id:'iceandfire:sapphire_block'})
        e.remove({id:'iceandfire:silver_block'})
        e.remove({id:'janoeo:ruby_block'})
        e.remove({id:'janoeo:ruby_from_block'})
        e.remove({id:'janoeo:sapphire_block'})
        e.remove({id:'janoeo:sapphire_from_block'})
        e.remove({id:'mekanism:processing/copper/storage_blocks/from_ingots'})
        e.remove({id:'mekanism:processing/lead/storage_blocks/from_ingots'})
        e.remove({id:'mekanism:processing/tin/storage_blocks/from_ingots'})
        e.remove({id:'mekanism:storage_blocks/bronze'})
        e.remove({id:'tconstruct:common/materials/copper_block_from_ingots'})
        //tinker
        e.remove({id:'tconstruct:smeltery/casting/metal/bronze/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/constantan/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/copper/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/electrum/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/lead/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/nickel/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/silver/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/steel/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/tin/block'})
        e.remove({id:'tconstruct:smeltery/casting/metal/uranium/block'})
        //Add Tinker
        tinkerCastingBasin("tconstruct:molten_bronze", 1296, "thermal:bronze_block", 194)
        tinkerCastingBasin("tconstruct:molten_constantan", 1296, "thermal:constantan_block", 194)
        tinkerCastingBasin("tconstruct:molten_copper", 1296, "thermal:copper_block", 194)
        tinkerCastingBasin("tconstruct:molten_electrum", 1296, "thermal:electrum_block", 194)
        tinkerCastingBasin("tconstruct:molten_lead", 1296, "thermal:lead_block", 194)
        tinkerCastingBasin("tconstruct:molten_nickel", 1296, "thermal:nickel_block", 194)
        tinkerCastingBasin("tconstruct:molten_silver", 1296, "thermal:silver_block", 194)
        tinkerCastingBasin("tconstruct:molten_steel", 1296, "mekanism:block_steel", 194)
        tinkerCastingBasin("tconstruct:molten_tin", 1296, "thermal:tin_block", 194)
        tinkerCastingBasin("tconstruct:molten_uranium", 1296, "mekanism:block_uranium", 194)
        tinkerCastingBasin("tconstruct:molten_zinc", 1296, "create:zinc_block", 194)
        //AddThermal
        compact3x3("janoeo:zinc_ingot", "create:zinc_block")
        compact3x3("mekanism:ingot_steel", "mekanism:block_steel")
        compact3x3("mekanism:ingot_uranium", "mekanism:block_uranium")
    }

    function plate() {
        createPress("janoeo:zinc_ingot","kubejs:zinc_plate")
        tinkerCasting("tconstruct:molten_zinc", 144, "kubejs:zinc_plate", "tconstruct:casts/multi_use/plate", false, 100)
        tinkerCasting("tconstruct:molten_zinc", 144, "kubejs:zinc_plate", "tconstruct:casts/single_use/plate", true, 100)
        metalPress("janoeo:zinc_ingot", 1, "kubejs:zinc_plate", "immersiveengineering:mold_plate", 2400)
        multiservoPress2("janoeo:zinc_ingot", 1, "kubejs:zinc_plate", 2400)
        createPress("mysticalagradditions:creative_essence","kubejs:creative_plate")
        metalPress("mysticalagradditions:creative_essence", 1, "kubejs:creative_plate", "immersiveengineering:mold_plate", 2400)
    }

    function dust() {
        //replace
        // replaceIO('#forge:dusts/copper','thermal:copper_dust')
        // replaceIO('#forge:dusts/coal','mekanism:dust_coal')
        // replaceIO('#forge:dusts/lapis','thermal:lapis_dust')
        // replaceIO('#forge:dusts/constantan','thermal:constantan_dust')
        // replaceIO('#forge:dusts/electrum','thermal:electrum_dust')
        // replaceIO('#forge:dusts/steel','mekanism:dust_steel')
        // replaceIO('#forge:dusts/aluminum','janoeo:aluminium_dust')
        // replaceIO('#forge:dusts/emerald','thermal:emerald_dust')
        // replaceIO('#forge:dusts/iron','thermal:iron_dust')
        // replaceIO('#forge:dusts/gold','thermal:gold_dust')
        // replaceIO('#forge:dusts/tin','thermal:tin_dust')
        // replaceIO('#forge:dusts/bronze','thermal:bronze_dust')
        // replaceIO('#forge:dusts/diamond','thermal:diamond_dust')
        // replaceIO('#forge:dusts/uranium','janoeo:uranium_dust')
        // replaceIO('#forge:dusts/lead','thermal:lead_dust')
        // replaceIO('#forge:dusts/sulfur','thermal:sulfur_dust')
        // replaceIO('#forge:dusts/obsidian','create:powdered_obsidian')
        // replaceIO('#forge:dusts/quartz','thermal:quartz_dust')
        // replaceIO('#forge:dusts/flour','pamhc2foodcore:flouritem')
        // replaceIO('#forge:dusts/wood','thermal:sawdust')
        //From Ore
        // dustFromOre('forge:ores/uranium', 'janoeo:uranium_dust')
        // dustFromOre('forge:ores/iron', 'thermal:iron_dust')
        // dustFromOre('forge:ores/lead', 'thermal:lead_dust')
        // dustFromOre('forge:ores/gold', 'thermal:gold_dust')
        // dustFromOre('forge:ores/copper', 'thermal:copper_dust')
        // dustFromOre('forge:ores/silver', 'thermal:silver_dust')
        // dustFromOre('forge:ores/aluminum', 'janoeo:aluminium_dust')
        // dustFromOre('forge:ores/tin', 'thermal:tin_dust')
        // dustFromOre('forge:ores/nickel', 'thermal:nickel_dust')
        // dustFromOre('forge:ores/dimshard','rftoolsbase:dimensionalshard')
        // dustFromOre('forge:ores/prosperity', 'mysticalagriculture:prosperity_shard')
        // dustFromOre('forge:ores/inferium', 'mysticalagriculture:inferium_essence')
        // pulverizerThermalOre('forge:ores/aluminum','janoeo:aluminium_dust')
        //From Ingot
        dustFromIngot('forge:gems/lapis', 'thermal:lapis_dust')
        dustFromIngot('forge:gems/quartz', 'thermal:quartz_dust')
        dustFromIngot('forge:ingots/uranium', 'janoeo:uranium_dust')
        dustFromIngot('forge:ingots/iron', 'thermal:iron_dust')
        dustFromIngot('forge:ingots/lead', 'thermal:lead_dust')
        dustFromIngot('forge:ingots/tin', 'thermal:tin_dust')
        dustFromIngot('forge:ingots/gold', 'thermal:gold_dust')
        dustFromIngot('forge:ingots/copper', 'thermal:copper_dust')
        dustFromIngot('forge:ingots/electrum', 'thermal:electrum_dust')
        dustFromIngot('forge:ingots/bronze', 'thermal:bronze_dust')
        dustFromIngot('forge:ingots/constantan', 'thermal:constantan_dust')
        dustFromIngot('forge:ingots/aluminum', 'janoeo:aluminium_dust')
        dustFromIngot('forge:ender_pearls', 'thermal:ender_pearl_dust')
        dustFromIngot('forge:gems/emerald', 'thermal:emerald_dust')
        dustFromIngot('forge:gems/diamond', 'thermal:diamond_dust')
        dustFromIngot('forge:ingots/silver', 'thermal:silver_dust')
        dustFromIngot('forge:ingots/nickel', 'thermal:nickel_dust')
        dustFromIngot('forge:ingots/invar', 'thermal:invar_dust')
        dustFromIngot('forge:ingots/signalum', 'thermal:signalum_dust')
        dustFromIngot('forge:ingots/lumium', 'thermal:lumium_dust')
        dustFromIngot('forge:ingots/enderium', 'thermal:enderium_dust')
        dustFromIngot('forge:ingots/cyanite', 'bigreactors:cyanite_dust')
        dustFromIngot('forge:ingots/graphite', 'bigreactors:graphite_dust')
        dustFromIngot('forge:ingots/platinum', 'janoeo:platinum_dust')
        dustFromIngot('forge:gems/ruby', 'janoeo:ruby_dust')
        dustFromIngot('forge:gems/sapphire', 'janoeo:sapphire_dust')
        dustFromIngot('forge:gems/apatite', 'thermal:apatite_dust')
        dustFromIngot('forge:gems/cinnabar', 'thermal:cinnabar_dust')
        dustFromIngot('forge:gems/niter', 'thermal:niter_dust')
        dustFromIngot('forge:gems/sulfur', 'thermal:sulfur_dust')
        dustFromIngot('forge:ingots/yellorium', 'bigreactors:yellorium_dust')
        immersiveCrusherIngot('forge:ingots/yellorium', 'bigreactors:yellorium_dust', 1)
        immersiveCrusherIngot('forge:ender_pearls', 'thermal:ender_pearl_dust', 1)
        immersiveCrusherIngot('forge:gems/lapis', 'thermal:lapis_dust', 1)
        immersiveCrusherIngot('forge:gems/diamond', 'thermal:diamond_dust', 1)
        immersiveCrusherIngot('forge:gems/emerald', 'thermal:emerald_dust', 1)
        immersiveCrusherIngot('forge:gems/quartz', 'thermal:quartz_dust', 1)
        immersiveCrusherIngot('forge:ingots/signalum', 'thermal:signalum_dust', 1)
        immersiveCrusherIngot('forge:ingots/lumium', 'thermal:lumium_dust', 1)
        immersiveCrusherIngot('forge:ingots/enderium', 'thermal:enderium_dust', 1)
        immersiveCrusherIngot('forge:ingots/cyanite', 'bigreactors:cyanite_dust', 1)
        immersiveCrusherIngot('forge:ingots/graphite', 'bigreactors:graphite_dust', 1)
        immersiveCrusherIngot('forge:obsidian', 'create:powdered_obsidian', 4)
        immersiveCrusherIngot('forge:gems/ruby', 'janoeo:ruby_dust', 1)
        immersiveCrusherIngot('forge:gems/sapphire', 'janoeo:sapphire_dust', 1)
        immersiveCrusherIngot('forge:gems/apatite', 'thermal:apatite_dust', 1)
        immersiveCrusherIngot('forge:gems/cinnabar', 'thermal:cinnabar_dust', 1)
        immersiveCrusherIngot('forge:gems/niter', 'thermal:niter_dust', 1)
        immersiveCrusherIngot('forge:gems/sulfur', 'thermal:sulfur_dust', 1)
        immersiveCrusherIngot('forge:charcoal', 'mekanism:dust_charcoal', 1)
        immersiveCrusherIngot('forge:ingots/netherite', 'mekanism:dust_netherite', 1)
        immersiveCrusherIngot('forge:ingots/steel', 'mekanism:dust_steel', 1)
        immersiveCrusherIngot('forge:coals', 'mekanism:dust_coal', 1)
        createCrushingIngot('forge:ingots/yellorium', 'bigreactors:yellorium_dust')
        createCrushingIngot('forge:ingots/bronze', 'thermal:bronze_dust')
        createCrushingIngot('forge:ingots/invar', 'thermal:invar_dust')
        createCrushingIngot('forge:ingots/signalum', 'thermal:signalum_dust')
        createCrushingIngot('forge:ingots/lumium', 'thermal:lumium_dust')
        createCrushingIngot('forge:ingots/enderium', 'thermal:enderium_dust')
        createCrushingIngot('forge:ingots/cyanite', 'bigreactors:cyanite_dust')
        createCrushingIngot('forge:ingots/graphite', 'bigreactors:graphite_dust')
        createCrushingIngot('forge:gems/apatite', 'thermal:apatite_dust')
        createCrushingIngot('forge:gems/cinnabar', 'thermal:cinnabar_dust')
        createCrushingIngot('forge:gems/niter', 'thermal:niter_dust')
        createCrushingIngot('forge:gems/sulfur', 'thermal:sulfur_dust')
        createCrushingIngot('forge:charcoal', 'mekanism:dust_charcoal')
        createCrushingIngot('forge:ingots/netherite', 'mekanism:dust_netherite')
        createCrushingIngot('forge:ingots/steel', 'mekanism:dust_steel')
        createCrushingIngot('forge:ingots/osmium', 'mekanism:dust_osmium')
        createCrushingIngot('forge:coals', 'mekanism:dust_coal')
        createCrushingIngot('forge:gems/lapis', 'thermal:lapis_dust')
        createCrushingIngot('forge:ingots/iron', 'thermal:iron_dust')
        createCrushingIngot('forge:ingots/silver', 'thermal:silver_dust')
        createCrushingIngot('forge:ingots/nickel', 'thermal:nickel_dust')
        createCrushingIngot('forge:ingots/lead', 'thermal:lead_dust')
        createCrushingIngot('forge:ingots/tin', 'thermal:tin_dust')
        createCrushingIngot('forge:ingots/gold', 'thermal:gold_dust')
        createCrushingIngot('forge:ingots/copper', 'thermal:copper_dust')
        createCrushingIngot('forge:ingots/electrum', 'thermal:electrum_dust')
        createCrushingIngot('forge:ingots/constantan', 'thermal:constantan_dust')
        createCrushingIngot('forge:ingots/aluminum', 'janoeo:aluminium_dust')
        createCrushingIngot('forge:ender_pearls', 'thermal:ender_pearl_dust')
        createCrushingIngot('forge:gems/emerald', 'thermal:emerald_dust')
        createCrushingIngot('forge:gems/diamond', 'thermal:diamond_dust')
        createCrushingIngot('forge:gems/quartz', 'thermal:quartz_dust')
        pulverizerThermalIngot('forge:ingots/aluminum', 'janoeo:aluminium_dust', 1)
        pulverizerThermalIngot('forge:gems/sapphire', 'janoeo:sapphire_dust', 1)
        pulverizerThermalIngot('forge:gems/ruby', 'janoeo:ruby_dust', 1)
        pulverizerThermalIngot('forge:obsidian', 'create:powdered_obsidian', 4)
        pulverizerThermalIngot('forge:ingots/platinum', 'janoeo:platinum_dust', 1)
        pulverizerThermalIngot('forge:ingots/uranium', 'janoeo:uranium_dust', 1)
        pulverizerThermalIngot('forge:charcoal', 'mekanism:dust_charcoal', 1)
        pulverizerThermalIngot('forge:ingots/netherite', 'mekanism:dust_netherite', 1)
        pulverizerThermalIngot('forge:ingots/steel', 'mekanism:dust_steel', 1)
        pulverizerThermalIngot('forge:coals', 'mekanism:dust_coal', 1)
        dustFromDirty('mekanism:dirty_dusts/uranium', 'janoeo:uranium_dust')
        dustFromDirty('mekanism:dirty_dusts/iron', 'thermal:iron_dust')
        dustFromDirty('mekanism:dirty_dusts/lead', 'thermal:lead_dust')
        dustFromDirty('mekanism:dirty_dusts/tin', 'thermal:tin_dust')
        dustFromDirty('mekanism:dirty_dusts/gold', 'thermal:gold_dust')
        dustFromDirty('mekanism:dirty_dusts/copper', 'thermal:copper_dust')
        //mekanism
        e.custom({"type":"mekanism:metallurgic_infusing","itemInput":{"amount":3,"ingredient":{"tag":"forge:ingots/copper"}},"infusionInput":{"amount":10,"tag":"mekanism:tin"},"output":{"item":"thermal:bronze_dust","count":4}})
        e.custom({"type":"mekanism:injecting","itemInput":{"ingredient":{"tag":"forge:gunpowder"}},"gasInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"output":{"item":"thermal:sulfur_dust"}})
        e.custom({"type":"mekanism:reaction","itemInput":[{"ingredient":{"tag":"forge:storage_blocks/coal"}},{"ingredient":{"tag":"forge:storage_blocks/charcoal"}}],"fluidInput":{"amount":1000,"tag":"minecraft:water"},"gasInput":{"amount":1000,"gas":"mekanism:oxygen"},"duration":900,"itemOutput":{"item":"thermal:sulfur_dust","count":9},"gasOutput":{"gas":"mekanism:hydrogen","amount":1000}})
        e.custom({"type":"mekanism:reaction","itemInput":{"ingredient":{"tag":"minecraft:coals"}},"fluidInput":{"amount":100,"tag":"minecraft:water"},"gasInput":{"amount":100,"gas":"mekanism:oxygen"},"duration":100,"itemOutput":{"item":"thermal:sulfur_dust"},"gasOutput":{"gas":"mekanism:hydrogen","amount":100}})
        e.custom({"type":"mekanism:reaction","itemInput":[{"ingredient":{"tag":"forge:dusts/coal"}},{"ingredient":{"tag":"forge:dusts/charcoal"}}],"fluidInput":{"amount":100,"tag":"minecraft:water"},"gasInput":{"amount":100,"gas":"mekanism:oxygen"},"duration":100,"itemOutput":{"item":"thermal:sulfur_dust"},"gasOutput":{"gas":"mekanism:hydrogen","amount":100}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:obsidian"}},"output":{"item":"create:powdered_obsidian","count":4}})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:warped_stems"}},"mainOutput":{"item":"minecraft:warped_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:spruce_logs"}},"mainOutput":{"item":"minecraft:spruce_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:oak_logs"}},"mainOutput":{"item":"minecraft:oak_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:jungle_logs"}},"mainOutput":{"item":"minecraft:jungle_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:dark_oak_logs"}},"mainOutput":{"item":"minecraft:dark_oak_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:crimson_stems"}},"mainOutput":{"item":"minecraft:crimson_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:birch_logs"}},"mainOutput":{"item":"minecraft:birch_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:acacia_logs"}},"mainOutput":{"item":"minecraft:acacia_planks","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:wooden_slabs"}},"mainOutput":{"item":"minecraft:stick","count":3},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.125})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:planks"}},"mainOutput":{"item":"minecraft:stick","count":6},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.25})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"minecraft:wooden_stairs"}},"mainOutput":{"item":"minecraft:stick","count":9},"secondaryOutput":{"item":"thermal:sawdust"},"secondaryChance":0.375})
        e.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"forge:rods/wooden"}},"mainOutput":{"item":"thermal:sawdust"}})
        //thermal
        e.custom({"type": "thermal:pulverizer","ingredient": {"tag": "forge:ores/uranium"},"result": [{"item": "janoeo:uranium_dust","chance": 2.0},{"item": "thermal:lead_dust","chance": 0.1},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2})
        //immersive
        e.custom({"type": "immersivepetroleum:hydrotreater","time": 1,"energy": 512,"result": {"fluid": "immersivepetroleum:diesel","amount": 7},"input": {"tag": "forge:diesel_sulfur","amount": 7},"secondary_input": {"tag": "minecraft:water","amount": 7},"secondary_result": {"item": "thermal:sulfur_dust","chance": "0.02"}})
    }

    function nugget() {
        //replace
        // replaceIO('#forge:nuggets/copper','thermal:copper_nugget')
        // replaceIO('#forge:nuggets/bronze','thermal:bronze_nugget')
        // replaceIO('#forge:nuggets/tin','thermal:tin_nugget')
        // replaceIO('#forge:nuggets/nickel','thermal:nickel_nugget')
        // replaceIO('#forge:nuggets/silver','thermal:silver_nugget')
        // replaceIO('#forge:nuggets/uranium','mekanism:nugget_uranium')
        // replaceIO('#forge:nuggets/steel','mekanism:nugget_steel')
        // replaceIO('#forge:nuggets/constantan','thermal:constantan_nugget')
        // replaceIO('#forge:nuggets/electrum','thermal:electrum_nugget')
        // replaceIO('#forge:nuggets/lead','thermal:lead_nugget')
        e.custom({"type": "create:splashing","ingredients": [{"item": "create:crushed_copper_ore"}],"results": [{"item": "thermal:copper_nugget","count": 10},{"item": "thermal:copper_nugget","count": 5,"chance": 0.5}]})
    }
    
    function dense() {
        //Furnace / Blast Furnace
        e.blasting('2x #forge:ingots/iron', '#forge:ores/dense/iron').xp(5)
        e.smelting('2x #forge:ingots/iron', '#forge:ores/dense/iron').xp(5)
        e.blasting('2x minecraft:coal', '#forge:ores/dense/coal').xp(5)
        e.smelting('2x minecraft:coal', '#forge:ores/dense/coal').xp(5)
        e.blasting('2x minecraft:lapis_lazuli', '#forge:ores/dense/lapis').xp(5)
        e.smelting('2x minecraft:lapis_lazuli', '#forge:ores/dense/lapis').xp(5)
        e.blasting('2x minecraft:redstone', '#forge:ores/dense/redstone').xp(5)
        e.smelting('2x minecraft:redstone', '#forge:ores/dense/redstone').xp(5)
        e.blasting('2x minecraft:quartz', '#forge:ores/dense/quartz').xp(5)
        e.smelting('2x minecraft:quartz', '#forge:ores/dense/quartz').xp(5)
        e.blasting('2x #forge:gems/diamond', '#forge:ores/dense/diamond').xp(5)
        e.smelting('2x #forge:gems/diamond', '#forge:ores/dense/diamond').xp(5)
        e.blasting('2x #forge:gems/emerald', '#forge:ores/dense/emerald').xp(5)
        e.smelting('2x #forge:gems/emerald', '#forge:ores/dense/emerald').xp(5)
        e.blasting('2x #forge:ingots/gold', '#forge:ores/dense/gold').xp(5)
        e.smelting('2x #forge:ingots/gold', '#forge:ores/dense/gold').xp(5)
        e.blasting('2x #forge:ingots/copper', '#forge:ores/dense/copper').xp(5)
        e.smelting('2x #forge:ingots/copper', '#forge:ores/dense/copper').xp(5)
        e.blasting('2x #forge:ingots/tin', '#forge:ores/dense/tin').xp(5)
        e.smelting('2x #forge:ingots/tin', '#forge:ores/dense/tin').xp(5)

        //Arc Furnace
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:iron_ingot'}}],"additives":[],"input":{"tag":'forge:ores/dense/iron'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:coal'}}],"additives":[],"input":{"tag":'forge:ores/dense/coal'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:diamond'}}],"additives":[],"input":{"tag":'forge:ores/dense/diamond'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:emerald'}}],"additives":[],"input":{"tag":'forge:ores/dense/emerald'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:gold_ingot'}}],"additives":[],"input":{"tag":'forge:ores/dense/gold'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:lapis_lazuli'}}],"additives":[],"input":{"tag":'forge:ores/dense/lapis'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:redstone'}}],"additives":[],"input":{"tag":'forge:ores/dense/redstone'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'minecraft:quartz'}}],"additives":[],"input":{"tag":'forge:ores/dense/quartz'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'thermal:tin_ingot'}}],"additives":[],"input":{"tag":'forge:ores/dense/tin'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})
        e.custom({"type":"immersiveengineering:arc_furnace","results":[{"count":4,"base_ingredient":{"item":'thermal:copper_ingot'}}],"additives":[],"input":{"tag":'forge:ores/dense/copper'},"slag":{"tag":"forge:slag"},"time":200,"energy":102400})

        //Crusher Immersive
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:iron_dust'}}],"result":{"count":4,"base_ingredient":{"item":'thermal:iron_dust'}},"input":{"tag":'forge:ores/dense/iron'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:sulfur_dust'}}],"result":{"count":8,"base_ingredient":{"item":'minecraft:coal'}},"input":{"tag":'forge:ores/dense/coal'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'minecraft:diamond'}}],"result":{"count":4,"base_ingredient":{"item":'minecraft:diamond'}},"input":{"tag":'forge:ores/dense/diamond'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'minecraft:emerald'}}],"result":{"count":4,"base_ingredient":{"item":'minecraft:emerald'}},"input":{"tag":'forge:ores/dense/emerald'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:gold_dust'}}],"result":{"count":4,"base_ingredient":{"item":'thermal:gold_dust'}},"input":{"tag":'forge:ores/dense/gold'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:sulfur_dust'}}],"result":{"count":18,"base_ingredient":{"item":'minecraft:lapis_lazuli'}},"input":{"tag":'forge:ores/dense/lapis'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'minecraft:redstone'}}],"result":{"count":12,"base_ingredient":{"item":'minecraft:redstone'}},"input":{"tag":'forge:ores/dense/redstone'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:sulfur_dust'}}],"result":{"count":6,"base_ingredient":{"item":'minecraft:quartz'}},"input":{"tag":'forge:ores/dense/quartz'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:tin_dust'}}],"result":{"count":4,"base_ingredient":{"item":'thermal:tin_dust'}},"input":{"tag":'forge:ores/dense/tin'},"energy":6000})
        e.custom({"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":'thermal:copper_dust'}}],"result":{"count":4,"base_ingredient":{"item":'thermal:copper_dust'}},"input":{"tag":'forge:ores/dense/copper'},"energy":6000})

        //Enrichement Chamber
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/iron'}},"output":{"item":'thermal:iron_dust',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/coal'}},"output":{"item":'minecraft:coal',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/diamond'}},"output":{"item":'minecraft:diamond',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/emerald'}},"output":{"item":'minecraft:emerald',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/gold'}},"output":{"item":'thermal:gold_dust',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/lapis'}},"output":{"item":'minecraft:lapis_lazuli',"count":24}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/redstone'}},"output":{"item":'minecraft:redstone',"count":24}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/quartz'}},"output":{"item":'minecraft:quartz',"count":12}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/tin'}},"output":{"item":'thermal:tin_dust',"count":4}})
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":'forge:ores/dense/copper'}},"output":{"item":'thermal:copper_dust',"count":4}})

        //Pulverizer
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_iron_ore'},"result": [{"item": 'thermal:iron_dust',"chance": 4.0},{"item": 'thermal:iron_dust',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_iron_nether_ore'},"result": [{"item": 'thermal:iron_dust',"chance": 4.0},{"item": 'thermal:iron_dust',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_coal_ore'},"result": [{"item": 'minecraft:coal',"chance": 4.0},{"item": 'thermal:sulfur',"chance": 0.15},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_coal_nether_ore'},"result": [{"item": 'minecraft:coal',"chance": 4.0},{"item": 'thermal:sulfur',"chance": 0.15},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_diamond_ore'},"result": [{"item": 'minecraft:diamond',"chance": 4.0},{"item": 'minecraft:diamond',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_diamond_nether_ore'},"result": [{"item": 'minecraft:diamond',"chance": 4.0},{"item": 'minecraft:diamond',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_emerald_ore'},"result": [{"item": 'minecraft:emerald',"chance": 4.0},{"item": 'minecraft:emerald',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_emerald_nether_ore'},"result": [{"item": 'minecraft:emerald',"chance": 4.0},{"item": 'minecraft:emerald',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_gold_ore'},"result": [{"item": 'thermal:gold_dust',"chance": 4.0},{"item": 'thermal:gold_dust',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_gold_nether_ore'},"result": [{"item": 'thermal:gold_dust',"chance": 4.0},{"item": 'thermal:gold_dust',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_lapis_ore'},"result": [{"item": 'minecraft:lapis_lazuli',"chance": 24.0},{"item": 'thermal:sulfur',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_lapis_nether_ore'},"result": [{"item": 'minecraft:lapis_lazuli',"chance": 24.0},{"item": 'thermal:sulfur',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_redstone_ore'},"result": [{"item": 'minecraft:redstone',"chance": 24.0},{"item": 'thermal:cinnabar',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_redstone_nether_ore'},"result": [{"item": 'minecraft:redstone',"chance": 24.0},{"item": 'thermal:cinnabar',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_quartz_nether_ore'},"result": [{"item": 'minecraft:quartz',"chance": 4.0},{"item": 'thermal:sulfur',"chance": 2.0},{"item": "minecraft:netherrack","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_tin_ore'},"result": [{"item": 'thermal:tin_dust',"chance": 4.0},{"item": 'thermal:tin_dust',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})
        e.custom({"type": "thermal:pulverizer","ingredient": {"item":'janoeo:dense_copper_ore'},"result": [{"item": 'thermal:copper_dust',"chance": 4.0},{"item": 'thermal:copper_dust',"chance": 2.0},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})

        //Create
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_iron_ore'}],"results": [{"item": "create:crushed_iron_ore","count": 2},{"item": "create:crushed_iron_ore","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_iron_nether_ore'}],"results": [{"item": "create:crushed_iron_ore","count": 2},{"item": "create:crushed_iron_ore","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_coal_ore'}],"results": [{"item": "minecraft:coal","count": 4},{"item": "minecraft:coal","count": 8,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_coal_nether_ore'}],"results": [{"item": "minecraft:coal","count": 4},{"item": "minecraft:coal","count": 8,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_diamond_ore'}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_diamond_nether_ore'}],"results": [{"item": "minecraft:diamond","count": 2},{"item": "minecraft:diamond","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_emerald_ore'}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_emerald_nether_ore'}],"results": [{"item": "minecraft:emerald","count": 2},{"item": "minecraft:emerald","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_gold_ore'}],"results": [{"item": "create:crushed_gold_ore","count": 2},{"item": "create:crushed_gold_ore","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_gold_nether_ore'}],"results": [{"item": "create:crushed_gold_ore","count": 2},{"item": "create:crushed_gold_ore","count": 4,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_lapis_ore'}],"results": [{"item": "minecraft:lapis_lazuli","count": 24},{"item": "minecraft:lapis_lazuli","count": 16,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_lapis_nether_ore'}],"results": [{"item": "minecraft:lapis_lazuli","count": 24},{"item": "minecraft:lapis_lazuli","count": 16,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_redstone_ore'}],"results": [{"item": "minecraft:redstone","count": 16},{"item": "minecraft:redstone","count": 12,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_redstone_nether_ore'}],"results": [{"item": "minecraft:redstone","count": 16},{"item": "minecraft:redstone","count": 12,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_quartz_nether_ore'}],"results": [{"item": "minecraft:quartz","count": 4},{"item": "minecraft:quartz","count": 8,"chance": 0.5},{"item": "minecraft:netherrack","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_tin_ore'}],"results": [{"item": "create:crushed_tin_ore","count": 2},{"item": "create:crushed_tin_ore","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})
        e.custom({"type": "create:crushing","ingredients": [{"item": 'janoeo:dense_copper_ore'}],"results": [{"item": "create:crushed_copper_ore","count": 2},{"item": "create:crushed_copper_ore","count": 4,"chance": 0.5},{"item": "minecraft:cobblestone","chance": 0.125}],"processingTime": 350})

        //Squeezer ID
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/iron'},"result": {"items": [{"tag": 'forge:dusts/iron',"count": 2},{"tag": 'forge:dusts/iron',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/iron'},"result": {"items": [{"tag": 'forge:dusts/iron',"count": 4},{"tag": 'forge:dusts/iron',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/coal'},"result": {"items": [{"tag": 'minecraft:coals',"count": 8},{"tag": 'minecraft:coals',"count": 2,"chance": 0.5},{"tag": 'minecraft:coals',"count": 2,"chance": 0.5}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/coal'},"result": {"items": [{"tag": 'minecraft:coals',"count": 12},{"tag": 'minecraft:coals',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/diamond'},"result": {"items": [{"tag": 'forge:gems/diamond',"count": 2},{"tag": 'forge:gems/diamond',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/diamond'},"result": {"items": [{"tag": 'forge:gems/diamond',"count": 4},{"tag": 'forge:gems/diamond',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/emerald'},"result": {"items": [{"tag": 'forge:gems/emerald',"count": 2},{"tag": 'forge:gems/emerald',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/emerald'},"result": {"items": [{"tag": 'forge:gems/emerald',"count": 4},{"tag": 'forge:gems/emerald',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/gold'},"result": {"items": [{"tag": 'forge:dusts/gold',"count": 2},{"tag": 'forge:dusts/gold',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/gold'},"result": {"items": [{"tag": 'forge:dusts/gold',"count": 4},{"tag": 'forge:dusts/gold',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/lapis'},"result": {"items": [{"tag": 'forge:gems/lapis',"count": 16},{"tag": 'forge:gems/lapis',"count": 4,"chance": 0.5},{"tag": 'forge:gems/lapis',"count": 4,"chance": 0.5}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/lapis'},"result": {"items": [{"tag": 'forge:gems/lapis',"count": 24},{"tag": 'forge:gems/lapis',"count": 4,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/redstone'},"result": {"items": [{"tag": 'forge:dusts/redstone',"count": 16},{"tag": 'forge:dusts/redstone',"count": 4,"chance": 0.5},{"tag": 'forge:dusts/redstone',"count": 4,"chance": 0.5}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/redstone'},"result": {"items": [{"tag": 'forge:dusts/redstone',"count": 24},{"tag": 'forge:dusts/redstone',"count": 4,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/quartz'},"result": {"items": [{"tag": 'forge:gems/quartz',"count": 4},{"tag": 'forge:gems/quartz',"count": 2,"chance": 0.5}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/quartz'},"result": {"items": [{"tag": 'forge:gems/quartz',"count": 6},{"tag": 'forge:gems/quartz',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/tin'},"result": {"items": [{"tag": 'forge:dusts/tin',"count": 2},{"tag": 'forge:dusts/tin',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/tin'},"result": {"items": [{"tag": 'forge:dusts/tin',"count": 4},{"tag": 'forge:dusts/tin',"count": 2,"chance": 0.5}]},"duration": 40})
        e.custom({"type": "integrateddynamics:squeezer","item": {"tag": 'forge:ores/dense/copper'},"result": {"items": [{"tag": 'forge:dusts/copper',"count": 2},{"tag": 'forge:dusts/copper',"count": 2,"chance": 0.75}]}})
        e.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": 'forge:ores/dense/copper'},"result": {"items": [{"tag": 'forge:dusts/copper',"count": 4},{"tag": 'forge:dusts/copper',"count": 2,"chance": 0.5}]},"duration": 40})

        //Tinker
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/iron"},"result": {"fluid": "tconstruct:molten_iron","amount": 288},"temperature": 800,"time": 90,"byproducts": [{"fluid": "tconstruct:molten_nickel","amount": 96}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/diamond"},"result": {"fluid": "tconstruct:molten_diamond","amount": 288},"temperature": 1450,"time": 118,"byproducts": [{"fluid": "tconstruct:molten_quartz","amount": 96}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/emerald"},"result": {"fluid": "tconstruct:molten_emerald","amount": 288},"temperature": 934,"time": 96,"byproducts": [{"fluid": "tconstruct:molten_diamond","amount": 96}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/gold"},"result": {"fluid": "tconstruct:molten_gold","amount": 288},"temperature": 700,"time": 85,"byproducts": [{"fluid": "tconstruct:molten_copper","amount": 96}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/redstone"},"result": {"fluid": "kubejs:molten_redstone","amount": 1800},"temperature": 500,"time": 85})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/quartz"},"result": {"fluid": "tconstruct:molten_quartz","amount": 288},"temperature": 637,"time": 82,"byproducts": [{"fluid": "tconstruct:molten_clay","amount": 500}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/tin"},"result": {"fluid": "tconstruct:molten_tin","amount": 288},"temperature": 225,"time": 59,"byproducts": [{"fluid": "tconstruct:molten_copper","amount": 96}]})
        e.custom({"type": "tconstruct:ore_melting","ingredient": {"tag": "forge:ores/dense/copper"},"result": {"fluid": "tconstruct:molten_copper","amount": 288},"temperature": 500,"time": 75,"byproducts": [{"fluid": "tconstruct:molten_gold","amount": 32}]})
    }

    function replaceOutput(input, output) {
        e.replaceOutput({}, input, output);
    }

    function replaceIO(input, output) {
        e.replaceInput({}, input, output);
        e.replaceOutput({}, input, output);
    }

    function tinkerCasting(input, qte, output, cast, consume, time) {
        e.custom({"type": "tconstruct:casting_table","cast": { "tag": cast },"cast_consumed": consume,"fluid": { "name": input, "amount": qte },"result": output,"cooling_time": time})}

    function tinkerCastingBasin(input, qte, output, time) {
        e.custom({"type": "tconstruct:casting_basin","fluid": {"name": input,"amount": qte},"result": {"item": output},"cooling_time": time})}

    function createPress(input, output) {
        e.custom({"type": "create:pressing","ingredients": [{"item": input}],"results": [{"item": output}]})}

    function metalPress(input, qte, output, mold, energy) {
        e.custom({"type": "immersiveengineering:metal_press","mold": { "item": mold },"energy": energy,"input": { "base_ingredient": { "item": input }, "count": qte },"result": { "item": output }})}

    function dustFromOre (input, output) {
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":input}},"output":{"item":output,"count":2}})}

    function dustFromIngot (input, output) {
        e.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":input}},"output":{"item":output}})}

    function dustFromDirty (input, output) {
        e.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":input}},"output":{"item":output}})}

    function oreFromDust (input, qte, output, bottom) {
        e.custom({"type":"mekanism:combining","mainInput":{"amount":qte,"ingredient":{"item":input}},"extraInput":{"ingredient":{"item":bottom}},"output":{"item":output}})}

    function oreFromDustTag (input, qte, output, bottom) {
        e.custom({"type":"mekanism:combining","mainInput":{"amount":qte,"ingredient":{"tag":input}},"extraInput":{"ingredient":{"tag":bottom}},"output":{"item":output}})}

    function createCrushingIngot (input, output) {
        e.custom({"type":"create:crushing","ingredients": [{"tag": input}],"results": [{"item": output}],"processingTime": 350})}

    function pulverizerThermalOre (input, output) {        
        e.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output,"chance": 2.0},{"item": output,"chance": 0.1},{"item": "minecraft:gravel","chance": 0.2}],"experience": 0.2,})}

    function pulverizerThermalIngot (input, output, qte) {
        e.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output,"count": qte}],"energy_mod": 0.5})}

    function multiservoPress(input, qte, output, die, energy) {
        e.custom({"type": "thermal:press","input": [{ "item": input, "count": qte },{ "item": die }],"energy": energy,"result": [{ "item": output }]})}

    function multiservoPress2(input, qte, output, energy) {
        e.custom({"type": "thermal:press","input": [{ "item": input, "count": qte }],"energy": energy,"result": [{ "item": output }]})}

    function multiservo(input, qte, output, energy) {
        e.custom({"type": "thermal:press","input": [{ "item": input, "count": qte }],"energy": energy,"result": [{ "item": output }]})}

    function blastChiller(input, qte, output, energy) {
        e.custom({"type": "thermal:chiller","input": [{"fluid": input, "amount": qte},{"item": "thermal:chiller_ingot_cast"}],"result": [{"item": output}],"energy": energy})}

    function compact3x3(input, output) {e.custom({"type": "thermal:press","input": [{"item": input,"count": 9},{"item": "thermal:press_packing_3x3_die"}],"result": [{"item": output}],"energy": 400})}

    function createCrushingOre (input, output, qte, qte2, secoutput){e.custom({"type": "create:crushing","ingredients": [{"tag": input}],"results": [{"item": output, "count": qte},{"item": output,"count": qte2,"chance": 0.3},{"item": secoutput,"chance": 0.125}],"processingTime": 400,})}

    function immersiveCrusher (input, output, secoutput){e.custom(
        {"type":"immersiveengineering:crusher","secondaries":[{"chance":0.1,"output":{"item":secoutput}}],"result":{"count":2,"base_ingredient":{"item":output}},"input":{"tag":input},"energy":6000})}

    function immersiveCrusherIngot (input, output, qte){e.custom(
        {"type":"immersiveengineering:crusher","secondaries":[],"result":{"count":qte,"base_ingredient":{"item":output}},"input":{"tag":input},"energy":6000})}

    function intedynaSqueezer (input, output){e.custom(
        {"type": "integrateddynamics:squeezer","item": {"tag": input},"result": {"items": [{"tag": output},{"tag": output,"chance": 0.75}]}})}

    function intedynaMecaSqueezer (input, output){e.custom(
        {"type": "integrateddynamics:mechanical_squeezer","item": {"tag": input},"result": {"items": [{"tag": output,"count": 2},{"tag": output,"chance": 0.5}]},"duration": 40})}

    function combinerMeka (input, output){e.custom(
        {"type":"mekanism:combining","mainInput":{"amount":3,"ingredient":{"item":input}},"extraInput":{"ingredient":{"tag":"forge:cobblestone"}},"output":{"item":output}}
    )}
    function arcFurnaceDust (input, output){e.custom(
        {"type":"immersiveengineering:arc_furnace","results":[{"tag":output}],"additives":[],"input":{"tag":input},"time":100,"energy":51200}
    )}
    function arcFurnaceDust2 (input, output){e.custom(
        {"type":"immersiveengineering:arc_furnace","results":[{"item":output}],"additives":[],"input":{"tag":input},"time":100,"energy":51200}
    )}
    function arcFurnaceOre (input, output) {e.custom(
        {"type":"immersiveengineering:arc_furnace","results":[{"count":2,"base_ingredient":{"tag":output}}],"additives":[],"input":{"tag":input},"slag":{"tag":"forge:slag"},"time":200,"energy":102400}
    )}
    function arcFurnaceOre2 (input, output) {e.custom(
        {"type":"immersiveengineering:arc_furnace","results":[{"count":2,"base_ingredient":{"item":output}}],"additives":[],"input":{"tag":input},"slag":{"tag":"forge:slag"},"time":200,"energy":102400}
    )}
    function tinkerMelt(input, output, qte, tmp, time){
      e.custom({"type": "tconstruct:melting","ingredient": {"tag": input},"result": {"fluid": output,"amount": qte},"temperature": tmp,"time": time})}

})