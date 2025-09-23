# Exercícios - Funções

Faça os exercícios a seguir escrevendo código JavaScript a ser vinculado à sua página HTML com a tag `<script>`.

-   Utilize a função `prompt()` para capturar dados do usuário
-   Não se preocupe em tratar casos em que o usuário irá inserir valores inválidos neste momento
-   Utilize funções na resolução dos exercícios

## Essenciais

1. Escreva uma função que aceita 1 (um) parâmetro e exiba no console a variável recebida como argumento;
2. Escreva uma função que aceita 1 (um) parâmetro e exiba no console o tipo da variável recebida como argumento;
3. Escreva uma função que aceita 2 (dois) parâmetros e **retorna** o menor valor dentre eles;
    - Melhoria opcional: verificar se os parâmetros passados são realmente numéricos ou não e só realizar a comparação caso sejam;
4. Escreva 4 (quatro) funções que aceitam 2 (dois) parâmetros cada, cada uma delas deve realizar uma das 4 (quatro) operações matemáticas básicas (soma, subtração, divisão e adição), **retorne** o resultado de cada operação em cada uma delas;
5. Escreva uma função que aceita 2 (dois) parâmetros, um valor (inteiro) e um desconto (porcentagem), retorne o valor com o desconto aplicado;
6. Escreva uma função que aceita 3 (três) parâmetros e retorna o maior valor dentre eles. Implemente a verificação para garantir que todos os parâmetros sejam numéricos antes de fazer a comparação.
7. Escreva uma função que aceita 1 (um) parâmetro e exiba no console: "Número positivo" se for um número maior que zero; "Número negativo" se for um número menor que zero; "Zero" se for exatamente zero; "Não é um número" se não for um valor numérico.
8. Escreva uma função que aceita 3 (três) parâmetros numéricos e retorne uma string informando qual é o relacionamento entre eles:
   "Todos iguais" se a = b = c; "Dois iguais" se apenas dois forem iguais
   "Todos diferentes" se todos forem diferentes
   "Valores inválidos" se algum não for número
9. Escreva uma função para formação do seu nome de programador, pedindo ao usuário seu mês de nascimento e o último número do seu ano de nascimento para compor um nome divertido de programador (Dicas: componha a geração com mais de uma função. A estrutura `switch` pode ser interessante)
10. Escreva uma função que aceita até 3 (três) parâmetros: tipo de forma ("quadrado" ou "retangulo"), e as medidas necessárias. Retorne a área calculada: Quadrado: um lado; Retângulo: largura e altura;

## Complementares

1. Escreva uma função que aceita 2 (dois) parâmetros: temperatura e unidade de origem ("C" para Celsius ou "F" para Fahrenheit). Retorne a temperatura convertida para a outra unidade.
2. Escreva uma função sem parâmetros que, a cada chamada, exiba no console um contador incrementado (1, 2, 3...). Use uma variável: externa à função para manter o estado.

## Dicas

-   Use `typeof` para verificar tipos de dados
-   Lembre-se que `typeof NaN` retorna "number", mas `isNaN()` pode ajudar na validação
-   Para verificar se um valor é realmente numérico, combine `typeof` com `isNaN()`
-   Arrow functions com uma linha podem omitir as chaves e o `return`
-   Teste sempre com valores **válidos** e **inválidos**
-   Use `console.log()` para verificar os resultados durante o desenvolvimento
-   User o step debug (depuração passo-a-passo) do Chrome para ajudar a analisar seu código
