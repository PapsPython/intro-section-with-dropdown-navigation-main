document.addEventListener("click",function (e){
    if (e.target.id === "menuicon"){  
        openMenu()
    }
    else if(e.target.id == "closedamenubtn"){
        closeMenu()
    }
    else if(e.target.id == e.target.nextElementSibling.dataset.identifier){
      featureAndCompanyDropDown(e.target.nextElementSibling.dataset.identifier)
    }
    else{
        return
    }
})

const menu = document.getElementById("mobilemenu")

function openMenu(){
menu.style.setProperty("transform","translateX(0px)")

}

function closeMenu(){
    menu.style.setProperty("transform","translateX(400px)")
}

function featureAndCompanyDropDown(header){
  const headerList= document.querySelector(`.${header}list`)
 console.log(headerList.classList)
  headerList.classList.toggle("visible")
  const headerListClassArray = headerList.classList

 document.documentElement.style.setProperty(`--${header}arrowimage`,headerListClassArray.contains("visible")?`url("images/icon-arrow-up.svg")`:`url("images/icon-arrow-down.svg")`)
}
