/**
 * Created by y50 on 2017/8/21.
 */
(function(window){
  function Snake(option){
    this.map=option.map;
    this.direction="left";
    this.speed=option.speed||1;
    this.size=option.size||25;
    this.body=[
      {x:15,y:4},
      {x:16,y:4},
      {x:17,y:4},
      {x:18,y:4},
    ];
  }

  Snake.prototype={
    constructor:Snake,
    render:function() {
      for (var i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var s = document.createElement('div');
        s.style.background = 'blue';
        if (i == 0) {
          s.style.background='url(h.png)';
          s.style.backgroundSize="100%";
          s.style.zIndex = 1;
          //s.style.backgroundImage = 'src="h.png"';
        }
        s.style.width = this.size + 'px';
        s.style.height = this.size + 'px';
        s.style.position = 'absolute';
        s.style.left = obj.x * this.size + 'px';
        s.style.top = obj.y * this.size + 'px';
        s.style.borderRadius = '50%';
        this.map.map.appendChild(s);

      }
    },

      move:function () {
        for (var i = this.body.length - 1; i > 0; i--) {
          var obj = this.body;
          obj[i].x = obj[i - 1].x;
          obj[i].y = obj[i - 1].y;
        }
        var head = this.body[0];
        switch (this.direction) {
          case 'left':
            head.x -= 1;
            break;
          case 'right':
            head.x += 1;
            break;
          case 'up':
            head.y -= 1;
            break;
          case 'down':
            head.y += 1;
            break;
        }

      },

      eat:function () {
        var last = this.body[this.body.length - 1];
        var s = {
          x: last.x,
          y: last.y
        }
        this.body.push(s);
      }
    }

    window.Snake=Snake;
})(window);