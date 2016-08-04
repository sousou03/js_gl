//--------------------------------------------------
//
//  GlContentsTimeline
//
//--------------------------------------------------

(function(){

  var gb = jp.co.plusMV

  function GlContentsTimeline() {

    this.tlMain = new TimelineMax();
    this.ready();
    this.setEvents();

  }

  GlContentsTimeline.prototype = {

    start: function() {

      this.beginning();
      this.step01();
      this.step02();
      this.step03();
      this.standBy();
      this.sometimes();

    },

    ready: function() {

      this.tlMain
        .add(function(){

          gb.in.camera.camera.position.z = 80;
          gb.in.dot.setTransparent(0);

        })

    },

    beginning: function() {

      this.tlMain
        .add(function(){

          if (!gb.in.u.isIe11Under()) gb.in.bg.tweenTransparent(1,{target:0.195,ease:Power4.easeInOut});
          gb.in.line.showRotate();

        })

    },

    // 動画背景透明で消す
    step01: function() {

      this.tlMain
        .add(function(){



        },'+=0.01')

    },

    // 線が時計回りに出てくる
    step02: function() {

      this.tlMain
        .add(function(){



        },'+=0.01')

    },

    // 黒ポチが出てくる
    step03: function() {

      
      this.tlMain
        .add(function(){

          gb.in.dot.tweenTransparent(1);
          // gb.in.dot.setTransparent(1);

        },'+=2.1')

    },

    // パーティクルが飛び散って、所定の位置でイカヅチ状態
    standBy: function() {

      var self = this;

      this.tlMain
        .add(function(){


          gb.in.scene.scene.add(gb.in.particle.Particle);
          gb.in.particle.setupSatellite();
          if ($('body').attr('id') === 'page_top') top.motion();

        },'+=2.5')
      

    },

    // 時々
    sometimes: function() {

      var self = this;

      this.tlMain
        .add(function(){


          var s = new gb.SomeTimes();

          // 球体
          s.add(function(){

            gb.in.gl.loop.state = 'sometimes';
            gb.in.gl.loop.sometimesState = 'sphere';
            // gb.in.bg.tweenTransparent(2,{target:0.07,ease:Power4.easeInOut});
            // gb.in.line.tweenTransparent(2,{target:0.1,ease:Power4.easeInOut});
            // gb.in.dot.tweenTransparent(1);
            // gb.in.line.sometimesRotate();

          })
          // 衛星
          s.add(function(){

            gb.in.line.clearRotate();
            gb.in.gl.loop.state = 'sometimes';
            gb.in.gl.loop.sometimesState = 'satellite';
            gb.in.particle.setupSatellite();
            // gb.in.bg.tweenTransparent(2,{target:0.07,ease:Power4.easeInOut});
            // gb.in.line.tweenTransparent(2,{target:0.1,ease:Power4.easeInOut});
            // gb.in.dot.tweenTransparent(1);

          })
          // 球体
          s.add(function(){

            gb.in.gl.loop.state = 'sometimes';
            gb.in.gl.loop.sometimesState = 'sphere';
            // gb.in.bg.tweenTransparent(2,{target:0.07,ease:Power4.easeInOut});
            // gb.in.line.tweenTransparent(2,{target:0.1,ease:Power4.easeInOut});
            // gb.in.dot.tweenTransparent(1);
            // gb.in.line.sometimesRotate();

          })
          // 衛星
          s.add(function(){

            gb.in.line.clearRotate();
            gb.in.gl.loop.state = 'sometimes';
            gb.in.gl.loop.sometimesState = 'satellite';
            gb.in.particle.setupSatellite();
            // gb.in.bg.tweenTransparent(2,{target:0.07,ease:Power4.easeInOut});
            // gb.in.line.tweenTransparent(2,{target:0.1,ease:Power4.easeInOut});
            // gb.in.dot.tweenTransparent(1);

          })

          // くにゃくにゃ
          s.add(function(){

            gb.in.gl.loop.state = 'sometimes';
            gb.in.gl.loop.sometimesState = 'lineShadow';
            // gb.in.bg.tweenTransparent(4,{target:0.007,ease:Power4.easeInOut});
            // gb.in.line.tweenTransparent(4,{target:0.00,ease:Power4.easeInOut});
            // gb.in.dot.tweenTransparent2(0,4);

            // gb.in.up.stop();

          },15,20);

          s.start();

        },'+=0.0')
      

    },

    onResizse: function() {

      gb.in.m.removeEvents();
      gb.in.m.cx = 0;
      gb.in.m.cy = 0;

    },


    setEvents: function() {

      gb.in.r.resizeEndList.push(gb.in.m.setEvents.bind(gb.in.m));
      gb.in.r.add(this.onResizse.bind(this));
      gb.in.up.loop();

    },

  }

  // 公開api
  gb.GlContentsTimeline = GlContentsTimeline;
  
})();