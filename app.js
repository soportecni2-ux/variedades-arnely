// ===============================
// VARIEDADES ARNELY
// Calculadora de Envíos
// ===============================

const cop = document.getElementById("cop");
const tasa = document.getElementById("tasa");
const bcv = document.getElementById("bcv");

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const resultadoFinal = document.getElementById("resultadoFinal");

const botonCalcular = document.getElementById("calcular");

// Guardar tasa y BCV
window.onload = function () {

    if(localStorage.getItem("tasa")){
        tasa.value = localStorage.getItem("tasa");
    }

    if(localStorage.getItem("bcv")){
        bcv.value = localStorage.getItem("bcv");
    }

};

// Formato de miles
function formatear(numero){

    return Number(numero).toLocaleString("es-CO");

}

// Calcular

botonCalcular.addEventListener("click", calcular);

function calcular(){

    let pesos = cop.value.replace(/\./g,"");

    pesos = Number(pesos);

    let valorTasa = Number(tasa.value);

    let valorBCV = Number(bcv.value);

    if(pesos<=0){

        alert("Ingrese un valor válido");

        return;

    }

    let primerPaso = pesos / valorTasa;

    let dolares = primerPaso / valorBCV;

    paso1.innerHTML =
        formatear(pesos)
        +" ÷ "
        +valorTasa
        +" = "
        +primerPaso.toFixed(2);

    paso2.innerHTML =
        primerPaso.toFixed(2)
        +" ÷ "
        +valorBCV
        +" = "
        +dolares.toFixed(2)
        +" USD";

    resultadoFinal.innerHTML =
        dolares.toFixed(2)+" USD";

    localStorage.setItem("tasa",valorTasa);

    localStorage.setItem("bcv",valorBCV);

}// ===============================
// HISTORIAL
// ===============================

const listaHistorial = document.getElementById("listaHistorial");
const botonCopiar = document.getElementById("copiar");
const botonWhatsapp = document.getElementById("whatsapp");
const botonLimpiar = document.getElementById("limpiar");

let historial = JSON.parse(localStorage.getItem("historial")) || [];

function actualizarHistorial() {

    listaHistorial.innerHTML = "";

    historial.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML =
            `${item.cop} COP → ${item.resultado}`;

        listaHistorial.appendChild(li);

    });

}

actualizarHistorial();

// ===============================
// GUARDAR EN HISTORIAL
// ===============================

const calcularOriginal = calcular;

calcular = function(){

    calcularOriginal();

    historial.unshift({
        cop: formatear(cop.value.replace(/\./g,"")),
        resultado: resultadoFinal.innerText
    });

    if(historial.length > 20){
        historial.pop();
    }

    localStorage.setItem(
        "historial",
        JSON.stringify(historial)
    );

    actualizarHistorial();

};

// ===============================
// COPIAR
// ===============================

botonCopiar.addEventListener("click",()=>{

    navigator.clipboard.writeText(resultadoFinal.innerText);

    alert("Resultado copiado");

});

// ===============================
// WHATSAPP
// ===============================

botonWhatsapp.addEventListener("click",()=>{

    const mensaje =
`Variedades Arnely

COP: ${cop.value}

Tasa: ${tasa.value}

BCV: ${bcv.value}

Resultado: ${resultadoFinal.innerText}`;

    window.open(
        "https://wa.me/?text="+encodeURIComponent(mensaje),
        "_blank"
    );

});

// ===============================
// LIMPIAR
// ===============================

botonLimpiar.addEventListener("click",()=>{

    cop.value="";

    paso1.innerHTML="";

    paso2.innerHTML="";

    resultadoFinal.innerHTML="0 USD";

});

// ===============================
// FORMATO DE MILES
// ===============================

cop.addEventListener("input",function(){

    let valor=this.value.replace(/\D/g,"");

    if(valor===""){
        this.value="";
        return;
    }

    this.value=Number(valor).toLocaleString("es-CO");

});
