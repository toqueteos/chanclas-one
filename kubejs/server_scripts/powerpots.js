events.listen('recipes', function (e) {
    e.shaped("ftb-power-pots:power_pot_mk1", ["IBI", "BPB", "IBI"], {
        I: "#forge:storage_blocks/iron",
        B: "#forge:storage_blocks/gold",
        P: "#botanypots:hopper_botany_pots",
    });
    e.shaped("ftb-power-pots:power_pot_mk2", ["IBI", "BPB", "IBI"], {
        I: "#forge:storage_blocks/iron",
        B: "#forge:storage_blocks/diamond",
        P: "#botanypots:hopper_botany_pots",
    });
    e.shaped("ftb-power-pots:power_pot_mk3", ["IBI", "BPB", "IBI"], {
        I: "#forge:storage_blocks/iron",
        B: "#forge:storage_blocks/emerald",
        P: "#botanypots:hopper_botany_pots",
    });
    e.shaped("ftb-power-pots:power_pot_mk4", ["IBI", "BPB", "IBI"], {
        I: "#forge:storage_blocks/iron",
        B: "#forge:storage_blocks/netherite",
        P: "#botanypots:hopper_botany_pots",
    });

    e.shaped("ftb-power-pots:power_pot_mk2", [" B ", "BPB", " B "], {
        B: "#forge:storage_blocks/diamond",
        P: "ftb-power-pots:power_pot_mk1",
    });
    e.shaped("ftb-power-pots:power_pot_mk3", [" B ", "BPB", " B "], {
        B: "#forge:storage_blocks/emerald",
        P: "ftb-power-pots:power_pot_mk2",
    });
    e.shaped("ftb-power-pots:power_pot_mk4", [" B ", "BPB", " B "], {
        B: "#forge:storage_blocks/netherite",
        P: "ftb-power-pots:power_pot_mk3",
    });
});
