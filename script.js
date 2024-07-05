let wordlist = [
    'the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his', 'they', 'be', 'at', 'one', 'have', 'this', 'from', 'or', 'had', 'by', 'not', 'word', 'but', 'what', 'some', 'we', 'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your', 'how', 'said', 'an', 'each', 'she', 'which', 'do', 'their', 'time', 'if', 'will', 'way', 'about', 'many', 'then', 'them', 'write', 'would', 'like', 'so', 'these', 'her', 'long', 'make', 'thing', 'see', 'him', 'two', 'has', 'look', 'more', 'day', 'could', 'go', 'come', 'did', 'number', 'sound', 'no', 'most', 'people', 'my', 'over', 'know', 'water', 'than', 'call', 'first', 'who', 'may', 'down', 'side', 'been', 'now', 'find', 'any', 'new', 'work', 'part', 'take', 'get', 'place', 'made', 'live', 'where', 'after', 'back', 'little', 'only', 'round', 'man', 'year', 'came', 'show', 'every', 'good', 'me', 'give', 'our', 'under', 'name', 'very', 'through', 'just', 'form', 'sentence', 'great', 'think', 'say', 'help', 'low', 'line', 'differ', 'turn', 'cause', 'much', 'mean', 'before', 'move', 'right', 'boy', 'old', 'too', 'same', 'tell', 'does', 'set', 'three', 'want', 'air', 'well', 'also', 'play', 'small', 'end', 'put', 'home', 'read', 'hand', 'port', 'large', 'spell', 'add', 'even', 'land', 'here', 'must', 'big', 'high', 'such', 'follow', 'act', 'why', 'ask', 'men', 'change', 'went', 'light', 'kind', 'off', 'need', 'house', 'picture', 'try', 'us', 'again', 'animal', 'point', 'mother', 'world', 'near', 'build', 'self', 'earth', 'father', 'head', 'stand', 'own', 'page', 'should', 'country', 'found', 'answer', 'school', 'grow', 'study', 'still', 'learn', 'plant', 'cover', 'food', 'sun', 'four', 'between', 'state', 'keep', 'eye', 'never', 'last', 'let', 'thought', 'city', 'tree', 'cross', 'farm', 'hard', 'start', 'might', 'story', 'saw', 'far', 'sea', 'draw', 'left', 'late', 'run', "don't", 'while', 'press', 'close', 'night', 'real', 'life', 'few', 'north', 'open', 'seem', 'together', 'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper', 'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until', 'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science', 'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base', 'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'enough', 'plain', 'girl', 'usual', 'young', 'ready', 'above', 'ever', 'red', 'list', 'though', 'feel', 'talk', 'bird', 'soon', 'body', 'dog', 'family', 'direct', 'pose', 'leave', 'song', 'measure', 'door', 'product', 'black', 'short', 'numeral', 'class', 'wind', 'question', 'happen', 'complete', 'ship', 'area', 'half', 'rock', 'order', 'fire', 'south', 'problem', 'piece', 'told', 'knew', 'pass', 'since', 'top', 'whole', 'king', 'space', 'heard', 'best', 'hour', 'better', 'true', 'during', 'hundred', 'five', 'remember', 'step', 'early', 'hold', 'west', 'ground', 'interest', 'reach', 'fast', 'verb', 'sing', 'listen', 'six', 'table', 'travel', 'less', 'morning', 'ten', 'simple', 'several', 'vowel', 'toward', 'war', 'lay', 'against', 'pattern', 'slow', 'center', 'love', 'person', 'money', 'serve', 'appear', 'road', 'map', 'rain', 'rule', 'govern', 'pull', 'cold', 'notice', 'voice', 'unit', 'power', 'town', 'fine', 'certain', 'fly', 'fall', 'lead', 'cry', 'dark', 'machine', 'note', 'wait', 'plan', 'figure', 'star', 'box', 'noun', 'field', 'rest', 'correct', 'able', 'pound', 'done', 'beauty', 'drive', 'stood', 'contain', 'front', 'teach', 'week', 'final', 'gave', 'green', 'oh', 'quick', 'develop', 'ocean', 'warm', 'free', 'minute', 'strong', 'special', 'mind', 'behind', 'clear', 'tail', 'produce', 'fact', 'street', 'inch', 'multiply', 'nothing', 'course', 'stay', 'wheel', 'full', 'force', 'blue', 'object', 'decide', 'surface', 'deep', 'moon', 'island', 'foot', 'system', 'busy', 'test', 'record', 'boat', 'common', 'gold', 'possible', 'plane', 'stead', 'dry', 'wonder', 'laugh', 'thousand', 'ago', 'ran', 'check', 'game', 'shape', 'equate', 'hot', 'miss', 'brought', 'heat', 'snow', 'tire', 'bring', 'yes', 'distant', 'fill', 'east', 'paint', 'language', 'among', 'grand', 'ball', 'yet', 'wave', 'drop', 'heart', 'am', 'present', 'heavy', 'dance', 'engine', 'position', 'arm', 'wide', 'sail', 'material', 'size', 'vary', 'settle', 'speak', 'weight', 'general', 'ice', 'matter', 'circle', 'pair', 'include', 'divide', 'syllable', 'felt', 'perhaps', 'pick', 'sudden', 'count', 'square', 'reason', 'length', 'represent', 'art', 'subject', 'region', 'energy', 'hunt', 'probable', 'bed', 'brother', 'egg', 'ride', 'cell', 'believe', 'fraction', 'forest', 'sit', 'race', 'window', 'store', 'summer', 'train', 'sleep', 'prove', 'lone', 'leg', 'exercise', 'wall', 'catch', 'mount', 'wish', 'sky', 'board', 'joy', 'winter', 'sat', 'written', 'wild', 'instrument', 'kept', 'glass', 'grass', 'cow', 'job', 'edge', 'sign', 'visit', 'past', 'soft', 'fun', 'bright', 'gas', 'weather', 'month', 'million', 'bear', 'finish', 'happy', 'hope', 'flower', 'clothe', 'strange', 'gone', 'jump', 'baby', 'eight', 'village', 'meet', 'root', 'buy', 'raise', 'solve', 'metal', 'whether', 'push', 'seven', 'paragraph', 'third', 'shall', 'held', 'hair', 'describe', 'cook', 'floor', 'either', 'result', 'burn', 'hill', 'safe', 'cat', 'century', 'consider', 'type', 'law', 'bit', 'coast', 'copy', 'phrase', 'silent', 'tall', 'sand', 'soil', 'roll', 'temperature', 'finger', 'industry', 'value', 'fight', 'lie', 'beat', 'excite', 'natural', 'view', 'sense', 'ear', 'else', 'quite', 'broke', 'case', 'middle', 'kill', 'son', 'lake', 'moment', 'scale', 'loud', 'spring', 'observe', 'child', 'straight', 'consonant', 'nation', 'dictionary', 'milk', 'speed', 'method', 'organ', 'pay', 'age', 'section', 'dress', 'cloud', 'surprise', 'quiet', 'stone', 'tiny', 'climb', 'cool', 'design', 'poor', 'lot', 'experiment', 'bottom', 'key', 'iron', 'single', 'stick', 'flat', 'twenty', 'skin', 'smile', 'crease', 'hole', 'trade', 'melody', 'trip', 'office', 'receive', 'row', 'mouth', 'exact', 'symbol', 'die', 'least', 'trouble', 'shout', 'except', 'wrote', 'seed', 'tone', 'join', 'suggest', 'clean', 'break', 'lady', 'yard', 'rise', 'bad', 'blow', 'oil', 'blood', 'touch', 'grew', 'cent', 'mix', 'team', 'wire', 'cost', 'lost', 'brown', 'wear', 'garden', 'equal', 'sent', 'choose', 'fell', 'fit', 'flow', 'fair', 'bank', 'collect', 'save', 'control', 'decimal', 'gentle', 'woman', 'captain', 'practice', 'separate', 'difficult', 'doctor', 'please', 'protect', 'noon', 'whose', 'locate', 'ring', 'character', 'insect', 'caught', 'period', 'indicate', 'radio', 'spoke', 'atom', 'human', 'history', 'effect', 'electric', 'expect', 'crop', 'modern', 'element', 'hit', 'student', 'corner', 'party', 'supply', 'bone', 'rail', 'imagine', 'provide', 'agree', 'thus', 'capital', "won't", 'chair', 'danger', 'fruit', 'rich', 'thick', 'soldier', 'process', 'operate', 'guess', 'necessary', 'sharp', 'wing', 'create', 'neighbor', 'wash', 'bat', 'rather', 'crowd', 'corn', 'compare', 'poem', 'string', 'bell', 'depend', 'meat', 'rub', 'tube', 'famous', 'dollar', 'stream', 'fear', 'sight', 'thin', 'triangle', 'planet', 'hurry', 'chief', 'colony', 'clock', 'mine', 'tie', 'enter', 'major', 'fresh', 'search', 'send', 'yellow', 'gun', 'allow', 'print', 'dead', 'spot', 'desert', 'suit', 'current', 'lift', 'rose', 'continue', 'block', 'chart', 'hat', 'sell', 'success', 'company', 'subtract', 'event', 'particular', 'deal', 'swim', 'term', 'opposite', 'wife', 'shoe', 'shoulder', 'spread', 'arrange', 'camp', 'invent', 'cotton', 'born', 'determine', 'quart', 'nine', 'truck', 'noise', 'level', 'chance', 'gather', 'shop', 'stretch', 'throw', 'shine', 'property', 'column', 'molecule', 'select', 'wrong', 'gray', 'repeat', 'require', 'broad', 'prepare', 'salt', 'nose', 'plural', 'anger', 'claim', 'continent', 'oxygen', 'sugar', 'death', 'pretty', 'skill', 'women', 'season', 'solution', 'magnet', 'silver', 'thank', 'branch', 'match', 'suffix', 'especially', 'fig', 'afraid', 'huge', 'sister', 'steel', 'discuss', 'forward', 'similar', 'guide', 'experience', 'score', 'apple', 'bought', 'led', 'pitch', 'coat', 'mass', 'card', 'band', 'rope', 'slip', 'win', 'dream', 'evening', 'condition', 'feed', 'tool', 'total', 'basic', 'smell', 'valley', 'nor', 'double', 'seat', 'arrive', 'master', 'track', 'parent', 'shore', 'division', 'sheet', 'substance', 'favor', 'connect', 'post', 'spend', 'chord', 'fat', 'glad', 'original', 'share', 'station', 'dad', 'bread', 'charge', 'proper', 'bar', 'offer', 'segment', 'slave', 'duck', 'instant', 'market', 'degree', 'populate', 'chick', 'dear', 'enemy', 'reply', 'drink', 'occur', 'support', 'speech', 'nature', 'range', 'steam', 'motion', 'path', 'liquid', 'log', 'meant', 'quotient', 'teeth', 'shell', 'neck'
];
let keys = [
    8, 16, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77, 32
];
let valuesLower = [
    "Backspace", "Shift", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "
];
let valuesUpper = [
    "Backspace", "Shift", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", " "
];

