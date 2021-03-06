events.listen('recipes', function (e) {

//Cherrywood
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "forbidden_arcanus:cherrywood_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "forbidden_arcanus:cherrywood_sapling"
    },
    "results": [
        {
            "chance": 0.50,
            "output": {
                "item": "forbidden_arcanus:cherrywood_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.10,
            "output": {
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.01,
            "output": {
                "item": "forbidden_arcanus:cherry_peach"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.05,
            "output": {
                "item": "forbidden_arcanus:cherrywood_sapling"
            },
            "minRolls": 1,
            "maxRolls": 1
        }
    ]
})

//Mysterywood
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "forbidden_arcanus:mysterywood_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "forbidden_arcanus:mysterywood_sapling"
    },
    "results": [
        {
            "chance": 0.50,
            "output": {
                "item": "forbidden_arcanus:mysterywood_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.10,
            "output": {
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.01,
            "output": {
                "item": "minecraft:golden_apple"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.05,
            "output": {
                "item": "forbidden_arcanus:mysterywood_sapling"
            },
            "minRolls": 1,
            "maxRolls": 1
        }
    ]
})

})