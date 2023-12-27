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

function launchBlank() {
    window.open('about:blank','_blank');
}

document.addEventListener('DOMContentLoaded', loadTitle);

window.onbeforeunload = function() {
    localStorage.setItem('tabTitle', document.title);
};