let lightMode = ["#eff1f5", "#e6e9ef", "#dce0e8", "#acb0be", "#a6d189", "#e78284", "#4c4f69", "#8f91a0", "rgba(185, 193, 209, 0.5)"];
let darkMode = ["#1e1e2e", "#181825", "#11111b", "#313244", "#a6d189", "#e78284", "#cdd6f4", "#98a0bc", "rgba(50, 50, 70, 0.5)"];

let hRoot = document.querySelector(":root");
let hThemeToggle = document.querySelector(".theme-toggle");
let hInput = document.getElementById("type");
let hTyped = document.querySelector(".typed");
let hTypee = document.querySelector(".typee");
let hCaret = document.querySelector(".caret");
let hOutOfFocus = document.querySelector(".out-of-focus");
let hKeys = document.querySelectorAll(".keyboard-key");
let hAccuracy = document.querySelector(".accuracy-text");
let hWpm = document.querySelector(".wpm-text");
let hWords = document.querySelector(".words-text");
let hBar = document.querySelector(".accuracy-bar");
let hBarInner = document.querySelector(".accuracy-bar-inner");

let typed = []; for (let i = 0; i < 36; i++) typed.push(createSpan(" ", false));
let typee = "        ";
let shift = false;
let theme = 1;

let timer = false;
let time = 0;
let accuracy = 0;
let wpm = 0;
let words = 0;
let letters = 0;
let numCorrect = 0;

