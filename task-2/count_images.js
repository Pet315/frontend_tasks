function countImages() {
    const images = document.querySelectorAll('#mainDiv img');

    const now = new Date();
    const date = now.toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const time = now.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const message = `Images number: ${images.length}. Date: ${date} ${time}`;

    const header = document.getElementById('header');
    header.textContent = message;
}

document.addEventListener('DOMContentLoaded', countImages);
