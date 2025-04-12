(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"GG_atlas_1", frames: [[584,468,353,108],[942,150,337,108],[939,479,271,108],[1757,430,275,108],[0,468,582,108],[1757,320,277,108],[942,320,813,157],[0,150,940,157],[0,309,940,157],[0,0,1366,148],[1368,0,600,318]]},
		{name:"GG_atlas_2", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_3", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_4", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_5", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_6", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_7", frames: [[0,0,1080,1920]]},
		{name:"GG_atlas_8", frames: [[0,0,1080,1920]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3822,3448);


(lib._1 = function() {
	this.initialize(ss["GG_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.initialize(ss["GG_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.initialize(ss["GG_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["GG_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["GG_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.initialize(ss["GG_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(ss["GG_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.buttons_PNG44 = function() {
	this.initialize(img.buttons_PNG44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,732);


(lib.ledroundedhgreen = function() {
	this.initialize(ss["GG_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Part2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(114.3,36.4,0.5,0.5);

	this.instance_1 = new lib.buttons_PNG44();
	this.instance_1.setTransform(0,0,0.1667,0.1666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,122);


(lib.Part1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(114.3,35.15,0.5,0.5);

	this.instance_1 = new lib.buttons_PNG44();
	this.instance_1.setTransform(0,0,0.1667,0.1666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,122);


(lib.Next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(79.65,52.5,0.5,0.5);

	this.instance_1 = new lib.ledroundedhgreen();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,159);


(lib.Main = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(80.45,52.5,0.5,0.5);

	this.instance_1 = new lib.ledroundedhgreen();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,159);


(lib.Download = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(55.65,33.3,0.5,0.5);

	this.instance_1 = new lib.buttons_PNG44();
	this.instance_1.setTransform(0,0,0.1667,0.1666);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,122);


(lib.Back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(78,52.5,0.5,0.5);

	this.instance_1 = new lib.ledroundedhgreen();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,159);


// stage content:
(lib.GG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		var frameNumber = 0;
		
		var firstframe=0, lastframe=0;
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Main.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			firstframe=0;
			lastframe=0;
			frameNumber = 0;
			this.gotoAndStop(0);
			console.log("Current frame number:", frameNumber);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Part1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			firstframe=1;
			lastframe=3;
			frameNumber = 1;
			this.gotoAndStop(1);
			console.log("Current frame number:", frameNumber);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Part2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			firstframe=4;
			lastframe=6;
			frameNumber = 4;
			this.gotoAndStop(4);
			console.log("Current frame number:", frameNumber);
		}
		
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Next.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			if(frameNumber < lastframe)
			{
				frameNumber++;
				this.gotoAndStop(frameNumber);
			}
			console.log("Current frame number:", frameNumber);
		}
		
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.Back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			if(frameNumber > firstframe)
			{
				frameNumber--;
				this.gotoAndStop(frameNumber);
			}
			console.log("Current frame number:", frameNumber);
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.Download.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://sivakumark2025.github.io/GG/GardenGuide.pdf", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Button
	this.instance = new lib.Back("synched",0);
	this.instance.setTransform(0,1761);
	var instanceFilter_1 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,304,163);

	this.instance_1 = new lib.Next("synched",0);
	this.instance_1.setTransform(932.5,1840.5,1,1,0,0,0,150,79.5);
	var instance_1Filter_2 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-2,-2,304,163);

	this.Main = new lib.Main();
	this.Main.name = "Main";
	this.Main.setTransform(541.25,1840.5,1,1,0,0,0,150,79.5);
	new cjs.ButtonHelper(this.Main, 0, 1, 1);

	this.Next = new lib.Next();
	this.Next.name = "Next";
	this.Next.setTransform(930,1840.5,1,1,0,0,0,150,79.5);
	var NextFilter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.Next.filters = [NextFilter_3];
	this.Next.cache(-2,-2,304,163);
	new cjs.ButtonHelper(this.Next, 0, 1, 1);

	this.Back = new lib.Back();
	this.Back.name = "Back";
	this.Back.setTransform(0,1761);
	var BackFilter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.Back.filters = [BackFilter_4];
	this.Back.cache(-2,-2,304,163);
	new cjs.ButtonHelper(this.Back, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Main,p:{x:541.25}},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.Main,p:{x:540}},{t:this.Next,p:{x:930,mode:"independent",startPosition:undefined}},{t:this.instance}]},1).to({state:[{t:this.Main,p:{x:540}},{t:this.Next,p:{x:930,mode:"independent",startPosition:undefined}},{t:this.Back,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.Main,p:{x:541.5}},{t:this.Next,p:{x:933,mode:"synched",startPosition:0}},{t:this.Back,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.Main,p:{x:541.5}},{t:this.Next,p:{x:933,mode:"independent",startPosition:undefined}},{t:this.Back,p:{mode:"synched",startPosition:0}}]},1).to({state:[{t:this.Main,p:{x:541.5}},{t:this.Next,p:{x:933,mode:"independent",startPosition:undefined}},{t:this.Back,p:{mode:"independent",startPosition:undefined}}]},1).to({state:[{t:this.Main,p:{x:541.5}},{t:this.Next,p:{x:933,mode:"synched",startPosition:0}},{t:this.Back,p:{mode:"independent",startPosition:undefined}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(6));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(6));
	this.timeline.addTween(cjs.Tween.get(NextFilter_3).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 0).wait(1));
	this.timeline.addTween(cjs.Tween.get(BackFilter_4).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,127.5,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2));

	// Pages
	this.Download = new lib.Download();
	this.Download.name = "Download";
	this.Download.setTransform(814,897,1,1,0,0,0,200,61);
	new cjs.ButtonHelper(this.Download, 0, 1, 1);

	this.Part2 = new lib.Part2();
	this.Part2.name = "Part2";
	this.Part2.setTransform(272.3,456.9,1,1,0,0,0,200,61);
	new cjs.ButtonHelper(this.Part2, 0, 1, 1);

	this.Part1 = new lib.Part1();
	this.Part1.name = "Part1";
	this.Part1.setTransform(272.3,257.45,1,1,0,0,0,200,61);
	new cjs.ButtonHelper(this.Part1, 0, 1, 1);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(161.7,869.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(568.2,439.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(568.2,216.45,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(211.1,49,0.5,0.5);

	this.instance_6 = new lib.BG();

	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(-0.5,196.45,0.5,0.5);

	this.instance_8 = new lib._1();

	this.instance_9 = new lib._7();

	this.instance_10 = new lib._8();

	this.instance_11 = new lib._9();

	this.instance_12 = new lib._10();

	this.instance_13 = new lib._11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.Part1},{t:this.Part2},{t:this.Download}]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.Next, startFrame:1, endFrame:1, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Next, startFrame:2, endFrame:2, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Next, startFrame:3, endFrame:3, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Next, startFrame:4, endFrame:4, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Next, startFrame:5, endFrame:5, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Next, startFrame:6, endFrame:6, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Back, startFrame:2, endFrame:2, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Back, startFrame:3, endFrame:3, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Back, startFrame:4, endFrame:4, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Back, startFrame:5, endFrame:5, x:-2, y:-2, w:304, h:163});
	this.filterCacheList.push({instance: this.Back, startFrame:6, endFrame:6, x:-2, y:-2, w:304, h:163});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(539.5,960,1371,960.5);
// library properties:
lib.properties = {
	id: '5E4291028AE1684895624347F0A9E8A0',
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/buttons_PNG44.png", id:"buttons_PNG44"},
		{src:"images/GG_atlas_1.png", id:"GG_atlas_1"},
		{src:"images/GG_atlas_2.png", id:"GG_atlas_2"},
		{src:"images/GG_atlas_3.png", id:"GG_atlas_3"},
		{src:"images/GG_atlas_4.png", id:"GG_atlas_4"},
		{src:"images/GG_atlas_5.png", id:"GG_atlas_5"},
		{src:"images/GG_atlas_6.png", id:"GG_atlas_6"},
		{src:"images/GG_atlas_7.png", id:"GG_atlas_7"},
		{src:"images/GG_atlas_8.png", id:"GG_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5E4291028AE1684895624347F0A9E8A0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;