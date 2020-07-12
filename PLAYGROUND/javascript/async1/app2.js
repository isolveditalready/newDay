console.log("loadded");

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  console.log("clicked");
  console.log("1");
  document.body.style.backgroundColor = "red";
  console.log("2");
  const start = Date.now();
  console.log("3");
  const delaySeconds = 10;
  console.log("4");
  setTimeout(() => {
    while (Date.now() < start + delaySeconds * 1000) {
      console.log("6");
    }
  }, 0);
  console.log("5");
});
