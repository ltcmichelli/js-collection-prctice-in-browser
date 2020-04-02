'use strict';

function collectSameElements(collectionA, objectB) {
  const keyA = [];
  for (let [key, value] of Object.entries(collectionA)) {
    keyA.push(Object.values(value)[0]);
  }
  
  const keyB = Object.values(objectB);
  
  return keyA.filter(element =>keyB[0].includes(element));
}
