//Input de precios del usuario
function Costos(){
    //agarro el primer boton que va a sumar los inputs a un array
    let botonCostosAgregar = document.getElementById("agregar_Costos");
    //agarro el div donde de mostraran los inputs
    let mostradorPrecio = document.getElementById("mostradorPrecio");
    //agrego evento click al boton
    botonCostosAgregar.addEventListener("click", ()=>{
        //tomo los inputs
        let valorCostos = parseInt(document.getElementById("input_Costos").value);
        console.log(valorCostos);
        //Los sumo al array
        (!isNaN(valorCostos)) ?  listaDePrecios.push(parseInt(valorCostos)) : (Toastify({text: "🚫Ingresa un Numero",duration: 3500,style: {background: 'linear-gradient(344deg, rgba(113,0,12,1) 0%, rgba(198,0,0,1) 34%, rgba(255,0,5,1) 100%)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}).showToast());
        console.log(listaDePrecios);
        //los muestro en la pantalla separados por "+" para que el usuario vea sus inputs
        mostradorPrecio.innerHTML = listaDePrecios.join(`+`);
        document.getElementById("input_Costos").value = "";
    });
    //--------------------------------------------------------------------//
    //agarro el segundo boton que borrara los ultimos inputs del usuario
    let botonCostosBorrar = document.getElementById("borrar_Costos");
    //agrego el evento
    botonCostosBorrar.addEventListener("click", ()=>{
        //pop borra el ultimo elemento del array
        listaDePrecios.pop();
        //vuelvo a mostrar el array por pantalla pero esta vez actualizado
        mostradorPrecio.innerHTML = listaDePrecios.join(`+`);
        console.log(listaDePrecios);
    })
}


