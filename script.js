function calcularJuros() {
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado").innerHTML = "🧐 Preencha todos os campos corretamente!";
    return;
  }

  const montante = capital * Math.pow(1 + taxa, tempo);
  document.getElementById("resultado").innerHTML = `💰 Valor futuro: R$ ${montante.toFixed(2)}`;
}
