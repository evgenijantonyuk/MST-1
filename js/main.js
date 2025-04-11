document.addEventListener('DOMContentLoaded', function(){
    
    const headerEl = document.querySelector('.header')
    const navMobile = document.querySelector('.nav-mobile')
    const burgerBtn = document.querySelector('.header__burger-btn')
    
    const openPopUp = document.getElementById('open-pop-up')
    const closePopUp = document.getElementById('pop-up__close')
    const popUp = document.querySelector('.pop-up')
    
    const mobileOpenPopUp = document.getElementById('mobile-open-pop-up')
    
    openPopUp.addEventListener('click', function(e){
        e.preventDefault()
        popUp.classList.add('open')
    })
    mobileOpenPopUp.addEventListener('click', function(e){
        e.preventDefault()
        popUp.classList.add('open')
    })
    closePopUp.addEventListener('click', function(){
        popUp.classList.remove('open')
    })
    
    
    window.addEventListener('scroll', function(){
        const scrollPos = window.scrollY
        if (scrollPos > 50) {
            headerEl.classList.add('dark')
        } else {
            headerEl.classList.remove('dark')
        }
    })
    
    burgerBtn.addEventListener('click', function(){
        burgerBtn.classList.toggle('active')
        navMobile.classList.toggle('active')
    })
    
   
    
})


