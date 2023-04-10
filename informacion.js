function guardarDatos(){
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if(nombre==""){
        alert("Debe escribir su nombre");
        document.getElementById('name').focus();
    }
    if(email==""){
        alert("Debe escribir su email");
        document.getElementById('email').focus();
    }
    if(msg==""){
        alert("Por favor dejanos un mensaje :)");
        document.getElementById('msg').focus();
    }

    limpiar();
    

}

function limpiar(){
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('msg').value="";
}
