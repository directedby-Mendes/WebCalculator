function insere(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; 
 }
 function clean(){
     document.getElementById('resultado').innerHTML = ""; 
 }
 function calcular(num){
     var numero = document.getElementById('resultado') = num;
     document.getElementById('resultado') = numero + num;
 }
 function back(){
     var resultado = document.getElementById('resultado').innerHTML;
     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) 
 }
 function calcular(){
     var resultado = document.getElementById('resultado').innerHTML;
     if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
     }
 }