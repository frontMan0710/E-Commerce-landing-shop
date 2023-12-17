$(function () {
    $('.zoom').magnificPopup({
        type: "image",
        preloader: false,
        closeOnContentClick: true,
        image: {
            verticalFit: false,
            hasOrientation: true
        },
    })
    $('#callbackModal').magnificPopup({
        items: {
            src: '#callbackModalContainer',
            type: 'inline',
            modal: true
        },
        focus: '#phoneNumber',
        preloader: false,
        closeBtnInside: false,
    })
    $("#mail").on("input", function () {
        var inputValue = $(this).val();
        if (inputValue.indexOf('@') !== -1) {
            $("#subWithEmail").magnificPopup({
                items: {
                    src: "#answerModalContainer",
                    type: "inline",
                    modal: true
                },
                closeBtnInside: false,
                overflow: false,
            })
        }
    })
})