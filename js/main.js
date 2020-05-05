const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('Login');

function toogleModalAuth() { // включает и выключает модальное окно авторизации
  modalAuth.classList.toggle("is-open");
}

function autorized() { //если авторизован

  function logOut(event) { // процедура деавторизации
    login = null; //обнуляет переменную логина
    localStorage.removeItem('Login'); //удаляет логин в localStorage браузера

    buttonAuth.style.display = ''; // показывает кнопку "войти"
    userName.style.display = '';//  прячет имя пользователя
    buttonOut.style.display = ''; // прячет кнопку "выйти"
    
    buttonOut.removeEventListener("click", logOut);

    checkAuth(); //проверка авторизации
  }

  console.log('Авторизован');

  userName.textContent = login; // записывает имя логина из переменной

  buttonAuth.style.display = 'none'; // прячет кнопку "войти"
  userName.style.display = 'inline'; //  показывает имя пользователя
  buttonOut.style.display = 'block'; // показывает кнопку "выйти"
  
  buttonOut.addEventListener("click", logOut);
}

function notAutorized() { //если не авторизован
  console.log(' He Авторизован');

  function logIn(event) { // процедура авторизации
    event.preventDefault(); // чтобы не перезагружалось окно
    login = loginInput.value; // сохраняет имя в переменную

    if (login.length > 0){      
      loginInput.style.backgroundColor = '';

      localStorage.setItem('Login', login); //сохраняет логин в localStorage браузера

      toogleModalAuth(); // включает и выключает модальное окно авторизации

      buttonAuth.removeEventListener("click", toogleModalAuth); //вырубает "клик"
      closeAuth.removeEventListener("click", toogleModalAuth); //вырубает "клик"
      logInForm.removeEventListener("submit", logIn); //вырубает отправку
      logInForm.reset(); //ощичает поле ввода логина

      checkAuth(); //проверка авторизации
    } else{
      loginInput.style.backgroundColor = 'red';      
      console.log('gdsg');
    }
    
    
  }

  buttonAuth.addEventListener("click", toogleModalAuth);  // клик на кнопке "войти"
  closeAuth.addEventListener("click", toogleModalAuth); // клик на кнопке закрытия в окне авторизации
  logInForm.addEventListener("submit", logIn); // процедура авторизации при нажатии кнопки отправки в модальном окне
}


function checkAuth() { //проверка авторизации
  if (login) {
    autorized(); //если авторизован
  } else {
    notAutorized(); //если не авторизован
  }
}


checkAuth();  //проверка авторизации