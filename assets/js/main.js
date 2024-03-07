const posiblesJugadas = ['piedra', 'papel', 'tijera'];

let playerWins = 0;
let botWins = 0;

let botOption = 0;
let playerOption = 0;

const numeroJugadas = prompt("Ingrese el numedor de encuentros");

document.write('<table><tr><th>Player</th><th>Bot</th><th>Resultado</th></tr>');

for(let i = 0; i< numeroJugadas; i++){

  playerOption = prompt('Ingresa tu jugada: piedra / papel / tijera').toLowerCase();
  botOption = posiblesJugadas[Math.floor(Math.random() * posiblesJugadas.length)];

  document.write(`<tr><td>${playerOption}</td><td>${botOption}</td><td>`);
  if (playerOption === botOption){
    document.write('Empate')
  }

  else if(playerOption === 'piedra'){
    if(botOption === 'tijera'){
      document.write('Ganaste');
      playerWins++;
    }   
    else{
      document.write('Perdiste');
      botWins++;
    }
  }

  else if(playerOption === 'papel'){
    if(botOption === 'piedra'){
      document.write('Ganaste');
      playerWins++;
    }
    else{
      document.write('Perdiste');
      botWins++
    }
  }

  else if(playerOption === 'tijera'){
    if(botOption === 'papel'){
      document.write('Ganaste');
      playerWins++;
    }
    else{
      document.write('Perdiste');
      botWins++;
    }
  }
  document.write('</td></tr>');
}
document.write('</table>');


document.write('<h3>RESULTADO</h3>');
let mensaje = '';
if(playerWins > botWins){
  mensaje = 'Felicidades le ganaste a un bot.'
}
else if(botWins > playerWins){
  mensaje = 'Perdiste contra un bot.'
}
else{
  mensaje = 'Empataste...Eres un bot.'
}
document.write(`
<p>
${mensaje}...</p>

<div>Ganaste: ${playerWins}</div>
<div>Perdiste: ${botWins}</div>
`);