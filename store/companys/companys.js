let companys={
       imageSrc: [
              "pics/logo/brand.gif"
              , "pics/logo/images.png"
              , "pics/logo/logo3.jpg"
              , "pics/logo/logo-luxury-royal-brand-png_280333.jpg"
              , "pics/logo/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-louis-vuitton-logo-122032219.webp"
              ,],
              sidePageImgSrc:[
                     "../pics/logo/brand.gif"
                     , "../pics/logo/images.png"
                     , "../pics/logo/logo3.jpg"
                     , "../pics/logo/logo-luxury-royal-brand-png_280333.jpg"
                     , "../pics/logo/vector-logos-collection-most-famous-fashion-brands-world-format-available-illustrator-ai-louis-vuitton-logo-122032219.webp"
                     ,],
}

const companysReducer = (state=companys,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default companysReducer


