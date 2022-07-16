const firstScroe = document.querySelector('#firstScroe');
const secondScroe = document.querySelector('#secondScroe');
const button1 = document.querySelector('#firstBtn');
const button2 = document.querySelector('#secondBtn');
const resetButton = document.querySelector('#resetBtn')
const goal = document.querySelector('#playTo')


button1.addEventListener('click' , function() {
    if (parseInt(firstScroe.innerText) < goal.value ){
     firstScroe.innerText = parseInt(firstScroe.innerText)  + 1 ;}

    else { button1. disabled = true 
           button2. disabled = true
            
    }
})


button2.addEventListener('click' , function() {

    if (parseInt(secondScroe.innerText) < goal.value ){
        secondScroe.innerText = parseInt(secondScroe.innerText)  + 1 ;}
   
       else { button1. disabled = true 
        button2. disabled = true
         
 }
})


resetButton.addEventListener('click' , function() {
    firstScroe.innerText = parseInt(0) ;
    secondScroe.innerText = parseInt(0)
    button1. disabled = false
    button2. disabled = false
})