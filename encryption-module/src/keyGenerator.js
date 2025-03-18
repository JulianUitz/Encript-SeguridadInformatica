const crypto = require('crypto');
const { writeToFile } = require('./utils/fileHandler');

function generateKey() {
    return crypto.randomBytes(32).toString('hex');
}

function saveKeyToFile(key) {
    writeToFile('clave_secreta.txt', key);
}

module.exports = { generateKey, saveKeyToFile };