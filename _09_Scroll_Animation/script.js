const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', checkBoxes);

//checkBoxes()

function checkBoxes() {
    
    //console.log(window.innerHeight / 5 * 4)
    
    const triggerBottom = window.innerHeight *(4/5);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(triggerBottom > boxTop){
          box.classList.add('show');
        }else{
          box.classList.remove('show');
        }    
    })
    
}