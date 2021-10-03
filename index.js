
    i = 0; //변수
    sc()

    function sc() {
        console.log(i)
        win_height = $(window).height()
        $(".indi").eq(i).addClass("on")
        $(".indi").not($(".indi").eq(i)).removeClass("on")
        $("html").stop().animate({
            scrollTop: win_height * i
        }, 800)
    }


    $("*").on("mousewheel", function (event) {
        event.preventDefault()
    })

    $(window).on("mousewheel", function (event) {
        delta = event.originalEvent.wheelDelta
        console.log(delta);
        ing = $("html").is(":animated")
        console.log(ing)
        if (delta < 0 && i < 5 && !ing) {
            i++;
            sc()
        } else if (delta > 0 && i > 0 && !ing) {
            i--;
            sc()
        }
    })

    $(".indi").click(function () {
        i = $(this).index(); //순번
        //화면높이==창높이==$(window).height()
        win_h = $(window).height()
        $("html").stop().animate({
            scrollTop: win_h * i
        }, 1000)

        /*그 버튼-배경색> 흰색
        나머지는 원래 색*/

        $(".indi").eq(i).addClass("on")
        $(".indi").not($(".indi").eq(i)).removeClass("on")
    })