console.log('connected to index3script');
// import { laptopHPProduct } from "./index3ScriptHpLaptop.js";
let laptopAppleProduct = [
{
                    id: 1,
                    laptopBrand: 'Apple Laptop Brand',
                    foto:'img/New Image/Picture Container/HP EliteBook 8470P.PNG',
                    name: 'MacBook Pro',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/',
},
                    {
                    id: 2,
                    laptopBrand: 'Apple Laptop Brand',
                    foto:'img/New Image/Picture Container/Lenovo T410.PNG',
                    name: 'MacBook Air',
                    processor: '1,1‑GHz dual‑core Intel Core i3, Turbo Boost',
                    memory: '8 GB 3733‑MHz LPDDR4X',
                    storage: '256 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'Intel Iris Plus Graphics',
                    resolution: '1680x1050 Retina‑display',
                    linkLaptop: 'https://www.apple.com/benl/macbook-air/specs/',
}];

function doChangeCar(laptopBrand){
   for (i = 0; i < laptopBrand.length; i++) {
        (function (i) {
          var div = document.createElement('div');
          div.setAttribute('class', 'cardverandering');
          div.innerHTML = `
<!-- Card Narrower -->
<div class="card card-cascade wider flex-fill">
<!-- Card image -->
<div class="view view-cascade overlay">
  <img class="card-img-top" src="${laptopAppleProduct[i].foto}"
    alt="Card image cap">
  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>
<!-- Card content -->
<div class="card-body card-body-cascade">
<!-- Label -->
  <h6 class="pink-text pb-2 pt-1"><i class="fas fa-laptop"></i> ${laptopAppleProduct[i].laptopBrand}</h6>
  <!-- Title -->
  <h5 class="font-weight-bold card-title">${laptopAppleProduct[i].name}</h5>
  <!-- Text -->
  <p class="card-text">
    <ul>
      <li>
      <h6 class="card-text">${laptopAppleProduct[i].processor}</h6>
      </li>
      <li>
      <h6 class="card-text">${laptopAppleProduct[i].memory}</h6>
      </li>
      <li>
      <p class="card-text">${laptopAppleProduct[i].display}</p>
      </li>
      <li>
      <p class="card-text">${laptopAppleProduct[i].storage}</p>
      </li>
      <li>
      <p class="card-text">${laptopAppleProduct[i].graphics}</p>
      </li>
      <li>
      <p class="card-text">${laptopAppleProduct[i].resolution}</p>
      </li>
    </ul>
</p>
  <!-- Button -->
  <a class="btn btn-info" onclick="${laptopAppleProduct[i].linkLaptop}">Button</a>

</div>
</div>
 `;
document.getElementById('slidesForApple').appendChild(div);
})(i);
       }
}
doChangeCar(laptopAppleProduct);

var slidesForApple = document.querySelectorAll('#slidesForApple .cardverandering');
var currentSlideApple = 0;
var slideIntervalApple = setInterval(nextSlide, 5000);

    function nextSlide() {
      slidesForApple[currentSlideApple].className = 'cardverandering';
      currentSlideApple = (currentSlideApple + 1) % slidesForApple.length;
      slidesForApple[currentSlideApple].className = 'cardverandering cardShowing';
}
