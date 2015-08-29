function ejecuta(){
	
	for (var i=0; i < 5; i++) {
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