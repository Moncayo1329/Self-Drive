const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");




    



function animate() {
  car.update();
  car.draw();
  requestAnimationFrame(animate);
}

animate()






