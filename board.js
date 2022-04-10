var cuadrito = document.getElementById("areaDelDibujo");
var lienzo = cuadrito.getContext("2d");
var colorPincel = "black";
var pos = {x: 0, y: 0};

document.addEventListener("mousemove", dibujo);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

function setPosition(l)
{
    pos.x = l.clientX;
    pos.y = l.clientY;
}

function dibujo(l)
{
    if (l.buttons !== 1) return;

    lienzo.beginPath();
    lienzo.strokeStyle = colorPincel;
    lienzo.lineWidth = 3;
    lienzo.moveTo(pos.x, pos.y);
    setPosition(l);
    lienzo.lineTo(pos.x, pos.y);
    lienzo.stroke();
    lienzo.closePath();
}

//teclas

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};


document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("areaDelDibujo");
var papel = cuadrito.getContext("2d");
var x = 400;
var y = 250;

dibujoLinea("red", x-1, y-1, x+1, y+1, papel);
function dibujoLinea(color, Xinicial, Yinicial, Xfinal, Yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5
    lienzo.moveTo(Xinicial, Yinicial);
    lienzo.lineTo(Xfinal, Yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujoLinea("blue", x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujoLinea("red", x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            dibujoLinea("green", x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        case teclas.LEFT:
            dibujoLinea("yellow", x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        default:
            alert("otra tecla xD");
        break;

    }
       
}
function eraser()
{
    window.location.reload();
}


// function eraser()
//     {  
//         lienzo.globalCompositeOperation = "destination-out";
//         lienzo.strokeStyle = colorPincel;
//         lienzo.globalCompositeOperation = "source-over";
//     }
