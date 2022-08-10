
let bgm=[

    {
        id:1,
        name:"Rolex",
        artist:"Surya",
        audioSrc:"rolex.mp3",
        imageSrc:"rolex.jpg"
    },
    {
        id:2,
        name:"Saaho",
        artist:"Prabhash",
        audioSrc:"Saaho.mp3",
        imageSrc:"s.jpg"
    },
    {
        id:3,
        name:"Bheeshma",
        artist:"Nithiin",
        audioSrc:"Bheeshma.mp3",
        imageSrc:"niti.jpg"
    },
     {
        id:4,
        name:"KGF2",
        artist:"ROCKY",
        audioSrc:"Kgf Chapter 2 Villain ! KGF 2 ! KGF 2 Teaser.mp3",
        imageSrc:"kgf.png"
    },
     {
        id:5,
        name:"KGF2",
        artist:"MOTHER",
        audioSrc:"Dheera Dheera ! Climax ! KGF Chapter 2 ! Villain Music.mp3",
        imageSrc:"mm.jpg"
    },
     {
        id:6,
        name:"Super Khiladi 3",
        artist:"ram pothineni",
        audioSrc:"Super Khiladi 3.mp3",
        imageSrc:"ram.jpg"
    },
     {
        id:7,
        name:"ALa Vaikunthapuraamulllo",
        artist:"Allu Arjun",
        audioSrc:"Butta.mp3",
        imageSrc:"butta.jpg"
    },
    {
        id:8,
        name:"Maari",
        artist:"Dhanush",
        audioSrc:"Maari.mp3",
        imageSrc:"maari.jpg"
    },
    {
        id:9,
        name:"Mater",
        artist:"Vijay",
        audioSrc:"Master.mp3",
        imageSrc:"m.jpg"
    },
    {
        id:10,
        name:"Theri",
        artist:"Samantha",
        audioSrc:"Theri.mp3",
        imageSrc:"sam.jpg"
    },
    
     {
        id:11,
        name:"GeetaGovinda",
        artist:"Rashmika",
        audioSrc:"Rashmika Mandanna.mp3",
        imageSrc:"ra.jpg"
    },
     {
        id:12,
        name:"Super Khiladi 4",
        artist:"Kirthi Suresh",
        audioSrc:"Super Khiladi 4 - Bgm.mp3",
        imageSrc:"k.jpg"
    },
     {
        id:13,
        name:"Puspa",
        artist:"Allu Arjun",
        audioSrc:"Pushpa BGM.mp3",
        imageSrc:"p.jpg"
    },
    {
        id:14,
        name:"DJ",
        artist:"Allu Arjun",
        audioSrc:"Dj.mp3",
        imageSrc:"dj.jpg"
    },
      {
        id:15,
        name:"Beast",
        artist:"Vijay",
        audioSrc:"Beast BGM Vijay.mp3",
        imageSrc:"v.jpg"
    },
     {
        id:16,
        name:"Vikram",
        artist:"vijay sethupathi",
        audioSrc:"Vikram Vijay Sethupathi.mp3",
        imageSrc:"set.jpg"
    }
    
    
]


for(let i=0;i<bgm.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=bgm[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(bgm[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(bgm[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(bgm[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(bgm)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=bgm.imageSrc;
    document.querySelector(".song-name").innerText=bgm.name;
    document.querySelector(".song-artist").innerText=bgm.artist;
    document.querySelector(".song-artist").style.color="#1E90FF";
    document.querySelector(".audio").src=bgm.audioSrc;
    document.querySelector(".audio").play();


}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}







