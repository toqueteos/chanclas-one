events.listen('item.registry', function (e) {
  e.create('miraculous_soup').displayName('Miraculous Soup').food(foodConsumer => {
    foodConsumer.hunger(20)
                .saturation(20.0)
                .alwaysEdible()
                .eaten(eatenEvent => {
                  eatenEvent.player.tell("I have bad luck");
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:unluck",6000,0,false,false)
                });
  });

  e.create('ultimate_skewer').displayName('Ultimate Skewer').food(foodConsumer => {
    foodConsumer.hunger(20)
                .saturation(5.0)
                .eaten(eatenEvent => {
                  eatenEvent.player.tell("I thirst for blood");
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,4,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:health_boost",6000,3,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("botania:bloodthirst",12000,0,false,false)
                });
  });

  e.create('beer').displayName('Binouze').food(foodConsumer => {
    foodConsumer.hunger(10).saturation(0.8)
  });

  //Ultimate Honeycomb
  e.create('ultimate_comb').displayName('Ultimate Honeycomb').food(foodConsumer => {
    foodConsumer.hunger(20)
                .saturation(5.0)
                .eaten(eatenEvent => {
                  eatenEvent.player.tell("How Did We Get Here?");
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:slowness",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",200,41,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:jump_boost",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:invisibility",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:night_vision",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:weakness",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:poison",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:wither",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:mining_fatigue",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:levitation",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:hunger",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:slow_falling",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:conduit_power",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:dolphins_grace",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:blindness",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:bad_omen",200,1,false,false)
                  eatenEvent.getEntity().getPotionEffects().add("minecraft:hero_of_the_village",200,1,false,false)
                });
  });
})