/* Register */
const user = document.getElementById("user");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const onRegister = () => {
  console.log("chamado!");
  const info = {
    user: user.value,
    email: email.value,
    senha: senha.value,
  };

  // verificar se existe localstorage
  const userDB = localStorage.getItem("userDB");
  if (userDB) {
    let userParsed = JSON.parse(userDB);
    userParsed.push(info);
    localStorage.setItem("userDB", JSON.stringify(userParsed));
  } else {
    localStorage.setItem("userDB", JSON.stringify([info]));
  }
};

const onLogin = () => {
  console.log("Login");

  const info = {
    email: email.value,
    senha: senha.value,
  };

  // verificar se existe localstorage

  const userDB = localStorage.getItem("userDB");
  if (userDB) {
    const userDBParse = JSON.parse(userDB);
    let valid = false;
    userDBParse.map((item) => {
      if (item.email == info.email && item.senha == info.senha) {
        localStorage.setItem("auth", JSON.stringify(item));

        valid = true;
      }
    });

    if (valid == true) {
      alert("Entrado com sucesso");
    } else {
      alert("Credenciais invalidas");
    }
  } else {
    alert("Credenciais invalidas");
  }
};

const changePassword = () => {
  const info = {
    email: email.value,
    senha: senha.value,
  };

  // verificar se existe localstorage

  const userDB = localStorage.getItem("userDB");
  if (userDB) {
    const userDBParse = JSON.parse(userDB);
    let valid = false;

    let novaLista = [];
    userDBParse.map((item) => {
      valid = true;
      if (item.email == info.email) {
        let novoItem = {
          email: item.email,
          senha: info.senha,
          user: item.user,
        };
        novaLista.push(novoItem);
      } else {
        novaLista.push(item);
      }
    });

    localStorage.setItem("userDB", JSON.stringify(novaLista));
    localStorage.removeItem("auth");

    console.log(userDBParse);

    if (valid == true) {
      alert("Senha alterada");
    } else {
      alert("Email nao encontrado");
    }
  } else {
    alert("Email nao encontrado");
  }
};

// verificar sessao
const auth = localStorage.getItem("auth");
if (auth) {
  const authParse = JSON.parse(auth);
  document.querySelector("body > header > div > div > a.active").innerHTML =
    authParse.user;
}
