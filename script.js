const btnE1=document.querySelector(".btn")
const closee1=document.querySelector(".close-icon")
const trailer=document.querySelector(".trailer-container")
const videoE1=document.querySelector("video")


btnE1.addEventListener("click",()=>{
    trailer.classList.remove("active")
})
closee1.addEventListener("click",()=>{
    trailer.classList.add("active")
    videoE1.pause()
    videoE1.currentTime=0;
})