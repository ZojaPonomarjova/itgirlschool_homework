const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

for(let btn of tabsHandlerElems){
    btn.addEventListener('click', () =>{
        tabsHandlerElems.forEach(item => {item.classList.remove("aside__button-active");
    });
        btn.classList.add("aside__button-active")
        

        tabsContentElems.forEach(content=>{
            if(content.dataset.tabsField === btn.dataset.tabsHandler){
                content.classList.remove("hidden");
            }else{
                content.classList.add("hidden");

            }
        });
    });
}




