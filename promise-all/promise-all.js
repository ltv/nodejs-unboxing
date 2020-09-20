const delay = (timeInSec) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), timeInSec * 1000)
  );
};

const allProjectIds = () =>
  delay(2).then(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const main = async () => {
  console.time("asyncAwait");
  const pjtIds = await allProjectIds();
  const otherPjtIds = await allProjectIds();
  console.log("[main] > pjtIds: ", pjtIds, otherPjtIds);
  console.timeEnd("asyncAwait");

  console.time("promiseAll");
  const [nPjtIds, nOtherPjtIds] = await Promise.all([
    allProjectIds(),
    allProjectIds(),
  ]);
  console.log("[main] > nPjtIds: ", nPjtIds, nOtherPjtIds);
  console.timeEnd("promiseAll");
};

main().then(() => console.log("Done!"));
