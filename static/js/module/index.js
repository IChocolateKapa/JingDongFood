/**
 * Created by Administrator on 2015/7/22.
 */
$(function () {

    /*nav hover 效果 -- 开始*/
    $(".navListItem").hover(function(){
        $(this).find(".delivery").addClass("_navHover");
        $(this).find("._downArrow").addClass("_arrowHover");
        $(this).find(".deliveryCity").show();
    }, function(){
        $(".deliveryCity").hide();
        $(this).find(".delivery").removeClass("_navHover");
        $(this).find(".deliveryCity").hide();
        $(this).find("._downArrow").removeClass("_arrowHover");
    })

    /*nav hover 效果 -- 结束 */


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
