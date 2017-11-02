'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

class CrewMember {
  /**
  * @param name is the name of the crew member
  * @param job is the job of the crew member
  * @param specialSkill is the skill of the crew member
  */
  constructor(name,job,specialSkill){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
  }
  /**
  * @param ship is the ship assigned to the crew member
  */
  enterShip(ship) {
    ship.crew.push(this);
    this.ship = ship;
  }
}

class Ship {
  /**
  * @param name is the name of the ship
  * @param type is the type of the ship
  * @param ability is the ability of the ship
  */
  constructor(name,type,ability){
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];
  }
  // this function returns the ships ability as a string, if there is a crewmember whose job matches the ships type. Otherwise, it should return "Can't perform a mission yet!"
  missionStatement(){
    let count = 0;
    for (var i=0; i <this.crew.length; i++){
      let member = this.crew[i];
      if (jobTypes[member.job] === this.type){
        return String(this.ability);
        count++
      }else if (member.job === "programmer"){
        return String(this.ability);
        count++
      }
    }
    if (count === 0) {
      return "Can't perform a mission yet."
    }
  }
}

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
