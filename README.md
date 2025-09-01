# bfd-atividade-para-casa-01
Este repositório contém funções em JavaScript desenvolvidas para praticar conceitos básicos da linguagem, como estruturas de repetição, condicionais e manipulação de arrays.
Funções
1. verificarParImpar(numero)

Esta função verifica se um número é par ou ímpar.

    Parâmetro: numero (tipo: number) - O número a ser verificado.

    Retorno: Uma string que informa se o número é "Par" ou "Ímpar".

Exemplo de uso:

verificarParImpar(10); // Retorna "Par"
verificarParImpar(7);  // Retorna "Ímpar"

2. calcularFatorial(numero)

Esta função calcula o fatorial de um número. Ela utiliza um laço de repetição (for) para multiplicar todos os inteiros positivos de 1 até o número.

    Parâmetro: numero (tipo: number) - O número para o qual o fatorial será calculado.

    Retorno: Um number representando o valor do fatorial.

Exemplo de uso:

calcularFatorial(5); // Retorna 120 (5 * 4 * 3 * 2 * 1)

3. encontrarMaiorNumero(array)

Esta função encontra o maior número em um array de números. Ela itera sobre todos os elementos do array e compara cada um para encontrar o maior valor.

    Parâmetro: array (tipo: Array<number>) - O array de números a ser analisado.

    Retorno: O maior number encontrado no array.

Exemplo de uso:

const numeros = [15, 8, 20, 3, 12];
encontrarMaiorNumero(numeros); // Retorna 20
