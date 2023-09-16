import allInformations from "../../pages/informations.js";


function uniqueStyle() {
       let container = document.createElement('div')
       container.innerHTML = `
       <div class="unique-style w-100 d-flex">
       <div class="unique-style-container w-100 h-100 d-flex flex-column justify-content-around align-items-center">
              <h1>
${allInformations.uniqueStyle.title}
              </h1>
              <button>
                     ${allInformations.uniqueStyle.btnTitle} 
              </button>
       </div>


</div>
       `

       return container.innerHTML
}

export default uniqueStyle