function createSpan(letter, correct) {
    let span = document.createElement("span");
    if (!correct) span.classList.add("incorrect");
    span.textContent = letter;
    return span;
}

function getRandomWord() {
    randomIndex = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomIndex];
}

function displayTheme() {
    let mode = [];
    if (theme === 0) mode = [...darkMode];
    if (theme === 1) mode = [...lightMode];

    hRoot.style.setProperty("--base", mode[0]);
    hRoot.style.setProperty("--mantle", mode[1]);
    hRoot.style.setProperty("--crust", mode[2]);
    hRoot.style.setProperty("--surface", mode[3]);
    hRoot.style.setProperty("--green", mode[4]);
    hRoot.style.setProperty("--red", mode[5]);
    hRoot.style.setProperty("--text", mode[6]);
    hRoot.style.setProperty("--subtext", mode[7]);
    hRoot.style.setProperty("--oof", mode[8]);

    if (theme === 0) {
        hThemeToggle.children[0].classList.remove("fa-sun");
        hThemeToggle.children[0].classList.add("fa-moon");
    } else {
        hThemeToggle.children[0].classList.remove("fa-moon");
        hThemeToggle.children[0].classList.add("fa-sun");
    }
}

function displayInput() {
    if (hInput === document.activeElement) {
        hOutOfFocus.style.visibility = "hidden";
        if (!timer) {
            timer = setInterval(function() {
                time += 1;
                updateStats();
            }, 1000);
        }
    } else {
        hOutOfFocus.style.visibility = "visible";
        clearInterval(timer);
        timer = false;
    }
}

