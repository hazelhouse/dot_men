const photos = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];

function main(event) {
    const photo = photos[Math.floor(Math.random() * photos.length)];
    const photoDiv = document.getElementsByClassName("photo")[0];
    photoDiv.setAttribute("src", "photos/" + photo);
}

document.addEventListener("DOMContentLoaded", main);
