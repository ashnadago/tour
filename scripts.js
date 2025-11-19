const images = [];
for (let i = 1; i <= 100; i++) {
    images.push(`images/sary (${i}).jpg`);
}

const gallery = document.getElementById('gallery');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

let currentPage = 1;
const imagesPerPage = 20;

function displayImages(page) {
    gallery.innerHTML = '';
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const paginatedImages = images.slice(start, end);

    paginatedImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${src}`;
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = src;
            captionText.innerText = img.alt;
        });
        gallery.appendChild(img);
    });

    document.getElementById('prev-btn').disabled = page === 1;
    document.getElementById('next-btn').disabled = end >= images.length;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayImages(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if ((currentPage * imagesPerPage) < images.length) {
        currentPage++;
        displayImages(currentPage);
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial display
displayImages(currentPage);
