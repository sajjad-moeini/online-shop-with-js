
import store from "../store/store.js"

let loginBtn = document.querySelector('.login-btn')
let logOutBtn = document.querySelector('.logOut-btn')
let cartIconElem = document.querySelector('.cart-icon')
let searchbarContainer = document.querySelector('.searchbar-container')
let searchbar = document.querySelector('.searchbar')
let searchResultsContainer =document.querySelector('.search-results-container')

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
searchbar.addEventListener('blur',()=>{
       searchResultsContainer.style.display='none'
})