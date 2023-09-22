let category= {
       productCategorys:[
              {value:'men',name:'لباس مردانه'},
              {value:'women',name:'لباس زنانه'},
              {value:'shoes',name:'کفش'},
              {value:'watches',name:'ساعت'},
       ],
       productTypeCategory:[
              {value:'mostSaled',name:'پرفروش ترین'},
              {value:'lowerPrice',name:'پایین ترین قیمت'},
              {value:'highPrice',name:'بالاترین قیمت'},
       ]
}

const categoryReducer = (state=category,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default categoryReducer


