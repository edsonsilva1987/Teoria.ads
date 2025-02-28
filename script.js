// União
function enter() {
  const uniaoA = document.getElementById("uniaoA").value.split(",").map(item => item.trim());
  const uniaoB = document.getElementById("uniaoB").value.split(",").map(item => item.trim());
  const uniao = [...new Set([...uniaoA, ...uniaoB])];
  document.getElementById("uniaoAB").value = uniao.join(", ");
}

// Intersecção
function Inter() {
  const interA = document.getElementById("interA").value.split(",").map(item => item.trim());
  const interB = document.getElementById("interB").value.split(",").map(item => item.trim());
  const intersecao = interA.filter(elemento => interB.includes(elemento));
  document.getElementById("interAB").value = intersecao.join(", ");
}

// Diferença (A - B)
function calcularDiferenca() {
  const conjuntoA = document.getElementById("conjuntoA").value.split(",").map(item => item.trim());
  const conjuntoB = document.getElementById("conjuntoB").value.split(",").map(item => item.trim());
  const diferenca = conjuntoA.filter(elemento => !conjuntoB.includes(elemento));
  document.getElementById("resultado").value = diferenca.join(", ");
}

function calcularUniaoIntersecao() {
  const conjuntoA = document.getElementById("conjuntoAA").value.split(",").map(item => item.trim());
  const conjuntoB = document.getElementById("conjuntoBB").value.split(",").map(item => item.trim());
  const conjuntoC = document.getElementById("conjuntoCC").value.split(",").map(item => item.trim());
  const intersecaoBC = conjuntoB.filter(elemento => conjuntoC.includes(elemento));
  const uniaoAIntersecaoBC = [...new Set([...conjuntoA, ...intersecaoBC])];
  document.getElementById("resultadoo").value = uniaoAIntersecaoBC.join(", ");
}

document.getElementById("uniaoA").addEventListener("input", enter);
document.getElementById("uniaoB").addEventListener("input", enter);

document.getElementById("interA").addEventListener("input", Inter);
document.getElementById("interB").addEventListener("input", Inter);

document.getElementById("conjuntoA").addEventListener("input", calcularDiferenca);
document.getElementById("conjuntoB").addEventListener("input", calcularDiferenca);

document.getElementById("conjuntoAA").addEventListener("input", calcularUniaoIntersecao);
document.getElementById("conjuntoBB").addEventListener("input", calcularUniaoIntersecao);
document.getElementById("conjuntoCC").addEventListener("input", calcularUniaoIntersecao);
