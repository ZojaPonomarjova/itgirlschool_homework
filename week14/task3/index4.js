let offset = 0;
const sliderLine = document.getElementById('slider-line');

document.getElementById('previous').onclick = function(){
    offset+=400;
    if(offset > 0){
        offset = -2000
    }
    sliderLine.style.left = offset + 'px';
}

document.getElementById('next').onclick = function(){
    offset-=400;
    if(offset < -2000){
        offset = 0
    }
    sliderLine.style.left = offset + 'px';
}