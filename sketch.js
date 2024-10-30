let palavra;

function setup() {
  createCanvas(400, 400); 
  palavra = palavraAleatoria();
 
}

function palavraAleatoria(){
   let palavras = ["Warzone", "Call", "Of", "Duty"];
  return random(palavras);
}

function inicializaCores(){
 background("black");
  fill("red")
  textSize(64);
  textAlign(CENTER, CENTER);
   
}

function palavraParcial(minimo,maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
 let texto = palavraParcial(0,width);
  text(texto, 200, 200);
  
  
  /*if(mouseX < 50){
  let palavra = "W"
  text(palavra, 200, 200);
}else if(mouseX <100){
  let palavra = "Wa"
  text(palavra, 200, 200)
  } else if(mouseX <150){
  let palavra = "War"
  text(palavra, 200, 200)
  } else if(mouseX <200){
  let palavra = "Warz"
  text(palavra, 200, 200)
  }else if(mouseX <250){
  let palavra = "Warzo"
  text(palavra, 200, 200)
  } else if(mouseX <300){
  let palavra = "Warzon"
  text(palavra, 200, 200)
  } else if(mouseX <350){
  let palavra = "Warzone"
  text(palavra, 200, 200)
  }  */
  
}