const WORDS = [
  {
    "word": "MICROCONTROLADOR",
    "row": 10,
    "col": 0,
    "dir": "across",
    "clue": "É um chip que já reúne processamento, armazenamento e conexões para interagir com outros dispositivos.",
    "number": 14
  },
  {
    "word": "MEMORIADEMASSA",
    "row": 0,
    "col": 12,
    "dir": "down",
    "clue": "Guarda arquivos e programas por bastante tempo, mesmo depois que o equipamento é desligado.",
    "number": 1
  },
  {
    "word": "REGISTRADORES",
    "row": 1,
    "col": 14,
    "dir": "down",
    "clue": "Espaços bem pequenos e rápidos dentro da CPU, usados para guardar informações durante uma tarefa.",
    "number": 3
  },
  {
    "word": "ADDRESSBUS",
    "row": 7,
    "col": 11,
    "dir": "across",
    "clue": "Mostra qual posição deve ser acessada quando a CPU precisa buscar ou guardar alguma informação.",
    "number": 12
  },
  {
    "word": "DUALCORE",
    "row": 5,
    "col": 4,
    "dir": "down",
    "clue": "É o nome dado a um processador que trabalha com dois núcleos.",
    "number": 10
  },
  {
    "word": "QUADCORE",
    "row": 5,
    "col": 1,
    "dir": "across",
    "clue": "É o nome dado a um processador que tem quatro núcleos trabalhando.",
    "number": 9
  },
  {
    "word": "DATABUS",
    "row": 2,
    "col": 19,
    "dir": "down",
    "clue": "É o caminho por onde passam os dados e as instruções entre as partes do computador.",
    "number": 4
  },
  {
    "word": "EEPROM",
    "row": 1,
    "col": 11,
    "dir": "across",
    "clue": "No Arduino, permite salvar algumas informações que continuam guardadas mesmo quando falta energia.",
    "number": 2
  },
  {
    "word": "CACHE",
    "row": 8,
    "col": 2,
    "dir": "down",
    "clue": "Guarda cópias de informações usadas há pouco tempo para deixar o acesso mais rápido.",
    "number": 13
  },
  {
    "word": "FLASH",
    "row": 4,
    "col": 16,
    "dir": "down",
    "clue": "É regravável e mantém o programa salvo mesmo quando o Arduino fica sem energia.",
    "number": 8
  },
  {
    "word": "RAM",
    "row": 5,
    "col": 7,
    "dir": "down",
    "clue": "É usada enquanto os programas estão rodando e perde os dados quando a energia acaba.",
    "number": 11
  },
  {
    "word": "ROM",
    "row": 10,
    "col": 9,
    "dir": "down",
    "clue": "Guarda instruções importantes para o equipamento conseguir começar a funcionar.",
    "number": 15
  },
  {
    "word": "CPU",
    "row": 3,
    "col": 2,
    "dir": "down",
    "clue": "É a parte que executa as instruções dos programas e comanda o funcionamento do computador.",
    "number": 6
  },
  {
    "word": "ULA",
    "row": 13,
    "col": 10,
    "dir": "across",
    "clue": "É a parte que faz contas e comparações lógicas durante o processamento.",
    "number": 16
  },
  {
    "word": "DMA",
    "row": 3,
    "col": 17,
    "dir": "across",
    "clue": "Ajuda a passar dados entre dispositivos e armazenamento sem a CPU cuidar de cada etapa.",
    "number": 7
  },
  {
    "word": "UC",
    "row": 3,
    "col": 1,
    "dir": "across",
    "clue": "Interpreta as instruções e indica às outras partes o que precisa ser feito.",
    "number": 5
  }
];
const ROWS = 14;
const COLS = 21;
const crossword = document.getElementById("crossword");
const cellWords = new Map();
const inputs = new Map();
const startNumbers = new Map();
const wordByNumber = new Map();

function key(row, col) { return `${row}-${col}`; }
for (const word of WORDS) {
  const k = key(word.row, word.col);
  startNumbers.set(k, word.number);
  wordByNumber.set(word.number, word);
  for (let i = 0; i < word.word.length; i++) {
    const row = word.row + (word.dir === "down" ? i : 0);
    const col = word.col + (word.dir === "across" ? i : 0);
    const cellKey = key(row, col);
    if (!cellWords.has(cellKey)) cellWords.set(cellKey, []);
    cellWords.get(cellKey).push(word.word);
  }
}

