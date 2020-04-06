'use strict';

function collectSameElements(collectionA, objectB) {
  let flattedArrayOfObjectB = Object.values(objectB).flat();
  let filteredCollectionA = collectionA.filter(element => flattedArrayOfObjectB.includes(element.key));

  return filteredCollectionA.map(element => element.key);
}
