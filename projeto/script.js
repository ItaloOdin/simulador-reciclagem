let score = 0;

// Adiciona eventos de arrastar
const items = document.querySelectorAll('.item');
const bins = document.querySelectorAll('.bin');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

bins.forEach(bin => {
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('drop', drop);
});



function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.category);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault(); // Impede o comportamento padrão do navegador
    event.stopPropagation(); // Evita que o evento se propague para outros elementos

    const category = event.dataTransfer.getData('text'); // Categoria do item
    const binCategory = event.target.dataset.category;   // Categoria da lixeira

    if (category === binCategory) {
        score += 10; // Incrementa a pontuação em 10
        event.target.style.backgroundColor = "#c8e6c9"; // Feedback visual positivo
        setTimeout(() => (event.target.style.backgroundColor = ""), 500); // Remove feedback
        document.querySelector('#score').textContent = `Pontuação: ${score}`;
        alert('Acertou!');
    } else {
        score = 0; // Reseta a pontuação em caso de erro
        document.querySelector('#score').textContent = `Pontuação: ${score}`;
        event.target.style.backgroundColor = "#f8d7da"; // Feedback visual negativo
        setTimeout(() => (event.target.style.backgroundColor = ""), 500); // Remove feedback
        alert('Tente novamente!');
    }
}


