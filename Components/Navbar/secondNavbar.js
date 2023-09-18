function secondNavbar(){
     let secondNavbarContainer =  document.createElement('section')
     secondNavbarContainer.innerHTML=`
     <nav class="navbar second-nav">
     <div class="row w-100">
            <div class="col-6 col-md-4">
                   <div class="row w-100">
                          <div class="h3 col-9 ms-2 d-flex-centering text-light account-nav-item cp"
                          data-bs-toggle="modal"
                          data-bs-target="#loginRegisterModal">
                                 حساب کاربری
                          </div>
                          <div class=" col-2 d-flex-centering text-light  cp cart-icon-container">
                                 <i class="fa fa-cart-arrow-down fs-3 cart-icon"></i>
                          </div>

                   </div>
            </div>
            <div class="col-5 col-md-4 ms-auto">
                   <form class="d-flex" role="search">
                          <input class="form-control " type="search" placeholder="جستجو کنید ... ">
                          <button class="btn  navbar-search-btn" type="submit">
                                 <i class="fa fa-search"></i>
                          </button>
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
      <input type="text" id="username-login-item" class="form-control" placeholder="نام کاربری خود را وارد کنید">
      <br>
      <label for="password-login-item" class="text-light">
             پسورد :
      </label>
      <input type="password" id="password-login-item"  class="form-control mt-3" placeholder="پسورد خود را وارد کنید">
      <span class="form-text text-danger cp">
             هنوز ثبت نام نکرده اید ؟
      </span>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
        <button type="button" class="btn btn-primary">ورود </button>
      </div>
    </div>
  </div>
</div>
     `
     return secondNavbarContainer.innerHTML
}
export default secondNavbar