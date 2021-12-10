const btnDeleteUser = document.getElementById("btnDeleteUser");
const idUserDelete = document.getElementById("idUserDelete");

export const deleteUser = async (idUser) => {
  try {
    await fetch(`http://localhost:3000/users/delete/${idUser}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    console.log(error);
  }
};

btnDeleteUser.addEventListener("click", (e) => {
  if (idUserDelete.value == "") {
    window.alert("insira um id");
    e.preventDefault();
  } else {
    deleteUser(idUserDelete.value);
  }
});
