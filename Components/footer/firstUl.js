import store from "../../store/store.js";
let allInf = store.getState()


function footerFirstUl() {
       let container = document.createElement('div')

       let companysBoxCodes = allInf.footer.footerFirstUl.titles.map(title => {
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