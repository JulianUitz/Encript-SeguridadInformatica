const { generateKey, saveKeyToFile } = require('./keyGenerator');

const key = generateKey();
saveKeyToFile(key);
console.log(`Generated key: ${key}`);