/**
 * Created by Administrator on 2015/7/22.
 */
$(function () {
    $(".navListItem").hover(function(){
        $(this).find(".delivery").addClass("_navHover");
        $(this).find(".deliveryCity").show();
        $(this).find("._downArrow").addClass("_arrowHover");
        /*$(".deliveryCity").animate({
         'height': "246px"
         }, 200);*/
    }, function(){
        /*$(".deliveryCity").animate({
         'height': "0"
         });*/
        $(".deliveryCity").hide();
        $(this).find(".delivery").removeClass("_navHover");
        $(this).find(".deliveryCity").hide();
        $(this).find("._downArrow").removeClass("_arrowHover");
    })
    $(".deliveryCity .city a").click(function(){
        $(".deliveryCity .city a").each(function(){
            $(this).removeClass("_aClick");
        })
        $(this).addClass("_aClick");
        $(this).parent().parent().prev().find("span").html($(this).text());
    })

    $(".deliveryCity>a").wrap("<div class='city'></div>");
    $(".deliveryCity a").each(function(){
        $(this).removeClass("city");
    })
})
