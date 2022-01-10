let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let enlace = document.getElementsByClassName("active");

const menuBtn = document.querySelector('.icono');
let menuOpen = false;

/*Animación: abrir/cerrar menú responsive al clickear ícono*/
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
});

/*Animación: cerrar menú responsive al clickear link*/
for (var i = 0 ; i < enlace.length; i++){
	enlace[i].addEventListener('click', function(){
		if (contador != 0){
			enlaces.classList.remove('dos');
			enlaces.className = ('enlaces uno');
			contador = 0;
		}
	})
};

/*Animación: menú hamburguesa que se transforma en X*/
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

/*Animación: menú hamburguesa que se transforma en X 2*/
for (var i = 0 ; i < enlace.length; i++){
	enlace[i].addEventListener('click', function(){
		if (menuOpen != true){
			menuBtn.classList.add('open');
			menuOpen = true;
		}
		else{
			menuBtn.classList.remove('open');
			menuOpen = false;
		}
	})
};