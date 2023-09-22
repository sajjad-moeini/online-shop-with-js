let footer= {
       footerFirstUl: {
              titles: [
                     'آنلاین شاپ',
                     'ارتباط با ما',
                     'درباره ما',
              ]
       },
       footerSecondUl: {
              hrefs: [
                     "https://www.instagram.com/thisisajjad",
                     "https://t.me/sajjad_moeini",
                     "https://github.com/sajjad-moeini",
                     "http://sajjadmoeini97@gmail.com/",
                     "https://ir.linkedin.com/in/sajjad-moeini-b89989243"
              ],
              logos: [
                     `fa-instagram`,
                     `fa-telegram`,
                     `fa-github`,
                     `fa-envelope`,
                     `fa-linkedin`,
              ],
              titles: [
                     'اینستاگرام',
                     'تلگرام',
                     'گیت هاب',
                     'جیمیل',
                     'لینکدین',
              ]

       },
}

const footerReducer = (state=footer,action)=>{
       switch(action.type){
              //
default:
       return state

       }
}

export default footerReducer


