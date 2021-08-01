window.addEventListener("load", function(){
  // (A) ASK FOR USER PERMISSION TO ACCESS CAMERA
  navigator.mediaDevices.getUserMedia({
    // (A1) THE EASY WAY
    // video: true

    // (A2) TO SPECIFY PREFERRED RESOLUTION
    video: {
      width: { min: 852, ideal: 1280, max: 1920 },
      height: { min: 480, ideal: 720, max: 1080 }
    }
  })

  // (B) ON GETTING CAMERA ACCESS
  .then(function(stream) {
    // (B1) STREAM WEBCAM TO VIDEO TAG
    var video = document.getElementById("vid-live");
    video.srcObject = stream;
    video.play();

    // (B2) ENABLE DEMO BUTTONS
    document.getElementById("vid-take").onclick = vidtake;
    document.getElementById("vid-down").onclick = viddown;
    document.getElementById("vid-up").onclick = vidup;
  })

  // (C) FAILURE - NO WEBCAM ATTACHED AND/OR NO PERMISSION
  .catch(function(err) {
    alert("Please enable access and attach a webcam");
  });
});