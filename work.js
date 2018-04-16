#!/usr/bin/env node

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

var person = {
	firstName: 'Chunyao',
	lastName: 'Li',
	fullName:function(){
		return `${this.firstName} ${this.lastName}`;
	}
};
divider('Person');

console.log(`${person.firstName}`);
console.log(`${person.lastName}`);
console.log(person.fullName());
divider('Calculator');

var calculator = {
	operand01 : -1,
	operand02 : -1,
	add:function(){
		return this.operand01 + this.operand02;
	},
	subtract:function(){
		return this.operand01 - this.operand02;
	}
};

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;	

calculator.multiply = function(){
	return this.operand01 * this.operand02;
};
console.log(`operand01 = ${calculator.operand01}`);
console.log(`operand02 = ${calculator.operand02}`);
console.log(`Add: ${calculator.add()}`);
console.log(`Subtract: ${calculator.subtract()}`);
console.log(`Multiply: ${calculator.multiply()}`);
