const { getApi } = require('../middlewares/api');

const newSelected = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const data = await getApi(id);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { newSelected };