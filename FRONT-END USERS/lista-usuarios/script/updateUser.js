export const updateUser = async (idUser, dados) => {
  try {
    await fetch(`http://localhost:3000/users/patch/${idUser}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((dados) => {
        return dados.json();
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    alert(error);
  }
};
