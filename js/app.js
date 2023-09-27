import Cart from "../Components/companys/Cart/Cart.js"
import store from "../store/store.js"

let loginBtn = document.querySelector('.login-btn')
let logOutBtn = document.querySelector('.logOut-btn')
let cartIconElem = document.querySelector('.cart-icon')
let searchbarContainer = document.querySelector('.searchbar-container')
let searchbar = document.querySelector('.searchbar')
let searchResultsContainer = document.querySelector('.search-results-container')
let addToCartBtn = document.querySelector('.add-to-cart-btn')
let sizesBtns = document.querySelectorAll('.size-box-container')

let customerCart = []
let pageTitle = document.title
window.onload = () => {
       if (JSON.parse(localStorage.getItem('cart')).length > 0) {
              customerCart = [...JSON.parse(localStorage.getItem('cart'))]
              cartIconElem.style.animation = 'cartAnimation 2s infinite alternate'
       }
}
if (loginBtn) {
       loginBtn.addEventListener('click', (e) => {
              store.dispatch({ type: 'CHANGEisLOGIN' })
              localStorage.setItem('isLogin', JSON.stringify({ value: true }))
              Swal.fire({
                     icon: 'success',
                     title: 'خوش آمدید',
                     confirmButtonText: 'ممنون'
              }).then(result => {
                     if(result.isConfirmed){
                            location.href = location.href
                     }
              })

       })
}
if (logOutBtn) {
       logOutBtn.addEventListener('click', () => {
              localStorage.clear()
              location.href = location.href
       })
}
function totalPriceGen() {
       let eachProductPrice = document.querySelectorAll('.cart-single-product-price')
       let cartTotalPrice = document.querySelector('.cart-total-price')
       let totalPrice = 0
       eachProductPrice.forEach((product) => {
              totalPrice += Number(product.dataset.price)
       })
       cartTotalPrice.innerHTML = `مبلغ کل : ${totalPrice.toLocaleString()} تومان`
}
function cartProductsGenrator() {
       let cartItems = [...JSON.parse(localStorage.getItem('cart'))]
       let allProducts = store.getState().products[0]
       let orderedProductInfs = []
       cartItems.forEach(product => {
              allProducts.forEach(prod => {
                     if (Number(product.id == prod.id)) {
                            let productNewInform = {
                                   id: prod.id,
                                   size: product.size,
                                   count: product.count,
                                   name: prod.name,
                                   imgSrc: prod.mainImgSrc,
                                   price: prod.price
                            }
                            orderedProductInfs.push(productNewInform)
                     }
              })
       })

       document.body.insertAdjacentHTML('beforeend', `
       ${Cart(orderedProductInfs,pageTitle)}
       `)
       totalPriceGen()
}

if (cartIconElem) {

       cartIconElem.addEventListener('click', () => {
              if (JSON.parse(localStorage.getItem('isLogin'))) {
                     if (JSON.parse(localStorage.getItem('cart'))) {

                            cartProductsGenrator()
                            let cartCloseBtn = document.querySelector('.cart-close-btn')
                            let cartDeleteBtn = document.querySelectorAll('.cart-product-delete-btn')
                            let payPrice = document.querySelector('.pay-price')


                            payPrice.addEventListener('click', (e) => {
                                   localStorage.setItem('cart',JSON.stringify([]))
                                   history.go(0)
                            })
                            cartCloseBtn.addEventListener('click', (e) => {
                                   e.target.parentElement.parentElement.parentElement.remove()
                                   history.go(0)
                            })
                            cartDeleteBtn.forEach(btn => {
                                   btn.addEventListener('click', (e) => {
                                          Swal.fire({
                                                 title: 'آیا از حذف محصول اطمینان دارید ؟',
                                                 icon: 'warning',
                                                 showCancelButton: true,
                                                 confirmButtonText: 'بله',
                                                 cancelButtonText: `لغو`,
                                          }).then(res => {
                                                 if (res.isConfirmed) {
                                                        let cartProducts = JSON.parse(localStorage.getItem('cart'))
                                                        let newCartProducts = cartProducts.filter(product => {
                                                               if (product.idSize !== e.target.dataset.idsize) {
                                                                      return product
                                                               }
                                                        })
                                                        e.target.parentElement.parentElement.remove()
                                                        localStorage.setItem('cart', JSON.stringify(newCartProducts))
                                                        totalPriceGen()
                                                        e.target.parentElement.parentElement.parentElement.remove()
                                                        cartProductsGenrator()
                                                 }
                                          })

                                   })
                            })
                     } else {
                            Swal.fire({
                                   icon: 'warning',
                                   title: 'سبد خرید شما خالی است',
                            })
                     }
              } else {
                     Swal.fire({
                            icon: 'info',
                            title: 'لطفا وارد حساب کاربری خود شوید',
                     })
              }
       })

}
if (searchbar) {
       searchbar.addEventListener('keyup', (e) => {
              searchResultsContainer.style.display = 'block'
              let filtredProductCodes = null
              let products = store.getState().products[0]
              let filtredProducts = []
              products.map(product => {
                     if (product.name.includes(String(e.target.value))) {
                            filtredProducts.push(product)
                     }
              })
              filtredProductCodes = filtredProducts.map(product => {
                     return (`
              <a href="pages/product.html?${product.id}">
                                 <div class="search-result w-100">
                                 <div class="h5">
                                 ${product.name}</div>
                                 <img src=${product.mainImgSrc} class="img-fluid w-10" alt="">
                                 </div>
                                 </a>
              `)
              }).join('')

              searchResultsContainer.innerHTML = `
              
                   
                     ${filtredProductCodes}
                  
       `
       })
}
if (searchbarContainer) {
       searchbarContainer.addEventListener('submit', (e) => {
              e.target.preventDefault()
       })

}

document.body.addEventListener('click', (e) => {
       if (searchResultsContainer) {
              if (e.target !== searchbar) {
                     searchResultsContainer.style.display = 'none'
              }
       }
})


addToCartBtn.addEventListener('click', (e) => {
       if (JSON.parse(localStorage.getItem('isLogin'))) {
              let isOrder = false
              let isValidCount = false
              sizesBtns.forEach(btn => {
                     if (btn.classList.contains('ordered-size')) {
                            isOrder = true
                            let orderedPR = {
                                   id: e.target.dataset.productid,
                                   size: Number(btn.querySelector('span').innerHTML),
                                   count: btn.querySelector('input').value,
                                   idSize: `${e.target.dataset.productid + '-' + Number(btn.querySelector('span').innerHTML)}`
                            }
                            if (orderedPR.count) {
                                   isValidCount = true
                                   customerCart.push(orderedPR)
                            }
                     }
              })
              if (isOrder && isValidCount) {
                     localStorage.setItem('cart', JSON.stringify(customerCart))
              } else {
                     e.preventDefault()
                     Swal.fire({
                            icon: 'error',
                            title: 'محصولی را انتخاب نکرده اید و یا مقدار برابر صفر است',

                     })
              }
       } else {
              e.preventDefault()
              Swal.fire({
                     icon: 'info',
                     title: 'لطفا وارد حساب کاربری خود شوید',

              })
       }

})

