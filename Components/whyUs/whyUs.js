import allInformations from "../../pages/informations.js";


function whyUsBoxesGenrator({ imageSrc, sectionTitle, sectionSubTitles }) {
       let i = -1
   let boxes =  imageSrc.map(image => {
              i++
              return (`
              <div class="why-us-box">
              <img src=${image} alt="support">
              <div class="why-us-inform">
                     <h4 class="why-us-box-title">
${sectionTitle[i]}
                     </h4>
                     <p>
                           ${sectionSubTitles[i]}
                     </p>
              </div>

       </div>
              `)
       })

       return boxes.join('')
}


function whyUs() {
       let container = document.createElement('div')
       container.innerHTML = `
       <div class="why-us">
       <div class="sections-title d-flex-centering">
       <h1 >
${allInformations.whyUs.title}
       </h1>
       </div>
       <div class="why-us-boxes">

             ${whyUsBoxesGenrator(allInformations.whyUs)}

           </div>
         </div>
       `

       return container.innerHTML
}

export default whyUs