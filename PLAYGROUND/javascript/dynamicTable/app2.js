let stuff = (function () {
  let sortDirection = false;
  // let fa = 1;
  let tableData = [
    { name: "sDylan", age: 31 },
    { name: "sDylan2", age: 21 },
    { name: "sDylan3", age: 11 },
    { name: "sDylan4", age: 33 },
    { name: "sDylan5", age: 31 },
  ];

  function loadTableData(personData) {
    console.log(personData);
    const tableBody = document.getElementById("tableData");
    console.log(tableBody);
    let dataHtml = "";

    for (let person of personData) {
      console.log(`${person.name}`);
      dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
  }

  function sortNumberColumn(sort, columnName) {
    tableData = tableData.sort((a, b) => {
      return sort
        ? a[columnName] - b[columnName]
        : b[columnName] - a[columnName];
    });
  }

  function sortColumn(c) {
    const dataType = typeof tableData[0][c];
    sortDirection = !sortDirection;

    switch (dataType) {
      case "number":
        sortNumberColumn(sortDirection, c);
    }

    loadTableData(tableData);
  }

  loadTableData(tableData);
  let clickedAge = document.getElementById("htr");
  //let clickedAge = document.getElementsByTagName("th");
  clickedAge.addEventListener("click", (e) => {
    console.log("you clicked me");
    sortColumn(e.srcElement.id);
  });
  return {};
})();
