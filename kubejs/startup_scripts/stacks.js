onEvent('item.modification', e => {
  e.modify('minecraft:ender_pearl', item => {
    item.maxStackSize = 64;
    item.fireResistant = true;
  });

  e.modify('minecraft:egg', item => {
    item.maxStackSize = 64;
  });
});
