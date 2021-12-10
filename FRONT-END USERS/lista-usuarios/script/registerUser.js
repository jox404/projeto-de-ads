const lista = document.getElementById("lista");
const renderForm = () => {
  lista.innerHTML = "";
  let item = document.createElement("div");
  item.innerHTML = `<form class="" id="form">
  <h1 class="display-3 text-center font-titulo">Registre-se</h1>
  <div class="row">
      <!-- first_name: -->
      <div class="col-md mb-3 mt-3">
          <label class="form-label labelForm font-weight-bold" for="firstName">Nome</label>
          <input class="form-control" type="text" id="firstName" placeholder="Ex:João">
      </div>
      <!-- first_name: -->
      <div class="col-md mb-3 mt-3">
          <label class="form-label labelForm font-weight-bold" for="lastName">Sobrenome</label>
          <input class="form-control" type="text" id="lastName" placeholder="Ex: Ribeiro Costa">
      </div>
  </div>
  <div class="row ">
      <!-- email -->
      <div class="col-md mb-3 mt-3">
          <label class="form-label labelForm font-weight-bold" for="email">Email</label>
          <input class="form-control" type="email" id="email" placeholder="Ex: joaovitor@dominio.com">
      </div>
      <!--birth date-->
      <div class="col-sm mb-3 mt-3">
          <label class="form-label labelForm font-weight-bold" for="birthDate">Data De Nascimento</label>
          <input class="form-control" type="date" id="birthDate" >
      </div>
      <!-- genero -->
      <div class="col-sm mb-3 mt-3">
          <label class="form-label labelForm font-weight-bold">Genero</label>
          <select class="form-select" id="genero">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
          </select>
      </div>
  </div>
  <div class="container">
      <button class="btn btn-primary" id="btnCadUser">Cadastrar</button>
      <button class="btn btn-warning" type="reset">Limpar Tudo</button>
  </div>

</form>`;
  lista.appendChild(item);
  const btnCadUser = document.getElementById("btnCadUser");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthDate");
  const genero = document.getElementById("genero");

  btnCadUser.addEventListener("click", function (e) {
    e.preventDefault();
    let dados = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birthDate: birthDate.value,
      genero: genero.value,
    };

    const registerUser = async (dados) => {
      try {
        fetch("http://localhost:3000/users/create", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        })
          .then(function (dados) {
            return dados.json();
          })
          .then(function () {
            renderForm();
          });
      } catch (error) {
        console.log(error);
      }
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
      registerUser(dados);
    }
  });
};
const btnFormCadUser = document.getElementById("btnFormCadUser");
btnFormCadUser.addEventListener("click", (e) => {
  renderForm();
});
