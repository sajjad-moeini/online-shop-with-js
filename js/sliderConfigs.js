const swiper = new Swiper(".mySwiper", {
       slidesPerView: 4,
       spaceBetween: 30,
       pagination: {
              el: ".swiper-pagination",
              clickable: true,
       },
});

window.addEventListener('resize',(e)=>{
       console.log(e.target.innerWidth);
       if(e.target.innerWidth == 998){
              const swiper = new Swiper(".mySwiper", {
                     slidesPerView: 2,
                     spaceBetween: 30,
                     pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                     },
              });
       }else if(e.target.innerWidth == 576){
              const swiper = new Swiper(".mySwiper", {
                     slidesPerView: 1,
                     spaceBetween: 30,
                     pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                     },
              });
       }
})