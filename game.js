/**
 * Created by y50 on 2017/8/21.
 */
(function(window){
  var m=new Map({color:'pink'});
  m.render();

  var food=new Food({map:m});
  food.setPos();

  var snake=new Snake({map:m});

  var t=setInterval(function(){
    m.map.innerHTML="";
    food.render();
    snake.move();
    snake.render();
    impact();
    gameover();
    tou();
  },200);

  window.onkeydown=function(e){
    var code= e.keyCode;
    switch(code){
      case 37:
        snake.direction='left';
        break;
      case 38:
        snake.direction='up';
        break;
      case 39:
        snake.direction='right';
        break;
      case 40:
        snake.direction='down';
        break;
      case 32:
        alert('ÔÝÍ£');
        clearInterval(t);
        break;
    }
  }

  function impact(){
    var head=snake.body[0];
    if(head.x==food.x&&head.y==food.y){
      snake.eat();
      food.setPos();
    }
  }

  function gameover(){
    var head=snake.body[0];
    if(head.x<0||head.y<0||head.x> m.col-1||head.y> m.row-1){
      clearInterval(t);
      alert('gameover £¡')
    }
  }

  function tou(){
    for (var i = snake.body.length-1; i >0; i--) {
      if(snake.body[0].x==snake.body[i].x&&snake.body[0].y==snake.body[i].y){
        clearInterval(t);
        alert('gameover £¡')
      }
    }
  }

})(window);