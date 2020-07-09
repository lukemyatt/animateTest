(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgCADgEQACgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(-209.2372,-418.7984,1.1904,1.1904,135.001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_1.setTransform(-214.577,-426.7874,1.1904,1.1904,135.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB593").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_2.setTransform(-51.0716,-347.7476,1.1904,1.1904,135.001);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB593").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(-71.2918,-469.0704,1.1904,1.1904,135.001);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_4.setTransform(7.4974,-460.2304,1.1904,1.1904,135.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(-163.8009,-522.9872,1.1904,1.1904,135.001);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB593").s().p("AgRASQgIgHABgLQgBgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_6.setTransform(-411.0989,-81.8009,1.1904,1.1904,135.001);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_7.setTransform(-315.4386,-157.132,1.1904,1.1904,135.001);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB593").s().p("AgHAAQAAgGAHAAQAHAAAAAGQAAAHgHAAQgHAAAAgHg");
	this.shape_8.setTransform(-273.1745,-132.094,1.1904,1.1904,135.001);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_9.setTransform(-172.6437,-288.8922,1.1904,1.1904,135.001);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_10.setTransform(-93.8335,-280.0732,1.1904,1.1904,135.001);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_11.setTransform(-343.942,-351.649,1.1904,1.1904,135.001);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB593").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIgBQAIABAHAFQAFAHABAHQgBAJgFAFQgHAHgIAAQgHAAgGgHg");
	this.shape_12.setTransform(-335.9021,-413.6028,1.1904,1.1904,135.001);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_13.setTransform(-231.7501,34.3697,1.1904,1.1904,135.001);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_14.setTransform(145.3655,-46.0875,1.1904,1.1904,135.001);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_15.setTransform(-26.3837,-15.8813,1.1904,1.1904,135.001);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCB593").s().p("AgMANQgEgGgBgHQABgGAEgGQAFgFAHAAQAHAAAGAFQAEAGAAAGQAAAHgEAGQgGAFgHAAQgHAAgFgFg");
	this.shape_16.setTransform(33.8845,-86.1203,1.1904,1.1904,135.001);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_17.setTransform(-68.4138,-86.6271,1.1904,1.1904,135.001);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCB593").s().p("AgHAAQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_18.setTransform(-236.7726,261.8994,1.1904,1.1904,135.001);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_19.setTransform(-90.6624,270.7184,1.1904,1.1904,135.001);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCB593").s().p("AgFAGQgCgDAAgDQAAgHAHAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_20.setTransform(33.8822,240.6902,1.1904,1.1904,135.001);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_21.setTransform(-115.6772,161.0774,1.1904,1.1904,135.001);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCB593").s().p("AgJAKQgFgEAAgGQAAgGAFgDQADgFAGAAQAGAAAEAFQAFADAAAGQAAAGgFAEQgEAFgGAAQgGAAgDgFg");
	this.shape_22.setTransform(-36.867,169.8964,1.1904,1.1904,135.001);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCB593").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_23.setTransform(-357.7878,27.5479,1.1904,1.1904,135.001);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_24.setTransform(-346.3776,36.4089,1.1904,1.1904,135.001);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgCADgEQACgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_25.setTransform(300.1128,185.2016,1.1904,1.1904,135.001);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_26.setTransform(294.773,177.2126,1.1904,1.1904,135.001);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCB593").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_27.setTransform(458.2784,256.2524,1.1904,1.1904,135.001);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCB593").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_28.setTransform(438.0582,134.9296,1.1904,1.1904,135.001);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_29.setTransform(516.8474,143.7696,1.1904,1.1904,135.001);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_30.setTransform(345.5491,81.0128,1.1904,1.1904,135.001);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB593").s().p("AgRASQgIgHABgLQgBgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_31.setTransform(98.2511,522.1991,1.1904,1.1904,135.001);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_32.setTransform(193.9114,446.868,1.1904,1.1904,135.001);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCB593").s().p("AgHAAQAAgGAHAAQAHAAAAAGQAAAHgHAAQgHAAAAgHg");
	this.shape_33.setTransform(236.1755,471.906,1.1904,1.1904,135.001);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCB593").s().p("AgNAOQgGgFABgJQgBgHAGgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_34.setTransform(64.8772,409.1913,1.1904,1.1904,135.001);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCB593").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_35.setTransform(-5.8931,338.4186,1.1904,1.1904,135.001);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_36.setTransform(336.7063,315.1078,1.1904,1.1904,135.001);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_37.setTransform(415.5165,323.9268,1.1904,1.1904,135.001);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_38.setTransform(165.408,252.351,1.1904,1.1904,135.001);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_39.setTransform(60.9167,215.2572,1.1904,1.1904,135.001);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCB593").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIgBQAIABAHAFQAFAHABAHQgBAJgFAFQgHAHgIAAQgHAAgGgHg");
	this.shape_40.setTransform(173.4479,190.3972,1.1904,1.1904,135.001);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_41.setTransform(366.625,66.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_42.setTransform(94.85,-109.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_43.setTransform(214.825,-25.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCB593").s().p("AgMANQgEgGgBgHQABgGAEgGQAFgFAHAAQAHAAAGAFQAEAGAAAGQAAAHgEAGQgGAFgHAAQgHAAgFgFg");
	this.shape_44.setTransform(137.3,-19.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_45.setTransform(197.775,41.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCB593").s().p("AgHAAQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_46.setTransform(504.775,-65.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_47.setTransform(423.2,-157.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCB593").s().p("AgFAGQgCgDAAgDQAAgHAHAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_48.setTransform(331.425,-213.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_49.setTransform(372.975,-77.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCB593").s().p("AgJAKQgFgEAAgGQAAgGAFgDQADgFAGAAQAGAAAEAFQAFADAAAGQAAAGgFAEQgEAFgGAAQgGAAgDgFg");
	this.shape_50.setTransform(331.4,-129.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCB593").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_51.setTransform(437.475,145.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_52.setTransform(435.925,133.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgCADgEQACgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_53.setTransform(140.325,-338.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_54.setTransform(138.775,-330.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCB593").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_55.setTransform(88.525,-474.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCB593").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_56.setTransform(28.525,-390.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_57.setTransform(-13.025,-442.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_58.setTransform(51.45,-303.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FCB593").s().p("AgRASQgIgHABgLQgBgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_59.setTransform(460.4,-419.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_60.setTransform(358.825,-431.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FCB593").s().p("AgHAAQAAgGAHAAQAHAAAAAGQAAAHgHAAQgHAAAAgHg");
	this.shape_61.setTransform(348.6,-471.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FCB593").s().p("AgNAOQgGgFABgJQgBgHAGgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_62.setTransform(413.1,-332.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCB593").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_63.setTransform(413.1,-248.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_64.setTransform(195.75,-437.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_65.setTransform(154.175,-489.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_66.setTransform(260.225,-298.675);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_67.setTransform(300.225,-214.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCB593").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIgBQAIABAHAFQAFAHABAHQgBAJgFAFQgHAHgIAAQgHAAgGgHg");
	this.shape_68.setTransform(218.65,-266.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarFieldMovingStars, new cjs.Rectangle(-414.1,-524.2,933.6,1049.5), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAGgHAKAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgKAAgGgHg");
	this.shape.setTransform(-108.55,465.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB593").s().p("AgbAcQgMgLAAgRQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_1.setTransform(-174.775,458.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_2.setTransform(-283.875,448.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(-350.075,441.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB593").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAFgHABQgGgBgGgFg");
	this.shape_4.setTransform(-290.625,500.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB593").s().p("AgFAGQgGgGAGgFQADgCACAAQAEAAACACQAGAFgGAGQgCACgEAAQgCAAgDgCg");
	this.shape_5.setTransform(-33.575,317.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB593").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_6.setTransform(-99.775,309.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB593").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_7.setTransform(-208.9,300.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB593").s().p("AgFAGQgCgCAAgEQAAgCACgDQAFgFAGAFQACADAAACQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_8.setTransform(-275.1,292.6875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB593").s().p("AgIAIQgEgDAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_9.setTransform(-149.425,359.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_10.setTransform(-215.65,352.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCB593").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_11.setTransform(-5.525,412.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB593").s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_12.setTransform(-71.75,404.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCB593").s().p("AgFAGQgGgGAGgFQACgDADAAQAEAAACADQAGAFgGAGQgCADgEAAQgDAAgCgDg");
	this.shape_13.setTransform(53.925,471.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_14.setTransform(-12.275,464.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_15.setTransform(-470.675,434.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCB593").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_16.setTransform(-411.25,493.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_17.setTransform(-477.45,486.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCB593").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_18.setTransform(-329.175,56.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB593").s().p("AgUAVQgJgJAAgMQAAgMAJgJQAIgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_19.setTransform(-395.35,48.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCB593").s().p("AgEAFQgCgCAAgDQAAgCACgCQAEgFAFAFQADACgBACQABADgDACQgDADgCAAQgCAAgCgDg");
	this.shape_20.setTransform(-445,98.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHABQAIgBAGAGQAGAFAAAIQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_21.setTransform(-301.125,151.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCB593").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_22.setTransform(-367.325,143.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCB593").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAIAAAEAFQAGAFAAAHQAAAIgGAFQgEAFgIAAQgHAAgFgFg");
	this.shape_23.setTransform(-241.65,210.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCB593").s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_24.setTransform(-307.875,203.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCB593").s().p("AgTATQgHgIgBgLQABgKAHgIQAJgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgKAAgJgIg");
	this.shape_25.setTransform(-413.6,187.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCB593").s().p("AgVAVQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAKAJgBAMQABAMgKAJQgJAKgMAAQgMAAgJgKg");
	this.shape_26.setTransform(-479.8,180.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCB593").s().p("AgFAGQgCgCAAgEQAAgCACgCQAFgGAGAGQACACAAACQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_27.setTransform(-385.55,282.8875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCB593").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_28.setTransform(-451.775,275.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCB593").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_29.setTransform(-326.125,342.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB593").s().p("AgNAOQgGgFAAgJQAAgIAGgGQAGgFAHgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_30.setTransform(-392.325,334.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_31.setTransform(112.125,407.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCB593").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_32.setTransform(70.575,355.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_33.setTransform(0.35,271.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgJANgBQAOABAKAJQAKAKAAANQAAAOgKAKQgKAJgOABQgNgBgKgJg");
	this.shape_34.setTransform(-41.225,219.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_35.setTransform(0.325,355.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCB593").s().p("AgLANQgGgGAAgHQAAgGAGgGQAEgFAHAAQAHAAAFAFQAGAGAAAGQAAAHgGAGQgFAFgHAAQgHAAgEgFg");
	this.shape_36.setTransform(-41.2,303.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_37.setTransform(64.85,494.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_38.setTransform(23.275,442.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCB593").s().p("AgHAAQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_39.setTransform(270.275,355.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_40.setTransform(228.7,303.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_41.setTransform(158.475,219.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCB593").s().p("AgFAGQgCgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_42.setTransform(116.925,167.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQADAEABAEQgBAFgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_43.setTransform(158.45,303.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgFAAgEgEg");
	this.shape_44.setTransform(116.9,251.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_45.setTransform(222.975,442.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCB593").s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_46.setTransform(181.4,390.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_47.setTransform(181.4,474.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCB593").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_48.setTransform(-74.175,41.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_49.setTransform(-115.725,-10.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCB593").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape_50.setTransform(-185.975,-94.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCB593").s().p("AgJALQgEgFAAgGQAAgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_51.setTransform(-227.55,-146.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCB593").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_52.setTransform(-185.975,-10.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_53.setTransform(-227.525,-62.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALgBQAMABAJAIQAIAJAAALQAAAMgIAJQgJAIgMABQgLgBgJgIg");
	this.shape_54.setTransform(-121.475,128.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_55.setTransform(-163.05,76.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_56.setTransform(-121.475,212.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCB593").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_57.setTransform(-163.05,160.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCB593").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQAKAAAIAIQAHAIABAJQgBALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_58.setTransform(245.9,-38.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_59.setTransform(204.325,-90.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCB593").s().p("AgYAZQgKgLABgOQgBgNAKgLQALgJANgBQAOABALAJQAJALABANQgBAOgJALQgLAKgOAAQgNAAgLgKg");
	this.shape_60.setTransform(134.1,-174.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FCB593").s().p("AgKAMQgFgFAAgHQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_61.setTransform(92.55,-226.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FCB593").s().p("AgHAAQABgGAGAAQAIAAAAAGQAAAHgIAAQgGAAgBgHg");
	this.shape_62.setTransform(134.1,-90.375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgHAIAAQAIAAAHAHQAHAGAAAIQAAAJgHAGQgHAHgIgBQgIABgGgHg");
	this.shape_63.setTransform(92.55,-142.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCB593").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_64.setTransform(198.6,48.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCB593").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_65.setTransform(157.025,-3.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FCB593").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_66.setTransform(198.6,132.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FCB593").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAOAAALAKQALAKAAAOQAAAOgLALQgLALgOAAQgOAAgKgLg");
	this.shape_67.setTransform(157.05,80.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCB593").s().p("AgSATQgIgHAAgMQAAgKAIgIQAHgIALAAQALAAAIAIQAIAIAAAKQAAAMgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_68.setTransform(93.025,-4.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FCB593").s().p("AgVAVQgJgIAAgNQAAgMAJgJQAKgIALgBQAMABAKAIQAJAJAAAMQAAANgJAIQgJAKgNgBQgLABgKgKg");
	this.shape_69.setTransform(51.45,-56.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCB593").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_70.setTransform(-18.775,-141.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FCB593").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_71.setTransform(-60.325,-193.075);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_72.setTransform(-18.75,-56.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCB593").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_73.setTransform(-60.325,-109);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgHAAAAgIg");
	this.shape_74.setTransform(45.725,82.075);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FCB593").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_75.setTransform(4.175,30);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_76.setTransform(45.725,166.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCB593").s().p("AgOAPQgFgHAAgIQAAgIAFgFQAHgHAHAAQAIAAAHAHQAFAFAAAIQAAAIgFAHQgHAFgIABQgHgBgHgFg");
	this.shape_77.setTransform(4.15,114.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_78.setTransform(326.625,26.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FCB593").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_79.setTransform(285.075,-25.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_80.setTransform(214.85,-109.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_81.setTransform(173.275,-161.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_82.setTransform(214.825,-25.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FCB593").s().p("AgMANQgEgGgBgHQABgGAEgGQAFgFAHAAQAHAAAGAFQAEAGAAAGQAAAHgEAGQgGAFgHAAQgHAAgFgFg");
	this.shape_83.setTransform(173.3,-77.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_84.setTransform(279.35,113.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_85.setTransform(237.775,61.55);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FCB593").s().p("AgGAHQgCgDAAgEQgBgJAJAAQAEABACACQAEADAAADQAAAEgEADQgCACgEAAQgDAAgDgCg");
	this.shape_86.setTransform(279.35,197.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCB593").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_87.setTransform(237.775,145.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FCB593").s().p("AgHAAQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_88.setTransform(484.775,-25.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_89.setTransform(443.2,-77.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_90.setTransform(372.975,-161.575);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FCB593").s().p("AgFAGQgCgDAAgDQAAgHAHAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_91.setTransform(331.425,-213.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFABQgEgBgEgDg");
	this.shape_92.setTransform(372.975,-77.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCB593").s().p("AgJAKQgFgEAAgGQAAgGAFgDQADgFAGAAQAGAAAEAFQAFADAAAGQAAAGgFAEQgEAFgGAAQgGAAgDgFg");
	this.shape_93.setTransform(331.4,-129.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_94.setTransform(437.475,61.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FCB593").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_95.setTransform(395.9,9.45);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FCB593").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_96.setTransform(437.475,145.625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_97.setTransform(395.925,93.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgCADgEQACgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_98.setTransform(140.325,-338.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_99.setTransform(98.775,-390.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCB593").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_100.setTransform(28.525,-474.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FCB593").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_101.setTransform(28.525,-390.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_102.setTransform(-13.025,-442.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgIQAJgKALABQAMgBAJAKQAIAIAAALQAAAMgIAJQgJAJgMgBQgLABgJgJg");
	this.shape_103.setTransform(93.025,-251.85);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_104.setTransform(51.45,-303.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FCB593").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_105.setTransform(93.025,-167.775);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FCB593").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_106.setTransform(51.475,-219.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FCB593").s().p("AgRASQgIgHABgLQgBgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_107.setTransform(460.4,-419.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_108.setTransform(418.825,-471.125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FCB593").s().p("AgHAAQAAgGAHAAQAHAAAAAGQAAAHgHAAQgHAAAAgHg");
	this.shape_109.setTransform(348.6,-471.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FCB593").s().p("AgNAOQgGgFABgJQgBgHAGgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAJgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_110.setTransform(413.1,-332.125);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FCB593").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_111.setTransform(371.525,-384.175);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FCB593").s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_112.setTransform(413.1,-248.05);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FCB593").s().p("AgYAZQgLgKAAgPQAAgOALgKQALgLANAAQAPAAAKALQAKAKAAAOQAAAPgKAKQgKAKgPABQgNgBgLgKg");
	this.shape_113.setTransform(371.55,-300.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FCB593").s().p("AgSATQgIgHAAgMQAAgKAIgIQAHgIALAAQALAAAIAIQAIAIAAAKQAAAMgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_114.setTransform(307.525,-385.625);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FCB593").s().p("AgVAWQgIgJgBgNQABgMAIgIQAJgKAMABQANgBAIAKQAKAIgBAMQABANgKAJQgIAIgNABQgMgBgJgIg");
	this.shape_115.setTransform(265.95,-437.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCB593").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_116.setTransform(195.75,-437.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCB593").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_117.setTransform(154.175,-489.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_118.setTransform(260.225,-298.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FCB593").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_119.setTransform(218.675,-350.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_120.setTransform(260.225,-214.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FCB593").s().p("AgNAOQgHgFAAgJQAAgHAHgHQAFgFAIgBQAIABAHAFQAFAHABAHQgBAJgFAFQgHAHgIAAQgHAAgGgHg");
	this.shape_121.setTransform(218.65,-266.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_122.setTransform(-183.575,100.225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCB593").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_123.setTransform(-225.15,48.175);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FCB593").s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_124.setTransform(-295.35,-35.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_125.setTransform(-336.925,-87.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_126.setTransform(-295.375,48.175);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FCB593").s().p("AgLANQgGgGAAgHQAAgHAGgEQAFgGAGAAQAIAAAEAGQAGAEAAAHQAAAHgGAGQgEAEgIAAQgGAAgFgEg");
	this.shape_127.setTransform(-336.95,-3.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_128.setTransform(-230.9,187.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FCB593").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_129.setTransform(-272.45,135.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FCB593").s().p("AgIAAQAAgDACgCQADgEADAAQAEAAADAEQACACAAADQAAAKgJgBQgIABAAgKg");
	this.shape_130.setTransform(-230.875,271.25);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FCB593").s().p("AgWAXQgJgKAAgNQAAgNAJgIQAKgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_131.setTransform(-272.45,219.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FCB593").s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACAAQAIAAAAAHQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_132.setTransform(-25.475,48.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FCB593").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape_133.setTransform(-67,-3.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_134.setTransform(-137.225,-87.975);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FCB593").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAAIgIAAQgCAAgDgCg");
	this.shape_135.setTransform(-178.825,-140.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FCB593").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAGgBADAEQAEAEgBAEQABAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_136.setTransform(-137.25,-3.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FCB593").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgGAAgEgEg");
	this.shape_137.setTransform(-178.8,-55.975);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCB593").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_138.setTransform(-72.75,135.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FCB593").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_139.setTransform(-114.3,83.05);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FCB593").s().p("AgFAGQgCgCAAgEQgBgIAIAAQAJAAgBAIQABAIgJAAQgCAAgDgCg");
	this.shape_140.setTransform(-72.75,219.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FCB593").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_141.setTransform(-114.325,167.125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FCB593").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_142.setTransform(-369.9,-265.225);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FCB593").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgIALAAQAMAAAJAIQAIAIAAALQAAAMgIAIQgJAJgMgBQgLABgIgJg");
	this.shape_143.setTransform(-411.475,-317.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCB593").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_144.setTransform(-481.7,-401.375);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FCB593").s().p("AgLALQgEgEAAgHQAAgFAEgFQAGgGAFAAQAHAAAFAGQAFAEgBAGQABAHgFAEQgFAGgHAAQgFAAgGgGg");
	this.shape_145.setTransform(-481.7,-317.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FCB593").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_146.setTransform(-417.175,-178.275);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FCB593").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_147.setTransform(-458.75,-230.35);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FCB593").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_148.setTransform(-417.2,-94.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCB593").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_149.setTransform(-458.75,-146.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FCB593").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_150.setTransform(-49.825,-345.475);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FCB593").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_151.setTransform(-91.375,-397.55);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FCB593").s().p("AgXAZQgLgLAAgOQAAgNALgLQAKgKANABQAOgBAKAKQALALgBANQABAOgLALQgKAJgOABQgNgBgKgJg");
	this.shape_152.setTransform(-161.6,-481.65);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQADAAADADQABACAAACQAAADgBADQgDABgDAAQgCAAgCgBg");
	this.shape_153.setTransform(-161.6,-397.55);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FCB593").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_154.setTransform(-203.175,-449.625);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FCB593").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_155.setTransform(-97.125,-258.525);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FCB593").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_156.setTransform(-138.675,-310.625);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FCB593").s().p("AgLANQgGgGAAgHQAAgHAGgEQAFgGAGAAQAHAAAGAGQAFAEAAAHQAAAHgFAGQgGAFgHAAQgGAAgFgFg");
	this.shape_157.setTransform(-97.1,-174.45);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FCB593").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_158.setTransform(-138.675,-226.525);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FCB593").s().p("AgTATQgHgHAAgMQAAgKAHgJQAJgHAKgBQALABAJAHQAHAJABAKQgBAMgHAHQgJAIgLAAQgKAAgJgIg");
	this.shape_159.setTransform(-202.7,-312.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FCB593").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgIAJgNAAQgLAAgJgJg");
	this.shape_160.setTransform(-244.25,-364.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FCB593").s().p("AgEAAQAAgDAEAAQAFAAAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_161.setTransform(-314.475,-448.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FCB593").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_162.setTransform(-356.05,-500.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FCB593").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQAIAAAAAHQAAAIgIAAQgCAAgCgCg");
	this.shape_163.setTransform(-314.5,-364.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FCB593").s().p("AgGAHQgCgDAAgEQAAgCACgEQADgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_164.setTransform(-356.05,-416.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FCB593").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_165.setTransform(-250,-225.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FCB593").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_166.setTransform(-291.55,-277.175);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FCB593").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_167.setTransform(-249.975,-141.025);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FCB593").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAFgFAIAAQAJAAAFAFQAGAHABAHQgBAIgGAHQgFAFgJAAQgIAAgFgFg");
	this.shape_168.setTransform(-291.55,-193.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarField, new cjs.Rectangle(-485.6,-502.5,971.2,1005.1), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AH0nzIAAGeABOnzIGmAAAH0BeIAAGWImmAAAnzhVIAAmeIGqAAAhJH0ImqAAIAAmW");

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9178C9").s().p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARQAAASgNANQgMAMgSAAQgRAAgMgMg");
	this.shape.setTransform(34.5078,0.4823,1.0465,1.0465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43C1C7").s().p("Aj1D3QhnhnAAiQQAAiQBnhmQBmhmCPAAQCRAABmBmQBmBmAACQQAACQhmBnQhmBmiRAAQiPAAhmhmgAjujuQhkBjAACLQAACMBkBjQBjBkCLAAQCMAABjhkQBkhjAAiMQAAiLhkhjQhjhkiMAAQiLAAhjBkg");
	this.shape_1.setTransform(-0.0232,-0.0023,1.0036,1.0036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaBcQgmgmAAg2QAAg0AmgmQAlgmA1AAQA2AAAlAmQAmAmAAA0QAAA2gmAmQglAlg2AAQg1AAglglg");
	this.shape_2.setTransform(0.005,0.0086,1.1628,1.1628);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape_radar, new cjs.Rectangle(-35,-35,74,70), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262626").s().p("AAGJ1QgMAAgIgJIo4o3QgKgKABgMIAAp1QAAgMAJgJQAIgJAOAAIE5AAQANAAAJAJQAJAJAAAMIAAGTQAAA0AlAlIEmEnQAlAlA0AAIFmAAQANAAAIAJQAKAJgBANIAADfQABANgKAJQgIAJgNAAQg1AAgkAlIhJBIQgIAJgOAAg");
	this.shape.setTransform(-73.395,29.2785,0.9999,0.9999,-45.0006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGKlQgfAAgXgXIo4o4QgXgXAAggIAAp1QAAggAXgXQAXgXAgAAIE6AAQAgAAAXAXQAXAXAAAgIAAGTQAAAgAXAXIEnEnQAXAXAhAAIFlAAQAgAAAXAXQAXAXAAAgIAADgQAAAhgXAXQgXAXggAAQghAAgXAXIhIBIQgXAXghAAg");
	this.shape_1.setTransform(-75.7459,24.2055,0.9999,0.9999,-45.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#262626").s().p("Al5J1QgNAAgJgJIhIhIQglglg1AAQgMAAgJgJQgJgJAAgNIAAjfQAAgNAJgJQAJgJAMAAIFmAAQA0AAAlglIEmknQAlglAAg0IAAmTQAAgMAJgJQAJgJANAAIE6AAQANAAAIAJQAJAJAAAMIAAJ1QAAANgJAJIo3I3QgJAJgMAAg");
	this.shape_2.setTransform(30.6331,-74.8518,0.9999,0.9999,-45.0006);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Al5KlQghAAgXgXIhIhIQgXgXghAAQggAAgXgXQgXgXAAghIAAjgQAAggAXgXQAXgXAgAAIFlAAQAiAAAWgXIEnknQAXgXAAggIAAmTQAAggAXgXQAXgXAgAAIE6AAQAgAAAXAXQAXAXAAAgIAAJ1QAAAggXAXIo4I4QgYAXgeAAg");
	this.shape_3.setTransform(25.5777,-77.2203,0.9999,0.9999,-45.0006);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262626").s().p("AjKAyIAAhjIGVAAIAABjg");
	this.shape_4.setTransform(-0.741,-2.1148,0.9999,0.9999,-45.0006);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjKB6IAAjzIGVAAIAADzg");
	this.shape_5.setTransform(0.6201,-0.7538,0.9999,0.9999,-45.0006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{rotation:-45.0006,x:0.6201,y:-0.7538,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-45.0006,x:-0.741,y:-2.1148,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-45.0006,x:25.5777,y:-77.2203,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-45.0006,x:30.6331,y:-74.8518,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-45.0006,x:-75.7459,y:24.2055,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-45.0006,x:-73.395,y:29.2785,scaleX:0.9999,scaleY:0.9999}}]}).to({state:[{t:this.shape_5,p:{rotation:-40.0009,x:0.9819,y:-0.4322,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-40.0009,x:-0.2553,y:-1.9066,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-40.0009,x:32.5068,y:-74.4283,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-40.0009,x:37.3362,y:-71.6284,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-40.0009,x:-77.2637,y:17.867,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-40.0009,x:-75.364,y:23.1253,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:-29.9992,x:0.6145,y:-0.5012,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-29.9992,x:-0.3479,y:-2.1681,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-29.9992,x:44.513,y:-67.8994,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-29.9992,x:48.7828,y:-64.3032,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-29.9992,x:-79.6034,y:3.9146,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-29.9992,x:-78.6457,y:9.4231,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:-14.9992,x:0.4646,y:-0.4219,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-14.9992,x:-0.0336,y:-2.2812,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-14.9992,x:60.315,y:-54.1652,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-14.9992,x:63.5087,y:-49.5861,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-14.9992,x:-78.1885,y:-16.9919,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-14.9992,x:-78.6892,y:-11.4229,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:-5.0006,x:0.1501,y:-0.469,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:-5.0006,x:-0.0177,y:-2.3864,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:-5.0006,x:68.4201,y:-43.0031,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:-5.0006,x:70.7703,y:-37.9392,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:-5.0006,x:-74.4195,y:-30.4502,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-5.0006,x:-75.8794,y:-25.053,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:-0.0009,x:0.0941,y:-0.4767,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:-0.0009,x:0.0941,y:-2.4017,scaleX:1,scaleY:1}},{t:this.shape_3,p:{rotation:-0.0009,x:71.8164,y:-36.9017,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:-0.0009,x:73.7164,y:-31.6519,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:-0.0009,x:-71.5793,y:-36.8495,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-0.0009,x:-73.5041,y:-31.5996,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_5,p:{rotation:4.9988,x:-0.0082,y:-0.4966,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:4.9988,x:0.1595,y:-2.4141,scaleX:1,scaleY:1}},{t:this.shape_3,p:{rotation:4.9988,x:74.6124,y:-30.5312,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:4.9988,x:76.0476,y:-25.136,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:4.9988,x:-68.2816,y:-42.9796,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:4.9988,x:-70.6566,y:-37.9177,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_5,p:{rotation:14.9992,x:-0.216,y:-0.3261,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:14.9992,x:0.2822,y:-2.1854,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:14.9992,x:78.4872,y:-16.9461,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:14.9992,x:78.9637,y:-11.3836,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:14.9992,x:-60.0663,y:-53.9694,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:14.9992,x:-63.2842,y:-49.3967,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:30,x:-0.4999,y:-0.3205,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_4,p:{rotation:30,x:0.4625,y:-1.9874,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_3,p:{rotation:30,x:79.8185,y:3.9964,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_2,p:{rotation:30,x:78.8391,y:9.4924,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_1,p:{rotation:30,x:-44.3978,y:-67.6198,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:30,x:-48.6894,y:-64.0361,scaleX:0.9999,scaleY:0.9999}}]},1).to({state:[{t:this.shape_5,p:{rotation:40.0003,x:-0.8844,y:-0.2626,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_4,p:{rotation:40.0003,x:0.3527,y:-1.737,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_3,p:{rotation:40.0003,x:77.4606,y:17.9356,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_2,p:{rotation:40.0003,x:75.5418,y:23.1777,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_1,p:{rotation:40.0003,x:-32.4599,y:-74.1576,scaleX:0.9998,scaleY:0.9998}},{t:this.shape,p:{rotation:40.0003,x:-37.3084,y:-71.3737,scaleX:0.9998,scaleY:0.9998}}]},1).to({state:[{t:this.shape_5,p:{rotation:45,x:-1.093,y:-0.4427,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_4,p:{rotation:45,x:0.2678,y:-1.8036,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_3,p:{rotation:45,x:75.3625,y:24.5123,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_2,p:{rotation:45,x:72.9942,y:29.5669,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_1,p:{rotation:45,x:-26.098,y:-76.8482,scaleX:0.9998,scaleY:0.9998}},{t:this.shape,p:{rotation:45,x:-31.1703,y:-74.4977,scaleX:0.9998,scaleY:0.9998}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.8,-167.1,333.70000000000005,241.7);


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
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAArtILuAAIAALtID6AAAAAvnIAAD6IAALtIAALuIrtAAIAAruILtAAILuAAIAALuIruAAIAAD6AvnAAID6AAIAArtILtAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAArtILuAAIAALtID6AAAAAvnIAAD6IAALtILuAAIAALuIruAAIAAD6AAAAAIAALuIrtAAIAArugAvnAAID6AAIAArtILtAA");

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70D6D3").ss(17.9).p("AdpAAQAAmBiVlhQiQlUkGkHQkHkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkGEGQkHEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEHEHQEGEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEHkGQEGkHCQlVQCVlgAAmCg");
	this.shape.setTransform(-511.1,58.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43C1C7").s().p("ArhbUQlViQkHkGQkGkHiQlVQiVlgAAmCQAAmBCVlhQCQlUEGkHQEHkGFViQQFgiVGBAAQGCAAFgCVQFVCQEGEGQEHEHCQFUQCVFhAAGBQAAGCiVFgQiQFVkHEHQkGEGlVCQQlgCVmCAAQmBAAlgiVg");
	this.shape_1.setTransform(-511.1,58.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC5B6").ss(17.9).p("AdpAAQAAmBiVlhQiQlUkGkHQkHkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkGEGQkHEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEHEHQEGEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEHkGQEGkHCQlVQCVlgAAmCg");
	this.shape_2.setTransform(-511.1,58.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF4141").s().p("ArhbUQlViQkHkGQkGkHiQlVQiVlgAAmCQAAmBCVlhQCQlUEGkHQEHkGFViQQFgiVGBAAQGCAAFgCVQFVCQEGEGQEHEHCQFUQCVFhAAGBQAAGCiVFgQiQFVkHEHQkGEGlVCQQlgCVmCAAQmBAAlgiVg");
	this.shape_3.setTransform(-511.1,58.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(71.7).p("AdpAAQAAmBiVlhQiQlUkHkHQkGkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkHEGQkGEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEGEHQEHEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEGkGQEHkHCQlVQCVlgAAmCg");
	this.shape_4.setTransform(-511.1,58.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#9178C9").ss(32.6).p("EA14AAAQAAK9kPKBQkGJrndHdQndHdprEGQqAEPq+AAQnJAAm0h1QoYiQnSkzQnKkulWmtQlamxi/oFQjGoXgPo9QgCgtAAguQAAq9EPqAQEGprHdndQHdndJrkGQKBkPK8AAQK+AAKAEPQJrEGHdHdQHdHdEGJrQEPKAAAK9g");
	this.shape_5.setTransform(496.225,-74.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D65CE").s().p("EgN9A0DQoYiQnSkzQnKkulWmtQlamxi/oFQjGoXgPo9QgCgtAAguQAAq9EPqAQEGprHdndQHdndJrkGQKBkPK8AAQK+AAKAEPQJrEGHdHdQHdHdEGJrQEPKAAAK9QAAK9kPKBQkGJrndHdQndHdprEGQqAEPq+AAQnJAAm0h1g");
	this.shape_6.setTransform(496.225,-74.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(130.3).p("EA14AAAQAAq9kPqAQkGprndndQndndprkGQqAkPq+AAQq8AAqBEPQprEGndHdQndHdkGJrQkPKAAAK9QAAK9EPKBQEGJrHdHdQHdHdJrEGQKBEPK8AAQK+AAKAkPQJrkGHdndQHdndEGprQEPqBAAq9g");
	this.shape_7.setTransform(496.225,-74.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer_6_copy
	this.instance = new lib.StarFieldMovingStars();
	this.instance.setTransform(0.5,-75.6,2.0688,2.0688,0,0,0,52.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.7,scaleX:2.2241,scaleY:2.2241,x:0.6,y:-75.7},2).to({regX:52.7,regY:0.6,scaleX:3,scaleY:3,x:0.55,y:-75.6,alpha:0},10).wait(1).to({regX:52.8,regY:0.7,scaleX:0.75,scaleY:0.75,y:-75.75},0).to({scaleX:1.4482,scaleY:1.4482,y:-75.8,alpha:1},9).to({scaleX:1.9913,scaleY:1.9913,y:-75.75},7).wait(1));

	// Layer_6
	this.instance_1 = new lib.StarFieldMovingStars();
	this.instance_1.setTransform(0.55,-75.75,0.75,0.75,0,0,0,52.8,0.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.4482,scaleY:1.4482,y:-75.8,alpha:1},9).to({scaleX:2.2241,scaleY:2.2241,x:0.6,y:-75.7},10).to({regX:52.7,regY:0.6,scaleX:3,scaleY:3,x:0.55,y:-75.6,alpha:0},10).wait(1));

	// Layer_5_copy
	this.instance_2 = new lib.StarField();
	this.instance_2.setTransform(9.7,-41.05);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.2,scaleY:1.2,alpha:1},14).to({scaleX:1.4,scaleY:1.4,y:-41.1,alpha:0},15).wait(1));

	// Layer_5
	this.instance_3 = new lib.StarField();
	this.instance_3.setTransform(21.45,-41.05,1.2266,1.2266,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0.8711;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,regY:0,scaleX:1.4,scaleY:1.4,x:9.7,y:-41.1,alpha:0},13).wait(1).to({scaleX:1,scaleY:1,y:-41.05},0).to({scaleX:1.2,scaleY:1.2,alpha:1},14).to({scaleX:1.2133,scaleY:1.2133,y:-41.1,alpha:0.9297},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1400,-1650,2800.8,3148.4);


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
		
		function fl_CustomMouseCursor_2() {
			this.starfield.x = (stage.mouseX*-1)+(stage.canvas.width);
			this.starfield.y = (stage.mouseY*-1)+(stage.canvas.height);
			this.mainTarget.x = stage.mouseX;
			this.mainTarget.y = stage.mouseY;
			this.joystick.gotoAndStop(stage.mouseX/100);
			 
		}
		
		
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(starfield);
		//stage.canvas.style.cursor = "default";
		
		/* Code to get the frame number of the current frame
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Joystick
	this.joystick = new lib.joystick();
	this.joystick.name = "joystick";
	this.joystick.setTransform(502.85,622.7);

	this.timeline.addTween(cjs.Tween.get(this.joystick).wait(1));

	// Lights
	this.instance = new lib.radar();
	this.instance.setTransform(504.95,97.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43C1C7").s().p("AjMBsQgRgBgMgMQgMgLAAgSIAAiEQAAgRAMgMQAMgMARABIGZAAQARgBAMAMQAMAMAAARIAACEQAAASgMALQgMAMgRABg");
	this.shape.setTransform(107.45,479.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43C1C7").s().p("AjMBrQgRABgMgMQgMgMAAgRIAAiEQAAgRAMgMQAMgNARAAIGZAAQARAAAMANQAMAMAAARIAACEQAAARgMAMQgMAMgRgBg");
	this.shape_1.setTransform(107.45,440.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D65CE").s().p("AjMBrQgRABgMgMQgMgNAAgQIAAiFQAAgRAMgLQAMgNARAAIGZAAQARAAAMANQAMALAAARIAACFQAAAQgMANQgMAMgRgBg");
	this.shape_2.setTransform(107.45,401.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43C1C7").s().p("AjiHLQgHAAgGgFQgGgGAAgIIAAtvQAAgNAMgFQAMgFAKAKIGOGQQAcAcAQAkQAPAlAAAoIAAFfQAAAIgGAGQgFAFgIAAg");
	this.shape_3.setTransform(107.45,327.1638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjMBsQgRgBgMgMQgMgLAAgSIAAiEQAAgRAMgMQAMgMARABIGaAAQARgBALAMQAMAMAAARIAACEQAAASgMALQgLAMgRABg");
	this.shape_4.setTransform(898.15,479.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjMBrQgRABgMgMQgMgMAAgRIAAiEQAAgRAMgMQAMgNARAAIGaAAQARAAALANQAMAMAAARIAACEQAAARgMAMQgLAMgRgBg");
	this.shape_5.setTransform(898.15,440.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43C1C7").s().p("AjMBrQgRABgMgMQgMgNAAgQIAAiFQAAgRAMgLQAMgNARAAIGaAAQARAAALANQAMALAAARIAACFQAAAQgMANQgLAMgRgBg");
	this.shape_6.setTransform(898.15,401.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#43C1C7").s().p("AjhHLQgJAAgFgFQgGgGAAgIIAAlfQAAgoAPglQAQgkAcgcIGPmQQAKgKALAFQAMAFAAANIAANvQAAAIgFAGQgGAFgIAAg");
	this.shape_7.setTransform(898.15,327.1638);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#43C1C7").s().p("AABBkQgIAAgFgGIigifQgKgKAFgMQAFgMANAAIE/AAQAIAAAGAGQAGAGAAAIIAACfQAAAIgGAGQgGAGgIAAg");
	this.shape_8.setTransform(393.7888,122.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43C1C7").s().p("Aj0BkQgIAAgGgGIigifQgJgKAFgMQAFgMANAAIMqAAQAIAAAFAGQAGAGAAAIIAACfQAAAIgGAGQgFAGgIAAg");
	this.shape_9.setTransform(369.2388,97.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#43C1C7").s().p("AnpBkQgIAAgGgGIigifQgKgKAGgMQAFgMANAAIUUAAQAIAAAGAGQAGAGAAAIIAACfQAAAIgGAGQgGAGgIAAg");
	this.shape_10.setTransform(344.6992,72.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9178C9").s().p("AuFCPIAAkeIUjAAQBhABBZAkQBaAmBDBEICRCPg");
	this.shape_11.setTransform(593.05,664.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9178C9").s().p("AuFCPICQiPQBFhEBZgmQBZgkBhgBIUjAAIAAEeg");
	this.shape_12.setTransform(412.65,664.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9178C9").s().p("ABUNdIjUjVQgJgJAAgNIAA24QAAgVATgIQAUgIAOAPIDUDVQAKAJAAANIAAW4QAAAVgTAIQgHADgGAAQgMAAgKgKg");
	this.shape_13.setTransform(100.3,772.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D65CE").s().p("ABVNeIjVjWQgJgJAAgNIAA24QAAgVATgIQAUgIAOAOIDVDWQAJAJAAANIAAW4QAAAVgTAIQgHADgGAAQgMAAgJgJg");
	this.shape_14.setTransform(146.825,819.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#70D6D3").s().p("AhMIzQgNgFAAgOIAAu1QAAgIAHgGICJiLQAJgJANAFQAMAFAAANIAAO2QAAAIgFAGIiKCLQgGAGgHAAQgEAAgFgCg");
	this.shape_15.setTransform(906,741.6146);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#70D6D3").s().p("AhMIzQgNgFAAgNIAAu2QAAgIAHgGICJiLQAJgJANAFQAMAFAAAOIAAO1QABAIgHAGIiJCLQgGAGgIAAQgEAAgEgCg");
	this.shape_16.setTransform(875.85,771.7854);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AKYIaIvVvUImKAAIhehfIIYAAIQzQzg");
	this.shape_17.setTransform(820.975,876.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70D6D3").s().p("ApcDUIFilgQAhgiAsgTQAtgSAwAAIJgAAQAgAAAWAWQAXAXAAAfIAAFbg");
	this.shape_18.setTransform(280.8,929.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D65CE").s().p("ApcDUIAAlbQAAgfAXgXQAVgWAhAAIJgAAQAwAAAtASQAsATAhAiIFiFgg");
	this.shape_19.setTransform(724.3,929.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#43C1C7").s().p("AhgBnQgIgEAAgJIAAizQAAgGAEgEQAEgEAGAAIC1AAQAJAAAEAJQADAJgHAGIi0CzQgFAEgFAAIgGgBg");
	this.shape_20.setTransform(727.7583,72.9863);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#43C1C7").s().p("AhqDwQgIgEAAgJIAAnFQAAgGAEgEQAEgEAGAAIDJAAQAGAAAEAEQAEAEAAAGIAAD9QAAAFgEAFIjJDIQgFAEgFAAIgGgBg");
	this.shape_21.setTransform(700.95,86.7113);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#43C1C7").s().p("AhuFZQgEgFAAgFIAAqdQAAgGAEgEQAEgEAGAAIDJAAQAGAAAEAEQAEAEAAAGIAAIQQAAAFgEAFIgoAoQhHBGhgAiIgEABQgGAAgEgEg");
	this.shape_22.setTransform(673.15,97.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#43C1C7").s().p("AhkFdQgGAAgEgEQgEgFAAgFIAAqdQAAgGAEgEQAEgEAGAAIDJAAQAGAAAEAEQAEAEAAAGIAAKdQAAAFgEAFQgEAEgGAAg");
	this.shape_23.setTransform(645.35,97.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43C1C7").s().p("AhkFdQgGAAgEgEQgEgFAAgFIAAqdQAAgGAEgEQAEgEAGAAIDJAAQAGAAAEAEQAEAEAAAGIAAKdQAAAFgEAFQgEAEgGAAg");
	this.shape_24.setTransform(617.55,97.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D65CE").s().p("AjQBkQgOAAgLgKIiCiBQgRgRAKgVQAJgWAXAAIIjAAQAOAAALAKICBCBQARARgJAVQgJAWgYAAg");
	this.shape_25.setTransform(856.0105,940.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9178C9").s().p("AjQBkQgPAAgKgKIiCiBQgQgRAJgVQAJgWAXAAIIjAAQAOAAALAKICBCBQARARgJAVQgJAWgYAAg");
	this.shape_26.setTransform(831.172,915.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#43C1C7").s().p("AjQBkQgPAAgKgKIiCiBQgQgRAJgVQAJgWAXAAIIjAAQAPAAAKAKICCCBQAQARgJAVQgJAWgXAAg");
	this.shape_27.setTransform(806.325,890.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#70D6D3").s().p("AjQBkQgOAAgLgKIiBiBQgRgRAJgVQAJgWAYAAIIiAAQAOAAALAKICCCBQAQARgJAVQgJAWgXAAg");
	this.shape_28.setTransform(781.4885,866.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Ship
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262626").s().p("AuwKrIAA1VIdhAAIAAVVg");
	this.shape_29.setTransform(408.325,666.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AQgI4QhzAAhpgrQhqgshRhRIpqppQhQhRhqgsQhqgshyAAIoYAAQhLAAg1g1Qg2g1AAhLIMKAAQCDAAB6AyQB4AyBdBdIOvOug");
	this.shape_30.setTransform(110.525,684.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#262626").s().p("A1lPwIAA/fIQtAAQCDAAB6AzQB4AxBdBeITMTKIpTJTg");
	this.shape_31.setTransform(110.225,728.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#262626").s().p("Auhd1MAAAg7oIFDAAIAAAAIFwgCIAAE1QAABnAnBeQAnBfBIBJINgNgQBIBJAoBeQAnBeAABmIAEZSQAAB8hYBYQhYBXh8AAg");
	this.shape_32.setTransform(68.1001,335.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ADIPyQixAAijhEQikhEh+h+I4C4BIAAjcIYXYWQCXCXDGBSQDEBSDWAAIZTAAIAACSg");
	this.shape_33.setTransform(306.175,473.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#262626").s().p("AByT3IAAuqQAAjphZjWQhYjXilikIkakbICnnuIFZFPQBkBgB1BEQA/AkBhAzQBGAtAcBFQAiBRAACgIAAZAg");
	this.shape_34.setTransform(274.875,634.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiRFFQjWAAjGhSQjFhSiXiXIlQlOQCEAXB3A/QB3A9BgBgQB8B7CgBCQChBDCvAAIV0AAIAACWg");
	this.shape_35.setTransform(378.7,134.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#262626").s().p("EAMZAvXQjWAAjGhSQjFhSiYiXMghUghVQiXiYhSjFQhSjGAAjVIAA0/IjkAAIAA3mMBSnAAAIAAaII1rAAQjWAAjGhSQjGhSiXiXIpWpXQiZiZjFhTQjHhUjXgBQjbgBjJBVQjCBSiVCVQiVCVhSDBQhVDIAADbIAARUQAADWBSDFQBSDGCYCXIdodpQCXCXDGBSQDFBSDWAAIZRAAIAAHUg");
	this.shape_36.setTransform(238.475,303.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AmADtIHXnWQCDiDCnhQIAAC7Iq9K+g");
	this.shape_37.setTransform(263.625,734.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#262626").s().p("Aj+BdIAAi5IH9AAIAAC5g");
	this.shape_38.setTransform(334.85,689.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#262626").s().p("EgnLAZRMAAAghsIXfAAQDOAAC+hLQC+hMCWiMIHXnXQCDiDCnhQQDdhoDyAAIYIAAMAAAAyhg");
	this.shape_39.setTransform(252,841.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(2.5).p("A7g7hMA3CA3C");
	this.shape_40.setTransform(254.75,408.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2.5).p("EgJOgnXIPGPGQBlBmA4CFQA3CFAACQMAAAA3y");
	this.shape_41.setTransform(295.1832,332.8579);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#262626").s().p("AuwKrIAA1VIdhAAIAAVVg");
	this.shape_42.setTransform(597.35,666.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AxFI4IOwuuQBchdB5gyQB5gyCDAAIMKAAQAABLg1A1Qg1A1hLAAIoYAAQhzAAhqAsQhqAshQBRIppJpQhRBRhqAsQhqArhzAAg");
	this.shape_43.setTransform(895.075,684.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#262626").s().p("AsSPwIpTpTITMzKQBdheB4gxQB5gzCDAAIQuAAIAAffg");
	this.shape_44.setTransform(895.425,728.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#262626").s().p("An0d2Qh8gBhYhXQhXhYAAh8IAE5SQAAhlAnhfQAnhfBJhIINftgQBIhJAohfQAnheAAhmIAAk2IGuACMAAAA7pg");
	this.shape_45.setTransform(924.4749,335.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("A+vPyIAAiSIZQAAQDWAADFhSQDFhSCYiXIYX4WIAADcI4DYBQh9B+ikBEQijBEiyAAg");
	this.shape_46.setTransform(699.625,473.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#262626").s().p("An/T3IAA5AQAAigAjhRQAchEBGguQAsgcB0g7QB1hEBkhgIFYlPICpHuIkbEbQikCkhZDXQhYDWgBDpIAAOqg");
	this.shape_47.setTransform(730.75,634.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AzYFFIAAiWIV0AAQCvAACghDQChhCB8h7QBfhfB4g+QB2g+CEgYIlPFOQiXCXjGBSQjFBSjXAAg");
	this.shape_48.setTransform(626.975,134.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262626").s().p("EgnhAvXIAAnUIZQAAQDWAADGhSQDGhSCXiXIdo9pQCXiXBSjGQBSjFAAjWIAAxUQAAjbhUjIQhSjBiViVQiWiVjBhSQjJhVjcABQjWABjIBUQjFBTiZCZIpVJXQiXCXjGBSQjFBSjXAAI1rAAIAA6IMBPCAAAMAAAAslQAADVhRDGQhSDFiYCYMghVAhVQiWCXjGBSQjGBSjVAAg");
	this.shape_49.setTransform(755.8,303.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AmAkBIAAi7QCoBRCCCCIHXHWIhEDQg");
	this.shape_50.setTransform(742,734.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#262626").s().p("Aj/BdIAAi5IH/AAIAAC5g");
	this.shape_51.setTransform(670.775,689.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#262626").s().p("EgnLAZRMAAAgyhIYIAAQDyAADdBoQCoBRCCCCIHWHXQCWCMC+BMQDABLDMAAIXgAAMAAAAhsg");
	this.shape_52.setTransform(753.65,841.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(2.5).p("Abh7hMg3CA3C");
	this.shape_53.setTransform(750.9,408.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(2.5).p("EAJPgnXIvFPGQhmBmg3CFQg3CFAACQMAAAA3y");
	this.shape_54.setTransform(710.4419,332.8581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Target
	this.mainTarget = new lib.target();
	this.mainTarget.name = "mainTarget";
	this.mainTarget.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.mainTarget).wait(1));

	// StarField
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#70D6D3").ss(17.9).p("AdpAAQAAmBiVlhQiQlUkGkHQkHkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkGEGQkHEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEHEHQEGEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEHkGQEGkHCQlVQCVlgAAmCg");
	this.shape_55.setTransform(2353.85,-18.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#43C1C7").s().p("ArhbUQlViQkHkGQkGkHiQlVQiVlgAAmCQAAmBCVlhQCQlUEGkHQEHkGFViQQFgiVGBAAQGCAAFgCVQFVCQEGEGQEHEHCQFUQCVFhAAGBQAAGCiVFgQiQFVkHEHQkGEGlVCQQlgCVmCAAQmBAAlgiVg");
	this.shape_56.setTransform(2353.85,-18.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFC5B6").ss(17.9).p("AdpAAQAAmBiVlhQiQlUkGkHQkHkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkGEGQkHEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEHEHQEGEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEHkGQEGkHCQlVQCVlgAAmCg");
	this.shape_57.setTransform(2353.85,-18.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EF4141").s().p("ArhbUQlViQkHkGQkGkHiQlVQiVlgAAmCQAAmBCVlhQCQlUEGkHQEHkGFViQQFgiVGBAAQGCAAFgCVQFVCQEGEGQEHEHCQFUQCVFhAAGBQAAGCiVFgQiQFVkHEHQkGEGlVCQQlgCVmCAAQmBAAlgiVg");
	this.shape_58.setTransform(2353.85,-18.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(71.7).p("AdpAAQAAmBiVlhQiQlUkHkHQkGkGlUiQQlhiVmCAAQmBAAlhCVQlUCQkHEGQkGEHiQFUQiVFhAAGBQAAGCCVFgQCQFVEGEHQEHEGFUCQQFhCVGBAAQGCAAFhiVQFUiQEGkGQEHkHCQlVQCVlgAAmCg");
	this.shape_59.setTransform(2353.85,-18.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#9178C9").ss(32.6).p("EA14AAAQAAK9kPKBQkGJrndHdQndHdprEGQqAEPq+AAQnJAAm0h1QoYiQnSkzQnKkulWmtQlamxi/oFQjGoXgPo9QgCgtAAguQAAq9EPqAQEGprHdndQHdndJrkGQKBkPK8AAQK+AAKAEPQJrEGHdHdQHdHdEGJrQEPKAAAK9g");
	this.shape_60.setTransform(3361.175,-150.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6D65CE").s().p("EgN9A0DQoYiQnSkzQnKkulWmtQlamxi/oFQjGoXgPo9QgCgtAAguQAAq9EPqAQEGprHdndQHdndJrkGQKBkPK8AAQK+AAKAEPQJrEGHdHdQHdHdEGJrQEPKAAAK9QAAK9kPKBQkGJrndHdQndHdprEGQqAEPq+AAQnJAAm0h1g");
	this.shape_61.setTransform(3361.175,-150.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(130.3).p("EA14AAAQAAq9kPqAQkGprndndQndndprkGQqAkPq+AAQq8AAqBEPQprEGndHdQndHdkGJrQkPKAAAK9QAAK9EPKBQEGJrHdHdQHdHdJrEGQKBEPK8AAQK+AAKAkPQJrkGHdndQHdndEGprQEPqBAAq9g");
	this.shape_62.setTransform(3361.175,-150.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).wait(1));

	// Space_content
	this.starfield = new lib.SPACE();
	this.starfield.name = "starfield";
	this.starfield.setTransform(500.1,423.8,1,1,0,0,0,0.1,-76.2);

	this.timeline.addTween(cjs.Tween.get(this.starfield).wait(1));

	// Background_Colour
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#191414").s().p("EhOsBOuMAAAidbMCdZAAAMAAACdbg");
	this.shape_63.setTransform(505,503.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(34.4,-161.7,3736.7,1671.1000000000001);
// library properties:
lib.properties = {
	id: '85A9335C58F3484A892E0A3737150313',
	width: 1000,
	height: 1000,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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