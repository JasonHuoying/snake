/**
 * Created by y50 on 2017/8/21.
 */
(function(window){

  function Map(option){
    this.color=option.color||'#ccc';
    this.row=option.row||20;
    this.col=option.col||30;
    this.size=option.size||25;
    this.map=null;
  }

  Map.prototype.render=function(){
    var div=document.createElement('div');
    this.map=div;
    div.style.position='relative';
    div.style.background=this.color;
    div.style.width=this.col*this.size+'px';
    div.style.height=this.row*this.size+'px';
    window.document.body.appendChild(div);
  }
  window.Map=Map;
})(window);