/**
 * DOM means Document Object Model
 * The text inside a tag is an object
 * innerHTML – HTML contents of the node.
 * offsetWidth – the node width (in pixels)
 *
 */
document.body.style.background = 'green'; // make the background green

setTimeout(() => (document.body.style.background = ''), 3000); // return back after 3 second
