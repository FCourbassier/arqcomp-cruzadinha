# Desafio da Arquitetura — Cruzadinha

Jogo educativo de cruzadinha sobre Arquitetura Computacional, desenvolvido com HTML, CSS e JavaScript puros.

## Como jogar

1. Abra `index.html` em um navegador ou acesse a versão publicada no GitHub Pages.
2. Leia as pistas nas seções **Horizontais** e **Verticais**.
3. Clique nas casas claras do tabuleiro e digite uma letra por casa. Use letras maiúsculas; não digite acentos ou espaços.
4. Clique em **Conferir respostas** para ver as palavras corretas e as que precisam de revisão.
5. O contador mostra quantas palavras foram resolvidas.
6. Clique em **Reiniciar** para limpar o tabuleiro e começar novamente.
   ## Dicas para jogar

- Leia as pistas horizontais e verticais.
- Clique nas casas do tabuleiro para preencher as letras.
- Utilize as pistas para descobrir cada palavra.
- Clique em Conferir para verificar suas respostas.
- Acompanhe sua pontuação pelo contador de acertos.
- Utilize Reiniciar para começar novamente.
## Recursos do jogo

- Tabuleiro interativo.
- Preenchimento direto das letras.
- Pistas horizontais e verticais.
- Verificação automática das respostas.
- Identificação de palavras corretas e incorretas.
- Contador de acertos.
- Opção para reiniciar a partida.
- Layout adaptável para diferentes telas.

## Objetivo do jogo

O objetivo é testar os conhecimentos sobre Arquitetura Computacional,
identificando os principais componentes e conceitos estudados em aula.

O jogador deve resolver as pistas e preencher corretamente o tabuleiro.


## Como funciona a pontuação

Cada palavra preenchida corretamente conta como um acerto.
O resultado é atualizado ao clicar no botão Conferir.
As palavras incorretas podem ser corrigidas até completar o desafio.
## Palavras e pistas

As pistas foram elaboradas a partir do material didático `material.jogo.pdf`. As respostas no tabuleiro usam letras maiúsculas, sem acentos e sem espaços.

| Nº | Termo | Pista | Direção |
|---:|---|---|---|
| 1 | **MEMORIADEMASSA** | Guarda arquivos e programas por bastante tempo, mesmo depois que o equipamento é desligado. | Vertical |
| 2 | **EEPROM** | No Arduino, permite salvar algumas informações que continuam guardadas mesmo quando falta energia. | Horizontal |
| 3 | **REGISTRADORES** | Espaços bem pequenos e rápidos dentro da CPU, usados para guardar informações durante uma tarefa. | Vertical |
| 4 | **DATABUS** | É o caminho por onde passam os dados e as instruções entre as partes do computador. | Vertical |
| 5 | **UC** | Interpreta as instruções e indica às outras partes o que precisa ser feito. | Horizontal |
| 6 | **CPU** | É a parte que executa as instruções dos programas e comanda o funcionamento do computador. | Vertical |
| 7 | **DMA** | Ajuda a passar dados entre dispositivos e armazenamento sem a CPU cuidar de cada etapa. | Horizontal |
| 8 | **FLASH** | É regravável e mantém o programa salvo mesmo quando o Arduino fica sem energia. | Vertical |
| 9 | **QUADCORE** | É o nome dado a um processador que tem quatro núcleos trabalhando. | Horizontal |
| 10 | **DUALCORE** | É o nome dado a um processador que trabalha com dois núcleos. | Vertical |
| 11 | **RAM** | É usada enquanto os programas estão rodando e perde os dados quando a energia acaba. | Vertical |
| 12 | **ADDRESSBUS** | Mostra qual posição deve ser acessada quando a CPU precisa buscar ou guardar alguma informação. | Horizontal |
| 13 | **CACHE** | Guarda cópias de informações usadas há pouco tempo para deixar o acesso mais rápido. | Vertical |
| 14 | **MICROCONTROLADOR** | É um chip que já reúne processamento, armazenamento e conexões para interagir com outros dispositivos. | Horizontal |
| 15 | **ROM** | Guarda instruções importantes para o equipamento conseguir começar a funcionar. | Vertical |
| 16 | **ULA** | É a parte que faz contas e comparações lógicas durante o processamento. | Horizontal |\n
## Tecnologias

- HTML5
- CSS3
- JavaScript puro (sem bibliotecas ou frameworks)

## Estrutura do projeto

```text
arqcomp-cruzadinha/
├── index.html
├── style.css
├── script.js
└── README.md
```

https://fcourbassier.github.io/arqcomp-cruzadinha/ 



## Referência do conteúdo

Conceitos e definições baseados no material didático de Tópicos de Arquitetura Computacional fornecido para a atividade, especialmente os capítulos sobre CPU, microcontroladores, barramentos, tipos e hierarquia de memória e DMA.
