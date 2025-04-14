function doTaskCallback(index, callback) {
  setTimeout(() => {
    console.log(`${index}`);
    callback();
  }, 1000);
}

// Promise (JS Promises)
function doTaskPromise(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${index}`);
      resolve();
    }, 1000);
  });
}

// Async/Await (JS Async / Await)
async function runAsyncTasks() {
  console.log("Hello world");

  await doTaskPromise("1");
  await doTaskPromise("2");
  await doTaskPromise("3");

  console.log("4");
}

doTaskCallback("5", () => {
  console.log("6");
});

runAsyncTasks();

console.log("7");
