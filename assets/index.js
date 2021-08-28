let menuItemProtoArray = document.querySelectorAll('.menu__link')
let menuItem = [...menuItemProtoArray];

for(let item of menuItem){
    item.addEventListener("mouseover", ()=>{
        item.classList.contains('is-active') ? item.classList.remove('is-active') : item.classList.add('is-active'); 
    })
}