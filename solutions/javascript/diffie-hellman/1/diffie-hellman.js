//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {

    if (p <= 0 || p >= 9999) throw new Error('p out of range');
    if (g <= 0 || g >= 9999) throw new Error('g out of range');

    for (let i = 2; i < p; i++)
      {
        if (p % i == 0) throw new Error('argument p must be a prime number')
      }
    
    for (let i = 2; i < g; i++)
      {
        if (g % i == 0) throw new Error('argument g must be a prime number')
      }
    
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {

    if (privateKey == 0) throw new Error('private key cannot be zero')
    if (privateKey <= 0) throw new Error('private key cannot be a negative number')
    if (privateKey == 1) throw new Error('private key cannot be 1')
    if (privateKey >= this.p) throw new Error('private key cannot be greater than argument p')
    
      return this.g**privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey**myPrivateKey % this.p
  }

  static getPrivateKey(p) {

    const privateKey = Math.floor(Math.random() * (p - 1)) + 1;
    return privateKey;
  }
}
