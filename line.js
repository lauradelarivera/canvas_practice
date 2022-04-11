var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
// alert(ancho);
var lienzo = d.getContext("2d");


function dibujoLinea(color, Xinicial, Yinicial, Xfinal, Yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xinicial, Yinicial);
    lienzo.lineTo(Xfinal, Yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf; 
    var xi, yf;
    var espacio = ancho / lineas;

    for(l=0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        xi = espacio * l;
        yf = espacio * (l + 1);

        dibujoLinea("blue", xi, 0, ancho, yf);
        dibujoLinea("red", 0, yi, xf, ancho);
        console.log("linea " + 1);
        
    }

    // dibujoLinea("black", 1, 1, 1, 300);
    // dibujoLinea("black", 1, 299, 299, 299);
}