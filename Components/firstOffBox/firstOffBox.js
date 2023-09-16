import allInformations from "../../pages/informations.js";
function firstOffBox(){
let firstOffBoxContainer = document.createElement('section')
firstOffBoxContainer.innerHTML =`
<div class="row first-off-box text-light">
<div class="col-6 d-flex flex-column justify-content-around h-100 py-5">
       <div class="h1 align-self-center first-off-box-title">
          ${allInformations.firstOffBox.title}
       </div>
       <p class="first-off-box-subtitle">
            ${allInformations.firstOffBox.desc}
       </p>
       <button class="first-off-box-btn btn  text-light border-light align-self-center">
              ${allInformations.firstOffBox.btnTitle}
       </button>
</div>
<div class="col-6 h-100 d-flex-centering ">
       <img src=${allInformations.firstOffBox.imageSrc} alt="first-bg" class="img-fluid w-75 first-box-img">
</div>


</div>
`
return firstOffBoxContainer.innerHTML
}

export default firstOffBox