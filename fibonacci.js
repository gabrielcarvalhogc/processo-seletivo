function fibonacci(number) {
  if (number < 0) {
      console.log(`${number} não faz parte da sequência de Fibonacci.`);
  } else {
      let a = 0;
      let b = 1;

      while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
      }

      if (b === number || number === 0) {
        console.log(`${number} faz parte da sequência de Fibonacci.`);
      } else {
        console.log(`${number} não faz parte da sequência de Fibonacci.`);
      }
  }
}

const numero = 4;
console.log(fibonacci(numero));