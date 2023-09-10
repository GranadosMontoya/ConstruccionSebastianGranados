export const usuarios = {};

function RegisterUSer(nombre, apellido, cedula, correo, contraseña) {
    if(!usuarios[correo]){
        usuarios[correo] = {
            nombre,
            apellido,
            cedula,
            correo, 
            contraseña,
        };
        console.log(`Usuario ${nombre} registrado con éxito.`);
        return true
    }else {
        console.log(`El correo ${correo} ya está en uso. Por favor, elige otro.`);
    }
    return false
};

export default RegisterUSer;