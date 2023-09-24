import allInformations from "../../pages/informations.js";
import store from "../../store/store.js";
let allInf = store.getState()
function uniqueStyle() {
       let container = document.createElement('div')
       container.innerHTML = `
       <div class="unique-style w-100 d-flex">
       <div class="unique-style-container w-100 h-100 d-flex flex-column justify-content-around align-items-center">
              <h1>
${allInf.uniqueStyle.title}
              </h1>
              <a href="pages/products.html">
                     ${allInformations.uniqueStyle.btnTitle} 
              </a>
       </div>


</div>
       `

       return container.innerHTML
}

export default uniqueStyle