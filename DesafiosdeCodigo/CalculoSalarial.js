const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const aliquota = pegarAliquota(valorSalario) 

const valorImposto = calcularPorcentagem(valorSalario, aliquota)

print((valorSalario - percentualImposto + valorBeneficios).toFixed(2))

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.00) {
    return 10;
  } else {
    return 15;
  }
}