'use strict';

function collectSameElements(collectionA, objectB) {
  const keys = Object.values(objectB);
  return collectionA.filter(element =>keys[0].includes(element));
}
