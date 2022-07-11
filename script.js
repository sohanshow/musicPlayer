const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [


{
    name:'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
},

{
    name:'jacinto-2',
    displayName: 'Seven Nation army (Remix)',
    artist: 'Jacinto Design',
},

{
    name:'jacinto-3',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
}

];


//Check if playing

let isPlaying = false;


//Play

playSong = () =>{

    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();

}

//Pause

pauseSong = () =>{

    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
    
}

// Play or Pause event listener

playBtn.addEventListener('click', () => (isPlaying? pauseSong() : playSong()));


//Updateing the DOM

loadSong = (song) =>{

    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
     
}

//Current Song
let songIndex = 0;

//Previous Song
prevSong = ()=>{

    if (songIndex == 0)
    {
        songIndex = songs.length - 1;
    }
    else
    songIndex--;

    loadSong(songs[songIndex]);
    playSong();
}

//Next Song
nextSong = ()=>{
    if (songIndex == songs.length)
    songIndex = 0;
    else
    songIndex++;

    loadSong(songs[songIndex]);
    playSong();
}


//Upon Load
loadSong(songs[songIndex]);

//Updating Progress Bar and Time

updateProgressBar = (e) =>{
    if (isPlaying)
    {
       const {duration, currentTime} = e.srcElement;

       //Updating the progress bar width
       const progressPercent = (currentTime/duration) * 100;
       
       progress.style.width = `${progressPercent}%`
    } 
}


//Event Listeners

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);



//More of what I want to add.