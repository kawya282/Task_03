document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var navList = document.getElementById("navList");

    toggleButton.addEventListener("click", function() {
        navList.classList.toggle("nav-links-active");
    });
});