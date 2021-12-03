let rx =  0 ,  ry = 0;
document.onmousemove  = function(e){

  document.querySelector('.cube').style.transform = `rotateY(${e.pageX}deg) rotateX(${e.pageY}deg)`;
}