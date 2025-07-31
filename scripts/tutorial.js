function iniciarTutorial() {
  document.getElementById("main-content").innerHTML = `
    <img src="imagens/logo.png" alt="Logo da Academia" class="logo">
    <div class="content">
      <h1>Bem-vindo ao Tutorial do Soroban!</h1>
      <p>O tutorial começou, e você aprenderá a história, cultura e como usar o Soroban.</p>
      <h2>O Soroban: História, Cultura e Como Usar</h2>
      <h3>História do Soroban</h3>
      <p>O Soroban é um ábaco tradicional japonês, que remonta ao período Heian (794–1185)...</p>

      <h3>Cultura do Soroban</h3>
      <p>O Soroban é um símbolo cultural no Japão, utilizado nas escolas, competições e vida cotidiana...</p>

      <h3>Como Usar o Soroban</h3>
      <p>O Soroban é composto por contas em linhas. Cada linha representa uma ordem de magnitude. As contas têm valores definidos e são movidas para fazer cálculos.</p>

      <button onclick="voltarPagina()">Voltar para a Página Principal</button>
    </div>
  `;
}

function voltarPagina() {
  location.reload();
}
