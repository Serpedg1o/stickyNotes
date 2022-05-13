// const addNewStickerButton = document.getElementById('addNewStickerImg');
// const addNewSticker = function(){
//     const newSticker = document.createElement('div');
//     newSticker.className = 'sticker';
//     const stickerBox = document.querySelector('.stickerBox');
//     return stickerBox.append(newSticker);
//     stickerBox.insertBefore(newSticker, stickerBox.children[stickerBox.lenth]);
// };
// addNewStickerButton.onclickt(addNewSticker);


document.getElementById('addNewStickerImg').onclick = function(){
    const newSticker = document.createElement('div');
    newSticker.className = 'sticker';
    const stickerBox = document.querySelector('.stickerBox');
    return stickerBox.append(newSticker);
    alert("Вы нажали на кнопку");
  }