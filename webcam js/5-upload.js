function vidup () {
  // (A) CREATE SNAPSHOT FROM VIDEO
  var video = document.getElementById("vid-live"),
      canvas = document.createElement("canvas"),
      context2D = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context2D.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  
  // (B) CONVERT TO BLOB + UPLOAD
  canvas.toBlob(function(blob){
    // (B1) FORM DATA
    var data = new FormData();
    data.append('upimage', blob);
    
    // (B2) AJAX UPLOAD
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "5-upload.php");
    xhr.onload = function(){ alert(this.response); };
    xhr.send(data);
  });
}