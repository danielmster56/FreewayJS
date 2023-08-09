function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw(){
  background(imagemFundo);
  desenhaAtor();
  desenhaCarro();
  movCarro();
  movAtor();
  zeroXdoCarro();
  colideObjt();
  mostraPlacar();
  marcaPonto();
  
}
