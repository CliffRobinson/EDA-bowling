const scores = require('./scores.js');

// console.log(scores.frames1);
// console.log(scores.frames2);

function getScore(game){
  console.log(game);
  
  let score = 0;

  for (let i = 0;i<game.length-1;i++){ // For each item (frame) in the array (game), do ...
    let frame = game[i];
    let nextFrame = game[i+1]
    //Big if statement to hold all cases for first 9 frames
    if (frame[0] == 10/*Its a strike*/) {
      // score += 10 + next two balls [i+1]
      score += (10+nextFrame[0]+nextFrame[1]);
      if (nextFrame[1]==0){
        let nextframeAfter = game[i+2];
        score += nextframeAfter[0];
      }
    } else if ((frame[0]+frame[1]) == 10/*its a spare*/) {
      //score += 10 plus next one ball
      score += (10+nextFrame[0]);
    } else { // maybe this will only happen in a normal 
      //score += two children of this frame.
      score += frame[0]+frame[1]; 
    }
  
  }
  //Final frame:
  // add every number in last frame to score.
  
  let finalFrame = game[game.length-1];
  console.log(finalFrame);
  for (let bowl of finalFrame) {
    score += bowl;
  }
    

  return score;
}

console.log("The score is: "+getScore(scores.frames2));