/**
 * Base Class Objects
 */
const classes = {
  archer: {
    baseStats: {
      charisma: 5,
      strength: 12,
      speed: 10,
      wisdom: 8
    },
    skills: {
      bladedWeapons: 20,
      darkMagic: 0,
      heavyArmor: 10,
      leadership: 10,
      lightArmor: 30,
      lightMagic: 0,
      marksman: 60,
      perception: 30,
      polearms: 20,
      speechcraft: 5,
      trade: 5,
      unarmedCombat: 10
    },
    unique: {
      bonus: ["Archer's eye: Constant Effect. Archers identify enemies up to 50% further away."],
      weakness: ["Fear: Constant Effect. Archers inflict 30% less damage in Melee combat"]
    },
    description: "Powerful ranged unit and devastating in large numbers. Archers see enemies much sooner than their contemporaries do, but they are weak if enemy units can close the gap. Ideal against infantry, weak against cavalry."
  },
  assassin: {
    baseStats: {
      charisma: 3,
      strength: 10,
      speed: 12,
      wisdom: 10
    },
    skills: {
      bladedWeapons: 40,
      darkMagic: 35,
      heavyArmor: 0,
      leadership: 0,
      lightArmor: 35,
      lightMagic: 0,
      marksman: 30,
      perception: 30,
      polearms: 5,
      speechcraft: 2,
      trade: 3,
      unarmedCombat: 20
    },
    unique: {
      bonus: ["Feet of Nortego: Once per day, an assassin can cast this spell. Spell grants 100% speed bonus for 120 seconds. Ideal for quick escapes", "Cat's Eye: Constant Effect. Assassins detect enemies as effectively at night as they do during daylight. Vision radius reduction caused by darkness does not effect the Assassin."],
      weakness: ["Cowardice: Constant effect. Assassins take 50% more damage and inflict 25% less damage if attacked by surprise."]
    },
    description: "Powerful yet considered dishonorable and shunned by many, the Assassin is equally deadly alone or as part of a group. Assasins are skilled in the dark arts of wizardry and poisons, as well as with daggers and darts. Yet their reputation damages their ability to engage in peaceful manners (trade, persuasion, etc) with other characters."
  },
  engineer: {
    baseStats: {
      charisma: 8,
      strength: 7,
      speed: 6,
      wisdom: 14
    },
    skills: {
      bladedWeapons: 0,
      darkMagic: 0,
      heavyArmor: 15,
      leadership: 45,
      lightArmor: 15,
      lightMagic: 0,
      marksman: 0,
      perception: 55,
      polearms: 20,
      speechcraft: 0,
      trade: 40,
      unarmedCombat: 10
    },
    unique: {
      bonus: ["Build fortifications: Once per day, Engineers can create fortifications. This grants a 10% defense bonus to all friendlies within the perimeter. This effect is stackable up to a max of 100%.", "Build Siege Weapons: Once per day, Engineers may build Siege Weapons. Siege weapons require at least 3 people in addition to an engineer to operate and cause 500% more damage to buildings. Siege is required to successfully attack any buildings with an armor rating of 50 or more.", "Tactician: Constant Effect. All characters in an attack party with an engineer gain a 5% attack bonus and are less likely to flee battle."],
      weakness: ["Soul Drain: Constant effect. Having no skills or resistances to magic, engineers take 50% more damage from spells."]
    },
    description: "An enginer can be a highly useful asset or even a deciding factor in large armies. They are natural born leaders and tacticians, but engineers do poorly in 1 on 1 combat."
  },
  guard: {
    baseStats: {
      charisma: 4,
      strength: 15,
      speed: 12,
      wisdom: 4
    },
    skills: {
      bladedWeapons: 65,
      darkMagic: 0,
      heavyArmor: 50,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 0,
      marksman: 0,
      perception: 15,
      polearms: 40,
      speechcraft: 0,
      trade: 0,
      unarmedCombat: 20
    },
    unique: {
      bonus: ["Strength in numbers: Constant effect. Guard characters experience a +2% bonus to attack and defense for each guard character joining the attack party up to a max of 100%.", "Blood Rage: In a single combat encounter, any guard character who kills 3 or more enemies gains a 25% bonus to attack. In addition, for every 5 points of damage they receive one point is reflected back to the attacker."],
      weakness: ["Soul Drain: Constant effect. Having no skills or resistances to magic, Guards take 50% more damage from spells."]
    },
    description: "The ultimate infantry unit. The embodiment of 'Stength in Numbers'. Fast and strong with excellent spear and sword skills, guard units are a force to be reckoned with in 1 on 1 combat. And they are nearly unstoppable in large numbers. But Guards units, like soldier ants, require leadership and management."
  },
  knight: {
    baseStats: {
      charisma: 10,
      strength: 14,
      speed: 6,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 50,
      darkMagic: 0,
      heavyArmor: 70,
      leadership: 20,
      lightArmor: 0,
      lightMagic: 20,
      marksman: 0,
      perception: 0,
      polearms: 20,
      speechcraft: 10,
      trade: 10,
      unarmedCombat: 0
    },
    unique: {
      bonus: ["Rally: Once per day, a Knight may use a rally cry to inspire troops. This gives all friendly characters within radius 2 additional strength and 10 additional hit points for the duration of the combat encounter. This effect is not stackable. (Rallied troops cannot be rallied a second time by another knight in the same combat encounter.)", "Shield of the Righteous: Constant Effect. Knights experience a 50% defensive bonus when guarding another player with less HP."],
      weakness: ["Pride: Constant effect. Knights who lose a combat encounter suffer from decreased morale, resulting in -1 speed point and -1 strength. As well as a -10% attack modifier. This effect lasts until the end of the next combat encounter."]
    },
    description: "Powerful and noble, Knights are tough and heavily armored. Knights are good mixed with other units, or as their own party. With training, knights can also be made into semi-effective healers in a pinch."
  },
  mage: {
    baseStats: {
      charisma: 7,
      strength: 5,
      speed: 7,
      wisdom: 16
    },
    skills: {
      bladedWeapons: 0,
      darkMagic: 80,
      heavyArmor: 0,
      leadership: 15,
      lightArmor: 0,
      lightMagic: 60,
      marksman: 0,
      perception: 20,
      polearms: 0,
      speechcraft: 10,
      trade: 15,
      unarmedCombat: 0
    },
    unique: {
      bonus: ["Ying and Yang: Constant Effect. Mages can cast an inverse spell against an enemy spellcaster to nullify their effects. A mage casting 20 points of fire damage against an enemy casting 20 points of frost damage will result in no parties damaged.", "Wisdom of the Ancients: Constant Effect. Mages regenerate Magicka 100% faster than other characters."],
      weakness: ["Leeching: Constant Effect. Mages who are damaged will suffer -2 speed and continue to lose health after combat at a rate of 1 point every hour. This effect lasts until the Mage character is restored to full health."]
    },
    description: "Practitioners of the ancient arcane arts, these characters are as powerful as they are mysterious. Highly trained in both dark and light magic, they are equally adept as both offensive and defensive units."
  },
  merchant: {
    baseStats: {
      charisma: 14,
      strength: 6,
      speed: 7,
      wisdom: 8
    },
    skills: {
      bladedWeapons: 10,
      darkMagic: 0,
      heavyArmor: 0,
      leadership: 30,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 0,
      perception: 10,
      polearms: 0,
      speechcraft: 60,
      trade: 60,
      unarmedCombat: 0
    },
    unique: {
      bonus: ["Luck of the Emperor: Once per day, a Merchant may cast this spell. The luck of the Emperor grants +2 to all base attributes and stats for 5 minutes.", "Silver Tongue of Avaris: Once per day, a merchant may cast this spell. When Cast, Merchants experience a +10 point increase to speechcraft, trade, and leadership for 5 minutes.", "Eye of the Ship Captain: Constant Effect. Parties can carry an extra % of loot equal to the merchant characters perception."],
      weakness: ["Greed: Constant Effect. Merchants experience -2 wisdom and -10 speechcraft when interacting with characters who own more gold than them."]
    },
    description: "Charismatic, crafty, but can rob you blind in front of your own eyes. The merchant has no real battle skills to speak of, but due to their charisma make effective leaders and enable the entire party to carry more loot to maximize profit. Merchants are natural born negotiators and can befriend and extract valuable information from even the most tight-lipped of souls."
  },
  priest: {
    baseStats: {
      charisma: 6,
      strength: 4,
      speed: 10,
      wisdom: 15
    },
    skills: {
      bladedWeapons: 0,
      darkMagic: 30,
      heavyArmor: 0,
      leadership: 25,
      lightArmor: 0,
      lightMagic: 75,
      marksman: 0,
      perception: 20,
      polearms: 0,
      speechcraft: 15,
      trade: 10,
      unarmedCombat: 25
    },
    unique: {
      bonus: ["Righteous Path: Constant Effect. Dark magic does 50% less damage to Priests.", "St Vaeryn's Intervention: Once per day, a priest character may invoke Vaeryn's intervention. When invoked, all friendly characters in a 10 meter radius are healed for 20 Health points and receive +1 strength until the end of the combat encounter.", "Blesssed Light: unlimited caasting. A priest may invoke the blessed light at any time. When invoked, the entire party doubles their own individual night vision distances."],
      weakness: ["Temptation: Priests experience -2 speed, -10 perception, and -10 Light Magic when another member of the same party who is not a fellow priest has greater Light Magic skill than them.", "Burden of Guilt: Priests who deliver the killing blow to enemy characters suffer -10 perception, -10 Light Magic, and -2 wisdom for the next 3 days."]
    },
    description: "Pious, holy, and righteous, the priest is a powerful healing, leading, and guiding force that any party can stand to benefit from. Being blessed by the 7, they have natural resistances to dark magic. While they can use their incredible talents for evil, priests tend to avoid the use of dark magic, preferring instead to heal and bless their party members from afar."
  }
};

