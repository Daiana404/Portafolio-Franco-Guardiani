function obtenerDatos() {

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('name').value;
    const msg = document.getElementById('msg').value;

    if (nombre.length == 0) {
        alert("Please enter your name");
        return;
    }

    if (email.length ==0) {
        alert('An email address is expected');
        return;
    }

    if (msg.length == 0) {
        alert('Please enter your message');
        return;
    }

    

    alert("The information was saved correctly. Good morning " + nombre);
    limpiar();

}




function limpiar(){
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('msg').value="";
}


/* const email = document.getElementById('email').value;

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Se espera un email");
    }else{
        email.setCustomValidity("");
    }
});

const name = document.getElementById('name').value;

name.addEventListener("input", function(event){
    if(name.validity.valueMissing){
        name.setCustomValidity("Se espera un name");
    }else{
        name.setCustomValidity("");
    }
}); */
