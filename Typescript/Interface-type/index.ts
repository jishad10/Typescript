//interface create korchi ei khane template create ko re reke dicchi and po re use korte parbo

interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];  //user array ,,then kono kicu push korle oi golo o array te store hobe

let user1: User = { id: 1, name: 'Mr. Potato', age: 32 }; //User di e type bole dicchi 
let user2: User = { id: 2, name: 'Ms. Tomato', age: 21 };

users.push(user1);
users.push(user2);

const printUserInfo = (user: User) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));  //forEach var var ekta ekta value ni e print..Info te pass korte che then oi golo print kortechi