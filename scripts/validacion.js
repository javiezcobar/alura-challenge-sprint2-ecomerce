const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const boton = document.querySelector('[data-submit]');


const usuarios = {
    javi: {email: "javi@alura.com", pass: "12345"}

}




boton.addEventListener("click", evento => {
    evento.preventDefault()
    let user = email.value.slice(0, email.value.indexOf('@'))

    if (user in usuarios){
        if(email.value === usuarios[user]["email"] && password.value === usuarios[user]["pass"]){
            window.location.href="../screens/Productos.html"
        }else{alert("email o contraseña incorrecta")}
    }else{alert("Usuario no registrado")}

});