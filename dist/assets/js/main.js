"user strict";

// Detect Screen Size
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
    screenSize = window.innerWidth;
});

//Faq Click Event
$(".faq-item__title").on("click", function (e) {
    var element = $(this).parent(".faq-item");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-item__content").slideUp(300);
    } else {
        element.addClass("open");
        element.children(".faq-item__content").slideDown(300);
        element
            .siblings(".faq-item")
            .children(".faq-item__content")
            .slideUp(300);
        element.siblings(".faq-item").removeClass("open");
        element.siblings(".faq-item").find(".faq-item__content").slideUp(300);
    }
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
    if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
        $(this).addClass("active");
    }
});

// Menu Click Event
let trigger = $(".toggler");
let dropdown = $(".nav-wrapper");
if (trigger || dropdown) {
    trigger.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
            dropdown.toggleClass("active");
            trigger.toggleClass("active");
        });
    });
    dropdown.each(function () {
        $(this).on("click", function (e) {
            e.stopPropagation();
        });
    });
    $(document).on("click", function () {
        dropdown.removeClass("active");
        trigger.removeClass("active");
    });
}
