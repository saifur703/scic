/**
 * Syntax
 *
 * how it's works
 * first the code try will execute
 * if there was no error the catch block will be ignored.
 * if error occured. then try block will be skip and catch block will be shown.
 */

try {
  // code
} catch (err) {
  // error handling
}

/* Practice */
let json = { name: 'John', age: 30 };
json = '{bad json}';
try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (e) {
  //   console.log(e.name);
  //   console.log(e.message);

  // Our own error message
  console.log("Doesn't execute.");
} finally {
  console.log('Finally');
}
