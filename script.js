const availableStickerColors = ["#FED6BC", "#FFFADD", "#DEF7FE", "#E7ECFF", "#C3FBD8", "#FDEED9", "#B5F2EA", "#C6D8FF", ];

const createNewStickerButton = document.getElementById('addNewStickerImg');
const createNewSticker = () => {
    const newStickerElement = document.createElement('li');
    newStickerElement.classList.add('sticker');
    const randomStickerColor = availableStickerColors[Math.floor(Math.random() * 8)];
    newStickerElement.style.backgroundColor = `${randomStickerColor}`;
    const closeButtonElement = document.createElement('input');
    closeButtonElement.className = 'closeButton';
    closeButtonElement.type = 'image';
    closeButtonElement.src = '/img/close.png';
    closeButtonElement.onclick = () => newStickerElement.remove(); 
    newStickerElement.append(closeButtonElement);   
    const stickerBox = document.querySelector('.stickerBox');
    stickerBox.insertBefore(newStickerElement, stickerBox.lastElementChild);
};

createNewStickerButton.onclick = createNewSticker;
