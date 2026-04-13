//cards and descriptions for the main code to use

const the_fool = {
    num: 0, name: "The fool", 
    "mainLine":"freedom", 
    "secondLine": "no baggage, innocence and new begginings, a symbol of spontaneity."
};

const the_magician = {
    num: 1, name: "The Magician",
    mainLine: "manifestation",
    secondLine: "the power to create and shape reality through skill and intention."
};

const the_high_priestess = {
    num: 2, name: "The High Priestess",
    mainLine: "intuition",
    secondLine: "a deep connection to inner wisdom and hidden knowledge."
};

const the_empress = {
    num: 3, name: "The Empress",
    mainLine: "nurturing",
    secondLine: "growth, abundance, and the presence of care and creativity."
};

const the_emperor = {
    num: 4, name: "The Emperor",
    mainLine: "authority",
    secondLine: "structure, stability, and the influence of control and leadership."
};

const the_hierophant = {
    num: 5, name: "The Hierophant",
    mainLine: "tradition",
    secondLine: "guidance through established beliefs, systems, and teachings."
};

const the_lovers = {
    num: 6, name: "The Lovers",
    mainLine: "connection",
    secondLine: "a meaningful bond, choice, or alignment between values."
};

const the_chariot = {
    num: 7, name: "The Chariot",
    mainLine: "determination",
    secondLine: "focused willpower driving progress and overcoming obstacles."
};

const strength = {
    num: 8, name: "Strength",
    mainLine: "inner strength",
    secondLine: "quiet courage, patience, and emotional resilience."
};

const the_hermit = {
    num: 9, name: "The Hermit",
    mainLine: "introspection",
    secondLine: "a period of solitude and self-reflection in search of truth."
};

const wheel_of_fortune = {
    num: 10, name: "Wheel of Fortune",
    mainLine: "change",
    secondLine: "a shift in cycles, luck, or destiny beyond direct control."
};

const justice = {
    num: 11, name: "Justice",
    mainLine: "fairness",
    secondLine: "balance, truth, and the consequences of past actions."
};

const the_hanged_man = {
    num: 12, name: "The Hanged Man",
    mainLine: "surrender",
    secondLine: "a pause for new perspective through letting go."
};

const death = {
    num: 13, name: "Death",
    mainLine: "transformation",
    secondLine: "an ending that leads to deep change and renewal."
};

const temperance = {
    num: 14, name: "Temperance",
    mainLine: "balance",
    secondLine: "harmony achieved through patience and moderation."
};

const the_devil = {
    num: 15, name: "The Devil",
    mainLine: "attachment",
    secondLine: "being bound by desires, habits, or illusions."
};

const the_tower = {
    num: 16, name: "The Tower",
    mainLine: "upheaval",
    secondLine: "a sudden disruption that breaks false foundations."
};

const the_star = {
    num: 17, name: "The Star",
    mainLine: "hope",
    secondLine: "renewed faith, healing, and a sense of calm guidance."
};

const the_moon = {
    num: 18, name: "The Moon",
    mainLine: "illusion",
    secondLine: "uncertainty, dreams, and things not fully revealed."
};

const the_sun = {
    num: 19, name: "The Sun",
    mainLine: "joy",
    secondLine: "clarity, success, and a warm sense of positivity."
};

const judgement = {
    num: 20, name: "Judgement",
    mainLine: "awakening",
    secondLine: "realization, reflection, and a call to higher purpose."
};

const the_world = {
    num: 21, name: "The World",
    mainLine: "completion",
    secondLine: "fulfillment, closure, and the achievement of a cycle."
};


function randomCards() {
    let randNum1 = Math.floor(Math.random()*22);
    let randNum2 = Math.floor(Math.random()*22);
    let randNum3 = Math.floor(Math.random()*22);

    const cards = [
    the_fool,
    the_magician,
    the_high_priestess,
    the_empress,
    the_emperor,
    the_hierophant,
    the_lovers,
    the_chariot,
    strength,
    the_hermit,
    wheel_of_fortune,
    justice,
    the_hanged_man,
    death,
    temperance,
    the_devil,
    the_tower,
    the_star,
    the_moon,
    the_sun,
    judgement,
    the_world
    ];

    let card1 = cards[randNum1];
    let card2 = cards[randNum2];
    let card3 = cards[randNum3];

    console.log(`Your fate was read, your past is shown by ${card1["name"]} with ${card1["mainLine"]}, your present is ruled by ${card2["name"]} with ${card2["mainLine"]}, and your future will be guided by ${card3["name"]} with ${card3["mainLine"]}.`);
    console.log(" ");
    console.log(`In your past, there was ${card1["secondLine"]}, in your present, there is ${card2["secondLine"]} and in your future there will be ${card3["secondLine"]}`);
}

