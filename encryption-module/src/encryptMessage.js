const { encryptMessage } = require('./encryption');
const { writeToFile } = require('./utils/fileHandler');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the message to encrypt: ', (message) => {
    rl.question('Enter your secret key (leave empty to use generated key): ', (userKey) => {
        const secretKey = userKey || fs.readFileSync('clave_secreta.txt', 'utf8');
        const encryptedMessage = encryptMessage(message, secretKey);
        writeToFile('mensaje_encriptado.txt', encryptedMessage);
        console.log(`Encrypted message: ${encryptedMessage}`);
        rl.close();
    });
});