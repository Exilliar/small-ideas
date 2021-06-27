async function sleepSort(toSort) {
  return new Promise((resolve) => {
    sorted = [];

    async function sleep(t) {
      return new Promise((res) => {
        setTimeout(() => {
          sorted.push(t);

          res();
        }, t);
      });
    }

    Promise.all(toSort.map((s) => sleep(s))).then(() => {
      resolve(sorted);
    });
  });
}

sleepSort([5, 3, 56, 2, 3, 6, 7, 3, 2, 5]).then((res) => {
  console.log("returned res:", sorted);
});
