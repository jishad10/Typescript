var users;
users = [];
var user1; //custom type ta ke use kortechi
user1 = { userName: 'anis', userId: 101 };
users.push(user1);
var user2;
user2 = { userName: 'rabu', userId: 102 };
users.push(user2);
var user3;
user3 = { userName: 'lucky', userId: 103 };
users.push(user3);
console.log(users);
var getRequest;
getRequest = 'GET'; //hoito GET noile POST di te hobe onno kicu di le error asbe
//amra function er o type bole di te pari
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler('GET'); //hoito GET noile POST patai te parbo onno kicu di le error asbe
