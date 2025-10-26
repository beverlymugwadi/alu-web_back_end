import getFullResponseFromAPI from './1-promise.js';

getFullResponseFromAPI(true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

getFullResponseFromAPI(false)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
