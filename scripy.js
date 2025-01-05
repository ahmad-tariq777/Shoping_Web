//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
// JavaScript to add visibility class when scrolling
window.addEventListener('scroll', function () {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(function (category) {
        const categoryTop = category.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (categoryTop < windowHeight - 100) { // Items will appear before they fully enter the viewport
            category.classList.add('visible');
        }
    });
});

// Initial call to handle visibility on page load
window.dispatchEvent(new Event('scroll'));
// JavaScript to add visibility class when scrolling
window.addEventListener('scroll', function () {
    const products = document.querySelectorAll('.product-item');
    products.forEach(function (product) {
        const productTop = product.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (productTop < windowHeight - 100) { // Items will appear before they fully enter the viewport
            product.classList.add('visible');
        }
    });
});

// Initial call to handle visibility on page load
window.dispatchEvent(new Event('scroll'));
// JavaScript to add visibility class when scrolling
window.addEventListener('scroll', function () {
    const saleItems = document.querySelectorAll('.sale-item');
    saleItems.forEach(function (item) {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight - 100) { // Items will appear before they fully enter the viewport
            item.classList.add('visible');
        }
    });
});

// Initial call to handle visibility on page load
window.dispatchEvent(new Event('scroll'));
