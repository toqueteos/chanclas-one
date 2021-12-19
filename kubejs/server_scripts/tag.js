events.listen('item.tags', function (e) {
  
  e.add('forge:anthracite', 'byg:anthracite')
  e.add('forge:coals', 'minecraft:coal')
  e.add('forge:dusts/soulium', 'mysticalagriculture:soulium_dust')
  e.add('forge:emeraldite', 'byg:emeraldite_shards')
  e.add('forge:essence/inferium', 'mysticalagriculture:inferium_essence')
  e.add('forge:gems/amber', 'betterendforge:raw_amber')
  e.add('forge:gems/endumium', 'farlanders:endumium_crystal')
  e.add('forge:gems/ratlantis', 'rats:gem_of_ratlantis')
  e.add('forge:ingots/platinum', 'kubejs:platinum_ingot')
  e.add('forge:ingots/tungsten', 'kubejs:tungsten_ingot')
  e.add('forge:lignite', 'byg:lignite')
  e.add('forge:nuggets/platinum', 'kubejs:platinum_nugget')
  e.add('forge:nuggets/tungsten', 'kubejs:tungsten_nugget')
  e.add('forge:ores/amethyst', 'iceandfire:amythest_ore')
  e.add('forge:ores/cheese', 'rats:cheese_ore')
  e.add('forge:ores/coal', 'janoeo:coal_gravel_ore')
  e.add('forge:ores/dimshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  e.add('forge:ores/emerald', 'janoeo:emerald_gravel_ore')
  e.add('forge:ores/emeraldite', 'byg:emeraldite_ore')
  e.add('forge:ores/endumium', 'farlanders:endumium_ore')
  e.add('forge:ores/gold', ['byg:brimstone_nether_gold_ore', 'byg:blue_nether_gold_ore'])
  e.add('forge:ores/inferium', ['mysticalagradditions:nether_inferium_ore', 'mysticalagradditions:end_inferium_ore'])
  e.add('forge:ores/lapis', 'gildedingot:basalt_lapis')
  e.add('forge:ores/lapis', ['gildedingot:basalt_lapis', 'janoeo:lapis_gravel_ore'])
  e.add('forge:ores/prosperity', ['mysticalagradditions:nether_prosperity_ore', 'mysticalagradditions:end_prosperity_ore'])
  e.add('forge:ores/quartz', 'byg:blue_nether_quartz_ore')
  e.add('forge:ores/quartz', 'byg:brimstone_nether_quartz_ore')
  e.add('forge:ores/ratlantean', 'rats:ratlantean_gem_ore')
  e.add('forge:ores/starmetal', 'astralsorcery:starmetal_ore')
  e.add('forge:ores/tungsten', ['kubejs:tungsten_nether_ore', 'kubejs:tungsten_ore'])
  e.add('forge:ores/yellorite', 'bigreactors:yellorite_ore')
  e.add('forge:pendorite', 'byg:raw_pendorite')
  e.add('forge:plates', ['kubejs:zinc_plate', 'kubejs:lapis_plate', 'kubejs:brass_plate'])
  e.add('forge:plates/brass', 'kubejs:brass_plate')
  e.add('forge:plates/lapis_lazuli', 'kubejs:lapis_plate')
  e.add('forge:plates/zinc', 'kubejs:zinc_plate')
  e.add('forge:rats/cheese', 'rats:cheese')
  e.add('forge:shard/dimshard', 'rftoolsbase:dimensionalshard')
  e.add('forge:shard/ender', 'betterendforge:ender_shard')
  e.add('forge:shard/prosperity', 'mysticalagriculture:prosperity_shard')
  e.add('forge:storage_blocks/platinum', 'kubejs:platinum_block')
  e.add('forge:storage_blocks/tungsten', 'kubejs:tungsten_block')
  e.add('minecraft:beehives', ['buzzier_bees:spruce_beehive', 'buzzier_bees:birch_beehive', 'buzzier_bees:jungle_beehive', 'buzzier_bees:acacia_beehive', 'buzzier_bees:dark_oak_beehive', 'buzzier_bees:crimson_beehive', 'buzzier_bees:warped_beehive', 'endergetic:poise_beehive', 'endergetic:puffbug_hive', 'upgrade_aquatic:river_beehive', 'upgrade_aquatic:driftwood_beehive'])
  e.add('minecraft:wool', 'rats:pied_wool')
  e.add('resourcefulbees:valid_apiary', ['glassential:glass_dark_ethereal', 'glassential:glass_dark_ethereal_reverse', 'glassential:glass_ethereal', 'glassential:glass_ghostly', 'glassential:glass_ethereal_reverse'])
  
  // Big Reactors Yellorite
  e.get('forge:dusts/uranium').remove(['bigreactors:yellorium_dust']);
  e.get('forge:ingots/uranium').remove(['bigreactors:yellorium_ingot']);
  e.get('forge:ores/uranium').remove(['bigreactors:yellorite_ore']);

  // Dense ores
  e.get('forge:ores/coal').remove(['janoeo:dense_coal_ore', 'janoeo:dense_coal_nether_ore']);
  e.get('forge:ores/copper').remove('janoeo:dense_copper_ore');
  e.get('forge:ores/diamond').remove(['janoeo:dense_diamond_ore', 'janoeo:dense_diamond_nether_ore']);
  e.get('forge:ores/emerald').remove(['janoeo:dense_emerald_ore', 'janoeo:dense_emerald_nether_ore']);
  e.get('forge:ores/gold').remove(['janoeo:dense_gold_ore', 'janoeo:dense_gold_nether_ore']);
  e.get('forge:ores/iron').remove(['janoeo:dense_iron_ore', 'janoeo:dense_iron_nether_ore']);
  e.get('forge:ores/lapis').remove(['janoeo:dense_lapis_ore', 'janoeo:dense_lapis_nether_ore']);
  e.get('forge:ores/quartz').remove('janoeo:dense_quartz_nether_ore');
  e.get('forge:ores/redstone').remove(['janoeo:dense_redstone_ore', 'janoeo:dense_redstone_nether_ore']);
  e.get('forge:ores/tin').remove('janoeo:dense_tin_ore');
  
  e.add('forge:ores/dense/coal', ['janoeo:dense_coal_nether_ore', 'janoeo:dense_coal_ore'])
  e.add('forge:ores/dense/diamond', ['janoeo:dense_diamond_nether_ore', 'janoeo:dense_diamond_ore'])
  e.add('forge:ores/dense/emerald', ['janoeo:dense_emerald_nether_ore', 'janoeo:dense_emerald_ore'])
  e.add('forge:ores/dense/gold', ['janoeo:dense_gold_nether_ore', 'janoeo:dense_gold_ore'])
  e.add('forge:ores/dense/iron', ['janoeo:dense_iron_nether_ore', 'janoeo:dense_iron_ore'])
  e.add('forge:ores/dense/lapis', ['janoeo:dense_lapis_nether_ore', 'janoeo:dense_lapis_ore'])
  e.add('forge:ores/dense/redstone', ['janoeo:dense_redstone_nether_ore', 'janoeo:dense_redstone_ore'])
  e.add('forge:ores/dense/copper', 'janoeo:dense_copper_ore')
  e.add('forge:ores/dense/tin', 'janoeo:dense_tin_ore')
  e.add('forge:ores/dense/quartz', 'janoeo:dense_quartz_nether_ore')
  
  // Disks
  e.get('refinedstorage:parts/items/256k').remove('extrastorage:storagepart_256k')
  e.get('refinedstorage:parts/items/1024k').remove('extrastorage:storagepart_1024k')
  e.get('refinedstorage:parts/items/4096k').remove('extrastorage:storagepart_4096k')
  e.get('refinedstorage:parts/items/16384k').remove('extrastorage:storagepart_16384k')
  e.get('refinedstorage:parts/fluids/16384k').remove('extrastorage:storagepart_16384k_fluid')
  e.get('refinedstorage:parts/fluids/65536k').remove('extrastorage:storagepart_65536k_fluid')
  e.get('refinedstorage:parts/fluids/262144k').remove('extrastorage:storagepart_262144k_fluid')
  e.get('refinedstorage:parts/fluids/1048576k').remove('extrastorage:storagepart_1048576k_fluid')

  // Chisel
  e.add('astral:crystal', ['astralsorcery:rock_crystal', 'astralsorcery:attuned_rock_crystal', 'astralsorcery:celestial_crystal', 'astralsorcery:attuned_celestial_crystal'])
  e.add('chisel:basalt', 'embellishcraft:basalt')
  e.add('chisel:charcoal', ['amb:charcoal_block', 'thermal:charcoal_block', 'mekanism:block_charcoal', 'quark:charcoal_block'])
  e.add('chisel:coal', 'minecraft:coal_block')
  e.add('chisel:emerald', 'minecraft:emerald_block')
  e.add('chisel:limestone', 'create:limestone')
  e.add('chisel:marble', ['embellishcraft:marble', 'astralsorcery:marble_runed', 'astralsorcery:marble_raw', 'astralsorcery:marble_pillar', 'astralsorcery:marble_engraved', 'astralsorcery:marble_chiseled', 'astralsorcery:marble_arch', 'astralsorcery:marble_bricks'])
  e.add('chisel:metals/aluminum', 'immersiveengineering:storage_aluminum')
  e.add('chisel:metals/bronze', ['mekanism:block_bronze', 'thermal:bronze_block'])
  e.add('chisel:redstone', 'minecraft:redstone_block')
  e.add('chisel:sandstone', 'minecraft:sandstone')
  e.add('forge:kitchen_floor', ['cookingforblockheads:red_kitchen_floor', 'cookingforblockheads:orange_kitchen_floor', 'cookingforblockheads:yellow_kitchen_floor', 'cookingforblockheads:lime_kitchen_floor', 'cookingforblockheads:green_kitchen_floor', 'cookingforblockheads:blue_kitchen_floor', 'cookingforblockheads:cyan_kitchen_floor', 'cookingforblockheads:light_blue_kitchen_floor', 'cookingforblockheads:black_kitchen_floor', 'cookingforblockheads:light_gray_kitchen_floor', 'cookingforblockheads:white_kitchen_floor', 'cookingforblockheads:gray_kitchen_floor', 'cookingforblockheads:brown_kitchen_floor', 'cookingforblockheads:purple_kitchen_floor', 'cookingforblockheads:magenta_kitchen_floor', 'cookingforblockheads:pink_kitchen_floor'])
  e.add('forge:lectern', ['amb:driftwood_lectern', 'amb:warped_lectern', 'amb:crimson_lectern', 'amb:dark_oak_lectern', 'amb:acacia_lectern', 'amb:jungle_lectern', 'amb:birch_lectern', 'amb:spruce_lectern'])
  e.add('quark:boatable_chests', ['extendedmushrooms:mushroom_chest', 'betterendforge:mossy_glowshroom_chest', 'betterendforge:lucernia_chest', 'betterendforge:lacugrove_chest', 'betterendforge:jellyshroom_chest', 'betterendforge:helix_tree_chest', 'betterendforge:dragon_tree_chest', 'ars_nouveau:archwood_chest', 'extendedmushrooms:glowshroom_chest', 'betterendforge:end_lotus_chest', 'betterendforge:umbrella_tree_chest', 'betterendforge:tenanea_chest', 'betterendforge:pythadendron_chest', 'extendedmushrooms:poisonous_mushroom_chest'])
  e.add('quark:revertable_chests', ['upgrade_aquatic:driftwood_chest', 'extendedmushrooms:mushroom_chest', 'betterendforge:mossy_glowshroom_chest', 'betterendforge:lucernia_chest', 'betterendforge:lacugrove_chest', 'betterendforge:jellyshroom_chest', 'betterendforge:helix_tree_chest', 'betterendforge:dragon_tree_chest', 'upgrade_aquatic:river_chest', 'ars_nouveau:archwood_chest', 'extendedmushrooms:glowshroom_chest', 'betterendforge:end_lotus_chest', 'betterendforge:umbrella_tree_chest', 'endergetic:poise_chest', 'betterendforge:tenanea_chest', 'betterendforge:pythadendron_chest', 'extendedmushrooms:poisonous_mushroom_chest'])
  
  // Tag Planks & Log for Chests
  e.add('forge:other/planks', ['integrateddynamics:menril_planks', 'byg:maple_planks', 'byg:mangrove_planks', 'byg:mahogany_planks', 'byg:lament_planks', 'byg:jacaranda_planks', 'byg:imparius_planks', 'byg:holly_planks', 'byg:green_enchanted_planks', 'byg:fir_planks', 'byg:embur_planks', 'byg:sythian_planks', 'byg:zelkova_planks', 'byg:witch_hazel_planks', 'byg:willow_planks', 'byg:skyris_planks', 'byg:redwood_planks', 'byg:rainbow_eucalyptus_planks', 'byg:pine_planks', 'byg:palm_planks', 'byg:nightshade_planks', 'byg:ether_planks', 'byg:ebony_planks', 'byg:cypress_planks', 'byg:aspen_planks', 'byg:baobab_planks', 'byg:blue_enchanted_planks', 'byg:bulbis_planks', 'byg:cherry_planks', 'byg:cika_planks', 'sonicraft:chilly_blossom_planks', 'sonicraft:green_hill_palm_planks', 'rats:pirat_planks', 'quark:black_stained_planks', 'quark:red_stained_planks', 'quark:green_stained_planks', 'quark:brown_stained_planks', 'quark:blue_stained_planks', 'twilightforest:tower_wood', 'quark:gray_stained_planks', 'twilightforest:sort_planks', 'twilightforest:time_planks', 'twilightforest:dark_planks', 'twilightforest:twilight_oak_planks', 'twilightforest:canopy_planks', 'twilightforest:mangrove_planks', 'twilightforest:mine_planks', 'twilightforest:trans_planks', 'quark:pink_stained_planks', 'quark:lime_stained_planks', 'quark:yellow_stained_planks', 'quark:light_blue_stained_planks', 'quark:magenta_stained_planks', 'quark:orange_stained_planks', 'quark:white_stained_planks', 'forbidden_arcanus:mysterywood_planks', 'iceandfire:dreadwood_planks', 'forbidden_arcanus:cherrywood_planks', 'architects_palette:twisted_planks', 'tconstruct:nahuatl', 'tconstruct:bloodshroom_planks', 'tconstruct:skyroot_planks', 'tconstruct:greenheart_planks', 'undergarden:grongle_planks', 'undergarden:wigglewood_planks', 'undergarden:smogstem_planks', 'quark:light_gray_stained_planks', 'quark:cyan_stained_planks', 'quark:purple_stained_planks'])
  e.add('forge:other/logs', ['integrateddynamics:menril_log', 'integrateddynamics:menril_log_stripped', 'integrateddynamics:menril_wood', 'integrateddynamics:menril_wood_stripped', 'byg:aspen_log', 'byg:aspen_wood', 'byg:stripped_aspen_log', 'byg:stripped_aspen_wood', 'byg:stripped_cherry_wood', 'byg:ether_log', 'byg:ether_wood', 'byg:stripped_ether_log', 'byg:stripped_ether_wood', 'byg:bulbis_stem', 'byg:bulbis_wood', 'byg:stripped_bulbis_stem', 'byg:stripped_bulbis_wood', 'byg:cherry_log', 'byg:cika_log', 'byg:cika_wood', 'byg:stripped_cika_log', 'byg:stripped_cika_wood', 'byg:blue_enchanted_log', 'byg:blue_enchanted_wood', 'byg:stripped_blue_enchanted_log', 'byg:stripped_blue_enchanted_wood', 'byg:cherry_wood', 'byg:cypress_log', 'byg:cypress_wood', 'byg:stripped_cypress_log', 'byg:stripped_cypress_wood', 'byg:baobab_log', 'byg:baobab_wood', 'byg:stripped_baobab_log', 'byg:stripped_baobab_wood', 'byg:stripped_cherry_log', 'byg:ebony_log', 'byg:ebony_wood', 'byg:stripped_ebony_log', 'byg:stripped_ebony_wood', 'byg:imparius_stem', 'byg:imparius_hyphae', 'byg:fungal_imparius_stem', 'byg:fungal_imparius_hyphae', 'byg:stripped_jacaranda_wood', 'byg:maple_log', 'byg:maple_wood', 'byg:stripped_maple_log', 'byg:stripped_maple_wood', 'byg:fir_log', 'byg:fir_wood', 'byg:stripped_fir_log', 'byg:stripped_fir_wood', 'byg:jacaranda_log', 'byg:lament_log', 'byg:lament_wood', 'byg:stripped_lament_log', 'byg:stripped_lament_wood', 'byg:green_enchanted_log', 'byg:green_enchanted_wood', 'byg:stripped_green_enchanted_log', 'byg:stripped_green_enchanted_wood', 'byg:jacaranda_wood', 'byg:mahogany_log', 'byg:mahogany_wood', 'byg:stripped_mahogany_log', 'byg:stripped_mahogany_wood', 'byg:holly_log', 'byg:holly_wood', 'byg:stripped_holly_log', 'byg:stripped_holly_wood', 'byg:stripped_jacaranda_log', 'byg:mangrove_log', 'byg:mangrove_wood', 'byg:stripped_mangrove_log', 'byg:stripped_mangrove_wood', 'byg:pine_log', 'byg:pine_wood', 'byg:stripped_pine_log', 'byg:stripped_pine_wood', 'byg:stripped_rainbow_eucalyptus_wood', 'byg:witch_hazel_log', 'byg:witch_hazel_wood', 'byg:stripped_witch_hazel_log', 'byg:stripped_witch_hazel_wood', 'byg:nightshade_log', 'byg:nightshade_wood', 'byg:stripped_nightshade_log', 'byg:stripped_nightshade_wood', 'byg:rainbow_eucalyptus_log', 'byg:redwood_log', 'byg:redwood_wood', 'byg:stripped_redwood_log', 'byg:stripped_redwood_wood', 'byg:palm_log', 'byg:palm_wood', 'byg:stripped_palm_log', 'byg:stripped_palm_wood', 'byg:rainbow_eucalyptus_wood', 'byg:skyris_log', 'byg:skyris_wood', 'byg:stripped_skyris_log', 'byg:stripped_skyris_wood', 'byg:palo_verde_log', 'byg:palo_verde_wood', 'byg:stripped_palo_verde_log', 'byg:stripped_palo_verde_wood', 'byg:stripped_rainbow_eucalyptus_log', 'byg:willow_log', 'byg:willow_wood', 'byg:stripped_willow_log', 'byg:stripped_willow_wood', 'byg:withering_oak_log', 'byg:withering_oak_wood', 'byg:zelkova_log', 'byg:zelkova_wood', 'byg:stripped_zelkova_log', 'byg:stripped_zelkova_wood', 'byg:sythian_stem', 'byg:sythian_hyphae', 'byg:stripped_sythian_stem', 'byg:stripped_sythian_hyphae', 'byg:embur_pedu', 'byg:embur_hyphae', 'byg:stripped_embur_pedu', 'byg:stripped_embur_hyphae', 'undergarden:stripped_smogstem_log', 'undergarden:smogstem_log', 'undergarden:stripped_smogstem_wood', 'undergarden:smogstem_wood', 'iceandfire:dreadwood_log', 'undergarden:stripped_wigglewood_wood', 'undergarden:wigglewood_wood', 'undergarden:stripped_wigglewood_log', 'undergarden:wigglewood_log', 'sonicraft:stripped_ghz_palm_wood', 'sonicraft:green_hill_palm_log', 'sonicraft:green_hill_palm_wood', 'sonicraft:stripped_ghz_palm_log', 'undergarden:grongle_log', 'undergarden:stripped_grongle_wood', 'undergarden:grongle_wood', 'undergarden:stripped_grongle_log', 'tconstruct:greenheart_wood', 'tconstruct:stripped_greenheart_log', 'tconstruct:greenheart_log', 'tconstruct:stripped_greenheart_wood', 'tconstruct:stripped_skyroot_log', 'tconstruct:skyroot_log', 'tconstruct:stripped_skyroot_wood', 'tconstruct:skyroot_wood', 'tconstruct:bloodshroom_log', 'tconstruct:stripped_bloodshroom_wood', 'tconstruct:bloodshroom_wood', 'tconstruct:stripped_bloodshroom_log', 'architects_palette:twisted_log', 'architects_palette:stripped_twisted_wood', 'architects_palette:twisted_wood', 'architects_palette:stripped_twisted_log', 'rats:pirat_wood', 'forbidden_arcanus:cherrywood', 'forbidden_arcanus:cherrywood_log', 'forbidden_arcanus:stripped_cherrywood', 'forbidden_arcanus:stripped_cherrywood_log', 'rats:pirat_log', 'sonicraft:chilly_blossom_log', 'sonicraft:chilly_blossom_wood', 'sonicraft:stripped_chilly_blossom_log', 'sonicraft:stripped_chilly_blossom_wood', 'forbidden_arcanus:mysterywood', 'forbidden_arcanus:mysterywood_log', 'forbidden_arcanus:stripped_mysterywood', 'forbidden_arcanus:stripped_mysterywood_log', 'twilightforest:transformation_log', 'twilightforest:transformation_wood', 'twilightforest:stripped_transformation_wood', 'twilightforest:stripped_transformation_log', 'twilightforest:stripped_mining_wood', 'twilightforest:mining_log', 'twilightforest:mining_wood', 'twilightforest:stripped_mining_log', 'twilightforest:stripped_mangrove_log', 'twilightforest:stripped_mangrove_wood', 'twilightforest:mangrove_wood', 'twilightforest:mangrove_log', 'twilightforest:canopy_wood', 'twilightforest:canopy_log', 'twilightforest:stripped_canopy_wood', 'twilightforest:stripped_canopy_log', 'twilightforest:stripped_twilight_oak_log', 'twilightforest:twilight_oak_log', 'twilightforest:twilight_oak_wood', 'twilightforest:stripped_twilight_oak_wood', 'twilightforest:stripped_dark_log', 'twilightforest:dark_wood', 'twilightforest:dark_log', 'twilightforest:stripped_dark_wood', 'twilightforest:time_wood', 'twilightforest:stripped_time_log', 'twilightforest:time_log', 'twilightforest:stripped_time_wood', 'twilightforest:sorting_wood', 'twilightforest:sorting_log', 'twilightforest:stripped_sorting_log', 'twilightforest:stripped_sorting_wood'])
})

events.listen('block.tags', function (e) {
  // Ores
  e.add('forge:ores/amethyst', 'iceandfire:amythest_ore')
  e.add('forge:ores/gold', ['byg:brimstone_nether_gold_ore', 'byg:blue_nether_gold_ore'])
  e.add('forge:ores/tungsten', ['kubejs:tungsten_nether_ore', 'kubejs:tungsten_ore'])
  e.add('resourcefulbees:valid_apiary', ['glassential:glass_dark_ethereal', 'glassential:glass_dark_ethereal_reverse', 'glassential:glass_ethereal', 'glassential:glass_ethereal_reverse', 'glassential:glass_ghostly'])
})
