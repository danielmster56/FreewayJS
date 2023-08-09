let imagemFundo; //1 variavel para cada imagem
let atorUm; 
let carro1;
let carro2;
let carro3;
//sons
let somTrilha;
let somColisao;
let somPonto;


function preload(){
  //imagens
  imagemFundo= loadImage("images/estrada.png") 
  atorUm     = loadImage ("images/ator-1.png");
  carro1     = loadImage ("images/carro-1.png");
  carro2     = loadImage ("images/carro-2.png");
  carro3     = loadImage ("images/carro-3.png");
  imgCarros = [carro1, carro2, carro3, carro1, carro2, carro3];
  //sons
  somTrilha = loadSound('som/trilha.mp3');
  somPonto = loadSound('som/pontos.wav');
  somColisao = loadSound('som/colidiu.mp3');
}