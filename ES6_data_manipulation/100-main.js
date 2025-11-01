import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint)); // undefined

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 2

try {
  queryAPI(endpoint); // 3
  queryAPI(endpoint); // 4
  queryAPI(endpoint); // 5
  queryAPI(endpoint); // 6 — should throw
} catch (error) {
  console.error(`Caught error: ${error.message}`);
}
