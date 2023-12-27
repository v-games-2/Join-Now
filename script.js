function changeTitle() {
    var newTitle = document.getElementById("titleInput").value;
    document.title = newTitle;
    localStorage.setItem('tabTitle', newTitle);
}

function loadTitle() {
    var savedTitle = localStorage.getItem('tabTitle');
    if (savedTitle) {
        document.title = savedTitle;
    }
}

function panic() {
    window.location.href = "https://example.com"; // Replace with your desired URL
}

document.addEventListener('DOMContentLoaded', loadTitle);
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        panic();
    }
});

document.getElementById("panicButton").addEventListener('click', panic);

window.onbeforeunload = function() {
    localStorage.setItem('tabTitle', document.title);
};
