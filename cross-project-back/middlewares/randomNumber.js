const randomNum = () => {
  const min = 1;
  const max = 10010;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = { randomNum };
