//crear el user por medio de una nueva instancia por medio de los datos traidos del html   



// Este script se puede cargar en reserva_habitacion.html u otra página donde se necesiten las instancias

const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
const usuariosInstancias = usuariosGuardados.map(u => new Usuario(u.nombre, u.apellido, u.dni));

// Mostramos por consola o exportamos si usás módulos
console.log('Instancias creadas:', usuariosInstancias);





















// Crear usuario
// const user1 = new Usuario("Juan", "Pérez", "22222222");
// const user2 = new Usuario("martin", "Pérez", "22222222");
// const user3 = new Usuario("migue", "Pérez", "22222222");
// console.log(user1, user2, user3);





























// // const user = new Usuario(nombre_user, apellido_user, dni_user)
// // console.log('crear user: ', user);
// // localStorage.setItem('usuario', JSON.stringify(user));
// // window.location.href = 'reserva_habitacion.html';


// // usuario.js
// const datosTemp = JSON.parse(localStorage.getItem('datosUserTemp'));

// if (datosTemp) {
//     const user = new Usuario(datosTemp.nombre, datosTemp.apellido, datosTemp.dni);
//     console.log('crear user:', user);
//     localStorage.setItem('usuario', JSON.stringify(user));
//     localStorage.removeItem('datosUserTemp'); // opcional, limpiamos el temporal
//     window.location.href = 'reserva_habitacion.html';
// } else {
//     alert("No se encontraron datos del usuario.");
//     window.location.href = 'user_registration.html'; // o donde quieras
// }