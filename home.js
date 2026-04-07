

const images = [
"images/Everyone gateway text.png",
"images/MTN.png",
"images/Fund raising.png",
"images/Nestle.png",
"images/Okomu.png"
];

let index = 0;
const slider = document.getElementById("headlineSlider");

setInterval(() => {

index++;
if(index >= images.length){
index = 0;
}

slider.src = images[index];

}, 10000); // 10 seconds

