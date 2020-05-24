console.log('connected to index3ScriptHPLaptop');
let laptopHPProduct = [
{
                    id: 1,
                    laptopBrand: 'HP Laptop Brand',
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
                    laptopBrand: 'HP Laptop Brand',
                    foto: 'img/New Image/Picture Container/Lenovo T410.PNG',
                    name: 'MacBook Pro',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/'
},
                    {
                    id: 3,
                    laptopBrand: 'HP Laptop Brand',
                    foto: 'img/New Image/Picture Container/Apple Macbook Air (2020).PNG',
                    name: 'Lenovo T410<',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/'
},                  {
                    id: 4,
                    laptopBrand: 'HP Laptop Brand',
                    foto:'img/New Image/Picture Container/DELL XPS 13 L322X.PNG',
                    name: 'DELL XPS 13 L322X ',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/'
}
];

function doChangeCar(laptopBrand1){
   for (i = 0; i < laptopBrand1.length; i++) {
        (function (i) {
          var div = document.createElement('div');
          div.setAttribute('class', 'cardverandering');
          div.innerHTML = `
<!-- Card Narrower -->
<div class="card card-cascade wider flex-fill">
<!-- Card image -->
<div class="view view-cascade overlay">
  <img class="card-img-top" src="${laptopHPProduct[i].foto}"
    alt="Card image cap">
  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>
<!-- Card content -->
<div class="card-body card-body-cascade">
<!-- Label -->
<h6 class="pink-text pb-2 pt-1"><i class="fas fa-laptop"></i> ${laptopHPProduct[i].laptopBrand}</h6>
<!-- Title -->
<h5 class="font-weight-bold card-title">${laptopHPProduct[i].name}</h5>
<!-- Text -->
<p class="card-text">
  <ul>
    <li>
    <h6 class="card-text">${laptopHPProduct[i].processor}</h6>
    </li>
    <li>
    <h6 class="card-text">${laptopHPProduct[i].memory}</h6>
    </li>
    <li>
    <p class="card-text">${laptopHPProduct[i].display}</p>
    </li>
    <li>
    <p class="card-text">${laptopHPProduct[i].storage}</p>
    </li>
    <li>
    <p class="card-text">${laptopHPProduct[i].graphics}</p>
    </li>
    <li>
    <p class="card-text">${laptopHPProduct[i].resolution}</p>
    </li>
  </ul>
</p>
<!-- Button -->
<a class="btn btn-info" onclick="${laptopHPProduct[i].linkLaptop}">Button</a>

</div>
</div>
 `;
document.getElementById('slides3').appendChild(div);
})(i);
       }
}
doChangeCar(laptopHPProduct);

var slides2 = document.querySelectorAll('#slides3 .cardverandering');
var currentSlide1 = 0;
var slideInterval2 = setInterval(nextSlide1, 5000);

function nextSlide1() {
      slides2[currentSlide1].className = 'cardverandering';
      currentSlide1 = (currentSlide1 + 1) % slides2.length;
      slides2[currentSlide1].className = 'cardverandering cardShowing';
}

