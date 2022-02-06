
function soma(n1, n2) {
    return `A soma de ${n1} e ${n2}, totaliza: ${n1 + n2}`

}
function subt(n1, n2) {
    return `A subtracao de ${n1} e ${n2}, totaliza: ${n1 - n2}`

}
function mult(n1, n2) {
    return `A multiplicacao de ${n1} e ${n2}, totaliza: ${n1 * n2}`

}
function divis(n1, n2) {
    return `A divisao de ${n1} por ${n2}, totaliza: ${n1 / n2}`

}


module.exports = { soma, subt, mult, divis }