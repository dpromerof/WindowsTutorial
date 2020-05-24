function muestraVentanaChrome() {
  document.getElementById("ejemploVentana").src="ventanaChrome.png";
  inicializaColorFondoParrafosSeccion1();
  document.getElementsByTagName("p")[0].style.backgroundColor="#ffff00";
}
function muestraVentanaZoom () {
  document.getElementById("ejemploVentana").src="ventanaZoom.png";
  inicializaColorFondoParrafosSeccion1();
  document.getElementsByTagName("p")[1].style.backgroundColor="#ffff00";
}
function muestraVentanaBlogNotas () {
  document.getElementById("ejemploVentana").src="ventanaBlogDeNotas.png";
  inicializaColorFondoParrafosSeccion1();
  document.getElementsByTagName("p")[2].style.backgroundColor="#ffff00";
}
function muestraVentanaCalculadora () {
  document.getElementById("ejemploVentana").src="ventanaCalculadora.png";
  inicializaColorFondoParrafosSeccion1();
  document.getElementsByTagName("p")[3].style.backgroundColor="#ffff00";
}
function inicializaColorFondoParrafosSeccion1() {
  for (var i=0; i<4; i++) {
    document.getElementsByTagName("p")[i].style.backgroundColor="white";
  }
}
function inicializaColorFondoParrafosSeccion2() {
  for (var i=4; i<8; i++) {
    document.getElementsByTagName("p")[i].style.backgroundColor="white";
  }
}
function inicializaColorFondoParrafosSeccion3() {
  for (var i=8; i<11; i++) {
    document.getElementsByTagName("p")[i].style.backgroundColor="white";
  }
}
function muestraCursorFlecha() {
  document.getElementById("ejemploCursor").src="cursorArrow.png";
  inicializaColorFondoParrafosSeccion2();
  document.getElementsByTagName("p")[4].style.backgroundColor="#ffff00";
}
function muestraCursorTexto () {
  document.getElementById("ejemploCursor").src="cursorText.png";
  inicializaColorFondoParrafosSeccion2();
  document.getElementsByTagName("p")[5].style.backgroundColor="#ffff00";
}
function muestraCursorMano () {
  document.getElementById("ejemploCursor").src="cursorHand.png";
  inicializaColorFondoParrafosSeccion2();
  document.getElementsByTagName("p")[6].style.backgroundColor="#ffff00";
}
function muestraCursorRedimensionar () {
  document.getElementById("ejemploCursor").src="cursorRedimension.png";
  inicializaColorFondoParrafosSeccion2();
  document.getElementsByTagName("p")[7].style.backgroundColor="#ffff00";
}
function muestraBotonMinimizar () {
  document.getElementById("ejemploBotonVentana").src="botonVentanaMinimizar.png";
  inicializaColorFondoParrafosSeccion3();
  document.getElementsByTagName("p")[8].style.backgroundColor="#ffff00";
}
function muestraBotonMaximizar () {
  document.getElementById("ejemploBotonVentana").src="botonVentanaMaximizar.png";
  inicializaColorFondoParrafosSeccion3();
  document.getElementsByTagName("p")[9].style.backgroundColor="#ffff00";
}
function muestraBotonCerrar () {
  document.getElementById("ejemploBotonVentana").src="botonVentanaCerrar.png";
  inicializaColorFondoParrafosSeccion3();
  document.getElementsByTagName("p")[10].style.backgroundColor="#ffff00";
}
