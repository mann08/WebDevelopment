function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject("Query Not Found");
      } else {
        console.log("Data Sent", value);
        resolve("Query solved");
      }
    }, 2000);
  });
}

getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => getData(4))
  .then(() => getData(5))
  .catch((rej) => console.log(rej));
