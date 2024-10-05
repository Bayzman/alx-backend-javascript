export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  let i = 0;

  for (const idx of array) {
    const value = idx;
    // newArray.push(appendString + value);
    newArray[i] = appendString + value;
    i += 1;
  }

  return newArray;
}
