class Character {
    constructor({
      name,
      age,
      level,
      hp,
      intelligences = [],
      karma,
      inventory = [],
    }) {
      this.name = name;
      this.age = age;
      this.level = level;
      this.hp = hp;
      this.intelligences = intelligences;
      this.karma = karma;
      this.inventory = inventory;
    }
  }
  
  // las variables para los elementos del inventario
  const creative = "Creative Intelligence";
  const survival = "Survival Intelligence";
  const fragmented = "Fragmented Inteligence"
  const technological = "Technological Intelligence";
  //Inventory
  const packGum = "Pack of Gum";
  const killerUSB = "Killer USB";
  
  const principalCharacter = new Character({
    name: "Ryan Ghosting K.",
    age: 22,
    level: 1,
    hp: 100,
    intelligences: [creative, fragmented, technological],
    karma: -1,
    inventory: [packGum, killerUSB],
  });
  
  console.log(principalCharacter);
  