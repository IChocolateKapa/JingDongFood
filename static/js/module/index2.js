/**
 * Created by Administrator on 2015/7/29.
 */
$(function () {

    /*banner左侧图片展示*/
    $(".banner-r-list-b li").hover(function(){
        $(".banner-r-list-b li a").removeClass("curr-a");
        $(this).find("a").addClass("curr-a");

        var index = $(this).index();
        $(".banner-r-list-t li").removeClass("block");
        $(".banner-r-list-t li").eq(index).addClass("block");

    })

    /*冷柜零食title hover*/
    $(".title-ListItem").click(function(){
        $(this).parent().find(".title-ListItem").removeClass("curr");
        $(this).addClass("curr");
        //$(this).find("i").hide();
    })
})
