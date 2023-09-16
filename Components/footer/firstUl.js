import allInformations from "../../pages/informations.js";




function footerFirstUl() {
       let container = document.createElement('div')

       let companysBoxCodes = allInformations.footerFirstUl.titles.map(title => {
              if (title == 'آنلاین شاپ') {
                     return (`
              <li class="mt-2">
              <h1>
                 ${title}
              </h1>
       </li>
              `)
              }
              return (`
              <li class="mt-2"> ${title}</li>
              `)
       })

       container.innerHTML = `
       <ul class="first-footer-ul">
${companysBoxCodes.join('')}
 </ul>
       `

       return container.innerHTML
}

export default footerFirstUl