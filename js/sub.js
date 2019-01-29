
    //해당 내용 DB 저장
    var title = [
        "보령시청 홈페이지",
        "에이블정보기술 홈페이지",
        "한국썸벧 홈페이지",
        "재해복구 솔루션 3-one",
        "자산관리 솔루션 AIMS",
        "당진평생학습센터 홈페이지",
        "국가보훈처 ERMS 시스템",
        "나누텍 홈페이지",
        "중소벤처기업부 업무포털 홈페이지",
    ];
    var date = [
        "2014.12~2015.1.",
        "2015.4.~2018.11.",
        "2015.9.~2015.11.",
        "2015.10.~2018.11.",
        "2015.12.~2018.11.",
        "2016.5.~2016.9.",
        "2016.12.~2017.4.",
        "2017.5.~2017.6.",
        "2018.5.~2018.11.",
    ];
    var coding_lang = [
        "HTML, CSS3",
        "HTML, CSS3, RubyonRails3, Javascript/Jquery",
        "HTML, CSS3, RubyonRails2, Javascript/Jquery",
        "HTML, CSS3, RubyonRails3, Javascript/Jquery",
        "HTML, CSS3, RubyonRails3, Javascript/Jquery",
        "HTML, CSS3, RubyonRails3, Javascript/Jquery",
        "HTML, CSS3, JSP, Javascript/Jquery",
        "HTML, CSS3, RubyonRails3, Javascript/Jquery",
        "HTML, CSS3, JSP, Javascript/Jquery",
    ];
    var company = [
        "보령시청(메이아이)",
        "에이블정보기술",
        "썸벧한국",
        "에이블정보기술",
        "에이블정보기술",
        "당진시청(에이블정보기술)",
        "국가보훈처(에이블정보기술)",
        "에이블정보기술",
        "중소벤처기업부(에이블정보기술)",
    ];
    var role = [
        "<li>서브페이지 마크업</li><li>기관 홈페이지 메뉴 및 링크 작업</li>",
        "<li>전체 화면 마크업</li><li>프런트앤드 개발 담당</li><li>반응형 홈페이지 구현</li><li>유지보수</li>",
        "<li>전체 화면 마크업</li><li>프런트앤드 개발 담당</li><li>모바일 홈페이지 구현</li>",
        "<li>시장조사 및 기획 참여</li><li>전체페이지 마크업</li><li>프런트앤드 개발 담당</li><li>고객응대 및 커스터마이징 진행</li><li>소프트웨어 품질인증서 GS 발급(2016.7.)</li>",
        "<li>기획 참여</li><li>전체페이지 마크업</li><li>프런트앤드 개발 담당</li><li>고객응대 및 커스터마이징 진행</li><li>서비스데스크 DB 설계 참여</li>",
        "<li>전체 페이지 마크업</li><li>프런트앤드 개발 담당</li><li>반응형 홈페이지 구현</li>",
        "<li>대표홈페이지 처장과의대화/FAQ 페이지 마크업</li><li>반응형 홈페이지 구현</li><li>관리자 페이지 마크업</li><li>프런트앤드 개발 담당</li><li>제안서, 산출물 작성</li><li>고객응대 및 미팅참여</li>",
        "<li>기획 참여</li><li>전체페이지 마크업</li><li>프런트앤드 개발 담당</li><li>지도 API 연동</li><li>반응형 홈페이지 구현</li>",
        "<li>전체페이지 마크업</li><li>모바일 홈페이지 구현</li><li>기획 참여</li><li>프런트앤드 개발 담당</li><li>제안서, 산출물 작성</li><li>고객응대 및 미팅참여</li>",
    ];

    var link = [
        "http://www.brcn.go.kr/",
        "http://www.ableit.co.kr/",
        "http://www.thumbvet.co.kr/",
        "javascript:window.alert('해당 솔루션은 링크가 제공되지 않습니다.')",
        "javascript:window.alert('해당 솔루션은 링크가 제공되지 않습니다.')",
        "http://lll.dangjin.go.kr/",
        "http://sangdam.mpva.go.kr/faq/userQuestionList.do",
        "http://www.nanutec.co.kr/",
        "javascript:window.alert('해당 홈페이지는 링크가 제공되지 않습니다.')",
    ];

$(document).ready(function() {
    
    //포트폴리오 슬라이드 움직이기
    $(".portfolio_arrow > a").click(function() {
        var target = $(this).attr("class");
        var port_num = $(".port_info").attr("id");
        var number = port_num.split("_");
        var target_num =  number[1];
        

        //숫자못가져올 경우
        if(target_num == undefined) {
            target_num = 0;
        }


        if(target == "prev") {
           //이전을 눌렀을 경우
            if(target_num == 0) {
                target_num = 8;
            }else {
                target_num = Number(target_num) - 1;
            }
          
        }else if(target == "next"){
            //다음눌렀을 때
            if(target_num == 8) {
                target_num = 0;
            }else {
                target_num =  Number(target_num) + 1;
            }
        }


        $(".port_img").animate({
            margin:"0 0 0 -150px",
            opacity:"0"
        }, {
            complete: function() {
                $(".port_img img").attr("src","images/port_img" + target_num + ".png");
                $(".port_info").attr("id","portlist_" + target_num);
                $(".port_info_text h1").text(title[target_num]);
                $(".port_info_text h3").text(date[target_num]);
                $(".port_info_text .coding_lang").text(coding_lang[target_num]);
                $(".port_info_text .company").text(company[target_num]);
                $(".port_info_text ul").html(role[target_num]);
                $(".port_info_text .btn_box a").attr("href", link[target_num]);
            }
        });
        

        $(".port_img").animate({
            margin:"0",
            opacity:"1"
        });

    
    });
});//Document Ready End


//홈페이지 선택 시 슬라이드로 이동

function port_View(num) {
    $(".port_img").animate({
        margin:"0 0 0 -150px",
        opacity:"0"
    }, {
        complete: function() {
            $(".port_img img").attr("src","images/port_img" + num + ".png");
            $(".port_info").attr("id","portlist_" + num);
            $(".port_info_text h1").text(title[num]);
            $(".port_info_text h3").text(date[num]);
            $(".port_info_text .coding_lang").text(coding_lang[num]);
            $(".port_info_text .company").text(company[num]);
            $(".port_info_text ul").html(role[num]);
            $(".port_info_text .btn_box a").attr("href", link[num]);
        }
    });
    

    $(".port_img").animate({
        margin:"0",
        opacity:"1"
    });
}
