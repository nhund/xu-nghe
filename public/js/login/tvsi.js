/**
 * Created by JetBrains WebStorm.
 * User: TUTA
 * Date: 9/13/11
 * Time: 11:05 AM
 * To change this template use File | Settings | File Templates.
 */
function initvsi() {

    $(".tvsistxt").focus(function() {
        if($(this).val() == "Nhập mã chứng khoán cần tìm")
            $(this).val("");
    });
	
    $(".tvsistxt").blur(function() {
        if($(this).val() == "")
            $(this).val("Nhập mã chứng khoán cần tìm");
    });
	 $(".txtsearch ").focus(function() {
        if($(this).val() == "Từ khóa tìm kiếm")
            $(this).val("");
    });
	
	$(".tvsistxt").bind("click", function(){
		$(this).val("");
	});
	
    $(".txtsearch ").blur(function() {
        if($(this).val() == "")
            $(this).val("Từ khóa tìm kiếm");
    });
    tabCktvHome();
}
/*tvsi box homepage*/
function tabCktvHome() {
    var idtab = "dbtthose";
    var idtabsort = "chrdd";
    //tab hose, hnx
    $(".dbttab a.nor").click(function() {
        var $this = $(this);
        if($this.attr("rel") != idtab) {
            $this.parents(".dbttab").find("a.nor").removeClass("active");
            $this.addClass("active");

            idtab = $this.attr("rel");
            $(".ctdbtt > div").hide();
            $("." + idtab).fadeIn(0);
        }
    });
    $(".ctdbtt .navview li a").click(function() {
        var $this = $(this);
        // if($this.attr("rel") != idtabsort) {
            $this.parents(".navview").find("a").removeClass("active");
            $this.addClass("active");

            idtabsort = $this.attr("rel");
            var $charwrap = $this.parents(".navview").prev();
            $charwrap.children("p").hide();
            $charwrap.children("." + idtabsort).fadeIn(0);
        // }
    });
    return false;
}