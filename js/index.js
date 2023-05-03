function ingresarData() {
    var user = document.querySelector("#usuario").value;
    var error = document.querySelector(".error");

    var usuario = user;

    if (user == usuario){
        mostrarSorpresa();
    } else {
        console.log("Incorrecto, pruebe a poner mayuscula en la primera letra");
        error.style.display = "block"
        error.innerHTML = "Incorrecto, pruebe a poner mayuscula en la primera letra";
    }
}

function mostrarSorpresa() {
    var contenedor = document.querySelector("#main");
 
    contenedor.innerHTML =
        "<div style='text-align:center'>" +
        "<h1 style='font-size:70px'>" + miPerfil[1] + "</h1>" +
        "<img style='width:100%' src=" + miPerfil[0] + ">" +
        "</div>";
    }



var miPerfil = [
    "img/meme.webp",
    "FELIZ CUMPLEE 🥳🥳"
]

const audio = new Audio ("audio/happy.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});