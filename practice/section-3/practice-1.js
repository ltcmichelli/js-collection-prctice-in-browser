'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let arrayOfObjectB = Object.values(objectB).flat();
  return collectionA.map(element => {
    if (arrayOfObjectB.includes(element.key)) {
      return {
        key: element.key,
        count: element.count - 1
      }
    }
    return element;
  });
}
