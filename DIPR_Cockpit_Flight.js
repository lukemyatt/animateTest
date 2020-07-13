(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DIPR_Cockpit_Flight_atlas_1", frames: [[0,0,1680,1776]]},
		{name:"DIPR_Cockpit_Flight_atlas_2", frames: [[560,958,148,140],[506,473,483,483],[506,0,504,471],[1012,0,537,439],[991,882,558,367],[560,1251,552,306],[554,1559,543,272],[0,1328,552,306],[0,959,558,367],[1012,441,537,439],[0,0,504,472],[0,474,483,483]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_42 = function() {
	this.initialize(img.CachedBmp_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5601,6297);


(lib.CachedBmp_102 = function() {
	this.initialize(img.CachedBmp_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2719,2814);


(lib.CachedBmp_101 = function() {
	this.initialize(img.CachedBmp_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3286,1640);


(lib.CachedBmp_100 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3286,1640);


(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2123,2007);


(lib.CachedBmp_97 = function() {
	this.initialize(ss["DIPR_Cockpit_Flight_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StarFieldMovingStars = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(-414.1,-524.1,0.1667,0.1667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarFieldMovingStars, new cjs.Rectangle(-414.1,-524.1,933.5,1049.5), null);


(lib.StarField = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_102();
	this.instance.setTransform(-485.55,-502.45,0.3571,0.3571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarField, new cjs.Rectangle(-485.5,-502.4,971.1,1005), null);


(lib.square = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("ABOnzIGmAAIAAGeAH0BeIAAGWImmAAAnzhVIAAmeIGqAAAhJH0ImqAAIAAmW");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.square, new cjs.Rectangle(-51,-51,102,102), null);


(lib.shape_radar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_100();
	this.instance.setTransform(-35,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape_radar, new cjs.Rectangle(-35,-35,74,70), null);


(lib.planet_Z = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0)").s().p("A9tU5QsVoqAAsPQAAsPMVopQMUoqRZAAQRbAAMTIqQMVIpAAMPQAAMPsVIqQsTIqxbAAQxZAAsUoqg");
	this.shape.setTransform(-198.05,88.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A9tU5QsVoqAAsPQAAsPMVopQMUoqRZAAQRbAAMTIqQMVIpAAMPQAAMPsVIqQsTIqxbAAQxZAAsUoqg");
	this.shape_1.setTransform(-198.05,88.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.1,-101,538.1,378.2);


(lib.joystick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Joystick
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-165.65,-167.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-166.6,-164.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(-166.05,-155.7,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_31();
	this.instance_3.setTransform(-155.8,-134.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_32();
	this.instance_4.setTransform(-143.45,-115.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_33();
	this.instance_5.setTransform(-135.6,-104.6,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_34();
	this.instance_6.setTransform(-132.35,-115.35,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_35();
	this.instance_7.setTransform(-123,-134.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_36();
	this.instance_8.setTransform(-102.45,-155.4,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_37();
	this.instance_9.setTransform(-85.35,-163.95,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_38();
	this.instance_10.setTransform(-76.1,-166.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.6,-167.1,333.29999999999995,241.89999999999998);


(lib.Console = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_39 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_44 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(5).call(this.frame_44).wait(1));

	// Layer_2
	this.text = new cjs.Text("Pl", "23px 'Dot Matrix'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(-46.2,-13.25);

	this.text_1 = new cjs.Text("", "23px 'DotMatrix'");
	this.text_1.lineHeight = 25;
	this.text_1.parent = this;
	this.text_1.setTransform(-71,-30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text,p:{text:"Pl"}}]},4).to({state:[{t:this.text_1},{t:this.text,p:{text:"Pla"}}]},5).to({state:[{t:this.text_1},{t:this.text,p:{text:"Plan"}}]},5).to({state:[{t:this.text_1},{t:this.text,p:{text:"Planet"}}]},5).to({state:[{t:this.text_1},{t:this.text,p:{text:"Planet Z"}}]},5).to({state:[{t:this.text_1},{t:this.text,p:{text:"Planet Z"}}]},5).to({state:[{t:this.text_1},{t:this.text,p:{text:"Plan"}}]},5).to({state:[]},5).wait(6));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqWKXQkTkTAAmEQAAmEETkSQESkTGEAAQGEAAETETQETESAAGEQAAGEkTETQkTETmEAAQmEAAkSkTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A4033").s().p("AqWKXQkTkTAAmEQAAmEETkSQESkTGEAAQGEAAETETQETESAAGEQAAGEkTETQkTETmEAAQmEAAkSkTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#338066").s().p("AqWKXQkTkTAAmEQAAmEETkSQESkTGEAAQGEAAETETQETESAAGEQAAGEkTETQkTETmEAAQmEAAkSkTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4DBF99").s().p("AqWKXQkTkTAAmEQAAmEETkSQESkTGEAAQGEAAETETQETESAAGEQAAGEkTETQkTETmEAAQmEAAkSkTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFCC").s().p("AqWKXQkTkTAAmEQAAmEETkSQESkTGEAAQGEAAETETQETESAAGEQAAGEkTETQkTETmEAAQmEAAkSkTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-93.8,187.6,260.7);


(lib.target = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.square();
	this.instance.setTransform(0,0,1.318,1.318);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8695,scaleY:0.8695,alpha:1},7).to({scaleX:0.421,scaleY:0.421,alpha:0},7).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAArtILuAAIAALtIAALuIruAAIAAD6AAAvnIAAD6IAALtILuAAID6AAAAAAAIAALuIrtAAIAArugAvnAAID6AAIAArtILtAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAArtILuAAIAALtIAALuIruAAIAAD6AAAvnIAAD6IAALtIAALuIrtAAIAAruILtAAILuAAID6AAAvnAAID6AAIAArtILtAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-101,202,202);


(lib.SPACE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// planet
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(-736.65,-484,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer_6_copy
	this.instance_1 = new lib.StarFieldMovingStars();
	this.instance_1.setTransform(0.5,-75.6,2.0688,2.0688,0,0,0,52.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.7,scaleX:2.2241,scaleY:2.2241,x:0.6,y:-75.7},2).to({regX:52.7,regY:0.6,scaleX:3,scaleY:3,x:0.55,y:-75.6,alpha:0},10).wait(1).to({regX:52.8,regY:0.7,scaleX:0.75,scaleY:0.75,y:-75.75},0).to({scaleX:1.4482,scaleY:1.4482,y:-75.8,alpha:1},9).to({scaleX:1.9913,scaleY:1.9913,y:-75.75},7).wait(1));

	// Layer_6
	this.instance_2 = new lib.StarFieldMovingStars();
	this.instance_2.setTransform(0.55,-75.75,0.75,0.75,0,0,0,52.8,0.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.4482,scaleY:1.4482,y:-75.8,alpha:1},9).to({scaleX:2.2241,scaleY:2.2241,x:0.6,y:-75.7},10).to({regX:52.7,regY:0.6,scaleX:3,scaleY:3,x:0.55,y:-75.6,alpha:0},10).wait(1));

	// Layer_5_copy
	this.instance_3 = new lib.StarField();
	this.instance_3.setTransform(9.7,-41.05);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.2,scaleY:1.2,alpha:1},14).to({scaleX:1.4,scaleY:1.4,y:-41.1,alpha:0},15).wait(1));

	// Layer_5
	this.instance_4 = new lib.StarField();
	this.instance_4.setTransform(21.45,-41.05,1.2266,1.2266,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0.8711;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0,regY:0,scaleX:1.4,scaleY:1.4,x:9.7,y:-41.1,alpha:0},13).wait(1).to({scaleX:1,scaleY:1,y:-41.05},0).to({scaleX:1.2,scaleY:1.2,alpha:1},14).to({scaleX:1.2133,scaleY:1.2133,y:-41.1,alpha:0.9297},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1399.8,-1649.7,2800.3,3148.4);


(lib.radar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Rotate Continuously
		Rotates symbol instance continuously by updating its rotation property within an Tick event.
		
		Instructions:
		1. The default rotation of the code as written is clock-wise.
		2. To change the direction of the rotation to counter clock-wise, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance rotates, change the number 10 below to the number of degrees you want to rotate the symbol instance each frame. Higher numbers cause faster rotation.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		this.addEventListener("tick",fl_RotateContinuously.bind(this));
		
		function fl_RotateContinuously(){
			this.radar.rotation+=10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.radar = new lib.shape_radar();
	this.radar.name = "radar";

	this.timeline.addTween(cjs.Tween.get(this.radar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.radar, new cjs.Rectangle(-35,-35,74,70), null);


// stage content:
(lib.DIPR_Cockpit_Flight = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		this.starfield.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		this.button_planetZ.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.button_planetZ.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		this.button_planetZ.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.starfield.x = (stage.mouseX*-1)+(stage.canvas.width);
			this.starfield.y = (stage.mouseY*-1)+(stage.canvas.height);
			this.mainTarget.x = stage.mouseX;
			this.mainTarget.y = stage.mouseY;
			this.joystick.gotoAndStop(stage.mouseX/100);
			 
		}
		
		function fl_MouseOverHandler()
		{
			this.console.gotoAndPlay(5);
		}
		
		function fl_MouseOutHandler()
		{
			this.console.gotoAndPlay(31);
		}
		
		function fl_MouseClickHandler()
		{
			this.console.gotoAndPlay(41);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Console
	this.console = new lib.Console();
	this.console.name = "console";
	this.console.setTransform(501.35,840.9);

	this.timeline.addTween(cjs.Tween.get(this.console).wait(1));

	// Joystick
	this.joystick = new lib.joystick();
	this.joystick.name = "joystick";
	this.joystick.setTransform(502.85,622.7);

	this.timeline.addTween(cjs.Tween.get(this.joystick).wait(1));

	// Lights
	this.instance = new lib.radar();
	this.instance.setTransform(504.95,97.45);

	this.instance_1 = new lib.CachedBmp_97();
	this.instance_1.setTransform(82.85,62.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Ship
	this.instance_2 = new lib.CachedBmp_98();
	this.instance_2.setTransform(-27.95,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Target
	this.mainTarget = new lib.target();
	this.mainTarget.name = "mainTarget";
	this.mainTarget.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.mainTarget).wait(1));

	// StarField
	this.instance_3 = new lib.CachedBmp_99();
	this.instance_3.setTransform(2128.3,-560.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Button
	this.button_planetZ = new lib.planet_Z();
	this.button_planetZ.name = "button_planetZ";
	this.button_planetZ.setTransform(999.3,421.1);
	new cjs.ButtonHelper(this.button_planetZ, 0, 1, 2, false, new lib.planet_Z(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_planetZ).wait(1));

	// Space_content
	this.starfield = new lib.SPACE();
	this.starfield.name = "starfield";
	this.starfield.setTransform(500.1,423.8,1,1,0,0,0,0.1,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.starfield).wait(1));

	// Background_Colour
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191414").s().p("EhOsBOuMAAAidbMCdZAAAMAAACdbg");
	this.shape.setTransform(505,503.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(34.6,-161.5,3736.7000000000003,1671.1);
// library properties:
lib.properties = {
	id: '85A9335C58F3484A892E0A3737150313',
	width: 1000,
	height: 1000,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_42.png", id:"CachedBmp_42"},
		{src:"images/CachedBmp_102.png", id:"CachedBmp_102"},
		{src:"images/CachedBmp_101.png", id:"CachedBmp_101"},
		{src:"images/CachedBmp_99.png", id:"CachedBmp_99"},
		{src:"images/CachedBmp_98.png", id:"CachedBmp_98"},
		{src:"images/DIPR_Cockpit_Flight_atlas_1.png", id:"DIPR_Cockpit_Flight_atlas_1"},
		{src:"images/DIPR_Cockpit_Flight_atlas_2.png", id:"DIPR_Cockpit_Flight_atlas_2"}
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
an.compositions['85A9335C58F3484A892E0A3737150313'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;