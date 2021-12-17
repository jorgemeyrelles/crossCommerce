const { getApi } = require('../services/api');

const newRandom = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getApi(id);
    if (id > 10000 && data.length !== 0) {
      return res.status(500).json({ message: 'Unespect return for large "id"' });
    };
    res.status(200).json(data);
  } catch (e) {
    console.error(e.code);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { newRandom };
