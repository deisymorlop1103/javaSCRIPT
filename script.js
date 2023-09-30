//bucleforEach con arreglo de letras

const letters = [ "a", "b", "c","d"]
const f = function() {
  console.logesta es la letra: " + letter );
};

letters.forEach(f);

//bucle forEach para sacar números primos del 1 al 40

function validaPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const arreglo_primos = [];

for (let i = 2; i <= 40; i++) {
  if (validaPrimo(i)) {
     arreglo_primos.push(i);
  }
}

primos.forEach(function(numero_primo) {
  console.log(numero_primo);
});
