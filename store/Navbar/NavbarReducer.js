let navbar =  {
       logo: { title: 'آنلاین شاپ' },
       mainPageNavbarItems: [
              { title: 'صفحه اصلی', href: 'index.html' },
              { title: 'محصولات', href: 'pages/products.html' },
              { title: 'محصولات جدید', href: 'pages/newProducts.html' },
              { title: 'پرفروش ترین ها', href: 'pages/mostSaledProducts.html' },
              { title: 'محصولات پرطرفدار', href: 'pages/popularProducts.html' },

       ],
       sidePageNavbarItems: [
              { title: 'صفحه اصلی', href: '../index.html' },
              { title: 'محصولات', href: 'products.html' },
              { title: 'محصولات جدید', href: 'newProducts.html' },
              { title: 'پرفروش ترین ها', href: 'mostSaledProducts.html' },
              { title: 'محصولات پرطرفدار', href: 'popularProducts.html' },

       ],
}



const navbarReducer = (state=navbar,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default navbarReducer