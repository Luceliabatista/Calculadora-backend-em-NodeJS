const http = require('http')
const inquirer = require('inquirer')

const operacoes = require('./operacoes')
const soma = operacoes.soma
const subt = operacoes.subt
const mult = operacoes.mult
const divi = operacoes.divis
mensagem = ''



const porta = 3333


inquirer.prompt([
    {
        name: 'n1',
        message: 'Digite o primeiro número:'
    },
    {
        name: 'n2',
        message: 'Digite o segundo número:'
    },
    {
        name: 'operador',
        message: 'Digite o número da operação que deseja realizar(1-soma, 2-subtração, 3-multiplicação e 4-divisão:'
    }

]).then((answers) => {
    if (answers.operador == '1') {
        mensagem = soma(parseInt(answers.n1), parseInt(answers.n2))

    } else if (answers.operador == '2') {
        mensagem = subt(parseInt(answers.n1), parseInt(answers.n2))

    } else if (answers.operador == '3') {
        mensagem = mult(parseInt(answers.n1), parseInt(answers.n2))

    } else if (answers.operador == '4') {
        mensagem = divi(parseInt(answers.n1), parseInt(answers.n2))

    } else {
    }
}).catch((err) => console.log(err))

const server = http.createServer((req, res) => {
    res.statusCode = '200'
    res.setHeader('Conteny-Type', 'text/html')
    res.end(
        `<h1>Resposta do Modulo: </h1><p>${mensagem}</p>`
    )
})
server.listen(porta, () => {
})


