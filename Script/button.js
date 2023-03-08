function followTheCursor() {
  document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('in_button_circle');
    let left = e.offsetX;
    let top = e.offsetY;

    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
  });

  let circle = document.getElementById('in_button_circle');

  const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);
}
