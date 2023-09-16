const swiper = new Swiper(".mySwiper", {
       slidesPerView: 4,
       spaceBetween: 30,
       pagination: {
              el: ".swiper-pagination",
              clickable: true,
       },
});
document.body.addEventListener('resize',(e)=>{
       console.log('ss');
})