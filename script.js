console.log("welcome to spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songitem"));
let masterSongInfo=document.getElementById('masterSongInfo');
let songs = [
    { songName: "Valam arijit singh", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "chal ghar chale", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Dil ka telephone", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "dil ke pass", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Humrahh", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Khudha hafiz", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Lagdi Lahore di", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Legends ft-DIVINE", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Mashakli 23", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Khudha hafiz", filePath: "song/6.mp3", coverPath: "covers/10.jpg" },


]
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[1].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioElement.play();
// Handle play and pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});

//listen to event
// document.addEventListener('time');
audioElement.addEventListener('timeupdate', () => {
    // update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
       
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongInfo.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongInfo.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongInfo.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
