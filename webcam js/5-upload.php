<?php
// (A) SET THE DESTINATION FOLDER
$source = $_FILES["upimage"]["tmp_name"];
$destination = "uploaded.png";

// (B) MOVE UPLOADED FILE TO DESTINATION
echo move_uploaded_file($source, $destination) ? "OK" : "ERROR UPLOADING";