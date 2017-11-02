console.log("hello world")

var express = require("express");

var fs = require("fs");


function Player(name, profession, gender, age, strength, hitpoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
}


Player.prototype.printInfo = function() {
	console.log("Name: " + this.name + "\nProfession: " + this.profession + "Gender: " + this.gender);
	console.log("-------------")
};

var  cory = new Player("cory", "software developer" "male")

Player.prototype.isAlive = function() {
	if (this.hitpoints > 0){
		console.log("I'm alive");
	}

}

Player.prototype.attack = function(player2) {
	player2.hitpoints -= this.strength
}	

console.log(cory.printInfo())

cory.attack(jack)