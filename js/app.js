const burger = () => {
   const btnMenu = document.querySelector('.burger svg')
   const modal = document.querySelector('.modalMenu')
   const btnClose = document.querySelector('.modalMenu header svg')
   
   btnMenu.addEventListener('click', () => {
      modal.classList.add('active')
   })

   btnClose.addEventListener('click', () => {
      modal.classList.remove('active')
   })
}

burger()