const errors = {
  name : {
    not_null: "A Character needs a name!",
    not_allowed: "Name must be letters, numbers, or dashes!"
  },
  forbidden: {
    errors_exist: "You must resolve all errors before you can continue!"
  },
  skills: {
    insufficient_skill_points: "You do not have enough remaining skill points!",
    max_limit: "You cannot increase this skill that much!",
    min_limit: "You cannot decrease this skill that much!"
  }
};

/**
 * Global Application Values
 */

let skillPointsToSpend = 20;
const alphaNumericRegex = /^[a-zA-Z0-9- ]*$/;

// Inputs and Elements
const nameInput = document.getElementById("nameInput");
const classInput = document.getElementById("classInput");
const healthInput = document.getElementById("healthInput");
const magickaInput = document.getElementById("magickaInput");
const charismaInput = document.getElementById("charismaInput");
const speedInput = document.getElementById("speedInput");
const strengthInput = document.getElementById("strengthInput");
const wisdomInput = document.getElementById("wisdomInput");
const availablePointsInput = document.getElementById("available_points_input");
const bladedWeaponsInput = document.getElementById("bladed_weapons_input");
const darkMagicInput = document.getElementById("dark_magic_input");
const heavyArmorInput = document.getElementById("heavy_armor_input");
const leadershipInput = document.getElementById("leadership_input");
const lightArmorInput = document.getElementById("light_armor_input");
const lightMagicInput = document.getElementById("light_magic_input");
const marksmanInput = document.getElementById("marksman_input");
const perceptionInput = document.getElementById("perception_input");
const polearmsInput = document.getElementById("polearms_input");
const speechcraftInput = document.getElementById("speechcraft_input");
const tradeInput = document.getElementById("trade_input");
const unarmedCombatInput = document.getElementById("unarmed_combat_input");
const bonusListUL = document.getElementsByClassName("bonus_list")[0];
const weaknessListUL = document.getElementsByClassName("weakness_list")[0];
const descriptionText = document.getElementsByClassName("description_text")[0];
const errorBox = document.getElementsByClassName("error_root")[0];
const submitBtn = document.getElementById("submitButton");

