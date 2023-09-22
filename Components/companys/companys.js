
function companys(srcs) {
       let container = document.createElement('div')
      
     let companysBoxCodes =  srcs.map(image=>{
              return (`
              <img src=${image} class="col-2 col-md-1 rounded-circle mx-auto" alt="b">
              `)
       })

       container.innerHTML =`
       <div class="row companys">
       <div class="row companys-container">
       ${companysBoxCodes.join('')}
       </div>
</div>
       `

       return container.innerHTML
}

export default companys