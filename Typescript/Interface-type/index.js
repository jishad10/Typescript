//interface create korchi ei khane template create ko re reke dicchi and po re use korte parbo
var users = []; //user array ,,then kono kicu push korle oi golo o array te store hobe
var user1 = { id: 1, name: 'Mr. Potato', age: 32 }; //User di e type bole dicchi 
var user2 = { id: 2, name: 'Ms. Tomato', age: 21 };
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); }); //forEach var var ekta ekta value ni e print..Info te pass korte che then oi golo print kortechi
