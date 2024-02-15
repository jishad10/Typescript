class User {
  // properties, methods, constructor
  userName: string;  //let var ei golo diwar dorkar nai
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User('Jahidul Islam', 24);
user1.display();

let user2 = new User('Ikramul Islam', 23);
user2.display();

