import { deleteUser } from "./deleteOne.js";
import { updateUser } from "./updateUser.js";

const lista = document.getElementById("lista");
const alert = document.getElementById("alert");
const renderUser = (user) => {
  const date = new Date(user.birthDate).toLocaleDateString("pt-br");
  lista.innerHTML = "";
  let item = document.createElement("li");
  item.innerHTML = `<div class="mt-4 p-5 bg-success text-white rounded" id="dadosUser${user._id}" style="display: block;">
  <div>Nome:
  ${user.firstName}
  </div>
  <div>
  Sobrenome
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
    const btnuUpdate = document.getElementById("btnUpdate");
    const idUser = user._id;

    btnuUpdate.addEventListener("click", (e) => {
      e.preventDefault();
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
      } else {
        updateUser(idUser, dados);
      }
    });
  });
};

const btnSearchOne = document.getElementById("btnSearchOne");
const userFind = document.getElementById("lista");
const idSearch = document.getElementById("idSearch");

const searchOne = async (idUser) => {
  try {
    fetch(`http://localhost:3000/users/${idUser}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        renderUser(response);
      });
  } catch (error) {
    console.log(error);
  }
};

btnSearchOne.addEventListener("click", (e) => {
  e.preventDefault();

  if (idSearch.value == "") {
    window.alert("insira um id");
    e.preventDefault();
  } else {
    searchOne(idSearch.value);
  }
});
