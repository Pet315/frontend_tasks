const images = [];

for (let i = 1; i < 13; i++) {
  images.push(`images/${i}.jpg`);
}

const mainDiv = document.getElementById('mainDiv');
const screenWidth = window.innerWidth;

images.forEach((src, index) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4'; // make 3:4

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.classList.add('image-style');

    if (screenWidth < 900) {
        if (index % 2 === 0) {  
            img.classList.add('first-image');
        }
    } else {
        if (index % 3 === 0) {  
            img.classList.add('first-image');
        }
    }

    colDiv.appendChild(img); // insert img in colDiv
    mainDiv.appendChild(colDiv); // insert colDiv in mainDiv
});
