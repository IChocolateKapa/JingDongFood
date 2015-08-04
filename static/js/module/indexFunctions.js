/**
 * Created by Administrator on 2015/8/4.
 */


function getImgClass(index){
    var img = "";
    switch (index){
        case 0:
            img = "sx";
            break;
        case 1:
            img = "mj";
            break;
        case 2:
            img = "yl";
            break;
        case 3:
            img = "sp";
            break;
        case 4:
            img = "bj";
            break;
        default:
            img = ""
    }

    return img;
}

function getImgName(index){
    var img = "";
    switch (index){
        case 0:
            img = "bgd-chihuo";
            break;
        case 1:
            img = "bgd-rouchuan";
            break;
        case 2:
            img = "bgd-putao";
            break;
        case 3:
            img = "bgd-jiushui";
            break;
        default:
            img = "bgd-chihuo"
    }

    return img;
}



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

        $("#daynight").attr("class", "moon");
        /*morming*/
        if(H > 6 && H < 12){
            $("#daynight").attr("class", "sun");
            $(".clock").addClass("morning");
            $(".miaosha-l").addClass("bgd-morning");
            $(".timeline-item p").eq(0).addClass("curr");
            var h = 11;
        } else if(H > 12 && H < 18){
            $("#daynight").attr("class", "sun");
            $(".clock").addClass("noon");
            $(".miaosha-l").addClass("bgd-noon");
            $(".timeline-item p").eq(1).addClass("curr");
            var h = 17;
        } else{
            $("#daynight").attr("class", "moon");
            $(".clock").addClass("night");
            $(".miaosha-l").addClass("bgd-night");
            $(".timeline-item p").eq(2).addClass("curr");
            var h = 5;
        }

        var hour = h - H;
        var minute = m - M;
        var second = s - S;
        var nHor = hour + 24;

        if(hour >= 0 && hour < 6){
            $('.daojishi span').eq(0).html("0" + hour);
        } else{
            if(nHor < 10){
                $('.daojishi span').eq(0).html("0" + nHor);
            } else{
                $('.daojishi span').eq(0).html(nHor);
            }
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
