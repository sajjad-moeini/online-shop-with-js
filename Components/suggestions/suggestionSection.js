import allInformations from "../../pages/informations.js";
let suggestionInform = allInformations.suggestSection
function suggestionSection(){
       let suggestionContainer =document.createElement('section')
       let i =-1
       let innerCodes = suggestionInform.imageSrc.map(img=>{
              i++
              return(
                     `
                     <div class="suggest-pic-box p-0 col-4 position-relative h-100 cp">
                     <img src=${img}
                          class="h-100 w-100 img-fluid"  alt="first-sug">
                     <div class="suggest-box-text">
                            <h3>
                           ${suggestionInform.title[i]}
                            </h3>
                            <h5>
                            ${suggestionInform.subTitle[i]}
                            </h5>
                     </div>
              </div>`
              )
       })

       suggestionContainer.innerHTML =`
       <div class="suggest row">
       ${innerCodes.join('')}
       </div>
       `

return suggestionContainer.innerHTML
}

export default suggestionSection