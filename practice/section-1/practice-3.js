'use strict';

function collectSameElements(collectionA, objectB) {
  let flattedArrayOfObject = Object.values(objectB).flat();
  return collectionA.filter(element => flattedArrayOfObject.includes(element));
}
