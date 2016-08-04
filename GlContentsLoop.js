//--------------------------------------------------
//
//  GlContentsLoop
//
//--------------------------------------------------

(function(){

  var gb = jp.co.plusMV

  function GlContentsLoop() {

    this.always = true;
    this.state = 'initial';
    this.adjustParam = false;
    this.stateLineRotate = false;
    this.sometimesState = 'initial';

    this.setEvents();

  }

  GlContentsLoop.prototype = {

    update: function() {

      if (this.state == 'initial') {

        gb.in.particle.updateSatellite();

      } else if (this.state == 'start') {



      } else if (this.state == 'step01') {



      } else if (this.state == 'step02') {



      } else if (this.state == 'step03') {



      } else if (this.state == 'standby') {

        gb.in.particle.updateCircle();

      } else if (this.state == 'sometimes') {

        if (this.sometimesState == 'lineShadow') {

          gb.in.particle.updateLineShadow();

        } else if (this.sometimesState == 'sphere') {

          gb.in.particle.updateSphere();

        } else if (this.sometimesState == 'satellite') {

          gb.in.particle.updateSatellite();

        }

      }


      // always
      if (this.always) {
        gb.in.line.updateRotate();
        gb.in.dot.update();
      };

      // パラメータ調整
      if (this.adjustParam) {
        
        // gb.in.bg.material.opacity = gb.in.param.bg_opacity;

        gb.in.dot.changeColors(gb.in.param.dot_r,gb.in.param.dot_g,gb.in.param.dot_b);
        gb.in.dot.setTransparent(gb.in.param.dot_opacity);

        // line
        gb.in.line.changeColors(gb.in.param.line_r,gb.in.param.line_g,gb.in.param.line_b);
        gb.in.line.Line01.material.opacity = gb.in.param.line_opacity;
        gb.in.line.Line02.material.opacity = gb.in.param.line_opacity;
        gb.in.line.Line03.material.opacity = gb.in.param.line_opacity;
        gb.in.line.Line04.material.opacity = gb.in.param.line_opacity;
        gb.in.line.Line05.material.opacity = gb.in.param.line_opacity;
        // gb.in.line.Line01.position.z = gb.in.param.line_z;
        // gb.in.line.Line02.position.z = gb.in.param.line_z;
        // gb.in.line.Line03.position.z = gb.in.param.line_z;
        // gb.in.line.Line04.position.z = gb.in.param.line_z;
        // gb.in.line.Line05.position.z = gb.in.param.line_z;
        
      };

      // partcile
      gb.in.particle.Particle.position.z = gb.in.param.particle_z;

      // camera
      gb.in.camera.updateControll();

      // controller
      // this.controls.update();

    },

    draw: function() {

      if (gb.in.u.isIe11Under()) gb.in.renderer.clear();
      gb.in.renderer.render( gb.in.scene.scene, gb.in.camera.camera );

    },

    loop: function() {

      this.update();
      this.draw();

    },

    setEvents: function() {

      gb.in.up.add(this.loop.bind(this));

    },

  }

  // 公開api
  gb.GlContentsLoop = GlContentsLoop;
  
})();