const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceButton = document.getElementById('advice-button');

adviceButton.addEventListener('click', () => {
    let id, advice;
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            advice = data.slip.advice;
            id = data.slip.id;
            setElements(id, advice);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function setElements(id, advice) {
    adviceId.textContent = 'Advice #' + id;
    adviceText.textContent = '"' + advice + '"';
}