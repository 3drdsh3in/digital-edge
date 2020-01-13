const navLinksRef = document.querySelector(".nav-links");
// const barsRef = document.querySelector(".fa-bars");
const barsRef = document.querySelector(".nav-icon");

const phoneWidthObject = window.matchMedia("(min-width: 768px)");
// Only runs toggleLinks whenever there is a change to any
// media query status changing.
phoneWidthObject.addListener(toggleLinks);

function toggleLinks(mediaObject) {
    if (document.querySelector('.animate1') != null) {
        $(".nav-icon .first").toggleClass('animate1');
        $(".nav-icon .middle").toggleClass('animate2');
        $(".nav-icon .last").toggleClass('animate3');
    }
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

// Bars animation to & from cross:
$(document).ready(function () {

    $(".nav-icon").click(function () {
        $(".nav-icon .first").toggleClass('animate1');
    });

    $(".nav-icon").click(function () {
        $(".nav-icon .middle").toggleClass('animate2');
    });
    $(".nav-icon").click(function () {
        $(".nav-icon .last").toggleClass('animate3');
    });



    $(".nav-link").click(function () {
        if (phoneWidthObject.matches == false) {
            $(".nav-icon .first").toggleClass('animate1');
            $(".nav-icon .middle").toggleClass('animate2');
            $(".nav-icon .last").toggleClass('animate3');
            if (document.querySelector(".nav-links").style.display == "block") {
                $(".nav-links").css("display", "none")
            }
            else {
                $(".nav-links").css("display", "block")
            }
        }
    })
});

// .nav-icon:after
// .nav-icon:before
// .nav-icon div

// Carousel Code:

const price_item = ["Basic", "Standard", "Professional"];

// Button References via JS DOM.
const left_button = document.querySelector('.fa-chevron-left')
const right_button = document.querySelector('.fa-chevron-right')