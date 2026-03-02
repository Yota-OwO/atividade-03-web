let fila = [];
const listaFila = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('nova-tarefa'); 
const btnAdicionar = document.getElementById('btn-adicionar'); 

const desenharFila = () => {
    listaFila.innerHTML = '';
    fila.forEach(processo => {
        listaFila.innerHTML += `<li>${processo}</li>`;
    });
};


const adicionarProcesso = () => {
    const valor = inputTarefa.value; 
    
    if (valor !== "") { 
        fila.push(valor); 
        inputTarefa.value = '';
        desenharFila();
    }
};

btnAdicionar.addEventListener('click', adicionarProcesso);