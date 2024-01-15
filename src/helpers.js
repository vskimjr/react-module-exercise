/** returns a random item from an array of items */
function choice(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items[0];
}

/** take items (array) and item (single item)
 * removes item from the items array
 * returns edited array
 */

function remove(items, item) {
  for (let thing of items) {
    if (thing === item) {
      items.splice(items[items.indexOf(thing)], 1);
      return items;
    } else {
      return undefined;
    }
  }
}

export { choice, remove };