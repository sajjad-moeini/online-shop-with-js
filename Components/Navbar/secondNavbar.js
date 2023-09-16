function secondNavbar(){
     let secondNavbarContainer =  document.createElement('section')
     secondNavbarContainer.innerHTML=`
     <nav class="navbar second-nav">
     <div class="row w-100">
            <div class="col-6 col-md-4">
                   <div class="row w-100">
                          <div class="h3 col-9 ms-2 d-flex-centering text-light account-nav-item cp">
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
     `
     return secondNavbarContainer.innerHTML
}
export default secondNavbar