/* eslint-disable quotes */
/* eslint-disable semi */
// eslint-disable-next-line no-undef
// const xhr = new XMLHttpRequest();
const form = document.getElementById("form-register");

form.addEventListener("submit", function (e) {
  // e.preventDefault();
  // const username = document.getElementById('username').value;
  // const password = document.getElementById('password').value;
  // const email = document.getElementById('email').value;
  // console.log('hey', username, password, email);
  // const data = new URLSearchParams();
  // data.append('username', username);
  // data.append('password', password);
  // data.append('email', email);
  // xhr.open('post', 'register');
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.onload = function () {
  //   if (xhr.status === 201) {
  //     const user = JSON.parse(xhr.responseText);
  //     console.log(user);
  //     const toastr = document.getElementById('toastr');
  //     const error = document.getElementById('errorShower');
  //     toastr.hidden = false;
  //     error.hidden = false;
  //     error.innerHTML = xhr.responseText; // "Usuario o contraseña incorrectos";
  //     error.style.color = 'red';
  //     error.style.textAlign = 'center';
  //     error.style.fontSize = '20px';
  //     error.style.fontWeight = 'bold';
  //     error.classList.remove('hidden');
  //     setTimeout(() => {
  //       error.hidden = true;
  //       toastr.hidden = true;
  //     }, 3000);
  //     console.log('error');
  //   } else {
  //     const toastr = document.getElementById('toastr');
  //     const error = document.getElementById('errorShower');
  //     toastr.hidden = false;
  //     error.hidden = false;
  //     error.innerHTML = xhr.responseText; // "Usuario o contraseña incorrectos";
  //     error.style.color = 'red';
  //     error.style.textAlign = 'center';
  //     error.style.fontSize = '20px';
  //     error.style.fontWeight = 'bold';
  //     error.classList.remove('hidden');
  //     setTimeout(() => {
  //       error.hidden = true;
  //       toastr.hidden = true;
  //     }, 3000);
  //     console.log('error');
  //   }
  // };
  // xhr.send(data);
});
