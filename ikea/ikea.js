$(".mainslide").owlCarousel({
   
    items: 1,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    animateIn: 'flipInX',
    autoplayTimeout: 3000,
    autoplay: true,
    smartSpeed: 450
})
$(".product").owlCarousel({
   
    items: 4,
    nav: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: true,
    smartSpeed: 450,
    margin:50
})

$(".ham-btn").click(function(){
    $(".bg").css({display:"block"})
    $(".tab").animate({left:0+"px"})
})
$(".x-btn").click(function(){
    $(".bg").css({display:"none"})
    $(".tab").animate({left:-400+"px"})
})

$(".b1").mouseenter(function(){
    $(".p1").css({display:"block"})
})
$(".b2").mouseenter(function(){
    $(".p2").css({display:"block"})
})
$(".b3").mouseenter(function(){
    $(".p3").css({display:"block"})
})
$(".b4").mouseenter(function(){
    $(".p4").css({display:"block"})
})
$(".b5").mouseenter(function(){
    $(".p5").css({display:"block"})
})

$(".b1").mouseleave(function(){
    $(".p1").css({display:"none"})
})
$(".b2").mouseleave(function(){
    $(".p2").css({display:"none"})
})
$(".b3").mouseleave(function(){
    $(".p3").css({display:"none"})
})
$(".b4").mouseleave(function(){
    $(".p4").css({display:"none"})
})
$(".b5").mouseleave(function(){
    $(".p5").css({display:"none"})
})