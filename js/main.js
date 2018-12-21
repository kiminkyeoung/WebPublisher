$(window).scroll(function () {
    var target_graph = $(".right_box").scrollTop();
    var height = $(document).scrollTop();
    if(document.body.scrollTop == target_graph) {
        var value = ["80","100","100","60","100"];
        $.each(value , function(index, item){
            $("#graph_" + index).find(".graph_value").animate({
                width: value[index] + "%"
            },1500);
        });
    }
});

$(document).ready(function() {
     $("figure").mouseenter(function() {
        $(this).append("<div class='fade'></div>");
     });   
     $("figure").mouseleave(function() {
        $(this).find(".fade").remove();
     });     
});

/*선택연월 탭메뉴 생성*/
function select_year(year, event) {
    var start_Year;
    var end_Year;
    var length = $(".portfolio_box").find("figure").length;

    $(".tab_menu li").removeClass("active");
    $(event).parent("li").addClass("active");

    for(var x = 0; x  <= length; x++) {
        start_Year = $("[name=start_" + x +"]").val();
        end_Year = $("[name=end_" + x +"]").val();

        if(year == "all") {
            $(".portfolio_box").find("figure").fadeIn();
        }else {
            if(year >= start_Year) {
                if(year <= end_Year) {
                    $(".portfolio_" + x).fadeIn();
                }else {
                    $(".portfolio_" + x).hide();
                }
            }else {
                $(".portfolio_" + x).hide();
            }
        }
       
     }
   
}


/*공통 모달 (닫아주기)*/
    function modal_hide(id) {
        $("#"+ id).hide();
        $("body").find(".fade").remove();
        $(this).focusout();
    }

    function modal_show(id) {
        $("#"+ id).show();
        $("body").append("<div class='fade'></div>");
        $(this).blur();
    }
    