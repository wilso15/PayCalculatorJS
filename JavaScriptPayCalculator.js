"use strict";

function getUserName(){
	var inputname;
	inputname = prompt("Please enter your name", "Bill Gates");
	return inputname
}

function getUserHours(){
	var hours;
	hours = prompt("Please enter how many hours you've worked:");
	return hours
}

function getUserWage(){
	var wage;
	wage = prompt("Please enter your current wage:");
	return wage
}

function printNameOnScreen(inputname){
	if (inputname != null){
	document.getElementById("namedisplay").innerHTML = "Hello " + inputname + "! Your pay is as follows;";
	}
}

function calculateRegularPay(hours, wage){
	var wage;
	var hours;
	if (hours <= 40){
	document.getElementById("OT").innerHTML = ((Math.round(("hours * wage= ", hours*wage)*100)/100));
	}
}

function calculateOvertimePay(hours, wage){	
	var overtimepay;
	var wage;
	var hours;
	overtimepay = (wage * 40) + ((hours -40)*(wage*1.5))

	if(hours > 40){
	document.getElementById("dolladolla").innerHTML = ((Math.round(("hours * wage with overtime= ", overtimepay)*100)/100));
	}
	}

var inputname;
inputname = getUserName();
var hours;
hours = getUserHours();
var wage;
wage = getUserWage();

printNameOnScreen(inputname);
calculateRegularPay(hours, wage);
calculateOvertimePay(hours, wage);
