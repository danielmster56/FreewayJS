// listas
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 146, 210, 270, 318];
let wCarros = 50;
let hCarros = 40;

let velCarros = [6, 3, 6, 5, 7, 3.5];

//aplicando o loop "for i" pra repetir 
//os comandos usando os valroes das listas.

function desenhaCarro(){
  for (let i = 0; i < imgCarros.length; i ++){
    image(imgCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
  }
}
//aplicando o loop for i no movimento dos carros

function movCarro(){
  for (let i = 0; i < imgCarros.length; i ++){
    xCarros[i] -= velCarros[i];
  }
}

function zeroXdoCarro(){
  for (let i = 0; i < imgCarros.length; i ++){
    if (carCross(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function carCross (xCarros){
  return xCarros < -50;
}