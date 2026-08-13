document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const form = document.getElementById('form-contato');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        alert(`Valeu pelo contato, ${nome}! Sua mensagem foi enviada.`);
        form.reset();
    });
}