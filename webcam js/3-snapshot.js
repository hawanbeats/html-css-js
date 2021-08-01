function vidtake() {
  // (A) SNAPSHOT VIDEO TO HTML CANVAS
  var video = document.getElementById("vid-live"),
      canvas = document.createElement("canvas"),
      context2D = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context2D.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  // (B) PUT SNAPSHOT INTO WRAPPER
  var wrap = document.getElementById("vid-result");
  wrap.innerHTML = "";
  wrap.appendChild(canvas);
}