function renderBoard() {
  crossword.style.gridTemplateColumns = `repeat(${COLS}, 30px)`;
  crossword.style.gridTemplateRows = `repeat(${ROWS}, 30px)`;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cellKey = key(row, col);
      const owners = cellWords.get(cellKey);
      const cell = document.createElement("div");
      cell.className = owners ? "cell open" : "cell";
      if (owners) {
        const number = startNumbers.get(cellKey);
        if (number) {
          const label = document.createElement("span");
          label.className = "cell-number";
          label.textContent = number;
          cell.appendChild(label);
        }
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.autocomplete = "off";
        input.spellcheck = false;
        input.setAttribute("aria-label", `Linha ${row + 1}, coluna ${col + 1}`);
        input.dataset.row = row;
        input.dataset.col = col;
        input.addEventListener("input", () => {
          input.value = input.value.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-zA-Z]/g, "").toUpperCase().slice(-1);
          cell.classList.remove("correct", "incorrect");
          if (input.value) focusNext(row, col);
        });
        input.addEventListener("keydown", event => {
          const moves = {ArrowUp:[-1,0], ArrowDown:[1,0], ArrowLeft:[0,-1], ArrowRight:[0,1]};
          if (moves[event.key]) {
            event.preventDefault();
            const [dr,dc] = moves[event.key];
            let r = row + dr, c = col + dc;
            while (r >= 0 && c >= 0 && r < ROWS && c < COLS) {
              const next = inputs.get(key(r,c));
              if (next) { next.focus(); break; }
              r += dr; c += dc;
            }
          } else if (event.key === "Backspace" && !input.value) {
            focusPrevious(row, col);
          }
        });
        cell.appendChild(input);
        inputs.set(cellKey, input);
      }
      crossword.appendChild(cell);
    }
  }
}
function focusNext(row,col) {
  const ordered = [...inputs.keys()];
  const current = ordered.indexOf(key(row,col));
  for (let i=current+1;i<ordered.length;i++) {
    const input = inputs.get(ordered[i]);
    if (!input.value) { input.focus(); return; }
  }
}
function focusPrevious(row,col) {
  const ordered = [...inputs.keys()];
  const current = ordered.indexOf(key(row,col));
  if (current > 0) inputs.get(ordered[current-1]).focus();
}
function renderClues(direction, targetId) {
  const list = document.getElementById(targetId);
  WORDS.filter(w => w.dir === direction).sort((a,b)=>a.number-b.number).forEach(word => {
    const li = document.createElement("li");
    li.id = `clue-${word.number}`;
    const number = document.createElement("span");
    number.className = "clue-number";
    number.textContent = word.number;
    const text = document.createElement("span");
    text.textContent = word.clue;
    li.append(number,text);
    list.appendChild(li);
  });
}
function checkAnswers() {
  const statuses = new Map();
  let correct = 0;
  for (const word of WORDS) {
    let answer = "";
    for (let i=0;i<word.word.length;i++) {
      const row = word.row + (word.dir === "down" ? i : 0);
      const col = word.col + (word.dir === "across" ? i : 0);
      answer += inputs.get(key(row,col)).value;
    }
    const solved = answer === word.word;
    statuses.set(word.word, solved);
    if (solved) correct++;
    document.getElementById(`clue-${word.number}`).classList.toggle("solved", solved);
  }
  for (const [cellKey, owners] of cellWords) {
    const input = inputs.get(cellKey);
    const cell = input.parentElement;
    const allCorrect = owners.every(owner => statuses.get(owner));
    const anyWrong = owners.some(owner => {
      const word = WORDS.find(w=>w.word===owner);
      let answer = "";
      for(let i=0;i<word.word.length;i++){
        const row=word.row+(word.dir==="down"?i:0), col=word.col+(word.dir==="across"?i:0);
        answer += inputs.get(key(row,col)).value;
      }
      return answer.length === word.word.length && answer !== word.word;
    });
    cell.classList.toggle("correct", allCorrect);
    cell.classList.toggle("incorrect", anyWrong && !allCorrect);
  }
  document.getElementById("score").innerHTML = `${correct} <small>/ ${WORDS.length}</small>`;
  const feedback = document.getElementById("feedback");
  if (correct === WORDS.length) {
    feedback.textContent = "Parabéns! Você completou todas as palavras.";
    feedback.classList.add("success");
    document.getElementById("score-message").textContent = "Desafio concluído!";
  } else {
    feedback.textContent = `${correct} de ${WORDS.length} palavras corretas. Revise as casas destacadas e tente novamente.`;
    feedback.classList.remove("success");
    document.getElementById("score-message").textContent = "Continue tentando!";
  }
}
function resetGame() {
  for (const input of inputs.values()) {
    input.value = "";
    input.parentElement.classList.remove("correct","incorrect");
  }
  document.querySelectorAll(".clue-list li").forEach(li=>li.classList.remove("solved"));
  document.getElementById("score").innerHTML = `0 <small>/ ${WORDS.length}</small>`;
  document.getElementById("score-message").textContent = "Boa sorte!";
  const feedback = document.getElementById("feedback");
  feedback.textContent = "Tabuleiro reiniciado. Boa sorte!";
  feedback.classList.remove("success");
}
renderBoard();
renderClues("across","across-clues");
renderClues("down","down-clues");
document.getElementById("check-btn").addEventListener("click",checkAnswers);
document.getElementById("reset-btn").addEventListener("click",resetGame);
