
import store from "../store/store.js"

let loginBtn = document.querySelector('.login-btn')
let logOutBtn = document.querySelector('.logOut-btn')
let cartIconElem = document.querySelector('.cart-icon')
let searchbarContainer = document.querySelector('.searchbar-container')
let searchbar = document.querySelector('.searchbar')
let searchResultsContainer =document.querySelector('.search-results-container')
let addToCartBtn = document.querySelector('.add-to-cart-btn')
let sizesBtns = document.querySelectorAll('.size-box-container')

let customerCart =[]

window.onload =()=>{
       if(JSON.parse(localStorage.getItem('cart'))){
              customerCart = [... JSON.parse(localStorage.getItem('cart'))]
             cartIconElem.style.animation ='cartAnimation 2s infinite alternate'


       }
}
if (loginBtn) {
       loginBtn.addEventListener('click', (e) => {
              store.dispatch({ type: 'CHANGEisLOGIN' })
              localStorage.setItem('isLogin', JSON.stringify({ value: true }))
              location.href = location.href
       })
}
if (logOutBtn) {
       logOutBtn.addEventListener('click', () => {
              localStorage.clear()
              location.href = location.href
       })
}
if(cartIconElem){
       cartIconElem.addEventListener('click', () => {
              if (JSON.parse(localStorage.getItem('isLogin'))) {
                     if (JSON.parse(localStorage.getItem('cart'))) {
                            //
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
if(searchbar){
       searchbar.addEventListener('keyup', (e) => {
              searchResultsContainer.style.display = 'block'
              let filtredProductCodes =null
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

document.body.addEventListener('click',()=>{
       if(searchResultsContainer){
              searchResultsContainer.style.display='none'
       }
})


addToCartBtn.addEventListener('click',(e)=>{
       if(JSON.parse(localStorage.getItem('isLogin'))){
              let isOrder = false
              let isValidCount = false
              sizesBtns.forEach(btn=>{
                     if(btn.classList.contains('ordered-size')){
                            isOrder = true
                            let orderedPR = {
                                   id:e.target.dataset.productid,
                                   size:Number(btn.querySelector('span').innerHTML),
                                   count:btn.querySelector('input').value
                            } 
                            if(orderedPR.count){
                                   isValidCount=true
                                   customerCart.push(orderedPR)
                            }
                     }
              })
              if(isOrder && isValidCount){
                     localStorage.setItem('cart',JSON.stringify(customerCart))
              }else{
                     e.preventDefault()
                     Swal.fire({
                            icon: 'error',
                            title: 'محصولی را انتخاب نکرده اید و یا مقدار برابر صفر است',
                           
                          })
              }
       }else{
              e.preventDefault()
              Swal.fire({
                     icon: 'info',
                     title: 'لطفا وارد حساب کاربری خود شوید',
                    
                   })
       }
       
})