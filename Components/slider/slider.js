function sliderItemCreator(products) {
  let i = -1
//   let sliderItems = imageSrc.map(image => {
//     i++
//     return `
// <div class="swiper-slide me-4">
// <div class=" h-100 w-100">
//        <img src=${image} class="img-fluid" alt="img3/1">
//        <div class="box-details">
//               <h3>
//                      ${productsTitle[i]}
//               </h3>
//               <div class="d-flex">
//                      <h5 class="top-seller-box-price">
//                             ${prices[i].toLocaleString()}  تومان
//                      </h5>
//                      <button>
//                             مشاهده
//                      </button>
//               </div>

//        </div>
// </div>
// </div>`
//   })
let sliderItems = products.map(product=>{
       return (`
       <div class="swiper-slide me-4">
<div class=" h-100 w-100">
       <img src=${product.mainImgSrc} class="img-fluid" alt="img3/1">
       <div class="box-details">
              <h3>
                     ${product.name}
              </h3>
              <div class="d-flex">
                     <h5 class="top-seller-box-price">
                            ${product.price.toLocaleString()}  تومان
                     </h5>
                     <a class="btn" href="pages/product.html?${product.id}">
                            مشاهده
                     </a>
              </div>

       </div>
</div>
</div>
       `)
})
  return sliderItems.join('')
}


function slider(informations) {

  let slidesContainer = document.createElement('div')
  slidesContainer.innerHTML = `
${sliderItemCreator(informations)}
       `
  return slidesContainer.innerHTML
}

export default slider








{/* <div class="swiper-slide">
<div class=" h-100 w-100">
       <img src="pics/men/3/713McdX8erL._AC_UX569_.jpg" class="img-fluid" alt="img3/1">
       <div class="box-details">
              <h3>
                     شلوار مردانه
              </h3>
              <div class="d-flex">
                     <h5 class="top-seller-box-price">
                            700 هزار تومان
                     </h5>
                     <button>
                            مشاهده
                     </button>
              </div>

       </div>
</div>
</div>
<div class="swiper-slide">
<div class=" h-100 w-100">
       <img src="pics/watches/4/71nPVnCwphL._AC_UX679_.jpg" alt="w4/1">
       <div class="box-details">
              <h3>
                     ساعت لوکس
              </h3>
              <div class="d-flex">
                     <h5 class="top-seller-box-price">
                            2 میلیون و صد هزار تومان
                     </h5>
                     <button>
                            مشاهده
                     </button>
              </div>

       </div>
</div>
</div>
<div class="swiper-slide">Slide 3</div>
<div class="swiper-slide">Slide 4</div>
<div class="swiper-slide">Slide 5</div>
<div class="swiper-slide">Slide 6</div>
<div class="swiper-slide">Slide 7</div>
<div class="swiper-slide">Slide 8</div>
<div class="swiper-slide">Slide 9</div> */}

