// const addNewStickerButton = document.getElementById('addNewStickerImg');
// const addNewSticker = function(){
//     const newSticker = document.createElement('div');
//     newSticker.className = 'sticker';
//     const stickerBox = document.querySelector('.stickerBox');
//     return stickerBox.append(newSticker);
//     stickerBox.insertBefore(newSticker, stickerBox.children[stickerBox.lenth]);
// };
// addNewStickerButton.onclickt(addNewSticker);


const createNewSticker = document.getElementById('addNewStickerImg');
createNewSticker.onclick = () => {
    const newSticker = document.createElement('li');
    newSticker.className = 'sticker';
    const stickerBox = document.querySelector('.stickerBox');
    return stickerBox.insertBefore(newSticker, stickerBox.lastElementChild);
    alert('проверка скрипта');
};

  