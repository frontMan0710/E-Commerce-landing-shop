$(window).scroll(function () {
    var secondBox = $('.second');
    var offset = secondBox.offset().top;
    if ($(window).width() > 1023) {
        if ($(window).scrollTop() + $(window).height() > offset) {
            $("#callback").slideUp(500);
        } else {
            $("#callback").slideDown(400);
        }
    } else {
        $("#callback").hide();
    }
})
$(function() {
    $(".has-submenu").hover(function () {
        $(".has-submenu .submenu").slideToggle(0)
    })
})
$(function () {
    $(".burger-icon").click(function () {
        $(".menu-content, .burger-icon").toggleClass("active")
        if ($(window).width() < 768) {
            $("body").toggleClass("lock")
            $(".menu-content").toggleClass("menuActive")
            if ($(".menu-content").hasClass("menuActive") && $(window).width() > 660 && $(window).width() < 768) {
                $(".menu-content").css("overflow-y", "scroll")
            }
        }
    })
    if ($(window).width() > 767) {
        $(".menu-content").toggleClass(".content-border")
        $(".menu-content").css("margin", "0 auto")
    }
})
$(function () {
    $(".searchCall").click(function () {

        if ($(window).width() > 767) {
            $(".inputBox").slideToggle(0).toggleClass("opened")
            if ($(".inputBox").hasClass("opened")) {
                $(".inputBox").css("display", "flex")
                $(".inputBox").css("align-items", "center")
                $(".inputBox").css("justify-content", "center")
            }
            $(".menu").slideToggle(0)
        }
    })
})