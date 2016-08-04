//--------------------------------------------------
//
//  GlContents
//
//--------------------------------------------------

(function(){

  var gb = jp.co.plusMV

  function GlContents() {

    this.renderer;
    this.camera;
    this.scene;
    this.light;

    this.state = 'initial';
    this.adjustParam = true;
    this.stateLineRotate = false;
    this.sometimesState = 'initial';

    this.controls;

    this.tlMain = new TimelineMax();

    this.setup();
    this.create();
    this.setEvents();
    // loop
    this.loop = new gb.GlContentsLoop();
    // timeline
    this.timeline = new gb.GlContentsTimeline();
    // this.timeline.start();

  }

  GlContents.prototype = {

    setup: function() {

      gb.in.noise = new gb.PerlinNoise();

    },

    create: function() {

      // render
      gb.in.renderer = this.renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true,alpha: true, antialias: true});
      this.renderer.setSize( gb.in.r.W(), gb.in.r.H() );
      this.renderer.setClearColor(0xffffff, 0.0);
      $('#page').append(this.renderer.domElement)
      // document.body.appendChild(  );
      $(this.renderer.domElement).css({
        position: 'fixed',
        top: 0,left: 0,
        'z-index': 2,
      });

      this.renderer.sortObjects = false;
      this.renderer.autoClearColor = false;

      // scene
      gb.in.scene = new gb.Scene();
      this.scene = gb.in.scene.scene;

      // camera
      gb.in.camera = new gb.Camera();
      this.camera = gb.in.camera.camera;

      // light
      this.light = new THREE.DirectionalLight( 0xffffff, 3 );
      this.light.position.z = 3;
      this.scene.add(this.light);

      // ui追加(コントローラー、profilerなど)
      this.addUI();

      // オブジェクト追加
      this.addObjects();

    },

    addObjects: function() {

      var self = this;

      gb.in.line = this.line = new gb.BufferLine();
      gb.in.dot = this.dot = new gb.BufferDot();
      gb.in.particle = this.particle = new gb.BufferParticle();
      gb.in.bg = this.bg = new gb.Bg();

    },

    addUI: function() {

      // controls
      // this.controls = new THREE.TrackballControls(this.camera);
      // this.controls.zoomSpeed = 0.8;
      // this.controls.rotateSpeed = 3;

      // profiler設定
      new gb.Profiler();
      // paramrter調整
      gb.in.param = new gb.Param();

    },

    onResize: function() {

      var w = window.innerWidth;
      var h = window.innerHeight;

      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();

    },

    setEvents: function() {

      gb.in.r.add(this.onResize.bind(this));
      // $(window).on('videoLoaded', this.timeline.bind(this));

    },

  }

  // 公開api
  gb.GlContents = GlContents;
  
})();