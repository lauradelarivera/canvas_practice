var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
lineas = 30;
var l = 0;
var yi, xf; 
var xi, yf;

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    xi = 10 * l;
    yf = 10 * (l + 1);

    dibujoLinea("blue", xi, 0, 300, yf);
    dibujoLinea("red", 0, yi, xf, 300);
    console.log("linea " + 1);
    l++
}

dibujoLinea("black", 1, 1, 1, 300);
dibujoLinea("black", 1, 299, 299, 299);

function dibujoLinea(color, Xinicial, Yinicial, Xfinal, Yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xinicial, Yinicial);
    lienzo.lineTo(Xfinal, Yfinal);
    lienzo.stroke();
    lienzo.closePath();
}