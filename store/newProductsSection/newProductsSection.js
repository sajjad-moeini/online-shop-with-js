let newProductsSection= {
       title: 'محصولات جدید',
       imageSrc: [
              "pics/men/5//81NefCoaJ9L._AC_UX569_.jpg",
              "pics/shoe/4/71LsfZbQUSL._AC_SY575._SX._UX._SY._UY_.jpg",
              "pics/shoe/6/61xzxraxx1L._AC_UY695_.jpg",
              "pics/women/2/71vbKFj71HL._AC_UX569_.jpg",
              "pics/women/5/71HwrsrthCL._AC_UX569_.jpg",
              "pics/men/2/61xG1hZqrEL._AC_SY879_.jpg"

       ],
       productsTitle: [
              ' پیراهن مردانه',
              'کفش مردانه',
              'صندل زنانه',
              ' تیشرت زنانه',
              'لباس زنانه',
              'لباس آستین بلند مردانه'
       ],
       prices: [700000, 770000, 950000, 949000,550000,551000]

}

const newProductsSectionReducer = (state=newProductsSection,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default newProductsSectionReducer


