console.log("Spotify Clone Initialized");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let progressBar = document.getElementById('myprogressbar');
let playButton = document.querySelector('img[alt="play"]');
let forwardButton = document.querySelector('.forward');


let songName = document.querySelector('.songname');
let singer = document.querySelector('.singer');
let songImage = document.querySelector('.songimg');

// Song list
let songs = [
    { title: "Legion", artist: "fire", file: "1.mp3", cover: "1.jpg" },
    { title: "Trap", artist: "trip on trap", file: "2.mp3", cover: "2.jpg" },
    { title: "They mad", artist: "The mad man...", file: "3.mp3", cover: "3.jpg" },
    { title: "Rich the kid", artist: "Richie rich...", file: "4.mp3", cover: "4.jpg" },
    { title: "Give up", artist: "song title...", file: "5.mp3", cover: "5.jpg" },
    { title: "The safety dance", artist: "The last dance...", file: "6.mp3", cover: "6.jpg" },
    { title: "Back it up", artist: "Bring it on...", file: "7.mp3", cover: "7.jpg" },
    { title: "Oh beauty", artist: "beauty and the beast...", file: "8.mp3", cover: "8.jpg" },
    { title: "lone girl", artist: "wanna come over...", file: "9.mp3", cover: "9.jpg" },
    { title: "Final Hit", artist: "End track", file: "10.mp3", cover: "10.jpg" }
];

// Load song into player
function loadSong(index) {
    audioElement.src = `songs/${songs[index].file}`;
    songName.textContent = songs[index].title;
    singer.textContent = songs[index].artist;
    songImage.src = `covers/${songs[index].cover}`;
    audioElement.play();
    playButton.src = "./assets/pause_icon.png";
}

// Play/pause button logic
playButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playButton.src = "./assets/player_icon3.png";
    } else {
        audioElement.pause();
        playButton.src = "./assets/pause_icon.png";
    }
});

// Progress bar update
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});

// Seek song via progress bar
progressBar.addEventListener('input', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

// Next song logic with looping
forwardButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
});

// Handle card image click
let cardImages = document.querySelectorAll('.cardimg');
cardImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        songIndex = index;
        loadSong(songIndex);
    });
});
