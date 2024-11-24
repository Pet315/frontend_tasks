document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalButton = document.getElementById('modalButton');

    mainDiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modalImage.src = event.target.src;
            modal.style.display = 'flex';
        }
    });

    modalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
