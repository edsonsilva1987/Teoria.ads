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

function calcular() {

  const inputA = document.getElementById('inputA').value;
  const inputB = document.getElementById('inputB').value;
  const inputU = document.getElementById('inputU').value;


  const conjuntoA = inputA.split(',').map(item => item.trim());
  const conjuntoB = inputB.split(',').map(item => item.trim());
  const universo = inputU.split(',').map(item => item.trim());


  function complemento(conjunto, universo) {
      return universo.filter(elemento => !conjunto.includes(elemento));
  }


  const complementoA = complemento(conjuntoA, universo);
  const complementoB = complemento(conjuntoB, universo);


  function intersecao(conjunto1, conjunto2) {
      return conjunto1.filter(elemento => conjunto2.includes(elemento));
  }


  const resultado = intersecao(complementoA, complementoB);

  document.getElementById('resultad').textContent = resultado.join(', ');
}
    
document.getElementById("uniaoA").addEventListener("input", enter);
document.getElementById("uniaoB").addEventListener("input", enter);

document.getElementById("interA").addEventListener("input", Inter);
document.getElementById("interB").addEventListener("input", Inter);

document.getElementById("conjuntoA").addEventListener("input", calcularDiferenca);
document.getElementById("conjuntoB").addEventListener("input", calcularDiferenca);

document.getElementById("conjuntoAA").addEventListener("input", calcularUniaoIntersecao);
document.getElementById("conjuntoBB").addEventListener("input", calcularUniaoIntersecao);
document.getElementById("conjuntoCC").addEventListener("input", calcularUniaoIntersecao)
