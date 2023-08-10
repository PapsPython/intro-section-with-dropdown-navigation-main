document.addEventListener("click",function (e){
    if (e.target.id === "menuicon"){  
        openMenu()
    }
    else if(e.target.id == "closedamenubtn"){
        closeMenu()
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


function removeDropDownList(){
   this.nextElementSibling.classList.remove("visible")
   this.querySelector(".dropdownicon").innerHTML=`<img src="images/icon-arrow-down.svg">`
}   

function showDropDownList(){
    this.nextElementSibling.classList.add("visible")
    this.querySelector(".dropdownicon").innerHTML=`<img src="images/icon-arrow-up.svg">`
}

const descriptionTitles = document.querySelectorAll(".dropdown")
descriptionTitles.forEach(descriptionTitle => descriptionTitle.addEventListener("mouseleave", removeDropDownList)
)

descriptionTitles.forEach(descriptionTitle => descriptionTitle.addEventListener("mouseenter", showDropDownList)
)
