window.onscroll = function() {
  ScrollIndicator()
}

function ScrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop

  var totalPageHeight = document.documentElement.scrollHeight
  var clientViewableHeight = document.documentElement.clientHeight

  var height = totalPageHeight - clientViewableHeight
  var scrolled = (winScroll / height) * 100
  document.getElementById('progress-bar').style.width = scrolled + '%'
}
