/*
Crea un archivo JS que contenga las siguientes líneas

- [X] Una cadena de texto con tu Nombre
- [X] Otra cadena de texto con tu Apellido
- [X] Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- [X] Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- [X] Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- [X] Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- [X] Una variable que contenga la primera letra del Nombre
- [X] Otra variable que contenga la última letra del Apellido
- [X] Una cadena de texto que elimine los espacios de la variable "estudiante"
- [X] Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
 */

let nombre = 'Jesús';
let apellido = 'Guerreiro';
let estudiante = nombre.concat(' ' ,apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitudEstudiante = estudiante.length;
let primeraLetraNombre = nombre.charAt(0);
let ultimaLetraApellido = apellido.charAt(apellido.length-1);
let estudianteSinEspacios = estudiante.replaceAll(' ','');
let existeNombre = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitudEstudiante);
console.log(primeraLetraNombre);
console.log(ultimaLetraApellido);
console.log(estudianteSinEspacios);
console.log(existeNombre);
