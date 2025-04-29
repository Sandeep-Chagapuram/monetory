let menu = document.getElementById("menu")
let menubar= document.getElementById('menubar')
opened = false
menu.addEventListener('click',()=>{
    if(!opened){
        menu.classList.remove('fa-bars')
        menu.classList.add("fa-xmark")
        menubar.classList.remove("hidden")
        opened = true
    }
    else{
        menu.classList.remove('fa-xmark')
        menu.classList.add("fa-bars")
        menubar.classList.add("hidden")
        opened = false
    }
})