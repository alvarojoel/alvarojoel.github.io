let contenedor = document.getElementById('paises')

//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    let mostrar = document.getElementById('mostrarPaises');
    mostrar.addEventListener("click", mostrarPaises);
    let agregar = document.getElementById('agregarPais');
    agregar.addEventListener("click", agregarPais);
    
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    
    let newDiv = document.createElement("div");
    let div = document.createElement("div");
    for (i = 0; i < paises.length; i++) {
       div.innerHTML = '';
        div.innerHTML = `
        <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Capital</th>
        <th scope="col">Idioma</th>
        <th scope="col">Moneda Oficial</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${paises[i].nombre}</td>
        <td>${paises[i].capital}</td>
        <td>${paises[i].idioma_oficial}</td>
        <td>${paises[i].moneda}</td>
      </tr>
      <tr>
        <td class="text-center" colspan="4"><img src="${paises[i].bandera}" alt="Bandera de ${paises[i].nombre}"></td>
      </tr>
    </tbody>
  </table>
  <br>
         `;
         
        newDiv.innerHTML += `<div>${div.innerHTML}</div>`;
    }
    
    
    contenedor.innerHTML = `${newDiv.innerHTML}`;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {

var nombre;
while(true){

    let valor = prompt('Ingrese el nombre del Pais')  
    if (valor === '' || valor === null){
        alert("Por favor ingrese un nombre Valido")
    }
    else {
        nombre = valor;
        break;
    }

}
 
var capital;       
while(true){

    let valor = prompt('Ingrese la capital del Pais')  
    if (valor === '' || valor === null){
        alert("Por favor ingrese un nombre Valido")
    }
    else {
        capital = valor;
        break;
    }

}
  
var idioma;       
while(true){

    let valor = prompt('Ingrese el idioma del Pais')  
    if (valor === '' || valor === null){
        alert("Por favor ingrese un nombre Valido")
    }
    else {
        idioma = valor;
        break;
    }

}

var moneda;       
while(true){

    let valor = prompt('Ingrese la moneda del Pais')  
    if (valor === '' || valor === null){
        alert("Por favor ingrese un nombre Valido")
    }
    else {
        moneda = valor;
        break;
    }

}

var bandera;       
while(true){

    let valor = prompt('Ingrese el link de la bandera del Pais')  
    if (valor === '' || valor === null){
        alert("Por favor ingrese un link Valido")
    }
    else {
        bandera = valor;
        break;
    }

}
  
const pais = {
    nombre: nombre,
    bandera: bandera,
    capital: capital,
    idioma_oficial: idioma,
    moneda: moneda
}

paises.unshift(pais);

mostrarPaises();
}
