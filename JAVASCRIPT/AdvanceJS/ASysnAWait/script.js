async function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 7) {
        reject("Query Not Found");
      } else if (value === 8) {
        reject("Query Not Found");
      } else {
        console.log("Data Sent", value);
        resolve("Query solved");
      }
    }, 2000);
  });
}

await getData(1);
await getData(2);
await getData(3);
await getData(4);
await getData(5);
await getData(6);
await getData(7);
await getData(8);
await getData(9);
await getData(10);
