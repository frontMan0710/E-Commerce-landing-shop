$(window).scroll(function () {
    var secondBox = $('.second');
    var offset = secondBox.offset().top;

    // Проверяем ширину экрана
    if ($(window).width() > 1023) {
        // Продолжаем с вашими текущими условиями
        if ($(window).scrollTop() + $(window).height() > offset) {
            $("#callback").slideUp(500);
        } else {
            $("#callback").slideDown(400);
        }
    } else {
        // Если ширина экрана менее 1023px, скрываем #callback без анимации
        $("#callback").hide();
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