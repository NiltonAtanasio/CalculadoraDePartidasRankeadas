function calcularNivel() {
  const vitorias = parseInt(document.getElementById("vitorias").value);
  const derrotas = parseInt(document.getElementById("derrotas").value);
  const resultado = document.getElementById("resultado");

  if (Number.isNaN(vitorias) || vitorias < 0 || Number.isNaN(derrotas) || derrotas < 0) {
    resultado.innerText = "⚠️ Preencha corretamente as vitórias e a derrotas.";
    return;
  }

  let nivel;
  let saldoVitorias = vitorias - derrotas


  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  resultado.innerHTML = `✨ O Herói tem de saldo de <strong>${saldoVitorias}</strong> está no nível de <strong>${nivel}</strong>!⚔️`;
}