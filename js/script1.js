const li = document.querySelectorAll("li")
const forms = document.querySelectorAll("form")

li.forEach(el=>{
  el.addEventListener("click", (e)=>{
    li.forEach(el=>{
      el.classList.remove("active");
    })
    e.target.classList.add("active")
    formSwitch()
  })
})

let formSwitch =() =>{
  if(li[0].classList.contains("active")){
    forms[0].classList.add("active")
    forms[1].classList.remove("active")
  }else{
    forms[1].classList.add("active")
    forms[0].classList.remove("active")
  }
}