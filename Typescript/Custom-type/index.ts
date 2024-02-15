type User = { userName: string, userId: number };  //custom type create korchi

let users: User[];
users = [];

let user1: User;  //custom type ta ke use kortechi
user1 = { userName: 'anis', userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: 'rabu', userId: 102 };
users.push(user2);

let user3: User;
user3 = { userName: 'lucky', userId: 103 };
users.push(user3);

console.log(users);




type RequestType = 'GET' | 'POST';   //custom type create korchi 2 ta value define ko re dicchi
let getRequest: RequestType;
getRequest = 'GET';  //hoito GET noile POST di te hobe onno kicu di le error asbe


//amra function er o type bole di te pari
function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler('GET');  //hoito GET noile POST patai te parbo onno kicu di le error asbe