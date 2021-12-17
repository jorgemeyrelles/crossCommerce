require('dotenv').config();

const getData = async (url) => {
  const dataApi = await fetch(url)
    .then((data) => data.json());
  return dataApi;
};

export { getData };
