window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 15,
  medium: 10,
  hard: 5
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const wordImage = document.querySelector('#pokemon-img');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

//console.log(wordImage.getAttribute("src"));

const words = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran",
  "nidorina",
  "nidoqueen",
  "nidoran",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetch'd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "drimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr.mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omanyte",
  "omastar",
  "kabuto",
  "kabutops",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "dratini",
  "dragonair",
  "dragonite",
  "mewtwo",
  "mew"
];

const words_image = [
  "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
  "https://img.pokemondb.net/artwork/large/venusaur.jpg",
  "https://img.pokemondb.net/artwork/large/charmander.jpg",
  "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
  "https://img.pokemondb.net/artwork/large/charizard.jpg",
  "https://img.pokemondb.net/artwork/large/squirtle.jpg",
  "https://img.pokemondb.net/artwork/large/wartortle.jpg",
  "https://img.pokemondb.net/artwork/large/blastoise.jpg",
  "https://img.pokemondb.net/artwork/large/caterpie.jpg",
  "https://img.pokemondb.net/artwork/large/metapod.jpg",
  "https://img.pokemondb.net/artwork/large/butterfree.jpg",
  "https://img.pokemondb.net/artwork/large/weedle.jpg",
  "https://img.pokemondb.net/artwork/large/kakuna.jpg",
  "https://img.pokemondb.net/artwork/large/beedrill.jpg",
  "https://img.pokemondb.net/artwork/large/pidgey.jpg",
  "https://img.pokemondb.net/artwork/large/pidgeotto.jpg",
  "https://img.pokemondb.net/artwork/large/pidgeot.jpg",
  "https://img.pokemondb.net/artwork/large/rattata.jpg",
  "https://img.pokemondb.net/artwork/large/raticate.jpg",
  "https://img.pokemondb.net/artwork/large/spearow.jpg",
  "https://img.pokemondb.net/artwork/large/fearow.jpg",
  "https://img.pokemondb.net/artwork/large/ekans.jpg",
  "https://img.pokemondb.net/artwork/large/arbok.jpg",
  "https://img.pokemondb.net/artwork/large/pikachu.jpg",
  "https://img.pokemondb.net/artwork/large/raichu.jpg",
  "https://img.pokemondb.net/artwork/large/sandshrew.jpg",
  "https://img.pokemondb.net/artwork/large/sandslash.jpg",
  "https://img.pokemondb.net/artwork/large/nidoran-f.jpg",
  "https://img.pokemondb.net/artwork/large/nidorina.jpg",
  "https://img.pokemondb.net/artwork/large/nidoqueen.jpg",
  "https://img.pokemondb.net/artwork/large/nidoran-m.jpg",
  "https://img.pokemondb.net/artwork/large/nidorino.jpg",
  "https://img.pokemondb.net/artwork/large/nidoking.jpg",
  "https://img.pokemondb.net/artwork/large/clefairy.jpg",
  "https://img.pokemondb.net/artwork/large/clefable.jpg",
  "https://img.pokemondb.net/artwork/large/vulpix.jpg",
  "https://img.pokemondb.net/artwork/large/ninetales.jpg",
  "https://img.pokemondb.net/artwork/large/jigglypuff.jpg",
  "https://img.pokemondb.net/artwork/large/wigglytuff.jpg",
  "https://img.pokemondb.net/artwork/large/zubat.jpg",
  "https://img.pokemondb.net/artwork/large/golbat.jpg",
  "https://img.pokemondb.net/artwork/large/oddish.jpg",
  "https://img.pokemondb.net/artwork/large/gloom.jpg",
  "https://img.pokemondb.net/artwork/large/vileplume.jpg",
  "https://img.pokemondb.net/artwork/large/paras.jpg",
  "https://img.pokemondb.net/artwork/large/parasect.jpg",
  "https://img.pokemondb.net/artwork/large/venonat.jpg",
  "https://img.pokemondb.net/artwork/large/venomoth.jpg",
  "https://img.pokemondb.net/artwork/large/diglett.jpg",
  "https://img.pokemondb.net/artwork/large/dugtrio.jpg",
  "https://img.pokemondb.net/artwork/large/meowth.jpg",
  "https://img.pokemondb.net/artwork/large/persian.jpg",
  "https://img.pokemondb.net/artwork/large/psyduck.jpg",
  "https://img.pokemondb.net/artwork/large/golduck.jpg",
  "https://img.pokemondb.net/artwork/large/mankey.jpg",
  "https://img.pokemondb.net/artwork/large/primeape.jpg",
  "https://img.pokemondb.net/artwork/large/growlithe.jpg",
  "https://img.pokemondb.net/artwork/large/arcanine.jpg",
  "https://img.pokemondb.net/artwork/large/poliwag.jpg",
  "https://img.pokemondb.net/artwork/large/poliwhirl.jpg",
  "https://img.pokemondb.net/artwork/large/poliwrath.jpg",
  "https://img.pokemondb.net/artwork/large/abra.jpg",
  "https://img.pokemondb.net/artwork/large/kadabra.jpg",
  "https://img.pokemondb.net/artwork/large/alakazam.jpg",
  "https://img.pokemondb.net/artwork/large/machop.jpg",
  "https://img.pokemondb.net/artwork/large/machoke.jpg",
  "https://img.pokemondb.net/artwork/large/machamp.jpg",
  "https://img.pokemondb.net/artwork/large/bellsprout.jpg",
  "https://img.pokemondb.net/artwork/large/weepinbell.jpg",
  "https://img.pokemondb.net/artwork/large/victreebel.jpg",
  "https://img.pokemondb.net/artwork/large/tentacool.jpg",
  "https://img.pokemondb.net/artwork/large/tentacruel.jpg",
  "https://img.pokemondb.net/artwork/large/geodude.jpg",
  "https://img.pokemondb.net/artwork/large/graveler.jpg",
  "https://img.pokemondb.net/artwork/large/golem.jpg",
  "https://img.pokemondb.net/artwork/large/ponyta.jpg",
  "https://img.pokemondb.net/artwork/large/rapidash.jpg",
  "https://img.pokemondb.net/artwork/large/slowpoke.jpg",
  "https://img.pokemondb.net/artwork/large/slowbro.jpg",
  "https://img.pokemondb.net/artwork/large/magnemite.jpg",
  "https://img.pokemondb.net/artwork/large/magneton.jpg",
  "https://img.pokemondb.net/artwork/large/farfetchd.jpg",
  "https://img.pokemondb.net/artwork/large/doduo.jpg",
  "https://img.pokemondb.net/artwork/large/dodrio.jpg",
  "https://img.pokemondb.net/artwork/large/seel.jpg",
  "https://img.pokemondb.net/artwork/large/dewgong.jpg",
  "https://img.pokemondb.net/artwork/large/grimer.jpg",
  "https://img.pokemondb.net/artwork/large/muk.jpg",
  "https://img.pokemondb.net/artwork/large/shellder.jpg",
  "https://img.pokemondb.net/artwork/large/cloyster.jpg",
  "https://img.pokemondb.net/artwork/large/gastly.jpg",
  "https://img.pokemondb.net/artwork/large/haunter.jpg",
  "https://img.pokemondb.net/artwork/large/gengar.jpg",
  "https://img.pokemondb.net/artwork/large/onix.jpg",
  "https://img.pokemondb.net/artwork/large/drowzee.jpg",
  "https://img.pokemondb.net/artwork/large/hypno.jpg",
  "https://img.pokemondb.net/artwork/large/krabby.jpg",
  "https://img.pokemondb.net/artwork/large/kingler.jpg",
  "https://img.pokemondb.net/artwork/large/voltorb.jpg",
  "https://img.pokemondb.net/artwork/large/electrode.jpg",
  "https://img.pokemondb.net/artwork/large/exeggcute.jpg",
  "https://img.pokemondb.net/artwork/large/exeggutor.jpg",
  "https://img.pokemondb.net/artwork/large/cubone.jpg",
  "https://img.pokemondb.net/artwork/large/marowak.jpg",
  "https://img.pokemondb.net/artwork/large/hitmonlee.jpg",
  "https://img.pokemondb.net/artwork/large/hitmonchan.jpg",
  "https://img.pokemondb.net/artwork/large/lickitung.jpg",
  "https://img.pokemondb.net/artwork/large/koffing.jpg",
  "https://img.pokemondb.net/artwork/large/weezing.jpg",
  "https://img.pokemondb.net/artwork/large/rhyhorn.jpg",
  "https://img.pokemondb.net/artwork/large/rhydon.jpg",
  "https://img.pokemondb.net/artwork/large/chansey.jpg",
  "https://img.pokemondb.net/artwork/large/tangela.jpg",
  "https://img.pokemondb.net/artwork/large/kangaskhan.jpg",
  "https://img.pokemondb.net/artwork/large/horsea.jpg",
  "https://img.pokemondb.net/artwork/large/seadra.jpg",
  "https://img.pokemondb.net/artwork/large/goldeen.jpg",
  "https://img.pokemondb.net/artwork/large/seaking.jpg",
  "https://img.pokemondb.net/artwork/large/staryu.jpg",
  "https://img.pokemondb.net/artwork/large/starmie.jpg",
  "https://img.pokemondb.net/artwork/large/mr-mime.jpg",
  "https://img.pokemondb.net/artwork/large/scyther.jpg",
  "https://img.pokemondb.net/artwork/large/jynx.jpg",
  "https://img.pokemondb.net/artwork/large/electabuzz.jpg",
  "https://img.pokemondb.net/artwork/large/magmar.jpg",
  "https://img.pokemondb.net/artwork/large/pinsir.jpg",
  "https://img.pokemondb.net/artwork/large/tauros.jpg",
  "https://img.pokemondb.net/artwork/large/magikarp.jpg",
  "https://img.pokemondb.net/artwork/large/gyarados.jpg",
  "https://img.pokemondb.net/artwork/large/lapras.jpg",
  "https://img.pokemondb.net/artwork/large/ditto.jpg",
  "https://img.pokemondb.net/artwork/large/eevee.jpg",
  "https://img.pokemondb.net/artwork/large/vaporeon.jpg",
  "https://img.pokemondb.net/artwork/large/jolteon.jpg",
  "https://img.pokemondb.net/artwork/large/flareon.jpg",
  "https://img.pokemondb.net/artwork/large/porygon.jpg",
  "https://img.pokemondb.net/artwork/large/omanyte.jpg",
  "https://img.pokemondb.net/artwork/large/omastar.jpg",
  "https://img.pokemondb.net/artwork/large/kabuto.jpg",
  "https://img.pokemondb.net/artwork/large/kabutops.jpg",
  "https://img.pokemondb.net/artwork/large/aerodactyl.jpg",
  "https://img.pokemondb.net/artwork/large/snorlax.jpg",
  "https://img.pokemondb.net/artwork/large/articuno.jpg",
  "https://img.pokemondb.net/artwork/large/zapdos.jpg",
  "https://img.pokemondb.net/artwork/large/moltres.jpg",
  "https://img.pokemondb.net/artwork/large/dratini.jpg",
  "https://img.pokemondb.net/artwork/large/dragonair.jpg",
  "https://img.pokemondb.net/artwork/large/dragonite.jpg",
  "https://img.pokemondb.net/artwork/large/mewtwo.jpg",
  "https://img.pokemondb.net/artwork/large/mew.jpg"
];

// Initialize Game
function init() {
  
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  // Highscore based on score value for Session Storage
  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }

  // Prevent display of High Score: -1
  if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  const randIndex_Image = Math.floor(Math.random() * words_image.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
  wordImage.src = words_image[randIndex];
}


// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
