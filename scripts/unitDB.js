//===========================================//
//======creating a unit (lexical space)======//
//===========================================//

var knightName = document.getElementById('knight');
console.log(knightName);

function scriptTest() {
    alert("script is working");
}

var createUnit = function(name, str, arm) {
    window[name] = {
        name: name,
        strength: str,
        armor: arm
    };
    console.log(JSON.stringify(window[name]));
};

var createUnitNode = function(nam,pow,arm) {
    var unit = document.createElement("div");
    var name = document.createTextNode(nam);
    var power = document.createTextNode("power: " + pow);
    var armor = document.createTextNode("armor: " + arm);

    unit.appendChild(name);
    unit.appendChild(power);
    unit.appendChild(armor);

    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(unit);
    console.log(JSON.stringify(unit));
};

// createUnit("Marco", 7, 7);
// console.log(JSON.stringify(Marco));

//delete(Marco); //sorry Marco!
// console.log(Marco);
//object no longer exists - good!


// WHAT I NEED TO DO:
// transform this object into an html grid element
// do it inside of the createUnit function

var unitMakerButton = document.getElementById('unitMaker');
console.log(unitMakerButton);
unitMakerButton.addEventListener("click", function(){
    createUnitNode("Goblin",2,2);
});



//string version of element
// var wrapper = "";
// wrapper += "<div class='portrait'>";
// wrapper += "<img src='img/knightX2.png' alt='knightX2.png'></div>";
// wrapper += "<div class='statsWindow'>";
// wrapper += "<div id='knight' class='name'>knight</div>";
// wrapper += "<div class='statsText'>POWER: 5</div>";
// wrapper += "<div class='statsText'>ARMOR: 5</div>";
// wrapper += "</div>";
// document.write("<div class='unit'>" + wrapper + "</div>");


//objective is:

// <div class="unit">
//     <div class="portrait">
//         <img src="img/knightX2.png" alt="knightX2.png"></div>
//     <div class="statsWindow">
//         <div id="knight" class="name">knight</div>
//         <div class="statsText">POWER: 5</div>
//         <div class="statsText">ARMOR: 5</div>
//     </div>
// </div>