/**
 * DOM Functions
 */

 /**
  * @function setDerivedActiveStats
  * @param {Object} character - a character object matching the character interface
  * @returns {null}
  */
const setDerivedActiveStats = (character) => {
  const multipler = 5;
  healthInput.value = character.baseStats.strength * multipler;
  magickaInput.value = character.baseStats.wisdom * multipler;

  /* This would be a good place to add any additional modifiers.
   Alternatively, you can separate the stat derivement/calculation from 
   the document setting.
   */
};

/**
 * @function setBaseStats
 * @param {Object} character - a character object matching the character interface
 * @returns {null}
 */
const setBaseStats = (character) => {
  const {strength, wisdom, charisma, speed} = character.baseStats;
  charismaInput.value = charisma;
  speedInput.value = speed;
  strengthInput.value = strength;
  wisdomInput.value = wisdom;
};

/**
 * @function setAvailableSkillPoints
 * @param {Number} points 
 * @returns {void}
 */
const setAvailableSkillPoints = (points) => {
  availablePointsInput.value = points;
};

/**
 * @function setSkills
 * @param {Object} character - a character object matching the character interface
 * @returns {void}
 */
const setSkills = (character) => {
  const {
    bladedWeapons,
    darkMagic,
    heavyArmor,
    leadership,
    lightArmor,
    lightMagic,
    marksman,
    perception,
    polearms,
    speechcraft,
    trade,
    unarmedCombat
  } = character.skills;
  bladedWeaponsInput.value = bladedWeapons;
  darkMagicInput.value = darkMagic;
  heavyArmorInput.value = heavyArmor;
  leadershipInput.value = leadership;
  lightArmorInput.value = lightArmor;
  lightMagicInput.value = lightMagic;
  marksmanInput.value = marksman;
  perceptionInput.value = perception;
  polearmsInput.value = polearms;
  speechcraftInput.value = speechcraft;
  tradeInput.value = trade;
  unarmedCombatInput.value = unarmedCombat;
};
/**
 * @function createList
 * @param {HTMLUListElement} parentElement 
 * @param {Array<String>} listData
 * @return {void}
 */
