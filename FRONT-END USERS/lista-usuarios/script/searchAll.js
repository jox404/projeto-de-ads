import { deleteUser } from "./deleteOne.js";
import { updateUser } from "./updateUser.js";

const lista = document.getElementById("lista");

const searchAllUsers = async () => {
  const users = await fetch("http://localhost:3000/users/search/")
    .then((response) => response.json())
    .then((res) => res);
  users.forEach((user) => {
    renderAllUsers(user);
  });
};

export const renderAllUsers = (user) => {
  const date = new Date(user.birthDate).toLocaleDateString("pt-br");

  let item = document.createElement("li");
  item.innerHTML = `<div class="mt-4 p-5 bg-success text-white rounded" id="dadosUser${user._id}">
  <div>Nome:
  ${user.firstName}
  </div>
  <div>
  Sobrenome:
  ${user.lastName}
  </div>
  <div>
  Email:
  ${user.email}
  </div>
  <div>
  Data de Nascimento:
  ${date}
  </div>
  <div>
  Genero:
  ${user.genero}
  </div>
  <div>
  Id Usuário:
  ${user._id}
  </div>
      <div class='btn-group'>
            <!--btn modal -->
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" id="m-${user._id}">
            Atualizar
            </button>  
            <!-- btn delete user -->
            <button class="btn btn-danger" id="d-${user._id}">Deletar</button>
      </div>
  </div>
  `;

  lista.appendChild(item);
  /* deleta usuarios */
  document
    .getElementById(`d-${user._id}`)
    .addEventListener("click", async () => {
      await deleteUser(user._id);
      window.location.reload();
    });
  const btnId = document.getElementById(`m-${user._id}`);
  /* faz modal aparece com dados dentro  */
  btnId.addEventListener("click", (e) => {
    const modalFirstName = document.getElementById("modal-firstName");
    const modalLastName = document.getElementById("modal-lastName");
    const modalEmail = document.getElementById("modal-email");
    const modalBirthDate = document.getElementById("modal-birthDate");
    const modalGenero = document.getElementById("modal-genero");

    modalFirstName.value = user.firstName;
    modalLastName.value = user.lastName;
    modalEmail.value = user.email;
    modalBirthDate.value = user.birthDate.split("T")[0];
    modalGenero.value = user.genero;

    /* faz o update nos dados */
    /* btnuUpdate é um botão da modal */
    const btnUpdate = document.getElementById("btnUpdate");
    const idUser = user._id;

    btnUpdate.addEventListener("click", (e) => {
      let dados = {
        firstName: modalFirstName.value,
        lastName: modalLastName.value,
        email: modalEmail.value,
        birthDate: modalBirthDate.value,
        genero: modalGenero.value,
      };
      if (
        dados.firstName == "" ||
        dados.lastName == "" ||
        dados.email == "" ||
        dados.birthDate == "" ||
        dados.genero == ""
      ) {
        window.alert("Preencha todos os campos do formulario");
        e.preventDefault();
      } else {
        updateUser(idUser, dados);
      }
    });
  });
};

searchAllUsers();
