const { hashPassword, verifyPassword } = require('./hashPassword');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the password to hash: ', (password) => {
    hashPassword(password).then(hashedPassword => {
        console.log(`Hashed password: ${hashedPassword}`);

        rl.question('Re-enter the password to verify: ', (passwordToVerify) => {
            verifyPassword(passwordToVerify, hashedPassword).then(match => {
                console.log(`Password match: ${match}`);
                rl.close();
            });
        });
    });
});