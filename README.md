# Port_Scanner
Aplicação para scanear um range de portas de um computador.

## Turma:
TCC00313 - REDES DE COMPUTADORES I - A1
2021 / 1º

## Integrantes:
Marcos Da Costa Novaes
Michel Lessa Ziade
Rodrigo Fabricante De Castro

## Resumo
Escolhemos Node.js como linguagem de programação, isso nos deu acesso a [API nativa de sockets](https://nodejs.org/api/index.html). 
O script "index.js" recebe como argumento do terminal o ip da maquina a ser scaneada, a porta inicial e porta final. 
O node usa eventos como forma de receber resposta de requisições.
As portas são armazenadas num vetor, e tem uma string `status`.
Dentro de um `for`percorre-se cada porta e é criada uma conexão (net.createConnection) e setado um time-out.
Existem 4 cenários possíveis.
Se a porta estiver aberta, o status é setado como 'open'.
Se a porta extiver fechada, o stutus é setado como 'error'.
Se uma resposta nunca for recebida dentro do time-out, há duas possibilidades: a conexão foi bloqueada por um firewall ou esta inacessível.
Uma tabela é printada no console com todas as portas.


## Instruções instalação

Primeiramente é necessário instalar o Node.js para poder compilar nossa aplicação, os passos para instalação podem ser vistos [aqui](https://nodejs.org/en/download/).

## Instruções para compilar

Primeiro precisamos saber o IP da maquina que sera scaneada

No Windows pressione `Win+R`, na janela aberta escreva `cmd` e clique em `Ok`.
Uma vez aberto o terminal, digite `ipconfig` e pressiona a tecla `Enter`. Copie o valor descrito como "Endereço IPv4".

No Linux pressione `Alt+Ctrl+T`, no terminal escreva o comando `$ ifconfig`. Normalmente, a segunda linha de dados de cada dispositivo começa com a palavra "inet" e é seguida pelo número que você está procurando. Para mais ajuda com Linus, acesse [aqui](https://pt.wikihow.com/Verificar-o-Endere%C3%A7o-de-IP-no-Linux).

Na mesma pasta do arquivo (index.js), abrir o terminal e executar o comando:

`node index.js [ip_maquina_a_ser_scaneada] [porta_inicial] [porta_final]`
