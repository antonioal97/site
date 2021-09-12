const DOM = {
    cardsLike: document.querySelectorAll('.c-card'),
    buttonsLike: document.querySelectorAll('.c-button'),
    titlesLike: document.querySelectorAll('.c-card .typ-subtitle')
}

const Card = {
    Cards: [...DOM.cardsLike],
    Buttons: [...DOM.buttonsLike],
    Titles: [...DOM.titlesLike],

    changeTheme(){
        this.Cards.forEach(function(el, index){
            
            
            el.addEventListener("mouseenter", function(){
                if(el.classList.contains('clr-dev--card')){
                    
                    Card.Buttons.forEach(function(allButtons, index){
                        allButtons.classList.remove('clr-DMM')
                        allButtons.classList.add('clr-dev')
                    })
                }else if(el.classList.contains('clr-DMM--card')){
                    Card.Buttons.forEach(function(allButtons){
                        allButtons.classList.remove('clr-dev')
                        allButtons.classList.add('clr-DMM')
                    })
                }else{
                    Card.Buttons.forEach(function(allButtons){
                        allButtons.classList.remove('clr-dev')
                        allButtons.classList.remove('clr-DMM')
                        allButtons.classList.add('clr-primary')
                    })
                }
            })
        })
    }
}

Card.changeTheme()

// const cardsLike = document.querySelectorAll('.c-card')
// const Cards = [...cardsLike]

// const buttonsLike = document.querySelectorAll('.c-button')
// const Buttons = [...buttonsLike]

// const titleLike = document.querySelectorAll('.c-card .typ-subtitle');
// const cardsTitle = [...titleLike]


// Cards.forEach(function(el){
//     el.addEventListener("mouseenter", function(){
        
//         h2Before.classList.add('typ-subtitle--after')
//         h2Before.style.color = "red"


//         if(el.classList.contains('clr-dev--card')){
//             Buttons.forEach(function(allButtons){
//                 allButtons.classList.add('clr-dev')
//                 allButtons.classList.remove('clr-DMM')
//             })
//         }else if(el.classList.contains('clr-DMM--card')){
//             Buttons.forEach(function(allButtons){
//                 allButtons.classList.add('clr-DMM')
//                 allButtons.classList.remove('clr-dev')
//             })
//         }else{
//             Buttons.forEach(function(allButtons){
//                 allButtons.classList.remove('clr-dev')
//                 allButtons.classList.remove('clr-DMM')
//                 allButtons.classList.add('clr-primary')
//             })
//         }
//     })
// })
