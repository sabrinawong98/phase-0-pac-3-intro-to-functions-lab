const expect = require("expect/lib");

function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoomate(string){
    if (string.toLowerCase() === 'hello') {
        return "I can't hear you!";
    }
    else if (string.toUpperCase() === 'HELLO') {
        return "YES INDEED!";
    }
}
 console.log (sayHiToHeadphonedRoomate)