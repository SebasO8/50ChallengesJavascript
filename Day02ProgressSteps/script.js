const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
next.addEventListener('click',() =>{
  currentActive++;
  if(currentActive > circles.length){
    currentActive = circles.length
  }
  update();

})

prev.addEventListener('click',() =>{
  currentActive--;
  if(currentActive < 1){
    currentActive = 1
  }
  update();

})

function update(){
  //pone la clase Active en circle
  circles.forEach((circles, index) =>{
    if(index < currentActive){
      circles.classList.add('active')
    }else{
      circles.classList.remove('active')
    }
  })
  //Actualiza la barra de progreso
  let activeCircles = document.querySelectorAll('.active');

  progress.style.width = (activeCircles.length -1) / (circles.length -1) * 100 + '%';
  
  //Cambia el estado del boton habilitado y desabilitado
  if(currentActive === 1){
    prev.disabled = true;
  } else if (currentActive === circles.length){
    next.disabled = true;
  }else{
    prev.disabled = false;
    next.disabled = false;
  }
}
