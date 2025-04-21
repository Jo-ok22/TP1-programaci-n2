// extraer todos los valores de los inputs
let nuevaHabitacion = null;

document.addEventListener('DOMContentLoaded', () => {
    const user_form = document.getElementById('user_form');
    const admin_form = document.getElementById('admin_form');
    const crear_habitacion_form = document.getElementById('crear_habitacion_form');
    const disponible = document.getElementById('disponibleBtn');
    const ocupado = document.getElementById('ocupadaBtn');
    //const mostrar_Btn = document.getElementById('mostrarBtn');
    const select_habitacion = document.getElementById('habitacionSelect');

    if (user_form) {
        user_form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const nombre_user = document.getElementById('nombre_user').value;
            const apellido_user = document.getElementById('apellido_user').value;
            const dni_user = document.getElementById('dni_user').value;
    
            const nuevoUser = {
                nombre: nombre_user,
                apellido: apellido_user,
                dni: dni_user
            };
            // Obtener usuarios previos o inicializar el array
            const usuariosPrevios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
            // Agregar el nuevo usuario
            usuariosPrevios.push(nuevoUser);
    
            // Guardar en localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuariosPrevios));
    
            // Redirigir a la página de reservas
            window.location.href = 'reserva_habitacion.html';
        });
    }
    

    if (admin_form) {
        admin_form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre_admin = document.getElementById('admin_nombre').value;
            const dni_admin = document.getElementById('admin_dni').value;

            const nuevoAdmin = {
                nombreAdmin: nombre_admin,
                dniAdmin: dni_admin
            }
            // Guardar admin en localStorage
            localStorage.setItem('adminData', JSON.stringify(nuevoAdmin));
            // Redirigir a la página donde se instancia el admin
            window.location.href = 'gestionar_habitacion.html';
        });
    }
    if (crear_habitacion_form) {
        crear_habitacion_form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const num_habitacion = document.getElementById('num_habitacion').value;
            //console.log(num_habitacion);
            
            const tipo_habitacion = document.getElementById('tipo_habitacion').value;
            //console.log(tipo_habitacion);
            
            const precio_habitacion = document.getElementById('precio_habitacion').value;
            //console.log(precio_habitacion);
            
            const nuevaHabitacion = {
                numHabitacion: num_habitacion,
                tipoHabitacion: tipo_habitacion,
                precioHabitacion: precio_habitacion,
                disponible: true, // ✅ SE AGREGA ESTA LÍNEA
                estado: 'Desocupada' // Aquí también le asignamos el estado inicial
            }
            //console.log(nuevaHabitacion);

            const habitacionesPrevias = JSON.parse(localStorage.getItem('habitaciones')) || [];
            // agregar nueva habitacion 
            habitacionesPrevias.push(nuevaHabitacion);

            // ✅ Esto era lo que faltaba
        localStorage.setItem('habitaciones', JSON.stringify(habitacionesPrevias));

        alert('✅ Habitacion guardada correctamente.');
        crear_habitacion_form.reset();
            
        })
    }
    // Detectar la habitación seleccionada
    let nombreHabitacionSeleccionada = null;

    select_habitacion.addEventListener('change', () => {
        nombreHabitacionSeleccionada = select_habitacion.value; // hab1, hab2, etc.
        window.nombreHabitacionSeleccionada = nombreHabitacionSeleccionada;
    });

    
    // Botón "Disponible"
    disponible.addEventListener('click', () => {
        if (window.nombreHabitacionSeleccionada) {
            window.marcarHabitacion(window.nombreHabitacionSeleccionada, true);
        } else {
            alert('⚠️ Seleccioná una habitación');
        }
    });
    // Botón "Ocupada"
    ocupado.addEventListener('click', () => {
        if (window.nombreHabitacionSeleccionada) {
            window.marcarHabitacion(window.nombreHabitacionSeleccionada, false);
        } else {
            alert('⚠️ Seleccioná una habitación');
        }
    });
    //mostrar_Btn.addEventListener('click', ()=>{

    //})


});




