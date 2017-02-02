
//  Variables are data that you can store in memory to access and manipulate.
//  In plain english, a variable is a piece of information your program records so it can track and change it.

//  These are some variables!
// The command 'var' defines a variable for javascript.
// This just means that javascript now knows that variable name stores some kind of data.

var player;
var size;

// A single equals sign is used to set a variable.
// Setting a variable saves the value on the right side of the equals sign to the variable name on the left.
// Note that I don't need to use var to set 'size' to 2, because I already defined 'size' as a variable above.

size = 2;

// For brevity, you can also define and set your variable in the same line using var.

var speed = 100;
var gravity = 980;
var jumpForce = 300;

// So far, all of the data we've set for our variables has been numbers.
//But there are other types of data we can set variables to.

// Variables can store Strings. A string is a string of text characters: this is how you would store words.
// Strings are noted by enclosing the character data in either single or double quotes. We're using double quotes here.
var playerColor = "blue";

// Variables can store Arrays. An array is an ordered list of data. This array contains three strings.
// Arrays are notated using square brackets, and with commas separating the entries in the array.
var validColors = ["green","blue","pink"];

// Variables can also store Booleans. A Boolean is a binary value: it's either on or off.
// There are only two boolean values: true and false!
var shouldThereBeAPlayerObject = true;

// Variables can also store Objects. Objects are like arrays, but not ordered.
// You'll learn much more about objects later, but for now know that they're notated using curly brackets.
var uselessObject = {};

// You can name your variable PRETTY MUCH whatever you want.
// You can't use characters that Javascript uses for operations, like (),!,'":?
// You also can't name your variable the same thing as a Javascript command, like 'switch' or 'function'.
// Otherwise you can name your variables how you like.

var Tfdsf$dvFROG = "This is a valid variable name, but don't ever name your variables like this."
var aNiceString = "The convention in JavaScript is to name variables using no spaces or underscores, with the first letter of each word capitalized except for the first."

// It is IMPORTANT that you name variables things that make sense in the context they are used.
// You want anyone who is reading your code to know roughly what the variable is used for just by the name.
// You'll see how this works in a minute.

// So that's how you set and name variables!
// Now let's see what they do!
// Go ahead and run the index.html file for this lesson in your browser.
// A little alien character should appear. You can move it with the arrow keys and the spacebar.

// Javascript used the variables we defined to create that character.
// Now try and change some of the variables above, save, and reload the game.
// You should be able to tell how the game will be affected by the name of the variables you change.

// (changing validColors won't add more colors, though. We'll see that later.)

// ---- END OF LESSON MATERIAL ---

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});
var toybox;

function preload() {
    toybox = new Toybox(game);
    toybox.preload();
}

function create() {
	if !(indexOf(playerColor, validColors)){
		playerColor = "green";
	}
    var spriteName = playerColor + "Alien";

    if shouldThereBeAPlayerObject{
    	player = toybox.add.player(spriteName, 100, 100);
    }
}

function update() {
    toybox.update();
}