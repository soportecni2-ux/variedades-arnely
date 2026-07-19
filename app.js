// ================================
// VARIEDADES ARNELY PRO 2.0
// app.js
// ================================

const inputPesos = document.getElementById("pesos");
const inputTasa = document.getElementById("tasa");
const botonConvertir = document.getElementById("convertir");

const salidaUSD = document.getElementById("usd");
const salidaBS = document.getElementById("bs");

function formatearNumero(numero) {
    return Number(numero).toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function convertirMoneda() {

    const pesos = parseFloat(inputPesos.value);
    const tasa = parseFloat(inputTasa.value);

    if (isNaN(pesos) || isNaN(tasa) || tasa <= 0) {

        alert("Ingrese un valor y una tasa válida.");

        return;
    }

    const dolares = pesos / tasa;

    // BCV = 1 USD = 1 USD
    const bolivares = dolares;

    salidaUSD.textContent = "$ " + formatearNumero(dolares);

    salidaBS.textContent = formatearNumero(bolivares);
}

botonConvertir.addEventListener("click", convertirMoneda);

// Registrar Service Worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js")
            .then(() => {
                console.log("Service Worker registrado correctamente.");
            })
            .catch(error => {
                console.log("Error registrando Service Worker:", error);
            });

    });

}
