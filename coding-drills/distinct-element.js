/**
 * Count occurence of distinct elements
 */

const array = ["a", "b", "c", "f", "f", "f", "a", "h", "c"];

const result = array.reduce((count, curr) => {
  if (count[curr] === undefined) {
    count[curr] = 0;
  }
  count[curr] += 1;
  return count;
}, {});
console.log(result);

const count = array.reduce(
  (acc, curr) =>
    curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
  {}
);
console.log(count);