import store from "../../store/store.js"
let isLogin = null
let userName = store.getState().users[0].fname;

if(JSON.parse(localStorage.getItem('isLogin'))){
  isLogin = true;
}else{
  isLogin = false;
      
}   

function secondNavbar(){
     let secondNavbarContainer =  document.createElement('section')
     if(isLogin){
  
     }
    secondNavbarContainer.innerHTML=`
     <nav class="navbar second-nav">
     <div class="row w-100">
            <div class="col-6 col-md-4">
                   <div class="row w-100">
                   ${isLogin ? `
                   <div class="h3 col-9 ms-1 d-flex-centering text-light account-nav-item cp position-relative userInformation-container"
                  >
                سلام ${userName} 
                <div class="userInformation position-absolute">
                <ul>
                  <li><a>
                  اطلاعات کاربری
                  </a></li>
                  <li><a>
                  سابقه خرید
                  </a></li>
                  <li><a>
                  علاقه مندی ها
                  </a></li>
                  <li class='logOut-btn'><a>
                  خروج
                  </a></li>
                </ul>
                </div>
                   </div>
                   `:`
                   <div class="h3 col-9 ms-2 d-flex-centering text-light account-nav-item cp"
                   data-bs-toggle="modal"
                   data-bs-target="#loginRegisterModal">
                حساب کاربری
                   </div>
                   `}
                        
                          <div class=" col-3 d-flex-centering text-light  cp cart-icon-container ">
                                 <i class="fa fa-cart-arrow-down fs-3 cart-icon position-relative">
                                 ${JSON.parse(localStorage.getItem('cart')) ? `
                                 <span class="position-absolute cart-badge d-flex-centering">
                                 ${JSON.parse(localStorage.getItem('cart')).length}
                                 </span>
                                 ` : ``}
                                
                                 </i>
                          </div>

                   </div>
            </div>
            <div class="col-5 col-md-4 ms-auto">
                   <form class="d-flex position-relative searchbar-container" role="search">
                          <input class="form-control searchbar" type="search" placeholder="جستجو کنید ... ">
                          <button class="btn  navbar-search-btn" type="submit">
                                 <i class="fa fa-search"></i>
                          </button>
                          <div class="search-results-container position-absolute">
 </div>

                   </form>
            </div>
     </div>
</nav>
<div class="modal fade" id="loginRegisterModal" tabindex="-1" >
  <div class="modal-dialog modal-dialog-centered  mx-auto">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"> حساب کاربری</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
      </div>
      <div class="modal-body">
      <form action="#">
      <label for="username-login-item" class="text-light">
             نام کاربری :
      </label>
      <input type="text" value="sajjad-rad" id="username-login-item" class="form-control" placeholder="نام کاربری خود را وارد کنید">
      <br>
      <label for="password-login-item" class="text-light" >
             پسورد :
      </label>
      <input type="password" id="password-login-item"  class="form-control mt-3" value="12345678" placeholder="پسورد خود را وارد کنید">
      <span class="form-text text-danger cp"
      data-bs-toggle="modal"
                          data-bs-target="#RegisterModal">
             هنوز ثبت نام نکرده اید ؟
      </span>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">بستن</button>
        <button type="button" class="btn btn-primary ms-3 login-btn">ورود </button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="RegisterModal" tabindex="-1" >
  <div class="modal-dialog  modal-dialog-centered  mx-auto">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-light">  فرم ثبت نام </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
      </div>
      <div class="modal-body">
      <input type="text" id="nameAndFamily-login-item" class="form-control mt-4" placeholder="نام و نام خانوادگی خود را وارد کنید">
      
      <input type="text" id="username-order-login-item" class="form-control mt-4" placeholder="نام کاربری خود را انتخاب کنید">
      <span class="text-danger">
      نام کاربری باید بین 6 تا 20 کاراکتر داشته باشد
      </span>
      <input type="text" id="email-login-item" class="form-control mt-2" placeholder="ایمیل خود را وارد کنید">
     <input type="text" id="password-login-item" class="form-control mt-4" placeholder="رمز عبور خود را وارد کنید">
     <span class="text-danger">
     رمز عبور باید بین 8 تا 20 کاراکتر داشته باشد
     </span>
      <input type="text" id="repassword-login-item" class="form-control mt-2" placeholder="رمز عبور خود را تکرار کنید"></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">بستن</button>
        <button type="button" class="btn btn-success ms-3">ثبت نام </button>
      </div>
    </div>
  </div>
</div>
     `

     
  
     return secondNavbarContainer.innerHTML
}

export default secondNavbar




