/*

Officer: 5121330
CaseNum: 701-0-15367848-5121330

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist juliana adversane and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspectProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a plastic box. They were wearing a blue overcoat.
 Their expression seemed blank. It's so hard to remember right now. It was so scary! I hope I never have to go through that again. 

*/

var usualSuspects = [
	{ 
		"name": "SUMMER PORTOS",
		"coat": "blue overcoat",
		"expression": "blank",
		"accessory": "plastic box"
	},
	{ 
		"name": "JACQUELINE WILLMAR",
		"coat": "green army coat",
		"expression": "menacing",
		"accessory": "laptop bag"
	},
	{ 
		"name": "PIERRE SYMMES",
		"coat": "yellow poncho",
		"expression": "empty",
		"accessory": "orange plasic bag"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function matchSuspectProperties(suspectObj){
	if(suspectObj.accessory == "plastic box" && suspectObj.coat ==  "blue overcoat" && suspectObj.expression ==  "blank" ){
		return true;
	}
	return false;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(matchSuspectProperties(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
