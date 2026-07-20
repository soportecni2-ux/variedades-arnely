// ======================================
// VARIEDADES ARNELY
// Calculadora de Envíos
// ======================================

// ---------- Funciones ----------

function formatearMiles(input) {
    let valor = input.value.replace(/\./g, "").replace(/\D/g, "");

    if (valor === "") {
        input.value = "";
        return;
    }

    input.value = Number(valor).toLocaleString("es-CO");
}

function redondearMil(valor) {
    return Math.round(valor / 1000) * 1000;
}

// ======================================
// CALCULADORA 1
// Pesos -> Bolívares -> Dólares
// ======================================

document.getElementById("pesos").addEventListener("input", function () {
    formatearMiles(this);

    const pesos = parseFloat(document.getElementById("pesos").value);
    const tasa = parseFloat(document.getElementById("tasa1").value);
    const bcv = parseFloat(document.getElementById("bcv1").value);

    if (isNaN(pesos) || isNaN(tasa) || isNaN(bcv)) {
        alert("Complete todos los campos.");
        return;
    }

    const bolivares = pesos / tasa;
    const dolares = bolivares / bcv;

    document.getElementById("resultadoBs").innerHTML =
        formato(Math.round(bolivares)) + " Bs";

    document.getElementById("resultadoUsd").innerHTML =
        dolares.toFixed(2) + " USD";
};

// Copiar resultado 1

document.getElementById("copiar1").onclick = function () {

    const texto =
`VARIEDADES ARNELY

Pesos: ${document.getElementById("pesos").value}

Tasa: ${document.getElementById("tasa1").value}

BCV: ${document.getElementById("bcv1").value}

Bolívares: ${document.getElementById("resultadoBs").innerText}

Dólares: ${document.getElementById("resultadoUsd").innerText}`;

    navigator.clipboard.writeText(texto);

    alert("Resultado copiado.");
};

// WhatsApp 1

document.getElementById("whatsapp1").onclick = function () {

    const texto =
`VARIEDADES ARNELY

Pesos: ${document.getElementById("pesos").value}

Tasa: ${document.getElementById("tasa1").value}

BCV: ${document.getElementById("bcv1").value}

Bolívares: ${document.getElementById("resultadoBs").innerText}

Dólares: ${document.getElementById("resultadoUsd").innerText}`;

    window.open("https://wa.me/?text=" + encodeURIComponent(texto));
};

// Limpiar 1

document.getElementById("limpiar1").onclick = function () {

    document.getElementById("pesos").value = "";
    document.getElementById("tasa1").value = "";
    document.getElementById("bcv1").value = "";

    document.getElementById("resultadoBs").innerHTML = "0";
    document.getElementById("resultadoUsd").innerHTML = "0";

};

// ======================================
// CALCULADORA 2
// Dólares -> Bolívares -> Pesos
// ======================================

document.getElementById("calcular2").onclick = function () {

    const dolares = parseFloat(document.getElementById("dolares").value);
    const bcv = parseFloat(document.getElementById("bcv2").value);
    const tasa = parseFloat(document.getElementById("tasa2").value);

    if (isNaN(dolares) || isNaN(bcv) || isNaN(tasa)) {
        alert("Complete todos los campos.");
        return;
    }

    const bolivares = dolares * bcv;

    let pesos = bolivares * tasa;

    pesos = redondearMil(pesos);

    document.getElementById("resultadoBs2").innerHTML =
        formato(Math.round(bolivares)) + " Bs";

    document.getElementById("resultadoCop").innerHTML =
        formato(pesos) + " COP";

};

// Copiar 2

document.getElementById("copiar2").onclick = function () {

    const texto =
`VARIEDADES ARNELY

Dólares: ${document.getElementById("dolares").value}

BCV: ${document.getElementById("bcv2").value}

Tasa: ${document.getElementById("tasa2").value}

Bolívares: ${document.getElementById("resultadoBs2").innerText}

Pesos: ${document.getElementById("resultadoCop").innerText}`;

    navigator.clipboard.writeText(texto);

    alert("Resultado copiado.");

};

// WhatsApp 2

document.getElementById("whatsapp2").onclick = function () {

    const texto =
`VARIEDADES ARNELY

Dólares: ${document.getElementById("dolares").value}

BCV: ${document.getElementById("bcv2").value}

Tasa: ${document.getElementById("tasa2").value}

Bolívares: ${document.getElementById("resultadoBs2").innerText}

Pesos: ${document.getElementById("resultadoCop").innerText}`;

    window.open("https://wa.me/?text=" + encodeURIComponent(texto));

};

// Limpiar 2

document.getElementById("limpiar2").onclick = function () {

    document.getElementById("dolares").value = "";
    document.getElementById("bcv2").value = "";
    document.getElementById("tasa2").value = "";

    document.getElementById("resultadoBs2").innerHTML = "0";
    document.getElementById("resultadoCop").innerHTML = "0";

};
