function choice(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items[0];
}

function remove(items, item) {
  for (let thing of items) {
    if (thing === item) {
      items.splice(items[items.indexOf(thing)], 1);
      console.log("***ITEMS: ", items)
      return items;
    } else {
      return undefined;
    }
  }
}

export { choice, remove };