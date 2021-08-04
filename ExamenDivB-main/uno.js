/* Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada */
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let flag = 1;
	let flag1 = 1;
	let sexo;
	let acumEdadRusa = 0;
	let contRusa = 0;
	let promEdadRusa;
	let nombreMujMasEdad;
	let vacMujMasEdad;
	let mujerMasEdad=0;
	let acumVacAmericana= 0;
	let porcMayVacAmer =0;
	let acumEdadMayores = 0;
	let acumVacunados = 0;
	let acumVacDosDosis = 0;
	let porcVacDosDosis;
	let vacunaMenosDada;
	let contVacAmericana = 0;
	let contVacRusa = 0;
	let contVacChina = 0;


	do
	{
	nombre = prompt("Ingrese su nombre").toLowerCase();
	while( nombre.length<=3 || nombre.length>=10 || !(isNaN(nombre)))
		{
			nombre = prompt("Error. Ingrese su nombre").toLowerCase();
		}
	
	edad = parseInt(prompt("Ingrese su edad"));
	while(isNaN(edad)|| edad<12)
	{
		edad = parseInt(prompt("Error. Ingrese su edad"));
	}
	if(edad>=12 && edad<=17)
	{
		vacuna = prompt("Sólo permitida la vacuna americana. ingrese americana");
		while(vacuna!="americana")
		{
			vacuna = prompt("Error. Sólo permitida la vacuna americana. ingrese americana");
		}
	}
	else
	{
		vacuna = prompt("Ingrese el tipo de vacuna");
		while(vacuna!="rusa" && vacuna!="americana" && vacuna!= "china")
		{
			vacuna = prompt("Error. Ingrese el tipo de vacuna");
		}
	}
	
	dosis = prompt("Ingrese 'p' para primera o 's' para segunda de acuerdo a su dosis aplicada");
	while(dosis!="p"&& dosis!="s")
	{
		dosis = prompt("Error. Ingrese 'p' para primera o 's' para segunda de acuerdo a su dosis aplicada");
	}

	sexo = prompt("Ingrese su sexo: 'f' o 'm' ").toLowerCase();
	while( sexo!= "f" && sexo!= "m")
	{
		sexo = prompt("Error. Ingrese su sexo: 'f' o 'm' ").toLowerCase();
	}
	//a- Promedio de edad de los que se vacunaron con la rusa
	if(vacuna=="rusa")
	{
		acumEdadRusa+= edad;
		contRusa++;
	}	
	//b- Nombre y vacuna de la mujer con más edad
	if(flag1 || mujerMasEdad<edad)
	{
		mujerMasEdad=edad;
		nombreMujMasEdad=nombre;
		vacMujMasEdad=vacuna;
		flag1 = 0;
	}
	//c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
	if(vacuna=="americana")
	{
		acumVacAmericana++;
		if(edad>=18)
		{
		acumEdadMayores++;
		}
	}

	//d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
	acumVacunados++;
	if(dosis=="p")
	{
		acumVacDosDosis++;
	}
	//e- Vacuna menos inoculada
	switch(vacuna)
	{
		case "americana":
			contVacAmericana++;
			break;
		case "rusa":
			contVacRusa++;
			break;
		case "china":
			contVacChina++;
			break;

	}

		seguir = prompt("Desea ingresar más datos?  's' o 'n'").toLowerCase();
	}while(seguir == "s");	
}


//a- Promedio de edad de los que se vacunaron con la rusa
if(flag)
{
	promEdadRusa=0;
}
else
{
promEdadRusa = acumEdadRusa/contRusa;
}

//c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad

porcMayVacAmer=acumEdadMayores*100/acumVacAmericana;
//d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados

porcVacDosDosis=acumVacDosDosis*100/acumVacunados;

//e- Vacuna menos inoculada

if(contVacAmericana<contVacChina && contVacAmericana<contVacRusa)
{
	vacunaMenosDada="americana";
}
else if ( contVacRusa<=contVacAmericana&& contVacRusa<contVacChina)
{
	vacunaMenosDada="rusa";
}
else
{
	vacunaMenosDada="china";
}


document.write("a- El promedio de edad de los que se vacunaron con la rusa es "+promEdadRusa+".<br>");
document.write("b- El nombre de la mujer con más edad es "+nombreMujMasEdad+"y su vacuna fue "+vacMujMasEdad+".<br>");
document.write("c- De las personas que recibieron la vacuna americana el porcentaje que son mayores de edad es de "+porcMayVacAmer+" %.<br>");
document.write("d- El porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados es del "+porcVacDosDosis+"%.<br>");
document.write("e- La vacuna menos inoculada es "+vacunaMenosDada+".<br>");