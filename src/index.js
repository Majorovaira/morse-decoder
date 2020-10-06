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
};


    function decode(expr) {
        let result = '';
           const words = expr.split('**********');
            for(const word of words) {
                const letters = word.match(/\d{10}/g)
                .reduce((acc, letter) => {
                    acc += MORSE_TABLE[letter.replace(/00/g, '')
                    .replace(/10/g, '.')
                    .replace(/11/g, '-')];
        return acc;
                },'');
        result += letters + ' ';
            }
        return result.trim();
        }
    

module.exports = {
    decode
}