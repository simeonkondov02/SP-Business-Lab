function calculateCurrentYear() {
  var date = new Date();

  var currentYear = date.getFullYear();

  document.getElementById("year").innerHTML = "© 2016 - " + currentYear + " Strategy+ Business Lab"
}
