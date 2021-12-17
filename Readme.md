# Teste técnico da cross commerce (parceira Trybe)

Projeto consiste em um site com duas opções de operação:
  1 - receber um valor e retorna uma sequencia de codigos ordenada de forma crescente; e
  2 - sorteia um valor entre 1 e 10100 e retorna os codigos da pagina referente ao valor sorteado.
  3 - Caso a o valor digitado ou sorteado seja o numero de uma pagina sem códigos, o valor retornado será '[]'.

Os codigos são recebidos através de requisição API REST, utilizando a operação GET.

### Passo a passo de operação

1 - Alimentação pelo front-end de um valor numerico
2 - No back-end, o valor é buscado pelo parametro
3 - Este valor buscado é utilizado para acessar a API fonte
4 - os valores são ordenados crescentemente
5 - o resultado é oferecido no formato json
6 - No front-end, os valores são recebidos e são expostos em nova página

Obrigado Cross commerce!
