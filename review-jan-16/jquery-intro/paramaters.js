function saySomething(something, somethingElse){
	something = 890;
	somethingElse = 'Howdy!!!!';
	return something + ' ' + somethingElse;
}

var greeting = saySomething('greetings', 'earthling');
console.log(greeting);