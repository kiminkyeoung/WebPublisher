
/*$(window).load(function(){

});*/

$(document).ready(function() {

    //로딩끝나면

    $(".loading img, .loading p").fadeOut(500);
    $(".loading").animate({
        top: '-100%'
    }, {
        duration : 1500,
        complete: function() {
            $(".loading").hide();
            $(".slogan_text").fadeIn(1000);
            $(".slogan_text").animate({
                left: "18%"
            },1000);
        }

    });
    
    
    /* keyword 슬라이드 넓이 높이 조정*/
    slideInit(1000);

    
});//Document Ready End

//반응형 고려한 코드 추가
$(window).resize(function(){
    
    /* keyword 슬라이드 넓이 높이 조정*/
    slideInit(1000);


});

/*슬라이드 넘기는 코드*/

var time; //슬라이드 넘어가는 시간 
var slide_count; //슬라이드 개수
var current_slide_index //현재 보여지는 슬라이드 인덱스 값


function slideInit(t) {
    time = t;  //슬라이드 넘어가는 시간 받기
    slide_count = $(".myslide").length; //슬라이드 사진 개수
    currentIndex = 0; //현재 보여지는 슬라이드 인덱스 값

    slide_Set(); //슬라이드 셋팅
    //slide_start(t); //슬라이드 시작
}

function slide_Set(){
    //슬라이드 기본적인 셋팅을 해놓는다.(가로세로 넓이 설정)
    /*이미지 가로 넓이 측정*/
    //var slide_width = $(".slide-box img:eq(0)").width(); //슬라이드 박스 첫번째 img에서 높이 구해옴
    //var slide_count = $(".myslide").length; //슬라이드 사진 개수

    var parent_width = $(".mykeyword").width();// 넓이값
    var slide_height = $(".slide-box img:eq(0)").height(); //높이값

    console.log(parent_width);

    $(".slide-box").width(parent_width);
    $(".slide-box").height(slide_height);
    $(".slide-box .myslide").width(parent_width / 4);



    var slide_width = $(".myslide:eq(0) img").width(); //슬라이드 박스 첫번째 img에서 높이 구해옴
    var slide_count = $(".myslide").length; //슬라이드 사진 개수

    $(".slide-box").width(slide_width * slide_count);

    //$(".slide-box .myslide").width((slide_width * slide_count) / slide_count);

     /*slide 높이 측정*/
     //var slide_height = $(".slide-box img:eq(0)").height(); //슬라이드 박스 첫번째 img에서 높이 구해옴
     //$(".slideshow-container").height(slide_height); //이미지 높이에 따라 슬라이드 높이 지정
 
}

function next_slide() {

    var slide_width = $(".slide-box img:eq(0)").width(); //슬라이드 넘어가는 넓이
    $(".slide-box").animate({
        left: '-' + slide_width + 'px'
    }, {
        duration : time,
        complete: function() {
            var first_slide = $(".slide-box .myslide:eq(0)").clone();
            $(".slide-box .myslide:eq(0)").remove();
            $(".slide-box").append(first_slide);
            $(".slide-box").css({left: "0px"});
        }

    });

}

function prev_slide() {

    var slide_width = $(".slide-box img:eq(0)").width(); //슬라이드 넘어가는 넓이

    var last_slide = $(".slide-box .myslide").last().clone();
    $(".slide-box .myslide").last().remove();
    $(".slide-box").prepend(last_slide);
    $(".slide-box").css({left: "-" + slide_width + "px"});


    $(".slide-box").animate({
        left: 0 + "px"
    }, {
        duration : time
    });

}

//스크롤 시 이벤트
$(window).scroll(function() {
    var who_offset = $("#whoami").offset();

    if ( $( document ).scrollTop() > who_offset.top ) {
        $("#header").addClass("fixed_header");
    }else {
        $("#header").removeClass("fixed_header");
    }

    //스킬에 포커스 시 해당 이벤트 실행
    var skill_offset = $("#myskill").offset();
    var contact_offset  =$("#contactme").offset();

    if ( $( document ).scrollTop() >= skill_offset.top ) {
        //포인트가 스킬에 왔으면
        //하이차트 셋팅값
        var target = ["skillgraph_0","skillgraph_1","skillgraph_2","skillgraph_3","skillgraph_4"];
        var target_title = ["HTML","DESIGN","CSS3","JAVASCRIPT","문서작업"];
        var target_val = [100,60,100,90,100];
        var target_color = ['#f7b094','#f5717f','#bf6b84','#6c5b7a','#345c7d'];
        //하이차트그리기
        for(var i = 0; i <= 4; i++) {
            Highcharts.chart(target[i], {

                chart: {
                    type: 'solidgauge',
                    height: '110%',
                    backgroundColor:'rgba(255, 255, 255, 0.0)'
                },
        
                title: {
                    text: target_title[i],
                    style: {
                        fontSize: '22px',
                        fontFamily:'Noto Sans KR',
                        color:'#524d4d',
                    }
                },
        
                tooltip: {
                    borderWidth: 0,
                    backgroundColor: 'none',
                    shadow: false,
                    style: {
                        fontSize: '14px'
                    },
                    pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                    positioner: function (labelWidth) {
                        return {
                            x: (this.chart.chartWidth - labelWidth) / 2,
                            y: (this.chart.plotHeight / 2) + 15
                        };
                    }
                },
        
                pane: {
                    startAngle: 0,
                    endAngle: 360,
                    background: [{ // Track for Move
                        outerRadius: '112%',
                        innerRadius: '88%',
                        backgroundColor:'#ebebeb',
                        borderWidth: 0
                    }]
                },
        
                yAxis: {
                    min: 0,
                    max: 100,
                    lineWidth: 0,
                    tickPositions: []
                },
        
                plotOptions: {
                    solidgauge: {
                        dataLabels: {
                            enabled: false
                        },
                        linecap: 'round',
                        stickyTracking: false,
                        rounded: true
                    }
                },
        
                series: [{
                    name: target_title[i],
                    data: [{
                        color: target_color[i],
                        radius: '112%',
                        innerRadius: '88%',
                        y: target_val[i]
                    }]
                }]
            });

        }

    }else if ( $( document ).scrollTop() >= contact_offset.top ) {
        return;
    }else {
        return;
    }

    



});