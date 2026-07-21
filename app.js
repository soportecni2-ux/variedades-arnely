// ======================================
// VARIEDADES ARNELY
// APP.JS
// PARTE 1
// ======================================

// ---------- FORMATO DE MILES ----------

function formatearMiles(input){

    let valor = input.value;

    valor = valor.replace(/\./g,"");
    valor = valor.replace(/\D/g,"");

    if(valor===""){
        input.value="";
        return;
    }

    input.value = Number(valor).toLocaleString("es-CO");

}

// ---------- REDONDEAR AL MILLAR ----------

function redondearMil(numero){

    return Math.round(numero/1000)*1000;

}

// ---------- FORMATO DE RESULTADOS ----------

function miles(numero){

    return Number(numero).toLocaleString("es-CO");

}

// ---------- EVENTO PESOS ----------

const txtPesos=document.getElementById("pesos");

txtPesos.addEventListener("input",function(){

    formatearMiles(this);

});


// ---------- SINCRONIZAR TASA ----------

document.getElementById("tasa1").addEventListener("input",function(){

    document.getElementById("tasa2").value=this.value;

});


// ---------- SINCRONIZAR BCV ----------

document.getElementById("bcv1").addEventListener("input",function(){

    document.getElementById("bcv2").value=this.value;

});

// ======================================
// CALCULADORA 1
// Pesos -> Bolívares -> Dólares
// ======================================

document.getElementById("calcular1").addEventListener("click", function () {

    let pesosTexto = document.getElementById("pesos").value;

    pesosTexto = pesosTexto.replace(/\./g, "");

    const pesos = parseFloat(pesosTexto);
    const tasa = parseFloat(document.getElementById("tasa1").value);
    const bcv = parseFloat(document.getElementById("bcv1").value);

    if (
        isNaN(pesos) ||
        isNaN(tasa) ||
        isNaN(bcv) ||
        tasa <= 0 ||
        bcv <= 0
    ) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    const bolivares = pesos / tasa;
    const dolares = bolivares / bcv;

    document.getElementById("resultadoBs").innerHTML =
        miles(Math.round(bolivares)) + " Bs";

    document.getElementById("resultadoUsd").innerHTML =
        dolares.toFixed(2) + " USD";

});

// ======================================
// CALCULADORA 2
// Dólares -> Bolívares -> Pesos
// ======================================

document.getElementById("calcular2").addEventListener("click", function () {

    const dolares = parseFloat(document.getElementById("dolares").value);
    const bcv = parseFloat(document.getElementById("bcv2").value);
    const tasa = parseFloat(document.getElementById("tasa2").value);

    if (
        isNaN(dolares) ||
        isNaN(bcv) ||
        isNaN(tasa) ||
        bcv <= 0 ||
        tasa <= 0
    ) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    const bolivares = dolares * bcv;

    let pesos = bolivares * tasa;

    // Redondear al millar más cercano
    pesos = redondearMil(pesos);

    document.getElementById("resultadoBs2").innerHTML =
        miles(Math.round(bolivares)) + " Bs";

    document.getElementById("resultadoCop").innerHTML =
        miles(pesos) + " COP";

});

// ======================================
// CALCULADORA 2
// Dólares -> Bolívares -> Pesos
// ======================================

document.getElementById("calcular2").addEventListener("click", function () {

    const dolares = parseFloat(document.getElementById("dolares").value);
    const bcv = parseFloat(document.getElementById("bcv2").value);
    const tasa = parseFloat(document.getElementById("tasa2").value);

    if (
        isNaN(dolares) ||
        isNaN(bcv) ||
        isNaN(tasa) ||
        bcv <= 0 ||
        tasa <= 0
    ) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    const bolivares = dolares * bcv;
    let pesos = bolivares * tasa;

    pesos = redondearMil(pesos);

    document.getElementById("resultadoBs2").innerHTML =
        miles(Math.round(bolivares)) + " Bs";

    document.getElementById("resultadoCop").innerHTML =
        miles(pesos) + " COP";

});


// ======================================
// BOTÓN LIMPIAR 1
// ======================================

document.getElementById("limpiar1").addEventListener("click", function(){

    document.getElementById("pesos").value="";
    document.getElementById("tasa1").value="";
    document.getElementById("bcv1").value="";

    document.getElementById("tasa2").value="";
    document.getElementById("bcv2").value="";

    document.getElementById("resultadoBs").innerHTML="0 Bs";
    document.getElementById("resultadoUsd").innerHTML="0 USD";

});


// ======================================
// BOTÓN LIMPIAR 2
// ======================================

document.getElementById("limpiar2").addEventListener("click", function(){

    document.getElementById("dolares").value="";
    document.getElementById("tasa1").value="";
    document.getElementById("bcv1").value="";

    document.getElementById("tasa2").value="";
    document.getElementById("bcv2").value="";

    document.getElementById("resultadoBs2").innerHTML="0 Bs";
    document.getElementById("resultadoCop").innerHTML="0 COP";

});


// ======================================
// COPIAR 1
// ======================================

document.getElementById("copiar1").addEventListener("click", function(){

    const texto=`VARIEDADES ARNELY

Pesos: ${document.getElementById("pesos").value}

Tasa: ${document.getElementById("tasa1").value}

BCV: ${document.getElementById("bcv1").value}

Bolívares: ${document.getElementById("resultadoBs").innerText}

Dólares: ${document.getElementById("resultadoUsd").innerText}`;

    navigator.clipboard.writeText(texto);

    alert("Resultado copiado.");

});


// ======================================
// COPIAR 2
// ======================================

document.getElementById("copiar2").addEventListener("click", function(){

    const texto=`VARIEDADES ARNELY

Dólares: ${document.getElementById("dolares").value}

BCV: ${document.getElementById("bcv2").value}

Tasa: ${document.getElementById("tasa2").value}

Bolívares: ${document.getElementById("resultadoBs2").innerText}

Pesos: ${document.getElementById("resultadoCop").innerText}`;

    navigator.clipboard.writeText(texto);

    alert("Resultado copiado.");

});


// ======================================
// WHATSAPP 1
// ======================================

document.getElementById("whatsapp1").addEventListener("click", function(){

    const texto=`VARIEDADES ARNELY

Pesos: ${document.getElementById("pesos").value}

Tasa: ${document.getElementById("tasa1").value}

BCV: ${document.getElementById("bcv1").value}

Bolívares: ${document.getElementById("resultadoBs").innerText}

Dólares: ${document.getElementById("resultadoUsd").innerText}`;

    window.open("https://wa.me/?text="+encodeURIComponent(texto));

});


// ======================================
// WHATSAPP 2
// ======================================

document.getElementById("whatsapp2").addEventListener("click", function(){

    const texto=`VARIEDADES ARNELY

Dólares: ${document.getElementById("dolares").value}

BCV: ${document.getElementById("bcv2").value}

Tasa: ${document.getElementById("tasa2").value}

Bolívares: ${document.getElementById("resultadoBs2").innerText}

Pesos: ${document.getElementById("resultadoCop").innerText}`;

    window.open("https://wa.me/?text="+encodeURIComponent(texto));

});
