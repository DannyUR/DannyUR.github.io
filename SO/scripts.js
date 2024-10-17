document.addEventListener('DOMContentLoaded', function() {
    const infoButtons = document.querySelectorAll('.info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const extraInfo = this.nextElementSibling;
            if (extraInfo.style.display === 'block') {
                extraInfo.style.display = 'none';
                this.textContent = 'Ver más información';
            } else {
                extraInfo.style.display = 'block';
                this.textContent = 'Ocultar información';
            }
        });
    });
});
