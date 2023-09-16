import allInformations from "../../pages/informations.js"
let nav = allInformations.mainNavbar


function firstNavBar() {
       let navbarContainer = document.createElement('section')
       let firstNav = document.createElement('nav')
       firstNav.className = 'navbar navbar-expand-lg main-nav'

       let navbarItems = nav.mainPageNavbarItems.map(item => {
              if (item.title == document.title) {
                     return (
                            `
              <li class="nav-item mx-3">
              <a class="nav-link active" href=${item.href}>
                     ${item.title}
              </a>
                  </li>
              `
                     )
              }
              return (
                     `
             <li class="nav-item mx-3">
             <a class="nav-link " href=${item.href}>
                    ${item.title}
             </a>
                 </li>
             `
              )
       })

       firstNav.innerHTML = `
       <div class="container-fluid">
       <a class="navbar-brand" href="index.html">
              ${nav.logo.title}
       </a>
       <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent">
              <i class="fa fa-bars fs-1"></i>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       ${navbarItems.join('')}
       </ul><br>

       </div>
</div>
       `
       navbarContainer.append(firstNav)
       return navbarContainer.innerHTML
}


export default firstNavBar