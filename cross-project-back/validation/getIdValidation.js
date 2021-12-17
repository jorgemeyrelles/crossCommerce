const emptyId = (req, res, next) => {
  const { id } = req.params;
  if (!id || id === '') {
    return res.status(500).json({ message: 'Empty "id"' })
  };
  next();
};

const invalidId = (req, res, next) => {
  const { id } = req.params;
  const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  if (parseInt(id) === 0 || regex.test(id)) {
    return res.status(500).json({ message: 'Invalid "id"' })
  };
  next();
};

module.exports = { emptyId, invalidId };
