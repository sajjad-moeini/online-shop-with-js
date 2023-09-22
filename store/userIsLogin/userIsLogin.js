let isLogin = false

const isLoginReducer =(state=isLogin,action) =>{
       switch(action.type){
              case 'CHANGEisLOGIN':return !state
 
              default: return state
       }
}

export default isLoginReducer