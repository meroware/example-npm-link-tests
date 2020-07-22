const libC = require('../libC');

function print() {
    let letter = libC.getLetter();
    switch(letter) {
        case 'C':
            break;
        case 'Z':
            break;
        default:
            letter = 'OH THIS IS B MESSAGE COMMING FROM SPACE'
    }
    console.log(letter);
}

module.exports = {
    print
}