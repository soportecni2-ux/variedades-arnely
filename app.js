// =====================================
// VARIEDADES ARNELY PRO 2.0
// app.js
// FASE 1
// =====================================

const cop = document.getElementById("cop");
const tasaCop = document.getElementById("tasaCop");
const tasaBcv = document.getElementById("tasaBcv");

const usd = document.getElementById("usd");
const bs = document.getElementById("bs");

const btnConvertir = document.getElementById("btnConvertir");

function formato(numero) {
    return Number(numero).toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function convertir() {

    const pesos = parseFloat(cop.value);
    const precioDolar = parseFloat(tasaCop.value);
    const bcv = parseFloat(tasaBcv.value);

    if (isNaN(pesos)) {
        alert("Ingrese el valor en pesos.");
        cop.focus();
        return;
    }

    if (isNaN(precioDolar) || precioDolar <= 0) {
        alert("Ingrese una tasa del dólar válida.");
        tasaCop.focus();
        return;
    }

    if (isNaN(bcv) || bcv <= 0) {
        alert("Ingrese una tasa BCV válida.");
        tasaBcv.focus();
        return;
    }

    // Conversión
    const dolares = pesos / precioDolar;
    const bolivares = dolares * bcv;

    usd.textContent = "$ " + formato(dolares);
    bs.textContent = formato(bolivares) + " Bs";
}

btnConvertir.addEventListener("click", convertir);

// Registrar Service Worker (si existe)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker registrado"))
            .catch(err => console.log("Service Worker no registrado:", err));
    });
}
