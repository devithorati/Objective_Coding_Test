const deepEqual = (a, b) => {
  if (!isObjectAndNotNull(a) && !isObjectAndNotNull(b)) {
    if (a === b) {
      return true;
    }
  } else {
    if (isObjectAndNotNull(a) && isObjectAndNotNull(b)) {
      const firstObjKeys = Object.keys(a);
      const secondObjKeys = Object.keys(b);

      if (firstObjKeys.length === 0 && secondObjKeys.length === 0) return true;
      if (firstObjKeys.length > 0 && secondObjKeys.length > 0) {
        const objKeys =
          firstObjKeys.length > secondObjKeys.length
            ? firstObjKeys
            : secondObjKeys;

        for (var key of objKeys) {
          const firstObjectValue = a[key];
          const secondObjectValue = b[key];
          if (firstObjectValue !== secondObjectValue) {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
};
const isObjectAndNotNull = (obj) => {
  return typeof obj === "object" && obj != null;
};

module.exports = deepEqual;
