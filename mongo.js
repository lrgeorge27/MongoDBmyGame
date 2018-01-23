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
 