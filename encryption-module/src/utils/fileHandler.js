const fs = require('fs');

function writeToFile(filename, data) {
    fs.writeFileSync(filename, data, 'utf8');
}

function readFromFile(filename) {
    return fs.readFileSync(filename, 'utf8');
}

module.exports = { writeToFile, readFromFile };