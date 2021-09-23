/** Used to generate unique IDs. */
interface UUID {
  [key: string]: number;
}
const counter:UUID = {};

const uuid = (prefix = '$month$'): string => {
  if (!counter[prefix]) {
    counter[prefix] = Math.pow(10, 7);
  }

  const id = counter[prefix]++;
  if (prefix === '$month$') {
    return `${id}`;
  }

  return `${prefix}${id}`;
};

export default uuid;
