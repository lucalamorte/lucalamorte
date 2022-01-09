let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let enlace = document.getElementsByClassName("active");


boton.addEventListener("click", function(){
	if (contador == 0){
		enlaces.className = ('enlaces dos');
		contador = 1;
	}
	else{
		enlaces.classList.remove('dos');
		enlaces.className = ('enlaces uno');
		contador = 0;
	}
})

for (var i = 0 ; i < enlace.length; i++){
	enlace[i].addEventListener('click', function(){
		if (contador != 0){
			enlaces.classList.remove('dos');
			enlaces.className = ('enlaces uno');
			contador = 0;
		}
	})
}