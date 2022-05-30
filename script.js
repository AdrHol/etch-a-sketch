let initialValue = 100;
const radioValues = document.querySelectorAll('input[name=size]');
let pixelSize = initialValue;
let pixel = document.querySelectorAll('.pixel');
let color = document.querySelector('#color');
let mode = 0;

const modeButton = document.querySelectorAll('.mode');

modeButton.forEach(function(button){
button.addEventListener('click', function(){
    mode = Number(button.value);
})
})


// event listener for chosing size value and setting new canvas
for (let i = 0; i < 4; i++) {
radioValues[i].addEventListener('click', function(e){
    initialValue = Number((e.target.value));
    pixelSize = initialValue;

    if (document.querySelectorAll('.pixel').length > 0) {
        const existingPixel = document.querySelectorAll('.pixel')

        for(let i = 0; i < existingPixel.length;i++){
        existingPixel[i].remove();
        }
    }

    for (let i = 0; i < pixelSize; i++){
        let container = document.querySelector('.container');
        let pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        
        if (pixelSize == 400) {
            pixel.style.height = "25px";
            pixel.style.width = "25px";
        }
        
        if (pixelSize == 1600) {
            pixel.style.height = "12.5px";
            pixel.style.width = "12.5px";
        }
        
        if (pixelSize == 4096) {
            pixel.style.height = "7.8125px";
            pixel.style.width = "7.8125px";
        }
        container.appendChild(pixel);
        }
        pixel = document.querySelectorAll('.pixel');
})
    
}

radioValues[0].click();

// painting script 

const touchpad = document.querySelector('.container');

function showup(pix){
    if (pix.type == 'mouseout'){

        if (mode == 2){
            ;
        } else if (mode == 1){
            pix.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*100+150)}, ${Math.floor(Math.random()*100+150)}, ${Math.floor(Math.random()*100+150)})`;
        } else {
            pix.target.style.backgroundColor = `${color.value}`;
        }
 
    }
 }

touchpad.addEventListener('mousedown',function(){
    console.log('down');
    for(let i = 0; i < pixel.length;i++){
        pixel[i].addEventListener('mouseout', showup,true)
    }
    ;
}, true);

touchpad.addEventListener('mouseup',function(){
    for(let i = 0; i < pixel.length;i++){
    pixel[i].removeEventListener('mouseout',showup,true)
};
}, true);

// Clearing canvas 

const clear = document.querySelector('#clear');

function clearing() {
    for(let i = 0; i < pixel.length;i++) {
        pixel[i].style.backgroundColor = "white";
    }
}

clear.addEventListener('click', clearing);


function rand (){
    console.log();
}