import updateUniqueItems from './10-update_uniq_items.js';
import groceriesList from './9-groceries_list.js';

const map = groceriesList();
console.log(map); // Before update

updateUniqueItems(map);
console.log(map); // After update
// Expected: 'Pasta' and 'Rice' quantities updated to 100
