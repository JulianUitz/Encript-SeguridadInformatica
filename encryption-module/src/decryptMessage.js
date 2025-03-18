const { decryptMessage } = require('./decryption');
const { readFromFile } = require('./utils/fileHandler');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the secret key: ', (secretKey) => {
    const encryptedMessage = readFromFile('mensaje_encriptado.txt');
    try {
        const decryptedMessage = decryptMessage(encryptedMessage, secretKey);
        console.log(`Decrypted message: ${decryptedMessage}`);
    } catch (error) {
        console.error('Failed to decrypt message. Invalid key.');
    }
    rl.close();
});