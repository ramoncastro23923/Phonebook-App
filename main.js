const form = document.getElementById('form-contatos');
//const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando"/>`
//const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji decepcionado" />`
const contatos = [];
const numeros = [];
//const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
//const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
//const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputContato = document.getElementById('nomeContato')
    const inputNumero = document.getElementById('Numero')

    if(contatos.includes(inputContato.value)) {
        alert(`O contato: ${inputContato.value} já foi inserido`);
    } else {        
            contatos.push(inputContato.value);
            numeros.push(parseFloat(inputNumero.value));
        
            let linha = '<tr>';
            linha += `<td>${inputContato.value}</td>`;
            linha += `<td>${inputNumero.value}</td>`;
            linha += '</tr>';
        
            linhas += linha;
    }

    inputContato.value = '';
    inputNumero.value = '';
}   

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }