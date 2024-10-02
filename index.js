// passes test 1
function shout(string) {
    return string.toUpperCase();
  }

// passes test 2
function whisper(string) {
    return string.toLowerCase();
  }

// passes test 3
function logShout(string) {
    console.log(string.toUpperCase())
  }

// passes test 4
function logWhisper(string) {
    console.log(string.toLowerCase())
  }

// working on test 5
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } 
    else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } 
    else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
