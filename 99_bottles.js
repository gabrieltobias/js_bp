//Cria váriavel
var saida = "bottles of beer on the wall,  bottles of beer";
//Quebra em duas partes
saida_r = saida.split(",");
//Cria a segunda variavel com a segunda parte
var saida2 = "Take one down and pass it around, bottles of beer on the wall."
saida2_r = saida2.split(",");

//Cria uma table HTML
var table = document.createElement('table');
table.style = 'width:500px;border:1px solid #CCC;';
var tbody = document.createElement('tbody');

//Cria o loop para replicar 98 vezes
for(let i = 98; i >= 1; i--){
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.style = 'width:100px;border:1px solid #CCC;';
  let span = document.createElement('span');
  //Concatena as info e imprime na tela
  span.innerHTML = (i+1) +' '+ saida_r[0] + ' ' +(i+1) +  saida_r[1] + '<br>' + saida2_r[0] + ' ' + ((i+1)-1) + saida2_r[1];

  td.appendChild(span);
  tr.appendChild(td);
  tbody.appendChild(tr);
}

//Cria a última linha com a frase diferente
let tr = document.createElement('tr');
let td = document.createElement('td');
td.style = 'width:100px;border:1px solid #CCC;';
let span = document.createElement('span');

span.innerHTML = 'No more bottles of beer on the wall, no more bottles of beer.<br> Go to the store and buy some more, 99 bottles of beer on the wall';

td.appendChild(span);
tr.appendChild(td);
tbody.appendChild(tr);

table.appendChild(tbody);
//Fim
document.body.appendChild(table);
