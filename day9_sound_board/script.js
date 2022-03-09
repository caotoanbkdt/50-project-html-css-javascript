const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound, idx) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  document.getElementById('buttons').appendChild(btn);

  btn.addEventListener('click', () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  window.addEventListener('keyup', (e) => {
    if (e.code == `Numpad${idx}`) {
      stopAudio();
      document.getElementById(sound).play();
    }
  });
});

function stopAudio() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
