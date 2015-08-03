/**
 * Created by Administrator on 2015/8/3.
 */
$(function () {
    /*渴了*/
    $(".ke li").hover(function(){
        var $this = $(this);
        kxec_func(".ke", $this);
    })

    /*闲了*/
    $(".xian li").hover(function(){
        var $this = $(this);
        kxec_func(".xian", $this);
    })

    /*饿了*/
    $(".ele li").hover(function(){
        var $this = $(this);
        kxec_func(".ele", $this);
    })

    /*馋了*/
    $(".chan li").hover(function(){
        var $this = $(this);
        kxec_func(".chan", $this);
    })

})

function kxec_func(ele, $obj){
    $(ele + " li").removeClass("curr");
    $obj.addClass("curr");
    var index = $obj.index();
    var $content = $(ele).parent().siblings("div").find("._content");
    var $imgList = $(ele).parent().siblings("div").find(".kxec-r-imgList");
    $content.find("ul").removeClass("block");
    $content.find("ul").eq(index).addClass("block");

    $imgList.find("ul").removeClass("block");
    $imgList.find("ul").eq(index).addClass("block");
}