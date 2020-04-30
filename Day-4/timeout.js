/**
 * setTimeout()
 * in asynchronous function we can use the setTimeout
 *
 */

setTimeout(() => {
  console.log('Hello BD');
}, 3000);

/**
 * clearTimeOut()
 * This Method used to clear a timer set with setTimeout() method
 */

const anotherTimeOut = setTimeout(() => {
  console.log('set and clear time out!!!');
}, 10000);
clearTimeout(anotherTimeOut);
// the timer set will not execute anymore
