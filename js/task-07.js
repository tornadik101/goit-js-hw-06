const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    textElement.style.fontSize = `${fontSizeControl.value}px`;
});
