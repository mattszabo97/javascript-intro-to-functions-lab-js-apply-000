function shout(str) {
  return str.toUpperCase()
}

function whisper(str) {
  return str.toLowerCase()
}

function logShout(str) {
  console.log(shout(str))
}

function logWhisper(str) {
  console.log(whisper(str))
}

function sayHiToGrandma(str) {
  if(str === str.toLowerCase()) {
    return "I can't hear you!" 
  }
  
  if(str === str.toUpperCase()) {
    return "YES INDEED!"
  }
  
  if (str === "I love you, Grandma.") {
    return "I love you, too."
  }
}