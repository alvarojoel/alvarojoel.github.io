    let bandera1 = document.getElementById('ejercicio1');
    let bandera2 = document.getElementById('ejercicio2');
    let bandera3 = document.getElementById('ejercicio3');
    let bandera4 = document.getElementById('ejercicio4');
    let bandera5 = document.getElementById('ejercicio5');
    cambioInicial();

    
function banderasCambio(){
    let numeroSel = document.getElementById('selection').value;

    switch (numeroSel) {
        case "1":
            bandera2.style.display = "none", bandera3.style.display = "none", bandera4.style.display = "none", bandera5.style.display = "none";
            bandera1.style.display = "block";
            break;
        case "2":
            bandera1.style.display = "none", bandera3.style.display = "none", bandera4.style.display = "none", bandera5.style.display = "none";
            bandera2.style.display = "block";
            break;
        case "3":
            bandera1.style.display = "none", bandera2.style.display = "none", bandera4.style.display = "none", bandera5.style.display = "none";
            bandera3.style.display = "block";
            break;
        case "4":
            bandera1.style.display = "none", bandera2.style.display = "none", bandera3.style.display = "none", bandera5.style.display = "none";
            bandera4.style.display = "block";
            break;
        case "5":
            bandera1.style.display = "none", bandera2.style.display = "none", bandera3.style.display = "none", bandera4.style.display = "none";
            bandera5.style.display = "block";
            break;

        default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
    }

}

function cambioInicial(){
    bandera2.style.display = "none", bandera3.style.display = "none", bandera4.style.display = "none", bandera5.style.display = "none";
    bandera1.style.display = "block";
}