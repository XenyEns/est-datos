class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locate = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account('Mendez', 'EUR', '1111');
acc1.deposit(1000);
acc1.withdraw(300);
console.log(acc1);
