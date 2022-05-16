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



//APIs
const hostFiat = 'https://api-dolar-argentina.herokuapp.com/api/';
async function primeraConversion(endpoint){
    const conversion = await fetch(`${hostFiat}${endpoint}`)
    const dataFinalUno = await conversion.json();
    console.log(dataFinalUno);

    let nodoFiat = document.createElement("p");
    nodoFiat.innerHTML = `$ ${dataFinalUno.venta}`;

    let fiatHtml = document.getElementById(`${endpoint}`);
    fiatHtml.appendChild(nodoFiat);
};
primeraConversion("dolaroficial");
primeraConversion("dolarblue");
primeraConversion("dolarbolsa");
primeraConversion("euro/nacion");
primeraConversion("real/nacion");

const hostCripto = `https://criptoya.com/api/bitso`;
async function segundaConversion(moneda, fiat, cantidad){
    const conversion = await fetch(`${hostCripto}/${moneda}/${fiat}/${cantidad}`);
    const dataFinalDos = await conversion.json();
    console.log(dataFinalDos);

    let nodoCripto = document.createElement("p");
    nodoCripto.innerHTML = `$ ${dataFinalDos.ask}`;

    let criptoHtml = document.getElementById(`${moneda}`);
    criptoHtml.appendChild(nodoCripto);
};
segundaConversion(`btc`,`usd`,`0.1`);
segundaConversion(`eth`,`usd`,`0.1`);
segundaConversion(`usdt`,`ars`,`0.1`);


