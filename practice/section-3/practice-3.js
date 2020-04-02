'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let objectArray = [];
  var key = collectionA[0];
  var cnt = 0;
  for (var i = 0; i < collectionA.length; i++) {
    if (collectionA[i] != key) {
        objectArray.push({
        key,
        count: cnt
      });

        key = collectionA[i];
        cnt = 1;
      } else {
          cnt++;
      }
  }
  objectArray.push({key,count: cnt});

  var keyB = Object.values(objectB);

  return objectArray.map(element => {
    if (keyB[0].includes(element.key)) {
      return {
        key: element.key,
        count: element.count - Math.floor(element.count / 3)
      }
    }
    return element;
  });
}
