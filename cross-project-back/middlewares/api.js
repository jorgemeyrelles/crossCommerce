const axios = require('axios');
const { gettingSort } = require('./ordenateArr');
require('dotenv').config();

const URL = process.env.URL;

const getApi = async (id) => {
  const { data } = await axios(`${URL}${id}`);
  const { numbers } = data;
  return gettingSort(numbers);
};

module.exports = { getApi };
