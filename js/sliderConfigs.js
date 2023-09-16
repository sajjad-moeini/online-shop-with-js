
function chooseSliderSlideCount(width){
       if(width > 998){
              const swiper = new Swiper(".mySwiper", {
                     slidesPerView: 4,
                     spaceBetween: 30,
                     pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                     },
              });
       }else if(width < 998){
              const swiper = new Swiper(".mySwiper", {
                     slidesPerView: 2,
                     spaceBetween: 30,
                     pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                     },
              });
       }else if(width < 576){
              const swiper = new Swiper(".mySwiper", {
                     slidesPerView: 1,
                     spaceBetween: 30,
                     pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                     },
              });
       }
}

window.addEventListener('load',(event)=>{

console.log(document.body.scrollWidth);
chooseSliderSlideCount(document.body.scrollWidth)
})
window.addEventListener('resize',(event)=>{

    
       chooseSliderSlideCount(document.body.scrollWidth)
       })