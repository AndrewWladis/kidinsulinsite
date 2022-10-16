//countdown
const countdown = () => {
    const countDate = new Date('October 31, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
}

countdown();

//music
const titleInMusicPlayer = document.getElementById("current-song")
const mymommakesgoodtacos = document.getElementById('mymommakesgoodtacos')
const pauseplay = document.getElementById('pause-button');
const progressLine = document.getElementById('progress-line');
const playImage = 'play.png';
const pauseImage = 'pause.png';
let songAudio;
let stateOfAudio = false;
let currentSong;
let length = 0;

const mymommakesgoodtacosInfo = ['My Mom Makes Good Tacos', 86, mymommakesgoodtacos, 'song/mymommakesgoodtacos.mp3', 1.16279069767];
//name, seconds, location on dom, location of audio

function playAudio(audio) {
    songAudio = new Audio(audio[3]);
    songAudio.play();
    titleInMusicPlayer.innerHTML = audio[0];
    currentSong = mymommakesgoodtacosInfo;
    stateOfAudio = true;
    pauseplay.src = pauseImage
    length = 0;
}

function playpause(i) {
    if (stateOfAudio) {
        i[3].pause();
        stateOfAudio = false;
        pauseplay.src = playImage;
    } else {
        playAudio(i);
    }
}
 
mymommakesgoodtacos.onclick = function() {
    playpause(mymommakesgoodtacosInfo)
    console.log('hi')
}

pauseplay.onclick = function() {
    if (stateOfAudio) {
        stateOfAudio = false;
        pauseplay.src = playImage;
        if (currentSong === mymommakesgoodtacosInfo) {
            songAudio.pause();
        }
        currentSong[2].pause();
    } else {
        if (currentSong === mymommakesgoodtacosInfo) {
            songAudio.play();
        }
        stateOfAudio = true;
        pauseplay.src = pauseImage
    }
}


//dark mode favicon
const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

function changeFavicon() {
    if (isDark.matches) faviconTag.href = "logodark.svg";
};

changeFavicon();

//easter eggs
/*const pressed = [];
const secretCode = 'kachow';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)) {
        window.open("https://youtu.be/ErYvqN2eajE")
    }
        //make it so that if they type hello there it opens in a new tab with general kenobi 
});*/

















setInterval(function(){
    countdown();
    changeFavicon();
}, 1000);

setInterval(function(){
    if (stateOfAudio) {
        length += 0.05
        let lengthing = currentSong[4] * length;
        progressLine.style.width = lengthing + '%';
    }
    if (length >= currentSong[1]) {
        stateOfAudio = false;
        pauseplay.src = playImage;
        titleInMusicPlayer.innerHTML = 'Not Playing';
        progressLine.style.width = '0%';
    }
}, 50);