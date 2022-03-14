$(document).ready(function(){
    // tìm tất cả li có sub-item và thêm vào 
    $('.sub-item').parent('li').addClass('has-child');
});
//chưa đc
var i=0;
var images=[];
var time = 10000;
// list hình ảnh
images[0] = './asset/image/slide1.jpg';
images[1] = './asset/image/slide2.jpg';
images[2] = './asset/image/slide3.jpg';
// thay đổi hình ảnh
function changeImage(){
    document.slides.src = images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout('changeImage()',time);
}
window.onload=changeImage;


//////
$(document).ready(function(){
    $('#toggle').click(function(){
        $('.bosuutap').slideToggle();
    });
})