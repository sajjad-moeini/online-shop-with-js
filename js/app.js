
import store from "../store/store.js"

let loginBtn = document.querySelector('.login-btn')
let logOutBtn = document.querySelector('.logOut-btn')
let cartIconElem = document.querySelector('.cart-icon')

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