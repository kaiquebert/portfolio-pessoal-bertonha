const form = document.getElementById('form-contato');
const mensagemSucesso = document.getElementById('mensagm sucesso');

form.addEventListener('submit', (event) => 
{
    event.preventDefault();
    mensagemSucesso.style.display = 'block';
    form.reset();
});