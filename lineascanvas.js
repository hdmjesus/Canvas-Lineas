var texto = document.getElementById('texto_lineas');
var boton= document.getElementById('botonsito');
var colordelineas= document.getElementById("bcolor")
boton.addEventListener("click", dibujoPorClick);

var d= document.getElementById('dibujo');
var lienzo= d.getContext("2d");
// Con esto lo que hacemos es crear una variable que con el atributo with espesifica
// el ancho de nuestro canvas
var ancho = d.width



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

 function dibujoPorClick()
 {
     // Esto es para borrar las lineas anteriores sin tener que recargar la pagina
     lienzo.clearRect(0,0,300,300);
     var xx = parseInt(texto.value);
     var lineas =xx;
     var l = 0;
     var yi, xf;
     var coñoo= colordelineas.value;
     var espacio = ancho/lineas;

     // Ciclos=Mientras algo sea verdad va a ocurrir algo

     while (l<lineas)
     {
         yi= espacio* l;
         xf= espacio* (l+ 1);
         dibujarlinea(coñoo,0 ,yi,xf,300);


         yi= 300-espacio*l;
         xf= 300 -espacio*(l+1)

         dibujarlinea(coñoo,300,yi,xf,0);




         l= l+1;
         // En los ciclos l++ o l = l+1 lo que significa es que se le agrega un valor de
         // 1 a la variable lineas por cada ciclo completado, es la manera de que el ciclos
         // en algun momento se pueda detener

     }

     // for ( l= 0; l< lineas; l++)
     // {
     //     yi= 10* l;
     //     xf= 10* (l+ 1)
     //     dibujarlinea(colorsito,0 ,yi,xf,300);
     // yi= 300-10*l;
     // xf= 300 -10*(l+1)
     //
     // dibujarlinea(colorsito,300,yi,xf,0);
     // }
 }

