/* Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento */

function mostrar()
{
	let origen;
	let cant;
	let costo;
	let contAsia=0;
	let acumAsia=0;
	let promVacAsia;
	let acumEuropa=0;
	let acumUsa=0;
	let origenMas;


	for(let i=0; i<10 ; i++)
	{
		origen=prompt("Ingrese el origen").toLowerCase();
		while( origen!="asia" && origen != "europa" && origen != "usa")
		{
			origen=prompt("Error. Ingrese el origen").toLowerCase();
		}

		cant= parseInt(prompt("Ingrese la cantidad de vacunas"));
		while( isNaN(cant) || cant<1)
		{
			cant= parseInt(prompt("Error. Ingrese la cantidad de vacunas"));
		}

		costo = parseInt(prompt("Ingrese el costo del vuelo"));
		while( isNaN(costo) || costo<1000000 || costo>5000000)
		{
			costo = parseInt(prompt("Error. Ingrese el costo del vuelo"));
		}

		//a- El origen que envió mayor cantidad de vacunas
		switch(orgen)
		{
			case "asia":
				acumAsia+=cant;
				contAsia++;
				break;
			case "europa":
				acumEuropa+=cant;
				break;
			case "usa":
				acumUsa+=cant;
				break;
		}




	}
//a- El origen que envió mayor cantidad de vacunas

	if(acumAsia>acumEuropa&&acumAsia>acumUsa)
	{
		origenMas="Asia";
	}
	else if(acumEuropa>=acumAsia&&acumEuropa>acumUsa)
	{
		origenMas="Europa";
	}
	else{
		origenMas="USA";
	}
//b- El promedio de vacunas llegadas de Asia

promVacAsia=acumAsia/contAsia;



}
