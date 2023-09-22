import store from "../store/store.js"
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

let allInf = store.getState()
let navBar = allInf.navbar
let nav = navBar.mainPageNavbarItems
let logo =navBar.logo

////////////// start insert DOMS html//////////////////
document.body.insertAdjacentHTML('afterbegin', `
<header>
${firstNavBar(nav,logo,"index.html")}
${secondNavbar()}
</header>
<div class="header-bg"></div>
<main>
<div class="welcome-note h1 text-light text-center pt-5">
${allInf.welcomeNote.title}
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
 ${companys(allInf.companys.imageSrc)}
 <footer>
        ${footerFirstUl()}      
        ${footerSecondUl()}
        </footer> 
 </div>
`)
topSellerSlider.insertAdjacentHTML('afterbegin', `
${slider(allInf.topSellersSection)}
`)
newProductsSlider.insertAdjacentHTML('afterbegin', `
${slider(allInf.newProductsSection)}
`)
////////////// finish insert DOMS html//////////////////

