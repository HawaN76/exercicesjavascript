function zoom(zoomType) {

var imageWidth= document.getElementById('imgalain').clientWidth;
if (zoomType =='plus'){
    document.getElementById('imgalain').style.width=(imageWidth + 20)+"px";   
}
if (zoomType == 'moins'){
    document.getElementById('imgalain').style.width=(imageWidth - 20)+"px"; 
}
}