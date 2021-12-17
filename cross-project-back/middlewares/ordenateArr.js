const gettingSort = (e) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < e.length; i += 1) {
      if (e[i - 1] > e[i]) {
        done = false;
        let tmp = e[i - 1];
        e[i - 1] = e[i];
        e[i] = tmp;
      }
    }
  }

  return e;
};

module.exports = { gettingSort };
