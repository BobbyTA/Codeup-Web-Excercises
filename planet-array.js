(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];


    planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);


    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);


    console.log(planets.shift([0]));
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);


    console.log(planets.pop([0]));
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);


    var index = planets.indexOf('Earth');
    console.log(index);
    console.log('Finding and logging the index of "Earth" in the planets array.');


    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);
})();