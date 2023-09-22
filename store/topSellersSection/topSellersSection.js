let topSellersSection ={
       title: 'محصولات پرفروش',
       imageSrc: [
              "pics/men/3/713McdX8erL._AC_UX569_.jpg",
              "pics/watches/4/71nPVnCwphL._AC_UX679_.jpg",
              "pics/shoe/5/61A2xE+cQvL._AC_UY695_.jpg",
              "pics/women/7/61QFXtDqWxL._AC_UX569_.jpg",
              "pics/shoe/2/91Vkwz4NfrL._AC_UY695_.jpg",
              "pics/watches/1/71tcPbBhiML._AC_UY741_.jpg"
       ],
       productsTitle: [
              'شلوار مردانه',
              ' ساعت لوکس',
              'بوت زنانه',
              'هودی زنانه',
              'بوت مردانه',
              'ساعت لوکس'
       ],
       prices: [670000, 9850000, 2499000, 700000,3950000,7000000]

}



const topSellersSectionReducer = (state=topSellersSection,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default topSellersSectionReducer