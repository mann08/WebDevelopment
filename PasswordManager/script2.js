function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("Password")) || [];

  const ShowData = document.getElementById("passwordData");

  console.log(data);

  if (data.length <= 0) {
    ShowDataDiv.innerHTML = `<tr> <td colspan = "3"> 
        No Password Saved </td></tr>`;
    return;
  }

  data.forEach( (element) => {
    const TR = document.createElement("tr");


    TR.innerHTML = `
    <td>${element.WebsiteName}</td>
    <td>${element.UserName}</td>
    <td>${element.Password}</td>`

    ShowDataDiv.appendChild(TR)
  });

}

getDataFromLocalStorage();
