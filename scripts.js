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

//heisenmode
const pressed = [];
const secretCode = 'heisenberg';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)) {
        document.getElementById("center-pic").src = 'https://cdn2.iconfinder.com/data/icons/heroes-villains-vol-2-colored-1/100/Walter_White-512.png';
        document.getElementById("insulinoverdose-text").innerText = 'JESSE, WE NEED TO COOK';
        document.body.style.backgroundImage = 'url(https://occ-0-586-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWi8MokudHdyyo2mns_HTM2NYmN0vuu5gMHytgiQu_Tu1fjv7lNZAh0Fwno-KGkLe3EbtJ3sT5HKl1L4JWMrC5Euyky26Au5vHjZoK7t-sQot_rxOFuI1MLU.jpg?r=451)';
        document.getElementById('sock').src = 'https://ae01.alicdn.com/kf/HTB1z38ELXXXXXc2XVXXq6xXFXXXZ/18-18-Square-Breaking-Bad-Polyester-Cushion-Cover-Sofa-Decorative-Throw-Pillowcase-Home-Chair-Car-Seat.jpg_Q90.jpg_.webp';
        document.getElementById('shirt').src = 'https://pyxis.nymag.com/v1/imgs/9ed/0c4/c4d1f3f8b9506dcf282438e5376da9a1ac-16-breaking-bad-1.rsquare.w330.jpg';
        document.getElementById('hoodie').src = 'https://pyxis.nymag.com/v1/imgs/631/8bc/0caef732ed05702b84bfa956106b3f5a57-05-Breakingbad.rsquare.w700.jpg';
    }
});

//cart and merch
const shirt = document.getElementById('shirt');
const hoodie = document.getElementById('hoodie');
const sock = document.getElementById('sock');
const cartSock = document.getElementById('cart-sock');
const cartHoodie = document.getElementById('cart-hoodie');
const cartShirt = document.getElementById('cart-shirt');
const cartForm = document.getElementById('cart-form');
let cart = [];
let isShirtBack = false;
let isHoodieBack = false;
let shirtCounter = 0;
let hoodieCounter = 0;

let cartItemShirtHTML = document.createElement('div');
cartItemShirtHTML.classList.add('cart-item');
cartItemShirtHTML.innerHTML = `<br><label for="shirtsize">SHIRT:</label><select name="shirtsize"><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select><select name="shirtquantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>`;

let cartItemHoodieHTML = document.createElement('div');
cartItemHoodieHTML.classList.add('cart-item');
cartItemHoodieHTML.innerHTML = `<br><label for="hoodiesize">HOODIE:</label><select name="hoodiesize"><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option></select><select name="hoodiequantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>`;

let cartItemSockHTML = document.createElement('div');
cartItemSockHTML.classList.add('cart-item');
cartItemSockHTML.innerHTML = `<br><label for="sockquantity">SOCKS:</label><select name="sockquantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>`;

shirt.addEventListener('mouseover', (event) => {
    shirt.src = 'merch/shirt-back.jpg';
    isShirtBack = true;
    shirtCounter = 0;
});

hoodie.addEventListener('mouseover', (event) => {
    hoodie.src = 'merch/hoodie-back.jpg';
    isHoodieBack = true;
    hoodieCounter = 0;
});

function addNameAndSubmit() {
    if (cartForm.childElementCount === 0) {
        cartForm.innerHTML = `<div id="nameAndSubmit" class="cart-item"><br><input type="text" id="name" placeholder="Full Name" name="name"></div><br><input type="submit" id="submit" value="SUBMIT">`;
    }
}


cartShirt.onclick = function() {
    addNameAndSubmit() 
    cartForm.insertBefore(cartItemShirtHTML, document.getElementById('nameAndSubmit'));
}

cartHoodie.onclick = function() {
    addNameAndSubmit() 
    cartForm.insertBefore(cartItemHoodieHTML, document.getElementById('nameAndSubmit'));
}

cartSock.onclick = function() {
    addNameAndSubmit() 
    cartForm.insertBefore(cartItemSockHTML, document.getElementById('nameAndSubmit'));
}
























setInterval(function(){
    countdown();
    changeFavicon();
    if (isShirtBack) {
        shirtCounter++;
        if (shirtCounter === 2) {
            shirtCounter = 0;
            isShirtBack = true;
            shirt.src = 'merch/shirt-front.jpg';
        }
    }

    if (isHoodieBack) {
        hoodieCounter++;
        if (hoodieCounter === 2) {
            hoodieCounter = 0;
            isHoodieBack = true;
            hoodie.src = 'merch/hoodie-front.jpg';
        }
    }
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