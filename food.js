/**
 * Created by y50 on 2017/8/21.
 */
(function(){

  function Food(option){
    this.map=option.map;
    this.color=option.color||'yellow';
    this.x=0;
    this.y=0;
    this.size=option.size||25;
  }

  Food.prototype.render=function(){
    var food=document.createElement('div');
    food.style.background=this.color;
    food.style.width=this.size+'px';
    food.style.height=this.size+'px';
    food.style.position='absolute';
    food.style.left=this.x*this.size+'px';
    food.style.top=this.y*this.size+'px';
    this.map.map.appendChild(food);
  }

  Food.prototype.setPos=function(){
    this.x=parseInt(Math.random()*this.map.col);
    this.y=parseInt(Math.random()*this.map.row);
  }
  window.Food=Food;
})();
