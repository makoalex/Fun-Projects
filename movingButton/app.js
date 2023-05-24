const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", () => {
  btn.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  btn.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
});
const select = document.querySelector("body");
select.addEventListener("mouseover", () => {
  select.style.backgroundColor = randomRgb();
});
const randomRgb = ()=>{
  const rgba =0.6
    let red = Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255)
    let blue= Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue}, ${rgba})`
}