window.addEventListener('load', init);
window.onload=function(){
  document.getElementById("pkm-cries").play();
  audio.volume = 0;
};

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
const sounds = document.querySelector('#pkm-cries');
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
  "grimer",
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

const cries = [
  "https://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ivysaur.mp3",
  "https://play.pokemonshowdown.com/audio/cries/venusaur.mp3",
  "https://play.pokemonshowdown.com/audio/cries/charmander.mp3",
  "https://play.pokemonshowdown.com/audio/cries/charmeleon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/charizard.mp3",
  "https://play.pokemonshowdown.com/audio/cries/squirtle.mp3",
  "https://play.pokemonshowdown.com/audio/cries/wartortle.mp3",
  "https://play.pokemonshowdown.com/audio/cries/blastoise.mp3",
  "https://play.pokemonshowdown.com/audio/cries/caterpie.mp3",
  "https://play.pokemonshowdown.com/audio/cries/metapod.mp3",
  "https://play.pokemonshowdown.com/audio/cries/butterfree.mp3",
  "https://play.pokemonshowdown.com/audio/cries/weedle.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kakuna.mp3",
  "https://play.pokemonshowdown.com/audio/cries/beedrill.mp3",
  "https://play.pokemonshowdown.com/audio/cries/pidgey.mp3",
  "https://play.pokemonshowdown.com/audio/cries/pidgeotto.mp3",
  "https://play.pokemonshowdown.com/audio/cries/pidgeot.mp3",
  "https://play.pokemonshowdown.com/audio/cries/rattata.mp3",
  "https://play.pokemonshowdown.com/audio/cries/raticate.mp3",
  "https://play.pokemonshowdown.com/audio/cries/spearow.mp3",
  "https://play.pokemonshowdown.com/audio/cries/fearow.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ekans.mp3",
  "https://play.pokemonshowdown.com/audio/cries/arbok.mp3",
  "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3",
  "https://play.pokemonshowdown.com/audio/cries/raichu.mp3",
  "https://play.pokemonshowdown.com/audio/cries/sandshrew.mp3",
  "https://play.pokemonshowdown.com/audio/cries/sandslash.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidoranf.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidorina.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidoqueen.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidoran.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidorino.mp3",
  "https://play.pokemonshowdown.com/audio/cries/nidoking.mp3",
  "https://play.pokemonshowdown.com/audio/cries/clefairy.mp3",
  "https://play.pokemonshowdown.com/audio/cries/clefable.mp3",
  "https://play.pokemonshowdown.com/audio/cries/vulpix.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ninetales.mp3",
  "https://play.pokemonshowdown.com/audio/cries/jigglytuff.mp3",
  "https://play.pokemonshowdown.com/audio/cries/wigglytuff.mp3",
  "https://play.pokemonshowdown.com/audio/cries/zubat.mp3",
  "https://play.pokemonshowdown.com/audio/cries/golbat.mp3",
  "https://play.pokemonshowdown.com/audio/cries/oddish.mp3",
  "https://play.pokemonshowdown.com/audio/cries/gloom.mp3",
  "https://play.pokemonshowdown.com/audio/cries/vileplume.mp3",
  "https://play.pokemonshowdown.com/audio/cries/paras.mp3",
  "https://play.pokemonshowdown.com/audio/cries/parasect.mp3",
  "https://play.pokemonshowdown.com/audio/cries/venonat.mp3",
  "https://play.pokemonshowdown.com/audio/cries/venomoth.mp3",
  "https://play.pokemonshowdown.com/audio/cries/diglett.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dugtrio.mp3",
  "https://play.pokemonshowdown.com/audio/cries/meowth.mp3",
  "https://play.pokemonshowdown.com/audio/cries/persian.mp3",
  "https://play.pokemonshowdown.com/audio/cries/psyduck.mp3",
  "https://play.pokemonshowdown.com/audio/cries/golduck.mp3",
  "https://play.pokemonshowdown.com/audio/cries/mankey.mp3",
  "https://play.pokemonshowdown.com/audio/cries/primeape.mp3",
  "https://play.pokemonshowdown.com/audio/cries/growlithe.mp3",
  "https://play.pokemonshowdown.com/audio/cries/arcanine.mp3",
  "https://play.pokemonshowdown.com/audio/cries/poliwag.mp3",
  "https://play.pokemonshowdown.com/audio/cries/poliwhirl.mp3",
  "https://play.pokemonshowdown.com/audio/cries/poliwrath.mp3",
  "https://play.pokemonshowdown.com/audio/cries/abra.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kadabra.mp3",
  "https://play.pokemonshowdown.com/audio/cries/alakazam.mp3",
  "https://play.pokemonshowdown.com/audio/cries/machop.mp3",
  "https://play.pokemonshowdown.com/audio/cries/machoke.mp3",
  "https://play.pokemonshowdown.com/audio/cries/machamp.mp3",
  "https://play.pokemonshowdown.com/audio/cries/bellsprout.mp3",
  "https://play.pokemonshowdown.com/audio/cries/victreebel.mp3",
  "https://play.pokemonshowdown.com/audio/cries/tentacool.mp3",
  "https://play.pokemonshowdown.com/audio/cries/tentacruel.mp3",
  "https://play.pokemonshowdown.com/audio/cries/geodude.mp3",
  "https://play.pokemonshowdown.com/audio/cries/graveler.mp3",
  "https://play.pokemonshowdown.com/audio/cries/golem.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ponyta.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ponyta.mp3",
  "https://play.pokemonshowdown.com/audio/cries/rapidash.mp3",
  "https://play.pokemonshowdown.com/audio/cries/slowpoke.mp3",
  "https://play.pokemonshowdown.com/audio/cries/slowbro.mp3",
  "https://play.pokemonshowdown.com/audio/cries/magnemite.mp3",
  "https://play.pokemonshowdown.com/audio/cries/magneton.mp3",
  "https://play.pokemonshowdown.com/audio/cries/farfetchd.mp3",
  "https://play.pokemonshowdown.com/audio/cries/doduo.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dodrio.mp3",
  "https://play.pokemonshowdown.com/audio/cries/seel.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dewgong.mp3",
  "https://play.pokemonshowdown.com/audio/cries/grimer.mp3",
  "https://play.pokemonshowdown.com/audio/cries/muk.mp3",
  "https://play.pokemonshowdown.com/audio/cries/sheller.mp3",
  "https://play.pokemonshowdown.com/audio/cries/cloyster.mp3",
  "https://play.pokemonshowdown.com/audio/cries/gastly.mp3",     
  "https://play.pokemonshowdown.com/audio/cries/haunter.mp3",
  "https://play.pokemonshowdown.com/audio/cries/gengar.mp3",
  "https://play.pokemonshowdown.com/audio/cries/onix.mp3",
  "https://play.pokemonshowdown.com/audio/cries/drowzee.mp3",
  "https://play.pokemonshowdown.com/audio/cries/hypno.mp3",
  "https://play.pokemonshowdown.com/audio/cries/krabby.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kingler.mp3",
  "https://play.pokemonshowdown.com/audio/cries/voltorb.mp3",
  "https://play.pokemonshowdown.com/audio/cries/electrod.mp3",
  "https://play.pokemonshowdown.com/audio/cries/exeggcute.mp3",
  "https://play.pokemonshowdown.com/audio/cries/exeggutor.mp3",
  "https://play.pokemonshowdown.com/audio/cries/cubone.mp3",
  "https://play.pokemonshowdown.com/audio/cries/marowak.mp3",
  "https://play.pokemonshowdown.com/audio/cries/hitmonlee.mp3",
  "https://play.pokemonshowdown.com/audio/cries/hitmonchan.mp3",
  "https://play.pokemonshowdown.com/audio/cries/lickitung.mp3",
  "https://play.pokemonshowdown.com/audio/cries/koffing.mp3",
  "https://play.pokemonshowdown.com/audio/cries/weezing.mp3",
  "https://play.pokemonshowdown.com/audio/cries/rhyhorn.mp3",
  "https://play.pokemonshowdown.com/audio/cries/rhydon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/chansey.mp3",
  "https://play.pokemonshowdown.com/audio/cries/tangela.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kangaskhan.mp3",
  "https://play.pokemonshowdown.com/audio/cries/horsea.mp3",
  "https://play.pokemonshowdown.com/audio/cries/seadra.mp3",
  "https://play.pokemonshowdown.com/audio/cries/goldeen.mp3",
  "https://play.pokemonshowdown.com/audio/cries/seaking.mp3",
  "https://play.pokemonshowdown.com/audio/cries/staryu.mp3",
  "https://play.pokemonshowdown.com/audio/cries/starmie.mp3",
  "https://play.pokemonshowdown.com/audio/cries/mrmime.mp3",
  "https://play.pokemonshowdown.com/audio/cries/scyther.mp3",
  "https://play.pokemonshowdown.com/audio/cries/jynx.mp3",
  "https://play.pokemonshowdown.com/audio/cries/electabuzz.mp3",
  "https://play.pokemonshowdown.com/audio/cries/magmar.mp3",
  "https://play.pokemonshowdown.com/audio/cries/pinsir.mp3",
  "https://play.pokemonshowdown.com/audio/cries/tauros.mp3",
  "https://play.pokemonshowdown.com/audio/cries/magikarp.mp3",
  "https://play.pokemonshowdown.com/audio/cries/gyarados.mp3",
  "https://play.pokemonshowdown.com/audio/cries/lapras.mp3",
  "https://play.pokemonshowdown.com/audio/cries/ditto.mp3",
  "https://play.pokemonshowdown.com/audio/cries/eevee.ogg",
  "https://play.pokemonshowdown.com/audio/cries/vaporeon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/jolteon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/flareon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/porygon.mp3",
  "https://play.pokemonshowdown.com/audio/cries/omanyte.mp3",
  "https://play.pokemonshowdown.com/audio/cries/omastar.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kabuto.mp3",
  "https://play.pokemonshowdown.com/audio/cries/kabutops.mp3",
  "https://play.pokemonshowdown.com/audio/cries/aerodactyl.mp3",
  "https://play.pokemonshowdown.com/audio/cries/snorlax.mp3",
  "https://play.pokemonshowdown.com/audio/cries/articuno.mp3",
  "https://play.pokemonshowdown.com/audio/cries/zapdos.mp3",
  "https://play.pokemonshowdown.com/audio/cries/moltres.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dratini.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dragonair.mp3",
  "https://play.pokemonshowdown.com/audio/cries/dragonite.mp3",
  "https://play.pokemonshowdown.com/audio/cries/mewtwo.mp3",
  "https://play.pokemonshowdown.com/audio/cries/mew.mp3"
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
  sounds.src = cries[randIndex];
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
