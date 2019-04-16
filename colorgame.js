var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var numSqaures =6;
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");
init();
function init ()
{
    for (var i =0; i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSqaures =3 : numSqaures=6;
    reset();
        });
    }
}

function reset()
{
    colors = generateRandomColors(numSqaures);

    // pick a new random color from array 
    pickedColor = pickColor();
    // change colors of squares 
    // change display to match picked color 
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent = "";
    for(var i=0;i<squares.length;i++)
{   // add initial colors to squares
    if(colors[i])
    {
        squares[i].style.display ="block";
        squares[i].style.backgroundColor=colors[i];
    }
    else{
squares[i].style.display ="none";
    }
   
      
}
h1.style.backgroundColor ="steelblue";
}
// easyBtn.addEventListener("click", function()
// {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSqaures=3;
//     colors = generateRandomColors(numSqaures);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i =0; i<squares.length ;i++)
//     {
//         if(colors[i])
//         {
//             squares[i].style.backgroundColor = colors[i]
//         }
//         else{
//             squares[i].style.display ="none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function()
// {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSqaures=6;
//     colors = generateRandomColors(numSqaures);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i =0; i<squares.length ;i++)
//     {   squares[i].style.backgroundColor = colors[i]
//         squares[i].style.display ="block";
      
//     }
// });
resetButton.addEventListener("click",function()
{
   reset();
})
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{   // add initial colors to squares
    squares[i].style.backgroundColor =colors[i];
    // add click losterners to squares 
    squares[i].addEventListener("click",function()
    {
        // grab color of clikced square 
       var clickedColor= this.style.backgroundColor;
       if(clickedColor === pickedColor)
    {
        messageDisplay.textContent ="Correct!";
        chnageColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent="Play Again?";
    }
    else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent ="Try Again";
    }
    })
    
}
function chnageColors(color)
{
    for(var i =0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor =color;
    }
}
function pickColor()
{
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}
function generateRandomColors(num)
{
 // make an array 
 // add num random colors to arr
 // return that array 
 var arr =[];
 for(var i=0;i<num;i++)
    { 
     arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    // pick a "red from 0-255"
    var r = Math.floor(Math.random()*256);
     // pick a "green from 0-255"
     var g = Math.floor(Math.random()*256);
      // pick a "blue from 0-255"
      var b = Math.floor(Math.random()*256);
return "rgb(" + r + ", " +g+ ", " +b +")";
}