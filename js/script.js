function ejecuta(){

	var elementos=document.querySelectorAll("#principal p, span");

		for(var i = 0; i < elementos.length; i++) {

			elementos[i].onclick=saludo;

	/*for (var i = 0; i < 5; i++) {

		var elementos=document.querySelectorAll("#principal p");
		elementos[i].onclick=saludo;

	/*var elementos = document.querySelectorAll("#principal p")[2].onclick=saludo; /*seleccionar un solo elemento*/

	/*document.querySelector("#principal p:last-child").onclick=saludo;

	/*for (var  i = 0; i < 5; i++) {
	var a = document.GetElementsbyClassName("dos")[i].onclick=saludo;

	/*for (var i = 0; i < 5; i++) {
	document.getElementsByTagName('p')[i].onclick=saludo; /*para un solo elemento*/
	/*document.getElementById("dos").onclick=saludo; /*para id*/
	}

}

function saludo(){
	alert("que hay de nuevo");
}

window.onload=ejecuta;