function displayText() {
    hTyped.innerHTML = ``;
    for (let i = 18; i < 36; i++) {
        hTyped.appendChild(typed[i]);
    }
    hTypee.textContent = typee.substring(9, 27);
}

function displayStats() {
    hAccuracy.textContent = (accuracy).toFixed(0);
    hWpm.textContent = wpm.toFixed(0);
    hWords.textContent = words;
    hBarInner.style.width = accuracy.toFixed(0) + "%";

    if (Number.isNaN(accuracy)) hAccuracy.textContent = "--";
    if (Number.isNaN(wpm)) hWpm.textContent = "--";
}

function updateStats() {
    wpm = words / time * 60;
    accuracy = numCorrect / letters * 100;
    displayStats();
}

function initialise() {
    while (typee.length < 40) {
        typee += " " + getRandomWord();
    }
    displayText();
}

function lower() {
    for (let i = 0; i < hKeys.length; i++) {
        hKeys[i].textContent = valuesLower[i];
    }
}

function upper() {
    for (let i = 0; i < hKeys.length; i++) {
        hKeys[i].textContent = valuesUpper[i];
    }
}

function down(key) {
    let keyIndex = keys.indexOf(key);
    if (keyIndex === -1) return;
    hKeys[keyIndex].classList.add("keyboard-key-pressed");
    if (key === 16) {
        shift = true;
        upper();
    }
}

function up(key) {
    let keyIndex = keys.indexOf(key);
    if (keyIndex === -1) return;
    hKeys[keyIndex].classList.remove("keyboard-key-pressed");
    if (key === 16) {
        shift = false;
        lower();
    }
}

function run(key) {
    if (key === 27) {
        hInput.blur();
        displayInput();
        return;
    }

    let input = "";
    let keyIndex = keys.indexOf(key);
    if (keyIndex === -1) return;

    if (key === 16) return; // SHIFT

    else if (key === 8) { // BACKSPACE
        if (typed.slice(-1)[0].textContent === " ") return;
        typed = [createSpan(" ", false), ...typed.slice(0, -1)];
        typee = " " + typee;
    }

    else { // NORMAL KEY
        if (shift) input = valuesUpper[keyIndex];
        if (!shift) input = valuesLower[keyIndex];

        if (typee[9] === input) { // correct
            typed = typed.slice(1);
            typed.push(createSpan(input, true));
            typee = typee.substring(1);
            letters += 1; numCorrect += 1;
        } 
        else { // incorrect
            typed = typed.slice(1);
            typed.push(createSpan(typee[9], false));
            typee = typee.substring(1);
            letters += 1;
        }

        if (input === " ") {
            while (typed[35].textContent != " ") {
                typed = typed.slice(1);
                typed.push(createSpan(typee[9], false));
                typee = typee.substring(1);
            }
        }

        if (typed[35].textContent === " ") words += 1;

        while (typee.length < 40) {
            typee += " " + getRandomWord();
        }
    }

    displayText();
    updateStats();
}

document.addEventListener("click", function() {
    displayInput();
});

document.onkeydown = function(e) {
    if (e.keyCode === 13) {
        hInput.focus();
        displayInput();
    }
}

hOutOfFocus.onclick = function() {
    hInput.style.visibility = "visible";
    hInput.focus();
    displayInput();
};

hInput.onkeydown = function(e) {
    run(e.keyCode);
    down(e.keyCode);
    return false;
};

hInput.onkeyup = function(e) {
    up(e.keyCode);
}

hThemeToggle.onclick = function() {
    theme = (theme === 0) ? 1 : 0;
    displayTheme();
}

initialise();
displayInput();
updateStats();