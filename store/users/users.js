let users = [
       {
              fname:'سجاد  ',
              lastName:'معینی',
              username:'sajjad-rad',
              password:'12345678',
              email:'sajjadmoeini97@gmail.com'
}
]

const userReducer =(state=users,action) =>{
       switch(action.type){
              default: return state
       }
}

export default userReducer