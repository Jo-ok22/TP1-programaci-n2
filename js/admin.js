//crear el admin por medio de una nueva instancia por medio de los datos traidos del html


//crear admin


// Obtener los datos del admin desde localStorage
const adminGuardado = JSON.parse(localStorage.getItem('adminData'));

if (adminGuardado) {
    const adminInstancia = new Admin(adminGuardado.nombreAdmin, adminGuardado.dniAdmin);
    window.admin = adminInstancia;
    console.log('Admin creado:', adminInstancia);
} else {
    console.log('⚠️ No se encontraron datos del admin en localStorage.');
}









// window.admin = new Admin("Laura", "11111111");
// console.log(admin);




















// const admin = new Admin(nombre_admin, dni_admin);
// console.log('crear admin: ', admin);
// localStorage.setItem('admin', JSON.stringify(admin));
// window.location.href = 'gestionar_habitacion.html'