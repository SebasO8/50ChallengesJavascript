const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load>99){
       clearInterval(int);

    }
       
    loadText.innerText = load + "%"
    loadText.style.opacity = multipl(load, 0 , 100 , 1 , 0 )
    bg.style.filter =`blur(${multipl(load, 0 , 100 , 0 , 20 )}px)` 

}

const multipl = ( num , min , max , out_max , out_min ) => {
    return (num - min) * ( out_max - out_min) / (max - min) + out_min
}
