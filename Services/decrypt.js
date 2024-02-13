const key1 = res.key1;
console.log(res);
const dbpassword = res.Password
const newkey1 = Buffer.from(key1, 'hex');
console.log(newkey1);
const hash1 = res.hash1;
const newhash1 = Buffer.from(hash1, 'hex');
const algorithm = 'aes-192-cbc';
const decipher =
    crypto.createDecipheriv(algorithm, newkey1, newhash1);
decipher.update(dbpassword, 'hex')
const decryptedtext = decipher.final('utf-8');
