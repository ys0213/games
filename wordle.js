//제출 누른 횟수(시도 횟수) 나오게 하기
var rnd; //시도(제출 버른 누른) 횟수
var storage = ['style', 'width','basic','image','table','alert','value'] //정답 목록(이 중에 하나 뽑아 쓰기)
var asw = '';
var end = '정답입니다';

$("#start").on("click",function(){ //저장된 단어중에 무작위로 하나 뽑아 정답 변수에 저장
    asw = storage[Math.floor(Math.random()*storage.length)]
    $("input").val('').css({"background":"white",});
    if($("#start").text()=="게임시작"){ //처음에는 "게임시작", 이후부턴 "다시하기"로 버튼 텍스트 바꾸기
        $("#start").text("다시하기");
    }
    rnd=0;
    $("#rnd").val(rnd); //시도(정답 제출 횟수) 0으로 돌리기
    return asw;
});

$('#submit').on('click',function(){ // 입력한 값을 정답과 비교하기
    var inputs = [] //정답 입력 값을 저장 할 배열 만들기
    for(var i =0; i<5;i++){ //배열에 입력값 저장하기 
        inputs.push($("#input"+i)); 
    }
for(var i = 0; i < 5; i++){ //입력값, 정답 비교
    if(inputs[i].val() == asw[i]){
    inputs[i].css({"background":'rgb(103,178,253)'}); //문자, 위치 모두 맞으면 파란색
    $("#correct"+i).val(inputs[i].val()); // 맞춘 문자는 아래칸에서 보여주기
   } else if(asw.includes(inputs[i].val())&&inputs[i].val()!=''){
    inputs[i].css({"background":'rgb(247, 250, 182)'}); //문자는 맞지만 위치는 틀리면 노랑
    } else {
    inputs[i].css({"background":'lightgray'}); //빈칸이나 정답에 없는 글자는 회색 표시
    }
}
rnd++; //시도(정답 제출) 횟수 늘리기
$("#rnd").val(rnd);
judge(); //모든 정답을 맞추면 '정답입니다!' 출력
});

$("#eraser").on("click",function(){ //정답 입력칸에 입력해놓은 문자 지우는 버튼
    for(var i = 0; i<5; i++){
        $("#input"+i).val("")
                     .css({"background":"azure"});
    }
});

function judge(){// 정답 맞추면 게임 끝내기
    var endGame = false;
    for(var i =0;i<5;i++){ //5글자 모두 정답이면 게임 끝
        if($("#correct"+i).val()!=""){
            endGame = true;
        }else{ 
            endGame = false;
            break;
        }   
    };
    if(endGame){ //정답 맞추면 윗줄에 '정답입니다'출력 + 아랫줄에 정답 표시하고 파란 배경
            for(var i =0; i<end.length;i++){
            $("#input"+i).val(end[i]).css({"background":"white"});
            $("#correct"+i).css({"background":"skyblue"});
         }
        }
}