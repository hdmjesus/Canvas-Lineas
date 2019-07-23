var d= document.getElementById('dibujo');
var lienzo= d.getContext("2d");
var lineas =30;
var l = 0;
var yi, xf;
var colorsito = "pink";

// Ciclos=Mientras algo sea verdad va a ocurrir algo

while (l<lineas)
{
    yi= 10* l;
    xf= 10* (l+ 1);
    dibujarlinea(colorsito,0 ,yi,xf,300);

    yi= 300-10*l;
    xf= 300 -10*(l+1)

    dibujarlinea(colorsito,300,yi,xf,0);


    l= l+1;

}

// for ( l= 0; l< lineas; l++)
// {
//     yi= 10* l;
//     xf= 10* (l+ 1)
//     dibujarlinea(colorsito,0 ,yi,xf,300);
// }

// En los ciclos l++ o l = l+1 lo que significa es que se le agrega un valor de
// 1 a la variable lineas por cada ciclo completado, es la manera de que el ciclos
// en algun momento se pueda detener

dibujarlinea(colorsito,1,1,1,299);
dibujarlinea(colorsito,1,299,299,299);


 function dibujarlinea(color ,xinicial, yinicial, xfinal, yfinal)
 {
     lienzo.beginPath();
     lienzo.strokeStyle= color;
     lienzo.moveTo(xinicial,yinicial);
     lienzo.lineTo(xfinal, yfinal)
     lienzo.stroke();
     lienzo.closePath()
 }
