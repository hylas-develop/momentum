const title = document.querySelector("#title");
title.innerText = "Hi From JS!";
// title.style.color = "red";

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

const CLICKED_CLASS = "clicked";

function init(){
    title.style.color = BASE_COLOR;
    
}

title.addEventListener("click",handleClick);

function handleClick(){
    // const currentClass = title.className;
    // if(currentClass !== CLICKED_CLASS){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
title.classList.toggle(CLICKED_CLASS);

}