events.listen('recipes', function (e) {
    // Some blocks not returning 9 ingots
    e.shapeless(item.of('thermal:nickel_ingot', 9), ['#forge:storage_blocks/nickel']);
    e.shapeless(item.of('thermal:silver_ingot', 9), ['#forge:storage_blocks/silver']);
});
