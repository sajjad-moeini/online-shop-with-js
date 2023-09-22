import productReducer from "./products/products.js";
import navbarReducer from "./Navbar/NavbarReducer.js";
import headerBgReducer from "./HeaderBg/HeaderBg.js";
import welComeNoteReducer from "./welcomeNote/welComeNote.js";
import suggestionSectionReducer from "./suggestionSection/suggestionSection.js";
import topSellersSectionReducer from "./topSellersSection/topSellersSection.js";
import storePicReducer from "./storePic/storePic.js";
import newProductsSectionReducer from "./newProductsSection/newProductsSection.js";
import uniqueStyleReducer from "./uniqueStyle/uniqueStyle.js";
import whyUsSectionReducer from "./whyUsSection/whyUsSection.js";
import companysReducer from "./companys/companys.js";
import footerReducer from "./footer/footer.js";
import categoryReducer from "./categories/categories.js";
import firstOffBoxReducer from "./firstOffBox/firstOffBox.js";

let store = Redux.createStore(Redux.combineReducers({
       products: productReducer,
       navbar:navbarReducer,
       firstOffBox : firstOffBoxReducer,
       headerBg:headerBgReducer,
       welcomeNote: welComeNoteReducer,
       suggestionSection: suggestionSectionReducer,
       topSellersSection : topSellersSectionReducer,
       storePic : storePicReducer,
       newProductsSection : newProductsSectionReducer,
       uniqueStyle: uniqueStyleReducer,
       whyUsSection: whyUsSectionReducer,
       companys: companysReducer,
       footer: footerReducer,
       category: categoryReducer

}))

export default store