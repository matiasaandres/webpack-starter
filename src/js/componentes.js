
import '../css/components.css';
import '../style.css';
import img from '../assets/img/file.png';

export const  saludar = (nombre) =>{

    console.log('Creando la etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);


    // logo

    const logo = document.createElement('img');
    logo.src = img;
    logo.width = 650;
    logo.height = 400;
    document.body.append(logo);
    
}

