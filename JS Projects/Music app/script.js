console.log("Welcome to Musica")


//initialize the variables

let songIndex = 0;
let audioElement = new Audio(`song/m1.mp3`);
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif")
let mastersongname = document.getElementById("mastersongname")
let songItems = Array.from(document.getElementsByClassName("songItem"))
// let songname = Array.from(document.getElementsByClassName("songname"))


let songs = [

    { songname: "DJ Snake - Let Me Love You ft. Justin Bieber", filepath: "song/m1.mp3", coverpath: "covers/Background.jpg" },
    { songname: "The Weeknd - Reminder", filepath: "song/m2.mp3", coverpath: "covers/c2.jpg" },
    { songname: "The Weeknd – Double Fantasy ft Future", filepath: "song/m3.mp3", coverpath: "covers/c3.jpg" },
    { songname: " The Weeknd - Blinding lights ", filepath: "song/m4.mp3", coverpath: "covers/c4.jpg" },
    { songname: "Sunflower  Spider-man", filepath: "song/m5.mp3", coverpath: "covers/c5.jpg" },
    { songname: "Light switch ft Charlie puth", filepath: "song/m6.mp3", coverpath: "covers/c6.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
})

//handle play pause click

masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        gif.style.opacity = 0;
    }
})


//lsitern to events
audioElement.addEventListener("timeupdate", () => {

    //ubdate seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myProgressBar.value = progress

})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeallplay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {

    element.addEventListener("click", (e) => {
        makeallplay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioElement.src = `song/m${songIndex + 1}.mp3`
        mastersongname.innerText=songs[songIndex].songname

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    })
})
document.getElementById("next").addEventListener("click", () => {

    if (  songIndex >= 5) {
        songIndex = 0;
        audioElement.src = `song/m${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")                    

    }
    else {
        songIndex += 1;
        audioElement.src = `song/m${songIndex + 1}.mp3`
        mastersongname.innerText=songs[songIndex].songname
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    }
     })
document.getElementById("previous").addEventListener("click", () => {

    if (songIndex <= 0 ) {
        songIndex = 0;
        console.log("At top music")
    }
    else {
        songIndex -= 1;
        audioElement.src = `song/m${songIndex + 1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
    }
})
