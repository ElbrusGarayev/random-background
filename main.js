var colors = ["red" , "blue" , "yellow","green","purple","orange","brown"]





// console.log(color)
function changeColor(color) { 
    document.body.style.background = color; 
} 
  
function gfg_Run() { 
    var a = Math.floor(Math.random()*colors.length)
    var color = colors[a]
    changeColor(color); 
}  