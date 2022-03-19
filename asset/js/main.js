$(document).ready(function(){
    // tìm tất cả li có sub-item và thêm vào 
    $('.sub-item').parent('li').addClass('has-child');
});

$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility","hidden");
    });
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility","visible");
    });
});

// slideshow
var i=0;
var images1=[];
var time = 10000;
// list hình ảnh
images1[0] = './asset/image/slide1.jpg';
images1[1] = './asset/image/slide2.jpg';
images1[2] = './asset/image/slide3.jpg';
// thay đổi hình ảnh
function changeImage(){
    document.slides.src = images1[i];
    if(i<images1.length-1){
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
// phần sản phẩm mới
let sanphammoi_slider = tns({
    container : ".sanphammoi-my-slider", // đưa class my-slide vào trong container của thư viện trên
    "slideBy" : 1, // mỗi lần chuyển là 1 slide
    "speed"   : 600,
    "nav"     : false,
    controlsContainer : "#sanphammoi-controls",
    prevButton : ".sanphammoi-previous",
    nextButton : ".sanphammoi-next",
    responsive: {
        1024: {
            items : 5,
            gutter :20
        },
        768: {
            items : 3,
            gutter :20
        },
        480: {
            items : 1,
            gutter :20
        },
    }
})
// phần sản phẩm bán chạy
let banchay_slider = tns({
    container : ".banchay-my-slider", // đưa class my-slide vào trong container của thư viện trên
    "slideBy" : 1, // mỗi lần chuyển là 1 slide
    "speed"   : 600,
    "nav"     : false,
    controlsContainer : "#banchay-controls",
    prevButton : ".banchay-previous",
    nextButton : ".banchay-next",
    responsive: {
        1024: {
            items : 5,
            gutter :20
        },
        768: {
            items : 3,
            gutter :20
        },
        480: {
            items : 1,
            gutter :20
        },
    }
})
///
let container_sphot = tns({
    container : ".sanphamhot-slide", // đưa class my-slide vào trong container của thư viện trên
    "slideBy" : 1, // mỗi lần chuyển là 1 slide
    "nav":false,
    "speed"   : 600,
    
    controlsContainer : "#sanphamhot-controls",
    prevButton : ".sanphamhot-previous",
    nextButton : ".sanphamhot-next",
    responsive: {
        1024: {
            items : 1,
            gutter:00
        }
    }
    
})
let sanphamhot_content = tns({
    container : ".sanphamhot-slide1", // đưa class my-slide vào trong container của thư viện trên
    "slideBy" : 1, // mỗi lần chuyển là 1 slide
    "nav":false,
    "speed"   : 600,
    
    controlsContainer : "#sanphamhot-controls",
    prevButton : ".sanphamhot-previous",
    nextButton : ".sanphamhot-next",
    responsive: {
        1024: {
            items : 1
        }
    }
    
})

// phần phong cách
function changeColor() {
    var result = document.getElementById("ok1");
    result.style.color=result.style.color == "red" ? "black" : "red";
    var result = document.getElementById("ok2");
    result.style.color=result.style.color == "black" ? "red" : "black";
}
var img = document.getElementById('img');
var images = ['./asset/image/phongcach1.jpg','./asset/image/phongcach2.jpg'];
var x=0;
function phongcach(){
    if(x<images.length)
    {
        x=x+1;
    }
    else
    {
        x=1;
    }
    img.innerHTML = "<img src="+images[x-1]+">";
}
setInterval(phongcach, 6000);
setInterval(changeColor, 6000);