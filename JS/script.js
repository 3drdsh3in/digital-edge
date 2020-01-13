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
jQuery(function () {

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

// Button References via JS DOM:
// const left_button = document.querySelector('.fa-chevron-left');
// const right_button = document.querySelector('.fa-chevron-right');

// Carousel Code:
// $('tagName').toggleClass('selectorName')

jQuery(function () {
    const price_item = [".basic", ".standard", ".deluxe"];
    const mobAnimationNames = ["slide-appear-left-mob", "slide-disappear-left-mob", "slide-appear-right-mob", "slide-disappear-right-mob", "hide"];
    var viewIndex = 1;
    // References to every carousel plan:
    const planItems = document.querySelectorAll('.carousel-item');

    setInterval(function () {
        function Increment(indexVal) {
            if (indexVal != 2) {
                indexVal = indexVal + 1;
                return indexVal;
            }
            else {
                return 0;
            }
        }
        function Decrement(indexVal) {
            if (indexVal != 0) {
                indexVal = indexVal - 1;
                return indexVal;
            }
            else {
                return 2;
            }
        }

        // Remove Animation Class Elements:
        $('.basic').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.standard').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.deluxe').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")

        // Decrease viewIndex value.
        viewIndex = Increment(viewIndex);
        console.log(viewIndex);
        $(price_item[viewIndex]).toggleClass('slide-appear-right-mob')
        $(price_item[Decrement(viewIndex)]).toggleClass('slide-disappear-right-mob')
        $(price_item[Increment(viewIndex)]).toggleClass('hide')
    }
        , 8000);

    $('.fa-chevron-left').click(() => {
        function Increment(indexVal) {
            if (indexVal != 2) {
                indexVal = indexVal + 1;
                return indexVal;
            }
            else {
                return 0;
            }
        }
        function Decrement(indexVal) {
            if (indexVal != 0) {
                indexVal = indexVal - 1;
                return indexVal;
            }
            else {
                return 2;
            }
        }
        // Remove Animation Class Elements:
        $('.basic').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.standard').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.deluxe').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        // Decrease viewIndex value.
        viewIndex = Decrement(viewIndex);
        console.log(viewIndex);
        $(price_item[viewIndex]).toggleClass('slide-appear-left-mob')
        $(price_item[Decrement(viewIndex)]).toggleClass('slide-disappear-left-mob')
        $(price_item[Increment(viewIndex)]).toggleClass('hide')
    })
    $('.fa-chevron-right').click(() => {
        function Increment(indexVal) {
            if (indexVal != 2) {
                indexVal = indexVal + 1;
                return indexVal;
            }
            else {
                return 0;
            }
        }
        function Decrement(indexVal) {
            if (indexVal != 0) {
                indexVal = indexVal - 1;
                return indexVal;
            }
            else {
                return 2;
            }
        }
        // Remove Animation Class Elements:
        $('.basic').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.standard').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")
        $('.deluxe').removeClass("slide-appear-left-mob slide-disappear-left-mob slide-appear-right-mob slide-disappear-right-mob hide")

        // Decrease viewIndex value.
        viewIndex = Increment(viewIndex);
        console.log(viewIndex);
        $(price_item[viewIndex]).toggleClass('slide-appear-right-mob')
        $(price_item[Decrement(viewIndex)]).toggleClass('slide-disappear-right-mob')
        $(price_item[Increment(viewIndex)]).toggleClass('hide')
    })
});