/* Lógica */
/*
  1.0 - Selecionar todos os ponteiros;
  2.0 - Criar um setInterval de 1 segundo e chamar uma function que contenha o seguinte:
    2.1 - Uma variável com new Date();
    2.2 - Uma variável pegando os segundos atuais;
    2.3 - Uma variável pegando os minutos atuais;
    2.4 - Uma variável pegando as horas atuais;
  3.0 - Agora temos que transformar o tempo atual em graus, isso será feito com a seguinte fórmula:
    3.1 - Segundos para graus: (segundos / quantidade de segundos totais) * 360 + 90. Ex: (segundos / 60) * 360 + 90
    3.1 - Minutos para graus: (minutos / quantidade de minutos totais) * 360 + 90. Ex: (minutos / 60) * 360 + 90
    3.1 - Horas para graus: (horas / quantidade de horas totais) * 360 + 90. Ex: (horas / 12) * 360 + 90
    
    Obs 1: a cada segundo serão geradas as horas, os minutos e os segundos atuais, então o calculo será refeito sempre que houver alguma alteração, o que sempre ocorrerá com os segundos.
    Obs 2: Na fórmula o 360 vem de 360º, todo círculo possui 360º, ao percorrer isso conseguimos dar uma volta.
    Obs 3: Na fórmula o 90 vem dos 90º que definimos em todos os ponteiros como rotação inicial.
    Obs 4: Um dia tem 24 horas, mas relógios de parede trabalham com 12. Por isso as horas totais foram definidas como tal.
  
  4.0 - Só resta rotacionar cada ponteiro com seus respectivos graus, isso pode ser feito com a propriedade style;
*/

const ponteiroSegundos = document.querySelector(".relogio__ponteiro__segundo");
const ponteiroMinutos = document.querySelector(".relogio__ponteiro__minuto");
const ponteiroHoras = document.querySelector(".relogio__ponteiro__hora");

function girarRelogio() {
  const data = new Date();
  const segundos = data.getSeconds();
  const minutos = data.getMinutes();
  const horas = data.getHours();

  const segundosEmGraus = (segundos / 60) * 360 + 90;
  const minutosEmGraus = (minutos / 60) * 360 + 90;
  const horasEmGraus = (horas / 12) * 360 + 90;

  ponteiroSegundos.style.transform = `translate(-97%, -50%) rotate(${segundosEmGraus}deg)`;
  ponteiroMinutos.style.transform = `translate(-97%, -50%) rotate(${minutosEmGraus}deg)`;
  ponteiroHoras.style.transform = `translate(-97%, -50%) rotate(${horasEmGraus}deg)`;
}

setInterval(girarRelogio, 1000);
