const crypto = require('crypto');

function decryptMessage(encryptedMessage, secretKey) {
    const [iv, encrypted] = encryptedMessage.split(':');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { decryptMessage };