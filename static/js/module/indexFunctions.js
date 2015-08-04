/**
 * Created by Administrator on 2015/8/4.
 */

//banner计时器
var timer_auto;
function autoSlide() {
    timer_auto = window.setInterval(function(){
        var index = $("._triggerHover").index();
        var nextIndex = index + 1;
        var maxIndex = $(".trigger-a").length;
        if(nextIndex >= maxIndex){
            nextIndex = 0;
        }
        var nextEle = $('.trigger-a').eq(nextIndex);
        bannerAnimate(nextEle, nextIndex);
    }, 3000);
}


var countTimer;
function countDown(){

    countTimer = setInterval(function(){
        var now = new Date();
        var H = now.getHours();
        var M = now.getMinutes();
        var S = now.getSeconds();

        var m = 59;
        var s = 59;

        $(".clock").attr("class", "clock");
        $(".miaosha-l").attr("class", "miaosha-l");
        $(".timeline-item p").removeClass("curr");
        /*morming*/
        if(H > 0 && H < 6){
            $(".clock").addClass("night");
            $(".miaosha-l").addClass("bgd-night");
            $(".timeline-item p").eq(2).addClass("curr");
            var h = 5;
        } else if(H > 6 && H < 12){
            $(".clock").addClass("morning");
            $(".miaosha-l").addClass("bgd-morning");
            $(".timeline-item p").eq(0).addClass("curr");
            var h = 11;
        } else if(H > 12 && H < 18){
            $(".clock").addClass("noon");
            $(".miaosha-l").addClass("bgd-noon");
            $(".timeline-item p").eq(1).addClass("curr");
            var h = 17;
        } else{
            $(".clock").addClass("night");
            $(".miaosha-l").addClass("bgd-night");
            $(".timeline-item p").eq(2).addClass("curr");
            var h = 5;
        }

        var hour = h - H;
        var minute = m - M;
        var second = s - S;

        var nHor = hour + 24;


        if(hour >= 0 || hour < 6){
            $('.daojishi span').eq(0).html("0" + hour);
        } else if(hour < 0){
            $('.daojishi span').eq(0).html(nHor);
        } else{
            $('.daojishi span').eq(0).html(hour);
        }

        if(nHor < 10){
            $('.daojishi span').eq(0).html("0" + nHor);
        }

        if(minute < 10){
            $('.daojishi span').eq(1).html("0" + minute);
        } else{
            $('.daojishi span').eq(1).html(minute);
        }

        if(second < 10){
            $('.daojishi span').eq(2).html("0" + second);
        } else{
            $('.daojishi span').eq(2).html(second);
        }
    }, 1000)
}
