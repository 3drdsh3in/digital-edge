const navLinksRef = document.querySelector(".nav-links");
const barsRef = document.querySelector(".fa-bars");

const phoneWidthObject = window.matchMedia("(min-width: 768px)");
// Only runs toggleLinks whenever there is a change to any
// media query status changing.
phoneWidthObject.addListener(toggleLinks);

function toggleLinks(mediaObject) {
    if (mediaObject.matches) {
        navLinksRef.style.display = "flex";
        console.log('a')
    }
    else {
        navLinksRef.style.display = "none";
        console.log('b')
    }
}

// BARS: Mouse Over Event Listener
barsRef.addEventListener("click", () => {
    if (navLinksRef.style.display == "none" || navLinksRef.style.display == "") {
        navLinksRef.style.display = "block";
    }
    else {
        navLinksRef.style.display = "none";
    }
})