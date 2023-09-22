let suggestionSection = {
       imageSrc: [
              'pics/bg/young-girl-holding-arms-folded-t-shirt-jeans-looking-pleased-front-view_176474-58779.avif',
              'pics/bg/young-man-posing-gray-background-coat_561613-39.avif',
              'pics/bg/woman-dressed-casually-sweater-smiling-joyfully_941493-945.jpg'
       ],
       title: [
              'محصولات محبوب',
              'محصولات مردانه',
              'محصولات زنانه'
       ],
       subTitle: [
              'تا 40% تخفیف ویژه',
              'تا 55% تخفیف ویژه',
              'تا 60% تخفیف ویژه'
       ],
}



const suggestionSectionReducer = (state=suggestionSection,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default suggestionSectionReducer