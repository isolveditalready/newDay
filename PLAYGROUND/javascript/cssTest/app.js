let content = (function () {
  const clockId = document.getElementById("time");
  console.dir(clockId);
  console.log("yhahooo");
  let datetime = setInterval(() => {
    let newDate = new Date();
    const MonthCurrent = String(newDate.getMonth()).padStart(2, "0");
    const DateCurrent = String(newDate.getDate()).padStart(2, "0");
    const HourCurrent = String(newDate.getHours()).padStart(2, "0");
    const MinCurrent = String(newDate.getMinutes()).padStart(2, "0");
    const SecCurrent = String(newDate.getSeconds()).padStart(2, "0");
    //const MiliCurrent = String(newDate.getMilliseconds());
    const MiliCurrent = String(newDate.getMilliseconds())
      .padStart(3, "0")
      .substring(0, 3);

    const newformattedDate =
      MonthCurrent +
      "/" +
      DateCurrent +
      " " +
      HourCurrent +
      ":" +
      MinCurrent +
      ":" +
      SecCurrent +
      ":" +
      MiliCurrent;
    console.log(
      MonthCurrent +
        "/" +
        DateCurrent +
        " " +
        HourCurrent +
        ":" +
        MinCurrent +
        ":" +
        SecCurrent +
        ":" +
        MiliCurrent +
        MiliCurrent +
        MiliCurrent
    );
    clockId.innerHTML = newformattedDate;
  }, 40);
})();
