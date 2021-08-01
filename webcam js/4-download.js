function viddown () {
  // (A) CREATE SNAPSHOT FROM VIDEO
  var video = document.getElementById("vid-live"),
      canvas = document.createElement("canvas"),
      context2D = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context2D.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  // (B) CREATE DOWNLOAD LINK
  var wrap = document.getElementById("vid-result"),
      anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "webcam.png";
  anchor.innerHTML = "Click to download";
  wrap.innerHTML = "";
  wrap.appendChild(anchor);

  // (C) AUTOMATIC DOWNLOAD - MAY NOT WORK ON SOME BROWSERS
  // anchor.click();
}