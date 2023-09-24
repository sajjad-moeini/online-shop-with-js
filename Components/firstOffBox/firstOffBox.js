import store from "../../store/store.js";
let allInf = store.getState()
function firstOffBox(){
let firstOffBoxContainer = document.createElement('section')
firstOffBoxContainer.innerHTML =`
<div class="row first-off-box text-light">
<div class="col-6 d-flex flex-column justify-content-around h-100 py-5">
       <div class="h1 align-self-center first-off-box-title">
          ${allInf.firstOffBox.title}
       </div>
       <p class="first-off-box-subtitle">
            ${allInf.firstOffBox.desc}
       </p>
       <a href="pages/products.html" class="first-off-box-btn btn  text-light border-light align-self-center">
              ${allInf.firstOffBox.btnTitle}
       </a>
</div>
<div class="col-6 h-100 d-flex-centering ">
       <img src=${allInf.firstOffBox.imageSrc} alt="first-bg" class="img-fluid w-75 first-box-img">
</div>


</div>
`
return firstOffBoxContainer.innerHTML
}

export default firstOffBox