// Atividade Javascript 02
// Arquivo: atividade-funcoes.js

/**
 * Função que verifica se um número é par ou ímpar.
 * @param {number} numero O número a ser verificado.
 * @returns {string} Uma string informando se o número é "Par" ou "Ímpar".
 */
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

/**
 * Função que calcula o fatorial de um número usando um laço de repetição.
 * @param {number} numero O número para o qual o fatorial será calculado.
 * @returns {number | string} O valor do fatorial ou uma mensagem de erro se o número for inválido.
 */
function calcularFatorial(numero) {
  // Verifica se o número é negativo, pois fatorial não é definido para eles.
  if (numero < 0) {
    return "Número inválido! O fatorial só é definido para números não negativos.";
  }
  // O fatorial de 0 é 1 por definição.
  if (numero === 0) {
    return 1;
  }

  // Inicializa o resultado com 1 e itera de 1 até o número.
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

/**
 * Função que encontra o maior número em um array.
 * @param {number[]} array O array de números a ser analisado.
 * @returns {number | string} O maior número no array ou uma mensagem se o array estiver vazio.
 */
function encontrarMaiorNumero(array) {
  // Retorna uma mensagem de erro se o array estiver vazio.
  if (array.length === 0) {
    return "O array está vazio.";
  }

  // Inicializa a variável 'maiorNumero' com o primeiro elemento do array.
  let maiorNumero = array[0];

  // Itera sobre o array a partir do segundo elemento.
  for (let i = 1; i < array.length; i++) {
    // Se o elemento atual for maior que o 'maiorNumero', ele se torna o novo 'maiorNumero'.
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

// --- Exemplos de uso das funções ---

// Exemplo 1: Usando verificarParImpar
console.log(`O número 10 é: ${verificarParImpar(10)}`); // Saída: "O número 10 é: Par"
console.log(`O número 7 é: ${verificarParImpar(7)}`);   // Saída: "O número 7 é: Ímpar"

// Exemplo 2: Usando calcularFatorial
console.log(`O fatorial de 5 é: ${calcularFatorial(5)}`); // Saída: "O fatorial de 5 é: 120"
console.log(`O fatorial de 0 é: ${calcularFatorial(0)}`); // Saída: "O fatorial de 0 é: 1"

// Exemplo 3: Usando encontrarMaiorNumero
const numeros = [15, 8, 20, 3, 12];
console.log(`O maior número no array é: ${encontrarMaiorNumero(numeros)}`); // Saída: "O maior número no array é: 20"