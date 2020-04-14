async function sleepSort(toSort) {
  sorted = [];

  async function sleep(t) {
    return new Promise((res) => {
      setTimeout(() => {
        sorted.push(t);

        res();
      }, t);
    });
  }

  console.log("calling promises");

  Promise.all(toSort.map((s) => sleep(s))).then(() => {
    console.log("final sorted:", sorted);
  });
}

sleepSort([5, 3, 56, 2, 3, 6, 7, 3, 2, 5]);
