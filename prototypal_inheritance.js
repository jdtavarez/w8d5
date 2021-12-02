Function.prototype.inheritsES5= function(parent) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.construtor = this;
};
// function MovingObject() {}
// MovingObject.prototype.movObjLog = function() {
//     console.log('moving object maybe')
// };

// function Ship() { }
// Ship.inheritsES5(MovingObject);

// function Asteroid() { }
// Asteroid.inheritsES5(MovingObject);

// const a = new Ship();
// a.movObjLog();

// const b = new Ship();
// b.movObjLog();
Function.prototype.inheritsES6 = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.construtor = this;
};

// function MovingObject() {}
// MovingObject.prototype.movObjLog = function() {
//     console.log('moving object maybe')
// };

// function Ship() { }
// Ship.inheritsES6(MovingObject);

// function Asteroid() { }
// Asteroid.inheritsES6(MovingObject);

// const a = new Ship();
// a.movObjLog();

// const b = new Ship();
// b.movObjLog();