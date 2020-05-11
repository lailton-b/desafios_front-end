/* Lógica */
/*
  1.0 - Crie 4 variáveis:
    1.1 - Variável teclas, irá conter todas as teclas;
    1.2 - Variável teclaLetra, sem valor por enquanto, mas futuramente vai armazenar a letra da tecla;
    1.3 - Variável sound, sem valor por enquanto, mas futuramente vai armazenar o nome do som a ser reproduzido;
    1.4 - Variável audio, sem valor por enquanto, mas futuramente vai armazenar o audio a ser tocado;
    
    OBS: você pode colocar o nome que quiser nas variáveis, eu nomeei por fins didáticos.

  2.0 - Aplique um forEach na variável teclas;
    2.1 - Em cada tecla adicione um event Listener de click;
    2.2 - O evento retornará uma função que chamarei de playSong, por ora vou apenas passar a tecla clicada como argumento.

  3.0 - Adicione o um event Listener de keydown no objeto window, ele retornará a seguinte função:
    3.1 - Aplique um forEach na variável teclas, assim como no passo 2.0;
    3.2 - Faça um querySelector na tecla e selecione a div ".tecla__som", depois pegue o texto e transforme em letras minúsculas, esse será a letra da tecla;
    3.3 - Coloque a letra da tecla dentro da variável teclaLetra;
    3.4 - Faça uma condição checando se a letra da tecla é a mesma que aquela que foi teclada, você pode ver o que foi teclado utilizando event.key;
    3.5 - Caso a condição seja verdadeira, retorne a função que chamarei de playSong, por ora vou apenas passar a tecla retornada pelo forEach como argumento.

  4.0 - Função playSong:
    4.1 - Adicione a classe active à tecla clicada/teclada;
    4.2 - Faça um setTimeout que remove a classe active da tecla após 300ms;
    4.3 - Use o querySelector na tecla e selecione a div ".tecla__som", depois pegue o texto e transforme em letras minúsculas, esse será o som;
    4.4 - Coloque o som dentro da variável sound;
    4.5 - Pegue a variável audio e transforme em um áudio, coloque o path absoluto e no lugar do nome do arquivo faça uma template string, a qual levará o valor da variável sound;
    4.6 - Toque o áudio com o método .play();
*/

const teclas = document.querySelectorAll(".tecla");
let teclaLetra;
let sound;
let audio;

function playSong(tecla) {
  tecla.classList.add("active");
  setTimeout(() => {
    tecla.classList.remove("active");
  }, 300);

  sound = tecla.querySelector(".tecla__som").innerText.toLowerCase();
  audio = new Audio(`assets/sounds/${sound}.wav`);
  audio.play();
}

teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => playSong(tecla));
});

window.addEventListener("keydown", () => {
  teclas.forEach((tecla) => {
    teclaLetra = tecla.querySelector(".tecla__letra").innerText.toLowerCase();
    if (event.key === teclaLetra) {
      playSong(tecla);
    }
  });
});
