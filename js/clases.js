class Persona {
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

}

class Usuario extends Persona {
    constructor(nombre, apellido, dni){
        super(nombre, apellido, dni);
        this.reservas = [] // lista de habitaciones reservadas
    }
    buscarHabitaciones(habitacionesDisponibles){
        return habitacionesDisponibles.filter(h=> h.disponible);
    }
    reservarHabitacion(habitacion){
        if(habitacion.disponible) {
            this.reservas.push(habitacion);
            habitacion.disponible = false;
            console.log(`Habitación ${habitacion.numero} reservada con exito. `);
        } else {
            console.log(`La habitación número: ${habitacion.numero} no está disponible.`);
        }
    }
    verReservas(){
        return this.reservas;
    }
}

class Admin extends Persona {
    constructor(nombre, dni){
        super(nombre, null, dni);
    }
    verHabitaciones(habitaciones){
        return habitaciones;
    }
    agregarHabitacion(habitaciones, habitacion){
        habitaciones.push(habitacion);
        console.log(`Habitación ${habitacion.numero} agregada.`);
    }
    cambiarDisponibilidad(habitacion, estado){
        habitacion.disponible = estado;
        console.log(`Habitación ${habitacion.numero} ahora está ${estado ? true : false}.`);
        
    }
}


class Habitacion {
    constructor(numero, tipo, precio, disponible = true){
        this.numero = numero;
        this.tipo = tipo;
        this.precio = precio;
        this.disponible = disponible;
    }
}






// const admin = new Admin("Laura", "11111111");
// console.log(admin);

// //Crear usuario
// const user1 = new Usuario("Juan", "Pérez", "22222222");
// const user2 = new Usuario("martin", "Pérez", "22222222");
// const user3 = new Usuario("migue", "Pérez", "22222222");
// console.log(user1, user2, user3);

// //crear habitaciones
// const habitaciones = [];

// // Crear habitaciones
// const hab1 = new Habitacion(101, "individual", 100);
// const hab2 = new Habitacion(102, "doble", 150);
// const hab3 = new Habitacion(103, "individual", 100);
// const hab4 = new Habitacion(104, "suite", 200);
// console.log(hab1, hab2, hab3, hab4);

// //Admin agrega habitaciones
// admin.agregarHabitacion(habitaciones, hab1);
// admin.agregarHabitacion(habitaciones, hab2);
// admin.agregarHabitacion(habitaciones, hab3);
// admin.agregarHabitacion(habitaciones, hab4);

// //Usuario busca habitaciones disponibles
// console.log(user1.buscarHabitaciones(habitaciones));

// //Usuario reserva una habitación
// user2.reservarHabitacion(hab2);
// user3.reservarHabitacion(hab4);



// //Ver reservas del usuario
// console.log(user2.verReservas());
// console.log(user3.verReservas());


// //Admin cambia disponibilidad (ejemplo: la vuelve a dejar disponible)
// admin.cambiarDisponibilidad(hab4, true);




// //Usuario intenta reservarla de nuevo
// user3.reservarHabitacion(hab4);

// //Admin marca como ocupada la otra habitación
// admin.cambiarDisponibilidad(hab3, false);



// console.log('ult log',user3.verReservas());




//!--------------------------------------------------------------------------------------------------------------

