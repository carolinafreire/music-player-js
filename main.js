function tocaSom(idTecla) {
  const elemento = document.querySelector(idTecla).play();

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  }
  else {
    console.log("Tecla não encontrada")
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla")

let contador = 0;

/*while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador]; 

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  contador = contador + 1;
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]; 

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (clique) {
    if (clique.code === "Space" || clique.code === "Enter") {
      tecla.classList.add("ativa");
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
}

}