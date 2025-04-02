/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Site-ul este încărcat!");

    // Efect hover pe header
    const header = document.querySelector("header");
    header.addEventListener("mouseover", function() {
        header.style.backgroundColor = "#B71C1C";
    });
    header.addEventListener("mouseout", function() {
        header.style.backgroundColor = "#D32F2F";
    });
});