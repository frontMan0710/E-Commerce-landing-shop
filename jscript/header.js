$(window).scroll(function () {
    var secondBox = $('.second');
    var offset = secondBox.offset().top;

    if ($(window).scrollTop() + $(window).height() > offset) {
        $("#callback").slideUp(500)

    } else {
        $("#callback").slideDown(400)
    }
})
$(function() {
    $(".has-submenu").hover(function () {
        $(".has-submenu .submenu").slideToggle(100)
    })
})
$(function () {
    $(".burger-icon").click(function () {
        $(".menu-content, .burger-icon").toggleClass("active")
    })
})