import {FireStore} from "./index";

interface Data {
    collection: string,
    field: string,
    value: string,
}

/**
 * Find Documents By Collection Field and Value
 * @function Promise<number> return number
 * @param {Data} data { collection, field, value}
 * @returns {number} returns the sum of all records 0
*/

async function findDocsByValue(data: Data): Promise<number> {
  const exactMatch = (await FireStore
      .collection(data.collection)
      .where(data.field, "==", data.value)
      .get()).size;
  return exactMatch;
}

export default findDocsByValue;
