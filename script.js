const createNewSticker = document.getElementById('addNewStickerImg');
createNewSticker.onclick = () => {
    const newSticker = document.createElement('li');
    newSticker.className = 'sticker';
    newSticker.innerHTML = '<input type="image" id="closeButton" src="/img/close.png" alt="Удалить стикер">';
    const stickerBox = document.querySelector('.stickerBox');
    stickerBox.insertBefore(newSticker, stickerBox.lastElementChild);
};

const removeSticker = document.getElementById('closeButton');
removeSticker.onclick = () => {
    removeSticker.parentElement.remove();
};