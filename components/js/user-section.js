// user-section
document.addEventListener("DOMContentLoaded", function() {
    fetch("/components/user-section.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".user").innerHTML = data; 
    })
    .catch(error => console.error("Error cargando user-section: ", error));
});