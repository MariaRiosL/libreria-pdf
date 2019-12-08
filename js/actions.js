function Login() {
	//body...
	var us = document.getElementById('Us').value;
	var pass = document.getElementById('pass').value;

	if(us == "Admin" && pass == "123"){
		alert("Bienvenidos");
	}else{
		alert("Error");
	}
}

function Inicio(){
	window.location = "./pages/Inicio.html";
}