const link = document.querySelectorAll(".link");
let currentValue = 1;

const activeLink = ()=>{
    link.forEach((item) => {
         item.classList.remove("active");
    })
    event.target.classList.add("active");
    currentValue = event.target.value;
    console.log(currentValue)
}
const nextBtn = ()=>{
   if(currentValue < 7) {
    link.forEach((item) => {
        item.classList.remove("active");
   })
   currentValue +=1;
    link[currentValue-1].classList.add("active")}
}
const prevBtn = ()=>{
    if(currentValue > 1) {
     link.forEach((item) => {
         item.classList.remove("active");
    })
    currentValue -=1;
    link[currentValue-1].classList.add("active")}
 }