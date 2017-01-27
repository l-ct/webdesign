// A self invoking function
(function () {
	console.log('hello');
})();


// Functions can be invoked as methods of an object.
var myObj = {
	firstName:'Louis',
	lastName:'Tiar',
	age:37,
	ageNextYear: function(){
		return this.age + 1;
	},
	fullName: function(middle){
		return this.firstName
			+ ' ' + middle
			+ ' ' + this.lastName;
	}
};

console.log(myObj.fullName('olivier'));
