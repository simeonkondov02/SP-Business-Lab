window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("top_navigation").style.top = "-60px";

  } else {
    document.getElementById("top_navigation").style.top = "0px";
  }

  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("top_navigation").style.position = "fixed";
    document.getElementById("top_navigation").style.top = "0px";

  } else {
    document.getElementById("top_navigation").style.position = "inherit";
  }

  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("scroll_to_top_button").style.opacity = "1";
    document.getElementById("scroll_to_top_button").style.visibility = "visible";
  } else {
    document.getElementById("scroll_to_top_button").style.opacity = "0";
    document.getElementById("scroll_to_top_button").style.visibility = "hidden";
  }
}
