(function(){
    "use strict";
    
   
//
    var planetsString = ["Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune"];
    var planetArray;
    //var planetsArray = planetsString
//     planetArray  = planetsString.split("|");
// console.log(planetArray);
//console.log(planetArray.join("<br>'));
//let string = ["Mercury"<br>"Venus"<br>"Earth"<br>"Mars"<br>"Jupiter"<br>"Saturn"<br>"Uranus"<br>"Neptune"]
  let string = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
console.log(string);

let planetsBreak = string.join(",");
console.log(planetsBreak);
     //using line breaks would be useful in this case to produce a list
    //where each planet would appear on a new seperate line rather than all
//     //on one line.

let planetsList = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    planetsList = string.join("<li></li>")
    console.log(planetsList);



   //  let str;
   //  let newPlanetArray = [];
   //  planetsArray.forEach(function(planet){
   //      console.log(`<li>${planet}</li>`);
   //  newPlanetArray.push(`<li>${planet}</li>`);
   //  })
   // console.log(newPlanetArray);
   // newPlanetArray.unshift("<ul>");
   // newPlanetArray.push("</ul>")
   //  str = newPlanetArray.join();
   // console.log(str);

})();