const createList = (parentElement, listData) => {
  // Clear existing Items
  while (parentElement.childElementCount > 0) {
    parentElement.firstChild.remove();
  }
  // Generate list elements from listData
  listData.forEach((listable) => {
    const li = document.createElement("li");
    const [name, description] = listable.split(":");
    li.innerHTML = `<strong>${name}:</strong>${description}`;
    parentElement.appendChild(li);
  });
};

/**
 * @function setDescription
 * @param {String} description
 * @returns {void} 
 */
const setDescription = (description) => {
  descriptionText.innerText = description;
};

/**
 * @function paginateCharacterFromSelect
 * @param {String} character - a string value matching a character base object
 * @returns {void}
 */
const paginateCharacterFromSelect = (character) => {
  const characterName = character.toLowerCase();
  const characterBase = classes[characterName];

  if (characterBase === undefined){
    throw new Error("Justin, you might want to add the character to your base object first before you add the option into the select menu...");
  }

  // reset defaults
  skillPointsToSpend = 20;

  // replace values
  setDerivedActiveStats(characterBase);
  setBaseStats(characterBase);
  setAvailableSkillPoints(skillPointsToSpend);
  setSkills(characterBase);
  createList(bonusListUL, characterBase.unique.bonus);
  createList(weaknessListUL, characterBase.unique.weakness);
  setDescription(characterBase.description);
}

const setError = (errorMessage) => {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");

  const errorCloseBtn = document.createElement("button");
  errorCloseBtn.classList.add("error_btn");
  errorCloseBtn.innerText = "x";
  errorCloseBtn.addEventListener("click", () => {
    errorElement.remove();
  });
  errorElement.appendChild(errorCloseBtn);

  const errorText = document.createElement("p");
  errorText.classList.add("error_text");
  errorText.innerText = errorMessage;
  errorElement.appendChild(errorText);

  errorBox.appendChild(errorElement);
};

const skillValidator = {
  /**
   * @param {Event} - DOM Event
   * @returns {void}
   */
  saveCurrentValueAsAttribute: (event) => {
    const element = event.target;
    element.setAttribute("data-previous-value", event.target.valueAsNumber);
  },
  /**
   * @interface diff
   * @type {Object}
   * @property {Number} - previousValue
   * @property {Number} - currentValue
   * @property {String} - action. one of "INCREMENT" or "DECREMENT"
   * @property {Number} - scale
   * @property {String} - skill
   */
  /** 
   * @param {Event} - DOM Event
   * @returns {diff} - Object matching diff interface
   */
  compareValues: (event) => {
    const previousValue = parseInt(event.target.getAttribute("data-previous-value"));
    const currentValue = event.target.valueAsNumber;
    const action = currentValue < previousValue ? "DECREMENT" : "INCREMENT";
    const scale = Math.abs(previousValue - currentValue);
    const skill = event.target.name;

    return {
      previousValue,
      currentValue,
      action,
      scale,
      skill
    }
  },
  /**
   * @param {Object} character - Character Base Object
   * @param {diff} diff - diff interface
   * @returns {Object} - { allowed: Boolean, reason: String }
   */
  confirmSkillChangePossible: (character, diff) => {
    const result = {allowed: true, reason: ""};
    // User must have available skill points.
    if (diff.action === "INCREMENT" && diff.scale > skillPointsToSpend) {
      result.allowed = false;
      result.reason = errors.skills.insufficient_skill_points;

      return result;
    }
    // User cannot set skill below 0.
    if (diff.action === "DECREMENT" && diff.currentValue < 0){
      result.allowed = false;
      result.reason = errors.skills.min_limit;

      return result;
    }
    // TODO: User skill cannot be above governing attribute. (replace 100 in maxLimit with baseStat derived max)
    // User must not increase skill more than 10 over base skill.
    const maxLimit = Math.min((character.skills[diff.skill] + 10), 100);
    // User must not decrease skill more than 5 below base skill.
    const minLimit = Math.max((character.skills[diff.skill] - 5), 0);

    if (diff.currentValue > maxLimit) {
      result.allowed = false;
      result.reason = errors.skills.max_limit;

      return result;
    }

    if (diff.currentValue < minLimit) {
      result.allowed = false;
      result.reason = errors.skills.min_limit;

      return result;
    }

    return result;
  },
  /**
   * @param {Event} event
   * @param {diff} diff
   * @return {void}
   */
  resolve: (event, diff) => {
    // Increment/Decrement skillPointsToSpend
    if (diff.action === "INCREMENT") {
      skillPointsToSpend -= diff.scale;
    } else {
      skillPointsToSpend += diff.scale;
    }
    // Set data-previous-value for input element
    // This could be refactored to use 'this' if we were using regular functions instead of lambdas
    skillValidator.saveCurrentValueAsAttribute(event);
    // Update display. Show new value of available skill points to screen
    setAvailableSkillPoints(skillPointsToSpend);
  },
  /**
   * @param {Event} event
   * @returns {void}
   */
  reset: (event) => {
    // Restore input value to previous value
    event.target.value = event.target.getAttribute("data-previous-value");
  }
};

