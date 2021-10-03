$(".item2").click(function () {
    i = $(this).index();
    $(".item2").eq(i).toggleClass("on");
    $(".item2").eq(i).find(".answer").slideToggle();
    $(".item2").not($(".item2").eq(i)).find(".answer").slideUp();
    $(".item2").not($(".item2").eq(i)).removeClass("on");
})


$(".ham-btn").click(function () {
    $(".bg").css({
        display: "block"
    })
    $(".tab").animate({
        left: 0 + "px"
    })
})
$(".x-btn").click(function () {
    $(".bg").css({
        display: "none"
    })
    $(".tab").animate({
        left: -400 + "px"
    })
})