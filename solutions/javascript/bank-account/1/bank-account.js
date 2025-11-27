//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._internalBalance = 0;
  }

   open() {
    if (this._isOpen) throw new ValueError;
    this._isOpen = true;
    this._internalBalance = 0;
  }

   close() {
    if (!this._isOpen) throw new ValueError;
    this._isOpen = false;
    this._internalBalance = 0;
  }

   deposit(amount) {
    if (!this._isOpen) throw new ValueError;
    if (amount <= 0) throw new ValueError;
    this._internalBalance += amount
  }

   withdraw(amount) {
    if (!this._isOpen) throw new ValueError;
    if (amount > this._internalBalance) throw new ValueError;
    if (amount <= 0) throw new ValueError;
    this._internalBalance -= amount
  }

  get balance() {
    if (!this._isOpen) throw new ValueError;
    return this._internalBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
