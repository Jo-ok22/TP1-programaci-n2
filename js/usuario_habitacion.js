// alquilar una habitacion

// Usuario busca habitaciones disponibles



// Función global para cambiar el estado (Ocupar o Desocupar)
function cambiarEstado(numHabitacion, nuevoEstado) {
    const habitacionesGuardadas = JSON.parse(localStorage.getItem('habitaciones')) || [];
    const habitacion = habitacionesGuardadas.find(h => h.numHabitacion === numHabitacion);
    if (habitacion) {
      habitacion.estado = nuevoEstado;
      habitacion.disponible = nuevoEstado === 'Desocupada';
      localStorage.setItem('habitaciones', JSON.stringify(habitacionesGuardadas));
      mostrarHabitaciones(); // Refrescar vista
    }
  }
  
  // Función global para mostrar las habitaciones
  function mostrarHabitaciones() {
    const habitacionesGuardadas = JSON.parse(localStorage.getItem('habitaciones')) || [];
    const habitacionesLista = document.getElementById('habitacionesLista');
    habitacionesLista.innerHTML = ''; // Limpiar antes de agregar
  
    habitacionesGuardadas.forEach(habitacion => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${habitacion.numHabitacion}</td>
        <td>${habitacion.tipoHabitacion}</td>
        <td>$${habitacion.precioHabitacion}</td>
        <td>${habitacion.estado}</td>
        <td>
          ${habitacion.estado === 'Desocupada'
            ? `<button onclick="cambiarEstado('${habitacion.numHabitacion}', 'Ocupada')">Ocupar</button>`
            : `<button onclick="cambiarEstado('${habitacion.numHabitacion}', 'Desocupada')">Desocupar</button>`}
        </td>
      `;
      habitacionesLista.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const usuarioNombre = document.getElementById('usuarioNombre');
    const usuariosPrevios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuariosPrevios[usuariosPrevios.length - 1];
    if (usuarioNombre && usuario) {
      usuarioNombre.textContent = `${usuario.nombre} ${usuario.apellido}`;
    }
    mostrarHabitaciones();
  });






















































































































// console.log('buscar habitaciones', user1.buscarHabitaciones(habitaciones), user2.buscarHabitaciones(habitaciones), user3.buscarHabitaciones(habitaciones));




// // Usuario reserva una habitación
// user1.reservarHabitacion(hab2);
// user2.reservarHabitacion(hab3);
// user3.reservarHabitacion(hab4);


// // Ver reservas del usuario
// console.log('reservas user',user1.verReservas(), user2.verReservas(), user3.verReservas());



// // Usuario intenta reservarla de nuevo
// user2.reservarHabitacion(hab5);
// console.log('soy user2', user2.verReservas());

// user1.reservarHabitacion(hab6);
// console.log('soy user1', user1.verReservas());











