/**
 * Attributes — is what’s written in HTML
 * Properties — is what’s in DOM objects.
 *
 *
 * Methods to work with attributes are:
 */

elem.hasAttribute(name); // - to check for existence.
elem.getAttribute(name); // - to get the value.
elem.setAttribute(name, value); // - to set the value.
elem.removeAttribute(name); // - to remove the attribute.
elem.attributes; // is a collection of all attributes.

/**
 * Creating New Node
 */
let li = document.createElement('li');
li.className = 'item';
li.innerHTML = 'it is a new item';
