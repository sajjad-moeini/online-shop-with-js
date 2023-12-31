import store from "../store/store.js"
import firstNavBar from "../Components/Navbar/firstNavbar.js"
import secondNavbar from "../Components/Navbar/secondNavbar.js"
import companys from "../Components/companys/companys.js"
import footerFirstUl from "../Components/footer/firstUl.js"
import footerSecondUl from "../Components/footer/secondUl.js"
let allInfs = store.getState()
let nav = allInfs.navbar.sidePageNavbarItems
let logo = allInfs.navbar.logo


let productsContainer = allInfs.products[0]


function productsLoader(products) {
       return products.map(product => {
              return (`
              <div class="card col-sm-2 col-md-3 col-lg-4 mx-auto  position-relative">
              <img src=../${product.mainImgSrc}
                     class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                     <h5 class="card-title">
                            ${product.name}
                     </h5>
              </div>

              <div class="card-body d-flex-centering w-100  p-0 ">
                     <a href="#" class="card-link position-relative">
                     ${product.price.toLocaleString()} تومان
                         ${product.off ? `
                         <h6 class="position-absolute off-price">
                          ${Math.round((product.price - ((product.price * product.off) / 100))).toLocaleString()
                            } تومان
                          </h6>
                          <div class="position-absolute card-price-linethrough"></div>
                         `: ''} 
                     </a>
                     <a href="product.html?${product.id}" class=" btn btn-primary " > 
                            مشاهده
                     </a>
              </div>
             ${product.off ? (`<div class="position-absolute d-flex-centering bg-danger off-badge">% ${product.off} --</div>`) : ('')
                     } 
       </div>
       
       `)
       })
       
}

document.body.insertAdjacentHTML('afterbegin', `
<header>
${firstNavBar(nav, logo, "../index.html")}
 ${secondNavbar()}
</header>
<main class="row w-100">
<div class="row h-25 px-5">
<form action="#">
       <div class="row">
              <select name="" id="" class="form-control-sm col-md-4 mt-4 mx-auto allCategory">
                     <option value="-1">دسته بندی مورد نظر را انتخاب کنید</option>
                ${allInfs.category.productCategorys.map(category => {
       return (`
                            <option value=${category.value}>${category.name}</option>
                            `)
})
       }
              </select>
              <select name="" id="" class="form-control-sm col-md-4 mt-4 mx-auto allSorting">
                     <option value="-1">
                            مرتب سازی بر اساس ...
                     </option>
                     ${allInfs.category.productTypeCategory.map(category => {
              return (`
                                   <option value=${category.value}>${category.name}</option>
                                   `)
       })
       }

              </select>
       </div>
</form>
</div>
<div class="cards-container row ">
${productsLoader(productsContainer)
       }
</div>
</main>
<div class="footer-container">
${companys(allInfs.companys.sidePageImgSrc)}
<footer>
       ${footerFirstUl()}      
       ${footerSecondUl()}
       </footer> 
</div>
`)
let allCtegorySelectBoxElem = document.querySelector('.allCategory')
let allSortingSelectBoxElem = document.querySelector('.allSorting')

allCtegorySelectBoxElem.addEventListener('change', (e) => {
       categoryChangeHandler(e.target.value, 'category')
       allSortingSelectBoxElem.value = -1
})

allSortingSelectBoxElem.addEventListener('change', (e) => {
       categoryChangeHandler(e.target.value, 'sorting')
})



function categoryChangeHandler(category, action) {
       if (action == 'category') {
              let filtredProducts = allInfs.products[0].filter(product => product.category == category)
              let productsContainerElem = document.querySelector('.cards-container')
              productsContainerElem.innerHTML = ''
              productsContainerElem.innerHTML = `${productsLoader(filtredProducts)}`
       }
       if (action == 'sorting') {
              if (category == 'mostSaled') {
                     //

              }
              if (category == 'lowerPrice') {
                     let prices = productsContainer.map(product => { return product.price }).sort((a, b) => a - b)
                     let filtredProducts = prices.map(price => {
                            return productsContainer.find(item => item.price == price)
                     })
                     let productsContainerElem = document.querySelector('.cards-container')
                     productsContainerElem.innerHTML = ''
                     productsContainerElem.innerHTML = `${productsLoader(filtredProducts)}`
              }
              if (category == 'highPrice') {
                     let prices = productsContainer.map(product => { return product.price }).sort((a, b) => a - b).reverse()
                     let filtredProducts = prices.map(price => {
                            return productsContainer.find(item => item.price == price)
                     })
                     let productsContainerElem = document.querySelector('.cards-container')
                     productsContainerElem.innerHTML = ''
                     productsContainerElem.innerHTML = `${productsLoader(filtredProducts)}`
              }
       }
}



