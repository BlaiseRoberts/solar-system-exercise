var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

function print (planets) {
	el.innerHTML = el.innerHTML + "<h1>" + planets + "</h1>";
}

planets.forEach(print);
// Use the map method to create a new array where the first letter of each planet is capitalized
function capital (planets) {
	return planets.charAt(0).toUpperCase() + planets.slice(1);
}

var capPlanets = planets.map(capital);

console.log(capPlanets);
// Use the filter method to create a new array that contains planets with the letter 'e'
function hasE (planets) {
	if (planets.includes("e")) {
		return planets;
	}
}

var planetsWithE = planets.filter(hasE);

console.log(planetsWithE);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function cat (a, b) {
	return a + " " + b;
}

var sentence = words.reduce(cat);

console.log(sentence)


