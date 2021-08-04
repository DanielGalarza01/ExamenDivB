/* El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta */

function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contPos=0;
    let porcPos=0;
    let contNeg=0;
    let porcNeg=0;
    let contDelta=0;
    let contAlfa=0;
    let contBeta=0;
    let contNinguna=0;
    let cepaMasEnc;
    let edadMayExt;
    let flag=1;
    let contArgDelta =0;

    for(let i=0 ; i<8; i++)
    {
        nacionalidad=prompt("Ingrese la nacionalidad 'argentina' o 'extranjero' ").toLowerCase();
        while(nacionalidad !="argentina" && nacionalidad != "extranjero")
        {
            nacionalidad=prompt("Error. Ingrese la nacionalidad 'argentina' o 'extranjero' ").toLowerCase();
        }

        resultado= prompt("Ingrese el resultado 'positivo' o 'negativo' ").toLowerCase();
        while( resultado!="positivo" && resultado != "negativo")
        {
            resultado= prompt("Ingrese el resultado 'positivo' o 'negativo' ").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese la edad entre 18 y 65"));
        while( isNaN(edad) || edad<18 || edad > 65)
        {
            edad = parseInt(prompt("Ingrese la edad entre 18 y 65"));
        }
        
        cepa = prompt("Ingrese la cepa 'delta','alfa','beta','ninguna'").toLowerCase();
        switch(resultado)
            {
            case "negativo":
                cepa=prompt("Ingrese ninguna").toLowerCase();
                while(cepa!="ninguna")
                {
                    cepa=prompt("Error.Ingrese ninguna").toLowerCase();
                }
                break;
            case "positivo":
            cepa = prompt("Ingrese la cepa 'delta','alfa','beta'").toLowerCase();    
            while(cepa!= "delta" && cepa != "alfa" && cepa != "beta")
                {
                    cepa = prompt("Ingrese la cepa 'delta','alfa','beta'").toLowerCase();
                }
                break;        
            }
        //a- Porcentaje de positivos
        
        if(resultado=="positivo")
        {
            contPos++;
        }
        //b- Porcentaje de negativos
        else
        {
            contNeg++;
        }
        //c- Cuál es la cepa más encontrada
        switch(cepa)
        {
            case "alfa":
                contAlfa++;
                break;
            case "beta":
                contBeta++;
                break;
            case "delta":
                contDelta++;
                if(nacionalidad=="argentina")
                {
                    contArgDelta++;
                }
            case "ninguna":
                contNinguna++;
                break;
        }
        //d- Edad del mayor extranjero contagiado

        if((flag || edadMayExt<edad)&& resultado=="positivo")
        {
            edadMayExt=edad;
            flag=0;
        }
    

    }
 //a- Porcentaje de positivos

 porcPos=contPos*100/8;

 //b- Porcentaje de negativos

 porcNeg=contNeg*100/8;

  //c- Cuál es la cepa más encontrada
  if(contAlfa>contBeta && contAlfa>contDelta)
  {
    cepaMasEnc="alfa";
  }
  else if(contBeta>=contAlfa && contBeta>contDelta)
  {
      cepaMasEnc="beta";
  }
  else
  {
      cepaMasEnc = "delta";
  }



 document.write("a- Porcentaje de positivos es de "+porcPos+"%.<br>");
 document.write("b- Porcentaje de negativos es de "+porcNeg+"%.<br>");
 document.write("c- La cepa más encontrada fue "+cepaMasEnc+".<br>");
 document.write("d- La edad del mayor extranjero contagiado "+edadMayExt+".<br>");
 document.write("e- La cantidad de personas argentinas contagiadas con la delta es "+contArgDelta+".<br>");
}
