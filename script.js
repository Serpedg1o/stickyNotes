const createNewSticker = document.getElementById('addNewStickerImg');
createNewSticker.onclick = () => {
    const newSticker = document.createElement('li');
    newSticker.className = 'sticker';
    const stickerBox = document.querySelector('.stickerBox');
    stickerBox.insertBefore(newSticker, stickerBox.lastElementChild);
};

const removeSticker = document.getElementById('closeButton');
removeSticker.onclick = () => {
    removeSticker.parentElement.remove();
};