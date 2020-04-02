'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const keyB = Object.values(objectB);
  return collectionA.map(element => {
    if (keyB[0].includes(element.key)) {
      return {
        key: element.key,
        count: element.count - 1
      }
    }
    return element;
  });
}
