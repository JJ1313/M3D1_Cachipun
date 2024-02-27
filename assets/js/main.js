console.log('Inicia el juego...');
const numeroJugadas = prompt("Ingrese el numedor de encuentros");
// const numeroJugadas = 3;


const posiblesJugadas = ['piedra', 'papel', 'tijera'];


let playerWins = 0;
let botWins = 0;

let botOption = 0;
let playerOption = 0;

for(let i = 0; i< numeroJugadas; i++){

  playerOption = prompt('Ingresa tu jugada: piedra / papel / tijera').toLowerCase();
  botOption = posiblesJugadas[Math.floor(Math.random() * posiblesJugadas.length)];

  console.log(playerOption + ',' + botOption);

  if (playerOption === botOption){
    console.log('Empate');
  }

  else if(playerOption === 'piedra'){
    if(botOption === 'tijera'){
      console.log('Ganaste');
      playerWins ++;
    }   
    else{
      console.log('Perdiste');
      botWins++;
    }
  }

  else if(playerOption === 'papel'){
    if(botOption === 'piedra'){
      console.log('Ganaste');
      playerWins++;
    }
    else{
      console.log('Perdiste');
      botWins++
    }
  }

  else if(playerOption === 'tijera'){
    if(botOption === 'papel'){
      console.log('Ganaste');
      playerWins++;
    }
    else{
      console.log('Perdiste');
      botWins++;
    }
  }
}
let mensaje = '';
if(playerWins > botWins){
  mensaje = 'Felicidades le ganaste a un bot'
}
else if(botWins > playerWins){
  mensaje = 'Perdiste contra un bot'
}
else{
  mensaje = 'Eres un bot... Empataste'
}
alert(`
${mensaje}...

Tu: ${playerWins} ganadas
Bot: ${botWins} ganadas
`);
