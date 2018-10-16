const photos = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
];

function main(event) {
    // photo
    const photo = photos[Math.floor(Math.random() * photos.length)];
    const photoDiv = document.getElementsByClassName("photo")[0];
    photoDiv.setAttribute("src", "photos/" + photo);

    // days since
    var req = new Request("https://poly.rpi.edu/wp-json/wp/v2/posts?per_page=1")
    fetch(req).then(function (resp) {
        return resp.json()
    }).then(function (resp) {
        const polyDate = new Date(resp[0]["date"]);
        const diff = Math.floor((Date.now() - polyDate) / 86400000);
        const daysSinceSpan = document.getElementsByClassName("days-since")[0];
        daysSinceSpan.innerHTML = diff;
    });

    // Shuttle Tracker
    var req = new Request("https://api.github.com/repos/wtg/shuttletracker/pulls?state=open&sort=desc")
    fetch(req).then(function (resp) {
        return resp.json()
    }).then(function (resp) {
        if (resp.length === 0) return;

        const prDate = new Date(resp[0]["created_at"]);
        const diff = Math.floor((Date.now() - prDate) / 86400000);
        const shuttleTrackerSpan = document.getElementsByClassName("shuttle-tracker")[0];
        shuttleTrackerSpan.innerHTML = diff + " days";
    });
}

document.addEventListener("DOMContentLoaded", main);
