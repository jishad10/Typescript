//let numbers: number[] = [1, 2, 3, 4, 5];  //num er type ta amra bole dicchi
// let users = ["akram", "rabu", "pinky"];

//array declare type =>>>
//let users: string[];
//let users: Array<string>;   //mani array ta ki hobe string type er hobe
//let users: (number | string)[];  //multiple type o bole di te pari or symbool di e



// users = ["akram", "rabu", "pinky"];

let users: Array<string>;
users = ['akram', 'rabu', 'pinky'];

// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   console.log(element);
// }

// users.forEach((element) => {
//   console.log(element);
// });

users.sort();
console.log(users);

users.push('limon');
console.log(users);

users.pop();
console.log(users);

users.unshift('milton');
console.log(users);

users.shift();
console.log(users);

// multi-types array
// let users: (number | string)[];
// users = [10, "anis", 25, 35, "islam"];





//tuple :

//let employee: [string, number] = ['John Doe', 30]; 

//let users: [number, String];   //must be 1st a num di te hobe and porer ta string di te hobe
//users = [101, 'anis'];

//console.log(users);
//console.log(users[0]);
//console.log(users[1]);

//users.push(102, 'sakib');
//console.log(users);