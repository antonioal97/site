const btnMenu = document.querySelector('.js-hamburguer');

btnMenu.addEventListener('click', ()=>{
  const sidebar = document.querySelector('.c-sidebar');
  
  sidebar.classList.add('js-sidebar--active');
  sidebar.querySelector('.js-close').addEventListener('click', ()=>{
    sidebar.classList.remove('js-sidebar--active')
  })
})
