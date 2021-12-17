const { getApi } = require('../middlewares/api');

const newRandom = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getApi(id);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { newRandom };
