var isMenuOpen = false;

function openMenu() {
  if (isMenuOpen) {
    close();
  } else {
    open();
  }
}

function open() {
  document.getElementById("top_navigation").style.height = document.body.scrollHeight + "px";
  document.getElementById("top_screen").style.overflow = "visible";
  document.getElementById("main_mobile_menu_container").style.top = "6vh";
  document.getElementById("mobile_menu_container_2").style.top = "6vh";
  document.getElementById("mobile_menu_container_3").style.top = "6vh";
  document.getElementById("mobile_menu_container_4").style.top = "6vh";
  document.getElementById("mobile_menu_container_5").style.top = "6vh";

  document.getElementById("mobile_menu_container_2").style.left = "100%";
  document.getElementById("mobile_menu_container_3").style.left = "100%";
  document.getElementById("mobile_menu_container_4").style.left = "100%";
  document.getElementById("mobile_menu_container_5").style.left = "100%";

  document.getElementById("main_mobile_menu_container").style.left = "0";
  document.getElementById("scroll_to_top_button").style.bottom = "-10vh";

  isMenuOpen = true;
}

function close() {
  document.getElementById("top_navigation").style.height = "6vh";
  document.getElementById("top_screen").style.overflow = "hidden";
  document.getElementById("main_mobile_menu_container").style.top = "-100vh";
  document.getElementById("mobile_menu_container_2").style.top = "-100vh";
  document.getElementById("mobile_menu_container_3").style.top = "-100vh";
  document.getElementById("mobile_menu_container_4").style.top = "-100vh";
  document.getElementById("mobile_menu_container_5").style.top = "-100vh";
  document.getElementById("scroll_to_top_button").style.bottom = "10px";

  isMenuOpen = false;
}

function mobileMenuForward() {
  document.getElementById("mobile_menu_container_2").style.left = "0";
  document.getElementById("mobile_menu_container_2").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "-100%";
  document.getElementById("main_mobile_menu_container").style.transition = "0.5s";
}

function mobileMenuForward2() {
  document.getElementById("mobile_menu_container_3").style.left = "0";
  document.getElementById("mobile_menu_container_3").style.transition = "0.5s";

  document.getElementById("mobile_menu_container_2").style.left = "-100%";
  document.getElementById("main_mobile_menu_container").style.transition = "0.5s";
}

function mobileMenuForward3() {
  document.getElementById("mobile_menu_container_4").style.left = "0";
  document.getElementById("mobile_menu_container_4").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "-100%";
  document.getElementById("main_mobile_menu_container").style.transition = "0.5s";
}

function mobileMenuForward4() {
  document.getElementById("mobile_menu_container_5").style.left = "0";
  document.getElementById("mobile_menu_container_5").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "-100%";
  document.getElementById("main_mobile_menu_container").style.transition = "0.5s";
}

function mobileMenuBack() {
  document.getElementById("mobile_menu_container_2").style.left = "100%";
  document.getElementById("main_mobile_menu_container").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "0";
}

function mobileMenuBack2() {
  document.getElementById("mobile_menu_container_3").style.left = "100%";
  document.getElementById("mobile_menu_container_2").style.transition = "0.5s";

  document.getElementById("mobile_menu_container_2").style.left = "0";
}

function mobileMenuBack3() {
  document.getElementById("mobile_menu_container_4").style.left = "100%";
  document.getElementById("mobile_menu_container_4").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "0";
}

function mobileMenuBack4() {
  document.getElementById("mobile_menu_container_5").style.left = "100%";
  document.getElementById("mobile_menu_container_5").style.transition = "0.5s";

  document.getElementById("main_mobile_menu_container").style.left = "0";
}
