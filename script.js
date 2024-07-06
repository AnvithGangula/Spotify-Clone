console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement=new Audio('1.mp3')
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterPlay = document.getElementById('masterPlay');
let songs = [
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
]
//audioElement.play();

//Listen to Events
document.addEventListener('time')