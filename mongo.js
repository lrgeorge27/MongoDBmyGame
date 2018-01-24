//Level 1 Assignment
var db = "use myGame";

db.monsters.find({ "_id": ObjectId("5a676ddc159fa361558094e6"), "name": "Harry", "health": "Tip top", "lastFought": ISODate("2018-01-31T00:00:00Z"), "attacks": ["jump", "claw", "bite"], "stats": { "attack": 56, "defense": 122 } } { "_id": ObjectId("5a676f1d159fa361558094e7"), "name": "Mike Wazowski", "health": "moderate", "lastFought": ISODate("2015-09-23T00:00:00Z"), "attacks": ["screetch", "roll", "bite"], "stats": { "attack": 12, "defense": 345 } })

function monsters(name, health, lastFought, attacks, stats, db) {
 db.monsters.insert({
  "name": "Harry",
  "health": "Tip top",
  "lastFought": new Date(2018, 9, 1),
  "attacks": ["jump", "claw", "bite"],
 })

 db.monsters.find()

 db.monsters.find({ name: "Harry" })

 db.monsters.find({ attacks: "bite" })

 db.monsters.find({ "stats.defense": 122 })

}

//Level 3 Assignment
var mongo = function(db) {
 db.monsters.find({ "stats.attack": { $lt: 10 } })
 // { "_id" : ObjectId("5a676f1d159fa361558094e7"), "name" : "Mike Wazowski", "health" : "moderate", "lastFought" : ISODate("2015-09-23T00:00:00Z"), "attacks" : [ "screetch", "roll", "bite" ], "stats" : { "attack" : 6, "defense" : 10 }, "level" : 2, "style" : "geek" }
 db.monsters.find({ level: { $gte: 5, $lte: 15 } })
 //  { "_id" : ObjectId("5a676ddc159fa361558094e6"), "name" : "Harry", "health" : "Tip top", "lastFought" : ISODate("2018-01-31T00:00:00Z"), "attacks" : [ "jump", "claw", "bite" ], "stats" : { "attack" : 12, "defense" : 8 }, "level" : 8, "style" : "scary" }
 // { "_id" : ObjectId("5a67f1c1177daa6dd2d08d37"), "name" : "Sully", "health" : "ill", "lastFought" : ISODate("2004-08-03T00:00:00Z"), "attacks" : [ "pounce", "claw", "bite" ], "stats" : { "attack" : 15, "defense" : 6 }, "level" : 10, "style" : "cool" }
 db.monsters.find({ attacks: { $ne: "bite" } })
 db.monsters.find({ level: { $lt: 6 } }, { name: true, level: true, health: true })
 //{ "_id" : ObjectId("5a676f1d159fa361558094e7"), "name" : "Mike Wazowski", "health" : "moderate", "level" : 2 }
 db.monsters.find({ "stats.attack": { $gte: 10, $lte: 20 } }, { health: false, style: false })
 //  { "_id" : ObjectId("5a676ddc159fa361558094e6"), "name" : "Harry", "lastFought" : ISODate("2018-01-31T00:00:00Z"), "attacks" : [ "jump", "claw", "bite" ], "stats" : { "attack" : 12, "defense" : 8 }, "level" : 8 }
 // { "_id" : ObjectId("5a67f1c1177daa6dd2d08d37"), "name" : "Sully", "lastFought" : ISODate("2004-08-03T00:00:00Z"), "attacks" : [ "pounce", "claw", "bite" ], "stats" : { "attack" : 15, "defense" : 6 }, "level" : 10 }
 db.monsters.find().count()
 //3
 db.monsters.find().sort({ level: -1 })
 // { "_id" : ObjectId("5a67f1c1177daa6dd2d08d37"), "name" : "Sully", "health" : "ill", "lastFought" : ISODate("2004-08-03T00:00:00Z"), "attacks" : [ "pounce", "claw", "bite" ], "stats" : { "attack" : 15, "defense" : 6 }, "level" : 10, "style" : "cool" }
 // { "_id" : ObjectId("5a676ddc159fa361558094e6"), "name" : "Harry", "health" : "Tip top", "lastFought" : ISODate("2018-01-31T00:00:00Z"), "attacks" : [ "jump", "claw", "bite" ], "stats" : { "attack" : 12, "defense" : 8 }, "level" : 8, "style" : "scary" }
 // { "_id" : ObjectId("5a676f1d159fa361558094e7"), "name" : "Mike Wazowski", "health" : "moderate", "lastFought" : ISODate("2015-09-23T00:00:00Z"), "attacks" : [ "screetch", "roll", "bite" ], "stats" : { "attack" : 6, "defense" : 10 }, "level" : 2, "style" : "geek" }
};
