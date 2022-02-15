const color = document.querySelector("#color");
const salida = document.querySelector("#salida");

//console.log(color.value);

color.addEventListener("input", () => {
  const valor = color.value;
  //console.log(seleccion);

  salida.innerHTML = valor;
  salida.style.background = valor;
  salida.style.color = "#fff";
});
