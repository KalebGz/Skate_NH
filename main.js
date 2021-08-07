
document.getElementById('background_vid').addEventListener(ended, videoEndHandler, false);

function videoEndHandler(e){
  console.log("Video Ended");
}
