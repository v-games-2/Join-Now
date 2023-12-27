function changeTitle() {
    var newTitle = document.getElementById("titleInput").value;
    document.title = newTitle;
}

function panic() {
    window.location.href = "https://example.com"; // Replace with your desired URL
}

// Listen for keydown events on the entire document
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        panic();
    }
});

// Optional: Attach panic function to button for click as well
document.getElementById("panicButton").onclick = panic;
