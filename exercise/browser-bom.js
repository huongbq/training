function checkBOM() {
  // JS Window
  console.log("1.", window.innerWidth);
  console.log("2,", window.innerHeight);

  // JS Screen
  console.log("3.", screen.width + "x" + screen.height);

  // JS Location
  console.log("4.", location.href);

  // JS History
  console.log("5.", history.length);

  // JS Navigator
  console.log("6.", navigator.userAgent);
  console.log("7.", navigator.language);
  console.log("8.", navigator.onLine);

  // JS Popup Alert
  alert("9");

  // JS Timing
  setTimeout(() => {
    console.log("10");
  }, 2000);

  let count = 0;
  const interval = setInterval(() => {
    console.log("11.", ++count);
    if (count >= 3) clearInterval(interval);
  }, 1000);

  // JS Cookies
  document.cookie = "12.";
  console.log("13.", document.cookie);
}
