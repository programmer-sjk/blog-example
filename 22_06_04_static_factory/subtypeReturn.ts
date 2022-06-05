class User {
  name: string;
  level: string;

  constructor(name: string, level: string) {
    this.name = name;
    this.level = level;
  }

  static from(name: string, level: string) {
    if (level === 'admin') {
      return new Admin(name);
    }

    return new Customer(name);
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name, 'admin');
  }
}

class Customer extends User {
  constructor(name: string) {
    super(name, 'customer');
  }
}
