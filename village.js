// var z;
// for(var i=0; i<10; i++)
// {
//     z = random(-5, 5);
//     document.write(z + ", ");
// }

var vl= document.getElementById("villaLaura");
var paper = vl.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

var vaca = {
    url: "vaca.png", cargaOK: false, x: [], y: []
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
var cantidad = random(1, 50);

var pollo = {
    url: "pollo.png", cargaOK: false, x: [], y: []
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
var cantidad = random(4, 20);

var cerdo = {
    url: "cerdo.png", cargaOK: false, x: 0, y: 0
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
var cantidad = random(4, 20);


var fondo = {
    url: "tile.png", cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}


function dibujar()
{
    if(fondo.cargaOK)
    {
        paper.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(vaca.imagen, x, y);
    }
        }
    
    if(pollo.cargaOK)
    {   
        for(var p=0; p < cantidad; p++)
        {
            var xp = random(0, 8);
            var yp = random(0, 8);
            var xp = xp * 40;
            var yp = yp * 40;
            paper.drawImage(pollo.imagen, xp, yp);
        }
    }

    if(cerdo.cargaOK)
	{	
		var x = (random (0,7)*60);
		var y = (random (0,7)*60);
		cerdo.x = x;
		cerdo.y = y;
		paper.drawImage(cerdo.imagen , x , y);
    }        
}

function moverCerdo(x, y)
{ 
    paper.drawImage(cerdo.imagen, x, y);
}

function dibujarOtraVez()
{
    if(fondo.cargaOK)
	{
		paper.drawImage(fondo.imagen , 0 , 0);
	}
	 if(vaca.cargaOK)
	 {
	 	for( var v = 0; v < cantidad; v++)
		{
			paper.drawImage(vaca.imagen , vaca.x[v] , vaca.y[v]);
			
		}
	 }
	 if(pollo.cargaOK)
	 {
	 	for( var p = 0; p < cantidad; p++)
		{
			paper.drawImage(pollo.imagen , pollo.x[p] , pollo.y[p]);
			console.log(cantidad);
		}
	 }
}

document.addEventListener("keyup", moverTecla); 



function moverTecla(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarOtraVez();
            moverCerdo(cerdo.x, cerdo.y);
            cerdo.y = cerdo.y - movimiento
        break;
        case teclas.DOWN:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.y = cerdo.y + movimiento;
        break;
        case teclas.RIGHT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x + movimiento;
        break;
        case teclas.LEFT:
            dibujarOtraVez();
            moverCerdo(cerdo.x,cerdo.y);
            cerdo.x = cerdo.x - movimiento;
        break;
        

    }
}
function random(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}