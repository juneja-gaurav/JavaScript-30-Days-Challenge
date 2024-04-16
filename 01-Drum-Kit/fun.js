function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key  = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    // console.log(audio);
    // console.log(key);
    key.classList.add('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');
    audio.currentTime = 0; // rewind to the start
    audio.play();
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    // console.log(this)
    this.classList.remove('playing');
}
const  keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);