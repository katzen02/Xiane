// read custom message from query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
    const mainMessageElement = document.querySelector('#mainMessage');
    mainMessageElement.textContent = decodeURI(messageCustom);
}

// the tutorial starts here
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

// Al cargar la página, asegurarse de que la carta esté en el estado cerrado
document.addEventListener('DOMContentLoaded', () => {
    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('visible'); // Asegúrate de que no se vea el mensaje
    coverElement.style.zIndex = 0; // Mantén el z-index en 0
});

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;
    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
        paperElement.classList.add('visible'); // Añade la clase para hacer visible el mensaje

        // animación del corazón
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'block';
    }, 500);
});

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');
    paperElement.classList.remove('visible'); // Elimina la clase para ocultar el mensaje

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // animación del corazón
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'none';
    }, 500);
});
