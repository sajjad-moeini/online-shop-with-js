import allInformations from "../pages/informations.js"
import firstNavBar from "../Components/Navbar/firstNavbar.js"
import secondNavbar from "../Components/Navbar/secondNavbar.js"
import firstOffBox from "../Components/firstOffBox/firstOffBox.js"
import suggestionSection from "../Components/suggestions/suggestionSection.js"
import slider from "../Components/slider/slider.js"
import uniqueStyle from "../Components/uniqueStyle/uniqueStyle.js"
import whyUs from "../Components/whyUs/whyUs.js"
import companys from "../Components/companys/companys.js"
import footerFirstUl from "../Components/footer/firstUl.js"
import footerSecondUl from "../Components/footer/secondUl.js"
let topSellerSlider = document.querySelector('.swiper-items-container-top-saled')
let newProductsSlider = document.querySelector('.swiper-items-container-new-products')

let nav = allInformations.mainNavbar.mainPageNavbarItems
let logo =allInformations.mainNavbar.logo

document.body.insertAdjacentHTML('afterbegin', `
<header>
${firstNavBar(nav,logo)}
${secondNavbar()}
</header>
<div class="header-bg"></div>
<main>
<div class="welcome-note h1 text-light text-center pt-5">
${allInformations.welComeNote.title}
</div>
${firstOffBox()}
${suggestionSection()}
<div class="sections-title d-flex-centering">
<h2 >
محصولات پرفروش
</h2>
</div>

`)

document.body.insertAdjacentHTML('beforeend', `
${uniqueStyle()}
 ${whyUs()}
 </main>
 <div class="footer-container">
 ${companys()}
 <footer>
        ${footerFirstUl()}      
        ${footerSecondUl()}
        </footer> 
 </div>
`)




topSellerSlider.insertAdjacentHTML('afterbegin', `
${slider(allInformations.topSellersSection)}
`)
newProductsSlider.insertAdjacentHTML('afterbegin', `
${slider(allInformations.newProductsSection)}
`)