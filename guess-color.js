
var colors = [] // 6개의 RGB값을 저장 할 배열 
var correct = Math.floor(Math.random()*6); //랜덤으로 정답색 정하기 위해 만든 변수

function makeColor(){ //6개의 랜덤 색상 뽑기
    for(var j =0;j<6;j++){
        colors[j] = [Math.floor(Math.random()*256) , Math.floor(Math.random()*256) ,Math.floor(Math.random()*256)];
        }
}
makeColor();

 function inputColor(){ //6개 버튼에 색상 값 넣고 상단에 RGB값 보여주기
    for(var i = 0 ; i < 6 ; i++){//rgb(n,n,n) <각 자리에 들어갈 세 숫자 랜덤 뽑아서 배열로 저장
        $("#color"+i).css({
            "background-color":`rgb(${colors[i]})`
            });
    }
    $('h1').text('RGB('+colors[correct]+')');//상단에 맞춰야할 색상값 보여주기
    $("#not-shown").css({"background-color":'RGB('+colors[correct]+')'});//정답 저장용
 }
 inputColor();

 $("button").on("click",function(event){ //버튼 클릭하면 정답 판정
    if($(this).css("background-color")==$("#not-shown").css("background-color")){
        $('h1').text('정답입니다!');  //답 맞춘 경우 문구 출력 
        $("h3").css({"color":"black"}); //안내문구 안보이게 하기
        for(var i = 0 ; i < 6 ; i++){ //모든 버튼 정답색으로 바꾸기
            $("#color"+i).css({
                "background-color":'RGB('+colors[correct]+')'});
        }
    $("#new-color").text("다시하기");
    }else{ //틀린 답 고르면 버튼 색 배경색과 같게(검정색) 바꾸기
        $(this).css({"background-color":"black"});
        $('#new-color').css({"background-color":"white"});
    }
 })

 $("#new-color").on("click",function(event){ //색바꾸기or다시하기 버튼으로 게임 리셋하기
    $("#new-color").text("색 바꾸기");
    makeColor();
    inputColor();
    $("h3").css({"color":"white"}); 
 })