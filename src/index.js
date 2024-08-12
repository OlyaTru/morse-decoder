const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****': ' ',
};

const DIGIT_TABLE = {
    '00': '',
    '10': '.',
    '11': '-',
    '**': '*',
}

function decode(expr) {
    let resultExpression = [];
    let resultDotsAndDashes10 = [];
    let resultDotsAndDashesAll = [];
    for (let start = 0; start < expr.length; start += 10) {
        let expr10 = expr.substr(start, 10);
        resultDotsAndDashes10 = [];
        for (let start = 0; start < 10; start += 2) {
            resultDotsAndDashes10.push(DIGIT_TABLE[expr10.substr(start, 2)]);
        }
        resultDotsAndDashesAll.push(resultDotsAndDashes10.join(''));
    }
    for (let i = 0; i < resultDotsAndDashesAll.length; i++) {
        resultExpression.push(MORSE_TABLE[resultDotsAndDashesAll[i]]);
    }
    return resultExpression.join('');
}

module.exports = {
    decode
}