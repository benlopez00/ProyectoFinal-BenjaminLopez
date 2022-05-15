//Proceso los datos y los mando a la ultima funcion
let tasaDelMedioDePago = 0;
function Procesamiento(){
    //agarro el boton de submit
    let botonMandarDatos = document.getElementById("calcular");
    //le doy un evento
    botonMandarDatos.addEventListener("click", ()=>{
        //tomo el ultimo input del menu desplegable que contiene las tasas de cada medio de pago
        let tipoTarjeta = parseInt(document.getElementById("tipoTarjeta").value);
        seleccionarMedioDePago(tipoTarjeta);
        //Sumo los precios del array
        listaDePrecios.forEach((precioItem)=>precioIngresado+=precioItem);
        console.log (precioIngresado);
        //mando los datos
        ((!isNaN(precioIngresado)) && (!isNaN(valorCuotas)) && (!isNaN(tasaDelMedioDePago))) ?  precioCalculo(precioIngresado, valorCuotas, tasaDelMedioDePago)  : ((Toastify({text: "Ingresa y Carga los numeros antes de seguir",duration: 4000,style: {background: 'linear-gradient(90deg, rgba(11,0,182,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}).showToast()) & (valorCuotas=0));
    })
    //agarro el boton para reiniciar
    let botonReiniciar = document.getElementById("reiniciar");
    //le doy evento
    botonReiniciar.addEventListener("click", ()=>{
        //recargo la pagina
        location.reload();
    })
}

function seleccionarMedioDePago(tipoTarjeta){
    if ((tipoTarjeta>0) && (tipoTarjeta<5)){
        const tasaDeTarjetas = JSON.parse (localStorage.getItem("tasaDeInteres"));
        const {visa, mastercard, cabal, amex} = tasaDeTarjetas;
        switch (tipoTarjeta) {
            case 1:
                return tasaDelMedioDePago = visa;
            case 2:
                return tasaDelMedioDePago = mastercard;
            case 3:
                return tasaDelMedioDePago = cabal;
            case 4:
                return tasaDelMedioDePago = amex;
        }
        console.log(`TASA del medio de pago con operador${tasaDelMedioDePago}`);
    }
}
