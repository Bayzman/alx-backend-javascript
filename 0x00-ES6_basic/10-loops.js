export default function appendToEachArrayValue(array, appendString) {
    const new_array = [];
    let i = 0;

    for (let idx of array) {
        let value = idx;
        // new_array.push(appendString + value);
        new_array[ i ] = appendString + value;
        i++;
    }

    return new_array;
}
