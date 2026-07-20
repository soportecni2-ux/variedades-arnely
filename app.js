// ===============================
// VARIEDADES ARNELY PRO 2.0
// Calculadora de Envíos a Venezuela
// ===============================

const cop = document.getElementById("cop");
const tasaCop = document.getElementById("tasaCop");
const tasaBcv = document.getElementById("tasaBcv");

const bs = document.getElementById("bs");
const usd = document.getElementById("usd");

const btnConvertir = document.getElementById("btnConvertir");

function formato(numero) {
    return Number(numero).toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

btnConvertir.addEventListener("click", () => {

    const pesos = parseFloat(cop.value);
    const tasa = parseFloat(tasaCop.value);
    const bcv = parseFloat(tasaBcv.value);

    if (isNaN(pesos) || isNaN(tasa) || isNaN(bcv)) {
        alert("Complete todos los campos.");
        return;
    }

    // PASO 1
    // Pesos ÷ Tasa = Bolívares
    const bolivares = pesos / tasa;

    // PASO 2
    // Bolívares ÷ BCV = Dólares
    const dolares = bolivares / bcv;

    bs.textContent = formato(bolivares) + " Bs";
    usd.textContent = "$ " + formato(dolares);

});

// Registrar Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
