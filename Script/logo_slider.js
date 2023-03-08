function logo_slider_next() {

  var i = 0, n = 3;

  setInterval( function() {

    if (i < n) {
      i++;
    } else {
      i = 1;
    }

    document.getElementById("logos_container_1").style.marginTop = "-200%";
    document.getElementById("logos_container_2").style.marginTop = "-200%";
    document.getElementById("logos_container_3").style.marginTop = "-200%";

    document.getElementById("logos_container_" + i).style.marginTop = "0";
  }, 5000);

}
