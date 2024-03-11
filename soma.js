const indice = 13;
let soma = 0, k = 0;

function somaNumero() {
  while(k < indice) {
    k += 1;
    soma += k;
  }
  return soma;
}

console.log(somaNumero()); //91
