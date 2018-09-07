const photos = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
];

function main(event) {
    // photo
    const photo = photos[Math.floor(Math.random() * photos.length)];
    const photoDiv = document.getElementsByClassName("photo")[0];
    photoDiv.setAttribute("src", "photos/" + photo);

    // days since
    const req = new Request("https://poly.rpi.edu/wp-json/wp/v2/posts?per_page=1")
    fetch(req).then(function (resp) {
        return resp.json()
    }).then(function (resp) {
        const polyDate = new Date(resp[0]["date"]);
        const diff = Math.floor((Date.now() - polyDate) / 86400000);
        const daysSinceSpan = document.getElementsByClassName("days-since")[0];
        daysSinceSpan.innerHTML = diff;
    });
}

document.addEventListener("DOMContentLoaded", main);
