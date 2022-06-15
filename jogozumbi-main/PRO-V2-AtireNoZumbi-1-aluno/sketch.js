var bg,bgImg;
var player, shooterImg, shooter_shooting,playerimg;
var cavernaimg,caverna
var chao

function preload(){
  shooterImg=loadImage("./assets/shooter_2.png")
playerimg=loadImage("./assets/shooter_1.png")
  shooter_shooting=loadImage("./assets/shooter_3.png")
  bgImg=loadImage("./assets/fundo.png")
  cavernaimg=loadImage("./assets/caverna.png")
  
}

function setup() {

  
  
  createCanvas(1200,600);

  //adicionando a imagem de fundo
  bg = createSprite(600,300,1200,600)
  bg.addImage("fundo.png",bgImg)

  caverna=createSprite(960,520)
  caverna.addImage("caverna.png",cavernaimg)
  caverna.scale =0.6

  //criando o sprite do jogador
  player = createSprite(50,500,50,50);
player.addImage("shooter_2.png",shooterImg)
player.scale=0.3

chao = createSprite(600,600,1200,1);
}

function draw() {
  background(0); 
 //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
 //if(player.y>490){
  if(keyDown("UP_ARROW")||touches.length>0){
    player.velocityY=-5

  }
  player.velocityY = player.velocityY+0.8
player.collide(chao)



  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+10
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-10
  }
  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
     player.addImage(shooter_shooting) }
      else if(keyWentUp("space")){
         player.addImage(shooterImg) }
  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço

  drawSprites();

}