/**
 * Event Listeners and triggers
 */

nameInput.addEventListener("blur", (event) => {
  if (event.target.value === ""){
    setError(errors.name.not_null);
    return;
  }
  if (!event.target.value.match(alphaNumericRegex)){
    setError(errors.name.not_allowed);
    return;
  }
});

nameInput.addEventListener("input", (event) => {
  const char = event.data;
  // Backspace handler
  if (char === null) {
    return;
  }
  const isValid = !!char.match(alphaNumericRegex);
  if (!isValid) {
    setError(errors.name.not_allowed);
  }
});

classInput.addEventListener("change", (event) => {
  paginateCharacterFromSelect(event.target.value);
});

// Handle skill inputs
const skillInputs = document.getElementsByClassName("skill_input");

for (let i = 0; i < skillInputs.length; i++) {
  skillInputs[i].addEventListener("focus", (event) => {
    skillValidator.saveCurrentValueAsAttribute(event);
  });

  skillInputs[i].addEventListener("change", (event) => {
    const diff = skillValidator.compareValues(event);
    const charBase = classes[classInput.value.toLowerCase()];
    const candidateChange = skillValidator.confirmSkillChangePossible(charBase, diff);
    if (candidateChange.allowed) {
      skillValidator.resolve(event, diff);
    } else {
      skillValidator.reset(event);
      setError(candidateChange.reason);
    }
  });
}

submitBtn.addEventListener("click", (event) => {
  // By default, any button inside of a form element has a default value of submit. Which triggers a new page. We can prevent this as follows;
  event.preventDefault();

  if (errorBox.childElementCount > 0) {
    setError(errors.forbidden.errors_exist);
    return;
  }
  window.print();
});

/**
 * On Load / initialization script
 */

document.getElementById("classInput").dispatchEvent(new Event("change"));

/**
 * Character Schema
 */

// Name: String. Not Null, Alphanumeric, has MaxLength.
// Class: String. From Dropdown, Autopopulate skills and Base Stats. Apply minimums to skills and stats.

// Base Stats: Integers (range 0-20). Apply Max Count, avg 35 point total per char:
  // Charisma
  // Speed (movement, actions per turn)
  // Strength (hitpoints)
  // Wisdom (magicka)

// Active Stats: integers (readonly, autoGen):
  // HP (Strength)
  // Magicka (Wisdom)

// Skills: Integers (range 0-100) avg 200 per char. Max = governing base stat * 5:
  // Marksman (Strength)
  // Bladed Weapons (Strength + Speed)
  // Unarmed Combat (Strength + Speed)
  // Polearms (Speed)
  // Heavy Armor (Strength)
  // Light Armor (Speed)
  // Trade (Charisma)
  // Speechcraft (Charisma)
  // Leadership (Charisma)
  // Dark Magic (Wisdom)
  // Light Magic (Wisdom)
  // Perception (Wisdom)

// Unique:
  // Bonuses: Array[string]
  // Curses/Weaknesses. Array[string]

// Description: string