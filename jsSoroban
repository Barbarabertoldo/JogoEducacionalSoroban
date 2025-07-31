const svg = document.getElementById("soroban");
const numHastes = 13;
const contaWidth = 20;
const contaHeight = 15;
const espacamentoH = 35;
const espacamentoV = 30;
const barraY = 160;

function desenharSoroban() {
  const margem = 80;
  const larguraSVG = margem + espacamentoH * (numHastes - 1);
  svg.setAttribute("width", larguraSVG);

  for (let i = 0; i < numHastes; i++) {
    const x = 40 + i * espacamentoH;

    const linha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    linha.setAttribute("x1", x);
    linha.setAttribute("y1", 20);
    linha.setAttribute("x2", x);
    linha.setAttribute("y2", 300);
    linha.setAttribute("stroke", "#444");
    linha.setAttribute("stroke-width", 2);
    svg.appendChild(linha);

    criarConta(x, barraY - 40, i, "heaven");

    for (let j = 0; j < 4; j++) {
      criarConta(x, barraY + 40 + j * espacamentoV, i, "earth");
    }
  }

  const barra = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  barra.setAttribute("x", 0);
  barra.setAttribute("y", barraY);
  barra.setAttribute("width", 9999);
  barra.setAttribute("height", 6);
  barra.setAttribute("fill", "steelblue");
  svg.appendChild(barra);
}

function criarConta(x, y, hasteIndex, tipo) {
  const conta = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  const largura = contaWidth;
  const altura = contaHeight;

  const points = [
    [x, y - altura],
    [x + largura / 2, y],
    [x, y + altura],
    [x - largura / 2, y]
  ]
    .map(p => p.join(","))
    .join(" ");

  conta.setAttribute("points", points);
  conta.setAttribute("fill", tipo === "heaven" ? "#a0522d" : "#cd853f");
  conta.setAttribute("stroke", "#222");
  conta.setAttribute("stroke-width", 1);
  conta.setAttribute("data-ativo", "false");
  conta.setAttribute("data-haste", hasteIndex);
  conta.setAttribute("data-tipo", tipo);
  conta.setAttribute("data-original-y", y);

  conta.addEventListener("click", () => {
    const ativo = conta.getAttribute("data-ativo") === "true";
    const originalY = parseFloat(conta.getAttribute("data-original-y"));
    const deslocamento = tipo === "heaven" ? 20 : -20;

    if (tipo === "earth") {
      const todasContas = svg.querySelectorAll("polygon");
      const contasMesmaHaste = Array.from(todasContas).filter(c =>
        c.getAttribute("data-haste") === String(hasteIndex) &&
        c.getAttribute("data-tipo") === "earth"
      );
      const indexAtual = contasMesmaHaste.findIndex(c => c === conta);

      if (!ativo) {
        // Tentando ativar conta inferior:
        // Só permite se a conta imediatamente acima já estiver ativa (exceto a primeira que não tem acima)
        if (indexAtual > 0) {
          const contaDeCima = contasMesmaHaste[indexAtual - 1];
          const ativaCima = contaDeCima.getAttribute("data-ativo") === "true";
          if (!ativaCima) {
            return; // bloqueia ativar sem a de cima ativa
          }
        }
      } else {
        // Tentando desativar conta inferior:
        // Só permite se a conta imediatamente abaixo já estiver desativada (exceto a última que não tem abaixo)
        if (indexAtual < contasMesmaHaste.length - 1) {
          const contaDeBaixo = contasMesmaHaste[indexAtual + 1];
          const ativaBaixo = contaDeBaixo.getAttribute("data-ativo") === "true";
          if (ativaBaixo) {
            return; // bloqueia desativar se a conta de baixo ainda estiver ativa
          }
        }
      }
    }

    // Para contas "heaven" ou se passar as verificações para "earth"
    const novoY = ativo ? originalY : originalY + deslocamento;

    const newPoints = [
      [x, novoY - altura],
      [x + largura / 2, novoY],
      [x, novoY + altura],
      [x - largura / 2, novoY]
    ]
      .map(p => p.join(","))
      .join(" ");

    conta.setAttribute("points", newPoints);
    conta.setAttribute("data-ativo", (!ativo).toString());
    atualizarValor();
  });

  svg.appendChild(conta);
}


function atualizarValor() {
  const contas = svg.querySelectorAll("polygon");
  let total = 0;

  contas.forEach(conta => {
    if (conta.getAttribute("data-ativo") === "true") {
      const tipo = conta.getAttribute("data-tipo");
      const haste = parseInt(conta.getAttribute("data-haste"));
      const valor = tipo === "heaven" ? 5 : 1;
      total += valor * Math.pow(10, numHastes - haste - 1);
    }
  });

  document.getElementById("valor-total").textContent = `Valor: ${total}`;
}

desenharSoroban();

function resetarSoroban() {
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  document.getElementById("valor-total").textContent = "Valor: 0";
  desenharSoroban();
}
