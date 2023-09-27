import store from "../store/store.js"

let allInf = store.getState()
let productId = Number(location.search.slice(1))

let product = allInf.products[0].filter(product=>{return product.id == productId})[0]

document.title = product.name

document.body.insertAdjacentHTML('beforeend',`
<div class="product-container p-3">

<div class="row about-product-container px-3">
<div className="row closeBtn">
<a href="products.html">
<i class="fa fa-close closeBtn ">
</i>
</a>

</div>
       <div class="col-12 col-md-4 product-pics-container  px-5">
              <img src=../${product.mainImgSrc}
                     class="w-100 img-fluid product-lg-img rounded-3" alt="">
              <div class="row">
              ${product.imgSrc.map(img=>{
                     return(`
                     <div class="col-4 h-25 sm-img-container">
                     <img src=../${img}
                            class="w-100 img-fluid h-100 product-sm-img rounded-3" alt="">
              </div>
                     `)
              }).join('')}
              </div>
       </div>
       <div class="col-12 col-md-8 px-md-5 ">
              <div class="row">
                     <div class="h1">
${product.name}
                     </div>
                     <div class="h4 mt-4">
                            درباره محصول :
                     </div>
                     <p class="mt-4">
                   ${product.desc}
                     </p>

              </div>
              <div class="price h3 mt-auto ">
              قیمت :
              ${product.price.toLocaleString()} تومان
              </div>

       </div>



</div>
<div class="h3 text-light mt-4 ps-3">
       سایز های موجود :
</div>
<div class="d-flex flex-wrap sizes-container">
       <div class="size-box-container position-relative">
              <span>32</span>
              <input type="number" placeholder="0" data-size="32" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>34</span>
              <input type="number" placeholder="0" data-size="34" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>36</span>
              <input type="number" placeholder="0" data-size="36" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>38</span>
              <input type="number" placeholder="0" data-size="38" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>40</span>
              <input type="number" placeholder="0" data-size="40" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>42</span>
              <input type="number" placeholder="0" data-size="42" class="size-count position-absolute"/>
       </div>
       <div class="size-box-container position-relative">
              <span>44</span>
              <input type="number" placeholder="0" data-size="44" class="size-count position-absolute"/>
       </div>
     
</div>

<div class="w-100 d-flex d-flex-centering">
       <a href="./products.html" data-productId=${product.id} class=" btn add-to-cart-btn mx-auto">
              افزودن به سبد خرید
       </a>
</div>
</div>
`)














let productLgImgElem = document.querySelectorAll('.product-lg-img')
let productSmImgElem = document.querySelectorAll('.product-sm-img')
let sizeBox = document.querySelectorAll('.size-box-container')

sizeBox.forEach(btn => {
       btn.addEventListener('click',(bt)=>{
         btn.classList.toggle('ordered-size')
       })
 })
 productSmImgElem.forEach(img => {
        img.addEventListener('mouseenter', e => {
               let id = e.target.dataset.id
               productLgImgElem.forEach(img => {
                      if (img.dataset.id == id) {
                             img.src = e.target.src
                      }
               })
        })
 })
