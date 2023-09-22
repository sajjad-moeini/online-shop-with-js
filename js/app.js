import store from "../store/store.js"

let loginBtn = document.querySelector('.login-btn')
let logOutBtn =document.querySelector('.logOut-btn')


     if(loginBtn){
      loginBtn.addEventListener('click',(e)=>{
       store.dispatch({type:'CHANGEisLOGIN'})
       localStorage.setItem('isLogin',JSON.stringify({value:true}))
       location.href=location.href
             })
     }
     logOutBtn.addEventListener('click',()=>{
       localStorage.clear()
       location.href = location.href
     })