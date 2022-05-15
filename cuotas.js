//input de las cuotas a pagar del usuario
function Cuotas(){
    //agarro el boton que ingresa el dato
    let botonCuotasAgregar = document.getElementById("agregar_Cuotas");
    //agarro el div donde se muestra el input
    let mostradorCuota = document.getElementById("mostradorCuota");
    //le doy el evento al boton
    botonCuotasAgregar.addEventListener("click", ()=>{
        //tomo el input
        valorCuotas = parseInt(document.getElementById("input_Cuotas").value);
        (isNaN(valorCuotas)) && ((Toastify({text: "🚫Ingresa un Numero",duration: 3000,style: {background: 'linear-gradient(344deg, rgba(113,0,12,1) 0%, rgba(198,0,0,1) 34%, rgba(255,0,5,1) 100%)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}).showToast()) & (valorCuotas=0));
        console.log(valorCuotas);
        //cuando lo sube lo muestro por pantalla
        mostradorCuota.innerHTML = `<p>${valorCuotas}</p>`;
        document.getElementById("input_Cuotas").value = "";
    });
    //--------------------------------------------------------------------//
    //agarro el boton que limpia el input
    let botonCuotasBorrar = document.getElementById("borrar_Cuotas");
    //le doy el evento
    botonCuotasBorrar.addEventListener("click", ()=>{
        //quito el valor anterior
        valorCuotas = 0;
        //no muestro nada por pantalla para que se vea que no hay ingreso activo
        mostradorCuota.innerHTML = `<p></p>`;
    })
}