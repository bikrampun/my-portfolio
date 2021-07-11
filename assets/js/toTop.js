var t1 = 0;
window.onscroll = scroll1; //function is called when scrolling

function scroll1() { //visible when scrolling
  var toTop = document.getElementById('toTop');
  (window.scrollY>0) ? toTop.style.display='Block' : toTop.style.display='none';
}

function goTop() { //go to top when function is clicked
  var y1 = window.scrollY;
  y1 = y1-1000;
  window.scrollTo(0, y1);
  if (y1>0) {
    t1=setTimeout("goTop()", 100); //take time to go top
  } else {
    clearTimeout(t1);
  }
}