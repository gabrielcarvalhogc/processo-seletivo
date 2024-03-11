const palavra = "Hello, world";

function inverteString(string) {
  let stringInvertida = [];
  for(let i= string.length - 1;i >= 0; i--) {
    stringInvertida.push(string[i]);
  }
  return stringInvertida.join("");
}

console.log(inverteString(palavra));