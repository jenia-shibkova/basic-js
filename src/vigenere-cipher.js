class VigenereCipheringMachine {
  constructor(value = true) {
    this.alphabet = new Array(26).fill(1).map(( _, index) => String.fromCharCode(65 + index));
    this.amount = 26;
    this.direction = value;
  }
  encrypt(str, key) {
    if (!str|| !key) throw new Error();
    return this.vigenerCipherFunc(str, key, 'encrypt');   
  }  

  decrypt(str, key) {
    if (!str || !key) throw new Error();
    return this.vigenerCipherFunc(str, key, 'decrypt');
  }

  getFullKey(str, key) {
    return (str.length <= key.length) ? key : this.getFullKey(str, key + key);
  }

  vigenerCipherFunc(str, key, mode) {
    let fullKey = this.getFullKey(str, key).toUpperCase().split('');
    const keyLength = str.match(/[A-Z]/gi).length;
    const message = str.toUpperCase().split('');
    fullKey.length = keyLength;
    
    let result = [];
    let length = message.length;    
    let keyI = 0; // key index shift

    for (let i = 0; i <= length; i += 1) {    
      if (!this.alphabet.includes(message[i])) { // excludes extra characters
        result.push(message[i]);
      } else { 
             
        const messIndex = this.alphabet.indexOf(message[i]);
        const keyIndex = this.alphabet.indexOf(fullKey[keyI]);
      
        if (mode === 'encrypt') {
          const cryptValue = this.alphabet[(messIndex + keyIndex) % this.amount];
          result.push(cryptValue);
        }

        if (mode === 'decrypt') {
          const cryptValue = this.alphabet[(messIndex + this.amount - keyIndex) % this.amount];
          result.push(cryptValue);
        }

        keyI += 1;
      }    
    }

    return (this.direction) ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
