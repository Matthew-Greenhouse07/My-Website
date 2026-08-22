document.getElementById("myButton").addEventListener("click", function() {
    alert("Hello!");
});

function picFunction() {
    const pic = document.getElementById("image");
    pic.style.width = (pic.offsetWidth + 10) + "px";
}