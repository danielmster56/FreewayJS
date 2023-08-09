//ator
let xAtorUm = 300;
let yAtorUm = 366;
let wAtorUm = 30;
let hAtorUm = 30;

//colisao de objetos
let colide = false;

//marcador de pontos
let placar = 0;
// mostra o ator
function desenhaAtor(){
  image(atorUm, xAtorUm, yAtorUm, wAtorUm, hAtorUm);
}

//movimento do ator
function movAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtorUm -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if (movimentoAtorY()){
        yAtorUm += 3; 
    }
  }
}

// collideRectCircle()
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function colideObjt(){
  for (let i = 0; i < imgCarros.length; i += 1){
    colide = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtorUm, yAtorUm, 15)
    if (colide){
      somColisao.play();
      colidiu();
      if (placar >0){
        placar -=1;
      }
    }
  }
}

function colidiu(){
  yAtorUm = 366;
}

function mostraPlacar(){
  textAlign(CENTER);
  textFont('Georgia');
  textSize(30);
  fill(color(255,21,133));
  text(placar, width/5, 27)
}

function marcaPonto(){
  if (yAtorUm < 15){
    somPonto.play();
    placar +=1;
    yAtorUm = 366;
  }
}

function movimentoAtorY (){
  return yAtorUm < 366;
}

function movimentoAtorL(){
  return xAtorUm >0;
}


