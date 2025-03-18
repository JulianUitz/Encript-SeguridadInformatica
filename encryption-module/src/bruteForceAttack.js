const { decryptMessage } = require('./decryption');

function attemptBruteForce(encryptedMessage, dictionary) {
    for (const key of dictionary) {
        try {
            const decryptedMessage = decryptMessage(encryptedMessage, key);
            console.log(`Key found: ${key}`);
            console.log(`Decrypted message: ${decryptedMessage}`);
            return;
        } catch (error) {
            // Ignore errors and continue
        }
    }
    console.log('Failed to decrypt message with provided dictionary.');
}

module.exports = { attemptBruteForce };