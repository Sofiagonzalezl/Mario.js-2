function piso(nPiso, altura){ 
// construir cadena de caracteres que el número
// de espacios y # correcto
nEspacios = altura - nPiso;
nNumerales = nPiso;
texto ="<p>"
//añadir un espacio al texto nEspacios veces
for (let i=0; i<nEspacios; i++)
{
    texto = texto +"&nbsp"
}
// añadir # al texto nNumeral veces
for (let i=0; i <nNumeral;i++)
{
    texto= texto+"#"
}
texto=texto + "</p>"
return texto
}
let nPisos;
do{
//lo que se hace : recibir el número
//del usuario y guardarlo como número
nPisos = parseInt(prompt("Ingrese la altura de la torre. Número entre 1 y 10"))
}while(isNaN(nPisos) || nPisos < 1 ||  nPisos> 10);// La condición para que se repita
let contenido = "";
for(let i = 1; i< nPisos; i ++){ 
    contenido = contenido + piso(i, nPisos)
}

let contenido =  `<p> &nbsp;&nbsp; &nbsp; &nbsp;<s</p>
<p> &nbsp; &nbsp; ec</p>
<p> &nbsp;ond</p>
<p>a  <li</p>`
let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = contenido;
