const cardsLike = document.querySelectorAll('.c-card')
const Cards = [...cardsLike]
const card = document.querySelector('.c-card')

const buttonsLike = document.querySelectorAll('.c-button')
const Buttons = [...buttonsLike]
const button = document.querySelector('.c-button')


Cards.forEach(function(el){
    el.addEventListener("mouseenter", function(){
        if(el.classList.contains('clr-dev--card')){
            Buttons.forEach(function(allButtons){
                allButtons.classList.add('clr-dev')
                allButtons.classList.remove('clr-DMM')
            })
        }else if(el.classList.contains('clr-DMM--card')){
            Buttons.forEach(function(allButtons){
                allButtons.classList.add('clr-DMM')
                allButtons.classList.remove('clr-dev')
            })
        }else{
            Buttons.forEach(function(allButtons){
                allButtons.classList.remove('clr-dev')
                allButtons.classList.remove('clr-DMM')
                allButtons.classList.add('clr-primary')
            })
        }

    })
})
