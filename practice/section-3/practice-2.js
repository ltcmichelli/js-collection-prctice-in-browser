'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const keyB = Object.values(objectB);
  return collectionA.map(element => {
    if (keyB[0].includes(element.key)) {
      return {
        key: element.key,
        count: element.count - Math.floor(element.count / 3)
      }
    }
    return element;
  });
}
