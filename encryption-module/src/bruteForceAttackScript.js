const { attemptBruteForce } = require('./bruteForceAttack');
const { readFromFile } = require('./utils/fileHandler');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const encryptedMessage = readFromFile('mensaje_encriptado.txt');
const dictionary = ['clave1', 'clave2', 'clave3', 'clave_secreta']; // Añade más claves al diccionario

rl.question('Enter the dictionary file path (leave empty for default): ', (filePath) => {
    if (filePath) {
        const customDictionary = readFromFile(filePath).split('\n');
        attemptBruteForce(encryptedMessage, customDictionary);
    } else {
        attemptBruteForce(encryptedMessage, dictionary);
    }
    rl.close();
});