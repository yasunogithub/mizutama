window.onload=function(){
  document.body.addEventListener("mousemove", function(e){

    //座標を取得する
    var mX = e.pageX;  //X座標
    var mY = e.pageY;  //Y座標

    //座標を表示する
    console.log(mX/10);
    document.getElementsByClassName('mizutama')[0].style.backgroundPosition=`0 0,${mX/10}px 15px`;
    //console.log(mY/10);
  });
};
