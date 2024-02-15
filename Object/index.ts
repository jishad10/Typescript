//let person: object = { name: 'Alice', age: 30 };
/*
let user: {
  name: string;
  age: number;
};

user = {
  name: 'jahidul islam',
  age: 22,
};
*/


let names: object;  //alada alada babe define na ko re object bole di le hobe
names = { name1: 'jahidul' };
console.log(names);

let users: object[];
users = [];

let user1: { userName: string; userId: number };
user1 = { userName: 'jishad', userId: 101 };
users.push(user1);

let user2: { userName: string; userId: number };
user2 = { userName: 'jani', userId: 102 };
users.push(user2);

console.log(users);

/*
for (const key in users) {
  console.log(users[key]);
}
*/
