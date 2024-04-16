const form = document.getElementById('form-tarefas');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputContato = document.getElementById('nome')

    if(contatos.includes(inputContato.value)) {
        alert(`O contato: ${inputContato.value} já foi inserido`);
    } else {        
            contatos.push(inputContato.value);

            let linha = '<tr>';
            linha += `<td>${inputContato.value}</td>`;
            linha += '</tr>';
        
            linhas += linha;
    }

    inputContato.value = '';
}   

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

$('#inserir').click(() => {
    const valor = $('#nome').focus().val()
    if (valor) {
        $('#nome').val('')
        $('<li>')
        .text(valor)
        .appendTo('#lista')
        .click(() => $(event.target).toggleClass('riscado')) 
        }    
    }) 