function removeTransition(e) {
    if (e.propertyName !== 'transform') //skip if it is not transform
        return;
    e.target.classList.remove('playing')
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio)
        return;

    key.classList.add('playing'); //add the class playing to the element to to change the scale, etc..
    audio.currentTime = 0; //rewind to the start
    audio.play(); //play the audio associated with the key
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);