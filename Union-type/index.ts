let userId: string | number;

userId = 101;

console.log(userId);

// userId = 101; // no error
// userId = "101"; // no error
// userId = true; // error

function userIdDataType(userId: string | number) {
  console.log(typeof userId);
}

userIdDataType('123'); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error
