# Desafio da Arquitetura — Cruzadinha

Jogo educativo de cruzadinha sobre Arquitetura Computacional, desenvolvido com HTML, CSS e JavaScript puros.

## Como jogar

1. Abra `index.html` em um navegador ou acesse a versão publicada no GitHub Pages.
2. Leia as pistas nas seções **Horizontais** e **Verticais**.
3. Clique nas casas claras do tabuleiro e digite uma letra por casa. Use letras maiúsculas; não digite acentos ou espaços.
4. Clique em **Conferir respostas** para ver as palavras corretas e as que precisam de revisão.
5. O contador mostra quantas palavras foram resolvidas.
6. Clique em **Reiniciar** para limpar o tabuleiro e começar novamente.

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

## Publicação no GitHub Pages

1. Crie um repositório **público** chamado `arqcomp-cruzadinha`.
2. Envie os arquivos deste projeto para a raiz da branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)` e clique em **Save**.
6. Aguarde a publicação e teste o endereço em uma janela anônima.

O endereço esperado será:

`https://SEU-USUARIO.github.io/arqcomp-cruzadinha/`

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub. Atualize este README com o endereço real depois da publicação.

## Commits

O enunciado solicita pelo menos 6 commits, em pelo menos 2 dias diferentes. Use mensagens no padrão indicado:

1. `feat: cria estrutura inicial do jogo`
2. `feat: adiciona tabuleiro com palavras cruzadas`
3. `feat: adiciona pistas horizontais e verticais`
4. `feat: implementa verificacao das respostas`
5. `style: finaliza visual e interatividade do jogo`
6. `docs: adiciona README com instrucoes`

**Importante:** não altere datas nem simule commits antigos. O histórico deve refletir o trabalho real. O enunciado pede dois dias diferentes; se a entrega precisa ocorrer hoje, confirme com o professor como proceder com esse requisito.

## Referência do conteúdo

Conceitos e definições baseados no material didático de Tópicos de Arquitetura Computacional fornecido para a atividade, especialmente os capítulos sobre CPU, microcontroladores, barramentos, tipos e hierarquia de memória e DMA.
