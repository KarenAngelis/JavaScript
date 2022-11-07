//Uma condicional permite que você execute um bloco de códigos sempre que se cumpra uma condição

function podeSubir (altura , acompanhante){

if (altura >= 1.40 && altura < 2.00) {
    return "Acesso autorizado";
  }
else if(altura < 1.40 && altura >= 1.20 && acompanhante >= 1){
   return "Acesso autorizado somente com acompanhante";
  }
else{
   return "Acesso negado";
  }
  }

console.log (podeSubir(1.41));
console.log (podeSubir(1.20, 1));