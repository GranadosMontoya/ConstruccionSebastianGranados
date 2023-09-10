import { usuarios } from "./User";

function USerExist(correo, contraseña) {
    if (usuarios[correo]) {
        const usuario = usuarios[correo];
        if (usuario.contraseña === contraseña) {
            return usuario;
        } else {
            return false;
        }
    } else {
        console.log('El correo no está registrado.');
    }
    return false;
}

export default USerExist;