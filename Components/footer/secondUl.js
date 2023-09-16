import allInformations from "../../pages/informations.js";




function footerSecondUl() {
       let container = document.createElement('div')
       let i = -1
       let { hrefs, logos, titles } = allInformations.footerSecondUl
       let companysBoxCodes = titles.map(title => {
              i++
              return (`
              <li>
              <a href=${hrefs[i]}>
                     <i class="fa ${logos[i]}"></i> ${title}
              </a>

       </li>
              `)

       })

       container.innerHTML = `
       <ul class="second-footer-ul">
${companysBoxCodes.join('')}
 </ul>
       `

       return container.innerHTML
}

export default footerSecondUl