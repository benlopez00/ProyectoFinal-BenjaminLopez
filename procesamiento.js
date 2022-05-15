//Proceso los datos y los mando a la ultima funcion
function Procesamiento(){
    //agarro el boton de submit
    let botonMandarDatos = document.getElementById("calcular");
    //le doy un evento
    botonMandarDatos.addEventListener("click", ()=>{
        //onclick event
        //tomo el ultimo input del menu desplegable que contiene las tasas de cada medio de pago
        let tipoTarjeta = parseInt(document.getElementById("tipoTarjeta").value);
        let tasaDelMedioDePago = 0;
        (tipoTarjeta>0 && tipoTarjeta<5) && seleccionarMedioDePago();
        function seleccionarMedioDePago(){
            const tasaDeTarjetas = JSON.parse (localStorage.getItem("tasaDeInteres"));
            const {visa, mastercard, cabal, amex} = tasaDeTarjetas;
            switch (tipoTarjeta) {
                case 1:
                    tasaDelMedioDePago = visa;
                    break;
                case 2:
                    tasaDelMedioDePago = mastercard;
                    break;
                case 3:
                    tasaDelMedioDePago = cabal;
                    break;
                case 4:
                    tasaDelMedioDePago = amex;
                    break;
            }
            console.log(`TASA del medio de pago con operador${tasaDelMedioDePago}`);
        }
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


