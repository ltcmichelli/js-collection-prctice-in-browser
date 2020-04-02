'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(element => collectionB.join().includes(element));
}
