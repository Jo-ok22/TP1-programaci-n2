




// Crear habitaciones



// Crear habitaciones desde localStorage
const habitacionesGuardadas = JSON.parse(localStorage.getItem('habitaciones')) || [];

window.habitaciones = [];
window.habitacionesMap = {};
let contadorHabitaciones = 1;

habitacionesGuardadas.forEach((h, index) => {
  const nueva_Habitacion = new Habitacion(
    parseInt(h.numHabitacion),
    h.tipoHabitacion,
    parseFloat(h.precioHabitacion),
    h.disponible
  );

  const nombreHab = `hab${contadorHabitaciones++}`;

  window.habitaciones.push(nueva_Habitacion);
  window.habitacionesMap[nombreHab] = nueva_Habitacion;

  console.log(`🛏 Instancia creadasss: ${nombreHab}`, nueva_Habitacion);

   // Solo mostrar el alert para la última habitación ocupada
   if (index === habitacionesGuardadas.length - 1 && !nueva_Habitacion.disponible) {
    alert(`La habitación ${nueva_Habitacion.numero} fue ocupada`);
  }


  // Agregar opción al select
  const select = document.getElementById('habitacionSelect');
  const option = document.createElement('option');
  option.value = nombreHab;
  option.textContent = `Habitación ${nueva_Habitacion.numero} - ${nueva_Habitacion.tipo}`;
  select.appendChild(option);
});

// Función para marcar habitación como ocupada o disponible

window.marcarHabitacion = function(nombreHab, disponible) {
  const habitacion = window.habitacionesMap[nombreHab];
  if (habitacion) {
    habitacion.disponible = disponible;
    console.log(`🏷️ Habitación ${habitacion.numero} ahora está ${disponible ? '✅ disponible' : '🚫 ocupada'}`);
    alert(`Estado actualizado: ${disponible ? 'Disponible' : 'Ocupada'}`);

    // ✅ Actualizar el estado también en el localStorage
    const habitaciones = JSON.parse(localStorage.getItem('habitaciones')) || [];

    const index = habitaciones.findIndex(h => parseInt(h.numHabitacion) === habitacion.numero);
    if (index !== -1) {
      habitaciones[index].disponible = disponible;
      habitaciones[index].estado = disponible ? 'Desocupada' : 'Ocupada';
      localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
    }
    
  }
};


const mostrarBtn = document.getElementById('mostrarBtn');
let mostrando = false;

mostrarBtn.addEventListener('click', () => {
  const lista = document.getElementById('listaHabitaciones');

  if (!mostrando) {
    lista.innerHTML = ''; // Limpiar antes

    window.habitaciones.forEach(h => {
      const item = document.createElement('li');
      item.textContent = `Habitación ${h.numero} - ${h.tipo} - $${h.precio}`;
      lista.appendChild(item);
    });

    mostrando = true;
  } else {
    lista.innerHTML = '';
    mostrando = false;
  }
});


// const mostrarBtn = document.getElementById('mostrarBtn');
// mostrarBtn.addEventListener('click', () => {
//   const lista = document.getElementById('listaHabitaciones');
//   lista.innerHTML = ''; // Limpiar antes

//   window.habitaciones.forEach(h => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${h.numero}</td>
//       <td>${h.tipo}</td>
//       <td>$${h.precio}</td>`;
//     lista.appendChild(row);
//   });
// });




























































//window.habitaciones = [];

// const hab1 = new Habitacion(101, "individual", 100);
// const hab2 = new Habitacion(102, "doble", 150);
// const hab3 = new Habitacion(103, "individual", 100);
// const hab4 = new Habitacion(104, "suite", 200);


// // Admin agrega habitaciones
// admin.agregarHabitacion(habitaciones, hab1);
// admin.agregarHabitacion(habitaciones, hab2);
// admin.agregarHabitacion(habitaciones, hab3);
// admin.agregarHabitacion(habitaciones, hab4);
// admin.agregarHabitacion(habitaciones, hab5);
// admin.agregarHabitacion(habitaciones, hab6);
// // Admin cambia disponibilidad (ejemplo: la vuelve a dejar disponible)
// admin.cambiarDisponibilidad(hab1, true);
// admin.cambiarDisponibilidad(hab2, true);
// admin.cambiarDisponibilidad(hab3, true);
// admin.cambiarDisponibilidad(hab4, true);
// admin.cambiarDisponibilidad(hab5, true);
// admin.cambiarDisponibilidad(hab6, false);


// // Admin marca como ocupada la otra habitación
// admin.cambiarDisponibilidad(hab1, false);



// const hab1 = new Habitacion(101, "individual", 100);
// const hab2 = new Habitacion(102, "doble", 150);
// const hab3 = new Habitacion(103, "individual", 100);
// const hab4 = new Habitacion(104, "suite", 200);
// const hab5 = new Habitacion(105, "doble", 150);
// const hab6 = new Habitacion(106, "suite", 200);
// console.log(hab1, hab2, hab3, hab4, hab5, hab6);






