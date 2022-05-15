//Declaro variables globales
let listaDePrecios = [];
let precioTotal = 0;
let interesTotal = 0;
let costoCuota = 0;
let tasaDelPago = 0;
let interes = 0;
let valorCuotas = 0;
let precioIngresado = 0;

//Array de las tasas de interes de cada tarjeta. Se almacenan localmente
const tasasMensualArgentina = {
    visa:  0.03,         //3%
    mastercard: 0.032,   //3,2%
    cabal: 0.038,        //3.8%
    amex: 0.04,          //4%
}
const tasasMensualArgentinaJSON = JSON.stringify(tasasMensualArgentina);
localStorage.setItem("tasaDeInteres", tasasMensualArgentinaJSON);

Costos();
Cuotas();
Procesamiento();

/*------------------------------------------------------------*/ 

//Funcion que hace los ultimos calculos, llamada desde "procesamiento.js"
function precioCalculo(precio, cuota, tasaDelMedioDePago){
    for (let i = 0; i < cuota; i++){
        //al precio lo multiplico por la tasa y lo sumo al mes 1, el resultaldo se multiplica por tasa nuevamente y asi la cantidad de meses ingresados
        precio = precio + (precio * tasaDelMedioDePago);
        interes = precio - precioIngresado;
        console.log (precio);
        console.log (interes);
    }
    //Ajusta los precios y tasas a centavos o enteros
    precioTotal = precio.toFixed(2);
    interesTotal = interes.toFixed(2);
    costoCuota = (precio / cuota).toFixed(2);
    tasaDelPago = tasaDelMedioDePago*100;
    //Mando los resultados al HTML
    let precioId = document.getElementById("precio");
    let cuotasId = document.getElementById("cuotas");
    let interesId = document.getElementById("interes");
    
    precioId.innerHTML = `<p>El precio total del producto será de </p> <h2>$ ${precioTotal}</h2>`;
    cuotasId.innerHTML = `<p>A pagar en</p> <h2>${valorCuotas}</h2> <p>cuotas de </p> <h2>$ ${costoCuota}</h2>`;
    interesId.innerHTML = `<p>El interes total es de</p> <h2>$ ${interesTotal}</h2> <p>a una TEM de</p> <h2>% ${tasaDelPago}</h2>`
}



//API
const host = 'api.frankfurter.app';

async function primeraConversion(){
    const GbpUsd = await fetch(`https://${host}/latest?amount=1&from=GBP&to=USD`)
    const dataFinalUno = await GbpUsd.json();
    console.log(dataFinalUno)
        Toastify({
            text: `1 GBP = ${dataFinalUno.rates.USD} USD`,
            duration: 7000,
            style: {
                background: 'linear-gradient(90deg, rgba(11,0,182,1) 0%, rgba(24,176,0,1) 100%)',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"},
            position: `left`,
            gravity:`bottom`,
        }).showToast()
};


async function segundaConversion(){
    const UsdBrl = await fetch(`https://${host}/latest?amount=1&from=USD&to=BRL`);
    const dataFinalDos = await UsdBrl.json();
    console.log(dataFinalDos)
        Toastify({
            text: `1 USD = ${dataFinalDos.rates.BRL} BRL`,
            duration: 7000,
            style: {
                background: 'linear-gradient(90deg, rgba(24,176,0,1) 0%, rgba(249,255,0,1) 90%)',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"},
            position: `left`,
            gravity:`bottom`,
        }).showToast()
};

primeraConversion();
segundaConversion();



