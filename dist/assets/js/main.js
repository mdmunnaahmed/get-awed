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

$(document).ready(function () {
    $("#txtInput, #txtInput2").keypress(function (event) {
        if (event.which === 13) {
            // Enter key pressed
            var keyword = $(this).val().trim();
            if (keyword !== "") {
                $("#keywordsContainer, #keywordsContainer2").append(
                    '<div class="keyword">' +
                        keyword +
                        '<span class="remove-icon">&#10006;</span></div>'
                );
                $(this).val("");
            }
        }
    });

    $("#keywordsContainer, #keywordsContainer2").on(
        "click",
        ".remove-icon",
        function () {
            $(this).parent(".keyword").remove();
        }
    );
});

$(document).ready(function () {
    $(".dropdown-item").each(function () {
        var $dropdown = $(this).find(".dropdown");
        var $dropdownList = $(this).find(".dropdown-list");
        var $dropdownMain = $(this).find(".dropdown-main");

        // Click event handler for dropdown list items
        $dropdownList.find("li label").click(function (event) {
            var selectedText = $(this).text().trim();
            $dropdownMain.text(selectedText);
            $dropdownList.hide();
            event.stopPropagation(); // Prevent the click event from propagating to the document
        });

        // Click event handler for the document to hide dropdown list when clicked outside
        $(document).click(function (event) {
            // Check if the clicked element is not within the dropdown list or dropdown
            if (
                !$(event.target).closest(".dropdown-list").length &&
                !$(event.target).closest(".dropdown").length
            ) {
                $dropdownList.hide();
            }
        });
    });
});

$(document).ready(function () {
    $(".thumb").click(function () {
        // Remove 'active' class from all thumbnails within the same structure
        $(this).siblings().removeClass("active");

        // Add 'active' class to the clicked thumbnail
        $(this).addClass("active");

        // Get the src attribute of the clicked thumbnail
        var newSrc = $(this).find("img").attr("src");

        // Set the src attribute of the main profile image within the same structure
        $(this)
            .closest(".single-user-profile-item__thumb")
            .find(".main-thumb")
            .attr("src", newSrc);
    });
});
