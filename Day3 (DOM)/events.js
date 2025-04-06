let button=document.querySelector(".item")
button.addEventListener("click",(e)=>{
    // console.log(e.currentTarget)
    // console.log(e.target)
    // console.log(e.bubbles);
    // console.log(e.cancelable);
    console.log(e.detail);
})