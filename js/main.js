const playSoundOfTheCorrespondKey = (event) => {
    const keyCode = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    audio.addEventListener('ended', () => key.classList.remove('playing'));
}
window.addEventListener('keydown', playSoundOfTheCorrespondKey)