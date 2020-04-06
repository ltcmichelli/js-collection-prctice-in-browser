'use strict';

function createUpdatedCollection(collectionA, objectB) {

  let arrayOfCollectionA = convertArrayToObject(collectionA);
  let arrayOfObjectB = Object.values(objectB).flat();

  return arrayOfCollectionA.map(element => {
    if (arrayOfObjectB.includes(element.key)) {
      return {
        key: element.key,
        count: element.count - Math.floor(element.count / 3)
      }
    }
    return element;
  });
}

function convertArrayToObject(collectionA){
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
  return objectArray;
}
