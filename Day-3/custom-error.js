// custom error
// throw new Error('Hello');
/* 
1. We need some times our custom Error code to show error message. Our error message should support "message", "name" properties 
2. We should create class and extend with built in Error;
*/
class OurCustomErrorMessage extends Error {
  constructor(message) {
    super(message);
    this.name = 'OurCustomErrorMessage';
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new OurCustomErrorMessage('No field: age');
  }
  return user;
}

// try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof OurCustomErrorMessage) {
    alert('Invalid data: ' + err.message); // Invalid data: No field: name
  } else {
    throw err; // unknown error,
  }
}
