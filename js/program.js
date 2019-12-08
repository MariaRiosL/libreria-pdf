this.logueado=false;

$("#entrar").click(function(){
	if ($("#usuario").val()=="Admin" && $("#contraseña").val()=="123"){
		logueado=true;
		if (logueado==true) {
			window.location="./pages/inicio.html"
		}
	}else{
		Swal.fire('Error');
	}
});

window.addEventListener('load', function(){
$('.container').fadeIn(1000);
});

$("#Galeria").click(function(){
window.location="../pages/Galeria.html"
});

$("#PDF").click(function(){
window.location="../pages/PDF.html"
});

$("#prueba").click(function(){
window.location="../pages/prueba.html"
});

$("#Salir").click(function(){
window.location="../index.html"
});
