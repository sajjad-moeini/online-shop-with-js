

function Cart(ordredProduct) {
     

       return (`
       <div class="cart-container">
       <div class="row">
              <div class="col-2 cart-close-btn " >
                     <i class="fa fa-close text-light cart-close-btn fs-1 px-1 py-2 cp cart-close-btn"></i>
              </div>
       </div>
       <hr class="text-light mb-3">
       <div class="cart-products-container">
       ${ordredProduct.map(product => {
              return (`
                     <div class="row align-items-center">
                     <div class="col-2 ">
                            <img src=${product.imgSrc} class="img-fluid cart-product-image"
                                   alt="src">
                     </div>
                     <div class="col-3 ">
                            <a href="#" class="text-light">
                                   ${product.name}
                            </a>
                     </div>
                     <div class="col-2 d-flex flex-wrap">
                            <a href="#" class=" d-flex-centering rounded-circle cart-sizes-btns">
                                   ${product.size} * ${product.count}
                            </a>
                     </div>
                     <div class="col-2 deleteProduct">
                     <a class="btn btn-danger cart-product-delete-btn" data-id=${product.id} data-idSize=${product.id+ '-' + product.size}>
                     حذف
                     </a>
                     </div>
                     <div class="col-3 product-price text-light d-flex-centering">
                            ${(product.price * product.count).toLocaleString()} تومان
                     </div>
              </div>
                     `)
       })
              }
      </div>
       <hr class="text-light my-3">
       <div class="cart-footer d-flex justify-content-between align-items-center my-2">
              <div class="h6 text-light ms-5">
                     مبلغ کل   : 199000 تومان
              </div>
              <a href="#" class="btn btn-success me-5">
                     پرداخت
              </a>
            

       </div>
</div>
       `)
}

export default Cart