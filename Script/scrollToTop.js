function scroll(event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function() {

      window.location.hash = hash;
    });
  }
});
