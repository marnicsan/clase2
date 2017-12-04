/*
 *Debera poder ingresar un dia de la semana
 *Debera poder compararlo con todos los dias de la semana
 *Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 
 *'El dia es fin de semana';
 *En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

function validarDiaHabil(){
	var diasSemana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
	var dia=+prompt("Ingrese numero de dia de la semana: ")-1;
	var msj="";
	for(var i=0;i<diasSemana.length;i++){
		if(i==dia){
			if(i<5)
				msj="El día "+diasSemana[i]+" es día Hábil";
			else
				msj="El día "+diasSemana[i]+" es día No Hábil";
			break;
		}
	}
	document.getElementById("msj").innerText=msj;
}