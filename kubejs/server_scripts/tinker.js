events.listen('recipes', function (e) {

  //Blazing Blood
  e.custom({"type": "thermal:press","input": [{"item": "minecraft:blaze_powder","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 20}],"energy": 400})
  e.custom({"type": "thermal:press","input": [{"item": "minecraft:blaze_rod","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 40}],"energy": 800})
  e.custom({"type": "thermal:press","input": [{"item": "botania:blaze_block","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 360}],"energy": 7200})

  //Slimesteel Ingot
  e.remove({ id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot' })
  e.custom({"type": "thermal:smelter","input": [{"item": "minecraft:iron_ingot","count": 1},{"item": "tconstruct:sky_slime_ball","count": 1},{"item": "tconstruct:seared_brick","count": 1}],"result": [{"item": "tconstruct:slimesteel_ingot","count": 2}],"energy": 4000,"conditions": [{"type": "forge:mod_loaded","modid": "tconstruct"}]})

  //Redstone
  tinkerMelt('minecraft:redstone_block', 'kubejs:molten_redstone', 900, 500, 320)
  tinkerMelt('minecraft:redstone', 'kubejs:molten_redstone', 100, 500, 30)
  tinkerCastingBasin("kubejs:molten_redstone", 900, "minecraft:redstone_block", 100)
  //Glowstone
  tinkerMelt('minecraft:glowstone', 'kubejs:molten_glowstone', 400, 500, 320)
  tinkerMelt('minecraft:glowstone_dust', 'kubejs:molten_glowstone', 100, 500, 30)
  tinkerCastingBasin("kubejs:molten_glowstone", 400, "minecraft:glowstone", 100)

  //Enderium
  tinkerAlloy([{"name": "tconstruct:molten_lead","amount": 432},{"name": "tconstruct:molten_diamond","amount": 144},{"name": "tconstruct:molten_ender","amount": 500}], "kubejs:molten_enderium", 288, 1420)
  tinkerMelt('thermal:enderium_block', 'kubejs:molten_enderium', 1296, 1420, 540)
  tinkerMelt('thermal:enderium_ingot', 'kubejs:molten_enderium', 144, 1420, 60)
  tinkerMelt('thermal:enderium_nugget', 'kubejs:molten_enderium', 16, 1420, 10)
  tinkerMelt('thermal:enderium_coin', 'kubejs:molten_enderium', 48, 1420, 20)
  tinkerMelt('thermal:enderium_plate', 'kubejs:molten_enderium', 144, 1420, 60)
  tinkerMelt('thermal:enderium_gear', 'kubejs:molten_enderium', 576, 1420, 120)
  tinkerMelt('thermal:enderium_dust', 'kubejs:molten_enderium', 144, 1420, 60)
  tinkerCastingBasin("kubejs:molten_enderium", 1296, "thermal:enderium_block", 270)
  tinkerCasting("kubejs:molten_enderium", 144, "thermal:enderium_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
  tinkerCasting("kubejs:molten_enderium", 144, "thermal:enderium_ingot", "tconstruct:casts/single_use/ingot", true, 100)
  tinkerCasting("kubejs:molten_enderium", 144, "thermal:enderium_plate", "tconstruct:casts/multi_use/plate", false, 100)
  tinkerCasting("kubejs:molten_enderium", 144, "thermal:enderium_plate", "tconstruct:casts/single_use/plate", true, 100)
  tinkerCasting("kubejs:molten_enderium", 576, "thermal:enderium_gear", "tconstruct:casts/multi_use/gear", false, 200)
  tinkerCasting("kubejs:molten_enderium", 576, "thermal:enderium_gear", "tconstruct:casts/single_use/gear", true, 200)
  tinkerCasting("kubejs:molten_enderium", 16, "thermal:enderium_nugget", "tconstruct:casts/multi_use/nugget", false, 20)
  tinkerCasting("kubejs:molten_enderium", 16, "thermal:enderium_nugget", "tconstruct:casts/single_use/nugget", true, 20)
  tinkerCasting("kubejs:molten_enderium", 48, "thermal:enderium_coin", "tconstruct:casts/multi_use/coin", false, 20)
  tinkerCasting("kubejs:molten_enderium", 48, "thermal:enderium_coin", "tconstruct:casts/single_use/coin", true, 20)

  //Signalum
  tinkerAlloy([{"name": "tconstruct:molten_copper","amount": 432},{"name": "tconstruct:molten_silver","amount": 144},{"name": "kubejs:molten_redstone","amount": 400}], "kubejs:molten_signalum", 576, 1000)
  tinkerMelt('thermal:signalum_block', 'kubejs:molten_signalum', 1296, 1000, 540)
  tinkerMelt('thermal:signalum_ingot', 'kubejs:molten_signalum', 144, 1000, 60)
  tinkerMelt('thermal:signalum_nugget', 'kubejs:molten_signalum', 16, 1000, 10)
  tinkerMelt('thermal:signalum_coin', 'kubejs:molten_signalum', 48, 1000, 20)
  tinkerMelt('thermal:signalum_plate', 'kubejs:molten_signalum', 144, 1000, 60)
  tinkerMelt('thermal:signalum_gear', 'kubejs:molten_signalum', 576, 1000, 120)
  tinkerMelt('thermal:signalum_dust', 'kubejs:molten_signalum', 144, 1000, 60)
  tinkerCastingBasin("kubejs:molten_signalum", 1296, "thermal:signalum_block", 270)
  tinkerCasting("kubejs:molten_signalum", 144, "thermal:signalum_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
  tinkerCasting("kubejs:molten_signalum", 144, "thermal:signalum_ingot", "tconstruct:casts/single_use/ingot", true, 100)
  tinkerCasting("kubejs:molten_signalum", 144, "thermal:signalum_plate", "tconstruct:casts/multi_use/plate", false, 100)
  tinkerCasting("kubejs:molten_signalum", 144, "thermal:signalum_plate", "tconstruct:casts/single_use/plate", true, 100)
  tinkerCasting("kubejs:molten_signalum", 576, "thermal:signalum_gear", "tconstruct:casts/multi_use/gear", false, 200)
  tinkerCasting("kubejs:molten_signalum", 576, "thermal:signalum_gear", "tconstruct:casts/single_use/gear", true, 200)
  tinkerCasting("kubejs:molten_signalum", 16, "thermal:signalum_nugget", "tconstruct:casts/multi_use/nugget", false, 20)
  tinkerCasting("kubejs:molten_signalum", 16, "thermal:signalum_nugget", "tconstruct:casts/single_use/nugget", true, 20)
  tinkerCasting("kubejs:molten_signalum", 48, "thermal:signalum_coin", "tconstruct:casts/multi_use/coin", false, 20)
  tinkerCasting("kubejs:molten_signalum", 48, "thermal:signalum_coin", "tconstruct:casts/single_use/coin", true, 20)

  //Signalum
  tinkerAlloy([{"name": "tconstruct:molten_tin","amount": 432},{"name": "tconstruct:molten_silver","amount": 144},{"name": "kubejs:molten_glowstone","amount": 200}], "kubejs:molten_lumium", 576, 1000)
  tinkerMelt('thermal:lumium_block', 'kubejs:molten_lumium', 1296, 1000, 540)
  tinkerMelt('thermal:lumium_ingot', 'kubejs:molten_lumium', 144, 1000, 60)
  tinkerMelt('thermal:lumium_nugget', 'kubejs:molten_lumium', 16, 1000, 10)
  tinkerMelt('thermal:lumium_coin', 'kubejs:molten_lumium', 48, 1000, 20)
  tinkerMelt('thermal:lumium_plate', 'kubejs:molten_lumium', 144, 1000, 60)
  tinkerMelt('thermal:lumium_gear', 'kubejs:molten_lumium', 576, 1000, 120)
  tinkerMelt('thermal:lumium_dust', 'kubejs:molten_lumium', 144, 1000, 60)
  tinkerCastingBasin("kubejs:molten_lumium", 1296, "thermal:lumium_block", 270)
  tinkerCasting("kubejs:molten_lumium", 144, "thermal:lumium_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
  tinkerCasting("kubejs:molten_lumium", 144, "thermal:lumium_ingot", "tconstruct:casts/single_use/ingot", true, 100)
  tinkerCasting("kubejs:molten_lumium", 144, "thermal:lumium_plate", "tconstruct:casts/multi_use/plate", false, 100)
  tinkerCasting("kubejs:molten_lumium", 144, "thermal:lumium_plate", "tconstruct:casts/single_use/plate", true, 100)
  tinkerCasting("kubejs:molten_lumium", 576, "thermal:lumium_gear", "tconstruct:casts/multi_use/gear", false, 200)
  tinkerCasting("kubejs:molten_lumium", 576, "thermal:lumium_gear", "tconstruct:casts/single_use/gear", true, 200)
  tinkerCasting("kubejs:molten_lumium", 16, "thermal:lumium_nugget", "tconstruct:casts/multi_use/nugget", false, 20)
  tinkerCasting("kubejs:molten_lumium", 16, "thermal:lumium_nugget", "tconstruct:casts/single_use/nugget", true, 20)
  tinkerCasting("kubejs:molten_lumium", 48, "thermal:lumium_coin", "tconstruct:casts/multi_use/coin", false, 20)
  tinkerCasting("kubejs:molten_lumium", 48, "thermal:lumium_coin", "tconstruct:casts/single_use/coin", true, 20)

  //emerald Gear
  tinkerCasting("tconstruct:molten_emerald", 576, "thermal:emerald_gear", "tconstruct:casts/multi_use/gear", false, 200)
  tinkerCasting("tconstruct:molten_emerald", 576, "thermal:emerald_gear", "tconstruct:casts/single_use/gear", true, 200)

  //Diamond Gear
  tinkerCasting("tconstruct:molten_diamond", 576, "thermal:diamond_gear", "tconstruct:casts/multi_use/gear", false, 200)
  tinkerCasting("tconstruct:molten_diamond", 576, "thermal:diamond_gear", "tconstruct:casts/single_use/gear", true, 200)

  //missing nugget
  tinkerCasting("tconstruct:molten_copper", 16, "thermal:copper_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_copper", 16, "thermal:copper_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_lead", 16, "thermal:lead_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_lead", 16, "thermal:lead_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_electrum", 16, "thermal:electrum_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_electrum", 16, "thermal:electrum_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_constantan", 16, "thermal:constantan_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_constantan", 16, "thermal:constantan_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_silver", 16, "thermal:silver_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_silver", 16, "thermal:silver_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_nickel", 16, "thermal:nickel_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_nickel", 16, "thermal:nickel_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_tin", 16, "thermal:tin_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_tin", 16, "thermal:tin_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_bronze", 16, "thermal:bronze_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_bronze", 16, "thermal:bronze_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_zinc", 16, "create:zinc_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_zinc", 16, "create:zinc_nugget", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_steel", 16, "mekanism:nugget_steel", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_steel", 16, "mekanism:nugget_steel", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_uranium", 16, "mekanism:nugget_uranium", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_uranium", 16, "mekanism:nugget_uranium", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_aluminum", 16, "immersiveengineering:nugget_aluminum", "tconstruct:casts/multi_use/nugget", false, 200)
  tinkerCasting("tconstruct:molten_aluminum", 16, "immersiveengineering:nugget_aluminum", "tconstruct:casts/single_use/nugget", true, 200)
  tinkerCasting("tconstruct:molten_ender", 144, "extendedcrafting:ender_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
  tinkerCasting("tconstruct:molten_ender", 144, "extendedcrafting:ender_ingot", "tconstruct:casts/single_use/ingot", true, 100)
  tinkerCastingBasin("tconstruct:molten_ender", 1296, "extendedcrafting:ender_ingot_block", 200)

  //missing Ingot
  tinkerCasting("tconstruct:molten_steel", 144, "mekanism:ingot_steel", "tconstruct:casts/multi_use/ingot", false, 100)
  tinkerCasting("tconstruct:molten_steel", 144, "mekanism:ingot_steel", "tconstruct:casts/single_use/ingot", true, 100)

  //Iron Rod
  e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_gold_cast' })
  e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_sand_cast' })
  tinkerCasting("tconstruct:molten_iron", 72, "createaddition:iron_rod", "tconstruct:casts/multi_use/rod", false, 40)
  tinkerCasting("tconstruct:molten_iron", 72, "createaddition:iron_rod", "tconstruct:casts/single_use/rod", true, 40)

  function tinkerAlloy(input, output, qte, tmp){
    e.custom({"type": "tconstruct:alloy","inputs": input,"result": {"fluid": output,"amount": qte},"temperature": tmp})}

  function tinkerMelt(input, output, qte, tmp, time){
    e.custom({"type": "tconstruct:melting","ingredient": {"item": input},"result": {"fluid": output,"amount": qte},"temperature": tmp,"time": time})}

  function tinkerCasting(input, qte, output, cast, consume, time) {
    e.custom({"type": "tconstruct:casting_table","cast": { "tag": cast },"cast_consumed": consume,"fluid": { "name": input, "amount": qte },"result": output,"cooling_time": time})}

  function tinkerCastingBasin(input, qte, output, time) {
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": input,"amount": qte},"result": {"item": output},"cooling_time": time})}

})