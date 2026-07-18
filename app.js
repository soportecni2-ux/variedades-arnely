const cop = document.getElementById("cop");
const tasa = document.getElementById("tasa");
const bcv = document.getElementById("bcv");

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const resultadoFinal = document.getElementById("resultadoFinal");

const listaHistorial = document.getElementById("listaHistorial");

let historial = JSON.parse(localStorage.getItem("historial")) || [];

// Cargar datos guardados
window.onload = function () {

    tasa.value = localStorage.getItem("tasa") || "4.50";
    bcv.value = localStorage.getItem("bcv") || "732.47";

    mostrarHistorial();

}

// =====================
// CALCULAR
// =====================

document.getElementById("calcular").onclick = function(){

    let pesos = Number(cop.value.replace(/\./g,""));

    let valorTasa = parseFloat(tasa.value);

    let valorBCV = parseFloat(bcv.value);

    if(isNaN(pesos) || pesos<=0){

        alert("Ingrese un valor válido");

        return;

    }

    let pasoUno = pesos / valorTasa;

    let dolares = pasoUno / valorBCV;

    paso1.innerHTML =
        pesos.toLocaleString("es-CO")
        +" ÷ "
        +valorTasa
        +" = "
        +pasoUno.toFixed(2);

    paso2.innerHTML =
        pasoUno.toFixed(2)
        +" ÷ "
        +valorBCV
        +" = "
        +dolares.toFixed(2);

    resultadoFinal.innerHTML =
        dolares.toFixed(2)+" USD";

    localStorage.setItem("tasa",valorTasa);

    localStorage.setItem("bcv",valorBCV);

    historial.unshift({

        cop:pesos.toLocaleString("es-CO"),

        resultado:dolares.toFixed(2)+" USD"

    });

    if(historial.length>20){

        historial.pop();

    }

    localStorage.setItem("historial",JSON.stringify(historial));

    mostrarHistorial();

}

// =====================
// HISTORIAL
// =====================

function mostrarHistorial(){

    listaHistorial.innerHTML="";

    historial.forEach(item=>{

        let li=document.createElement("li");

        li.innerHTML=item.cop+" COP → "+item.resultado;

        listaHistorial.appendChild(li);

    });

}

// =====================
// COPIAR
// =====================

document.getElementById("copiar").onclick=function(){

navigator.clipboard.writeText(resultadoFinal.innerText);

alert("Resultado copiado");

}

// =====================
// WHATSAPP
// =====================

document.getElementById("whatsapp").onclick=function(){

let texto="Resultado: "+resultadoFinal.innerText;

window.open("https://wa.me/?text="+encodeURIComponent(texto));

}

// =====================
// LIMPIAR
// =====================

document.getElementById("limpiar").onclick=function(){

cop.value="";

paso1.innerHTML="";

paso2.innerHTML="";

resultadoFinal.innerHTML="0 USD";

}

// =====================
// FORMATO DE MILES
// =====================

cop.addEventListener("input",function(){

let valor=this.value.replace(/\D/g,"");

if(valor==""){

this.value="";

return;

}

this.value=Number(valor).toLocaleString("es-CO");

});
