//VARIAVEIS DA BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//VARIAVEIS DE VELOCIDADE DA BOLINHA
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//VARIAVEIS RAQUETE

let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

//VARIAVEIS RAQUETE OPONENTE

let xRaqueteOponente = 585
let yRaqueteOponente = 150


let colidiu = false;

//CHANCE DE ERRO OPONENTE

let chanceDeErrar = 0;


//PLACAR DO JOGO


let meuPontos = 0;
let pontosOponente = 0;

//SONS DO JOGO

let raquetada;
let ponto;
let trilha;

function preload (){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop ();
  
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisaoBorda ();
  mostraRaquete (xRaquete, yRaquete);
  movimentaMinhaRaquete ();
  //verificaColisaoRaquete();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
}

function mostraBolinha (){
  circle(xBolinha,yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda (){
   if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x, y) {
    rect(x,y, raqueteComprimento, raqueteAltura);
  //Nas seguintes ordens = x, y,largura e altura
}


function movimentaMinhaRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
}
}

function verificaColisaoRaquete (){
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function verificaColisaoRaquete (x,y){
  colidiu = 
    collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }

  }

function movimentaRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar ();
}

function incluiPlacar (){
  textAlign (CENTER);
  textSize (16);
  stroke (255);
  
  
  
  //PINTA A COR DA LETRA DE BRANCO 
  // VALORES DE X, Y, LARGURA E COMPRIMENTO
  fill (color (255, 140, 0));
  rect (150, 10 , 40 , 20);
  fill (255);
  text (meuPontos, 170, 26);
  fill (color (255, 140, 0));
  rect (450, 10, 40 , 20);
  fill (255);
  text (pontosOponente, 470, 26);
}

function marcaPonto (){
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play ();
    //AÇÃO DO IF SE FOR VERDADEIRO
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play ();
  }
}
 
function calculaChanceDeErrar (){
  if (pontosOponente >= meuPontos){
    chanceDeErrar = +1
  if (chanceDeErrar >= 39){
    chanceDeErrar = 40
  }
  }else {
    chanceDeErrar -= 1 
    if (chanceDeErrar <= 35 ){
      chanceDeErrar = 35
    }
  }
}

