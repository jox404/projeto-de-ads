const btnDeleteAll = document.getElementById("btnDeleteAll");
const listaDeletados = document.getElementById("lista");

btnDeleteAll.addEventListener("click", (e) => {
  fetch("http://localhost:3000/users/delete", {
    method: "DELETE",
  })
    .then(function (response) {
      return response.json();
    })
    .then(() => {
      window.location.reload();
    });
});
