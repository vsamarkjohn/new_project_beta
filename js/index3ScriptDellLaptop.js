console.log('connected to index3ScriptDellLaptop');
let LaptopDellProduct = [
{
                    id: 1,
                    laptopBrand: 'HP Laptop Brand',
                    foto:'img/New Image/Picture Container/HP EliteBook 8470P.PNG',
                    name: 'HP EliteBook 8470P',
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
                    laptopBrand: 'Dell Laptop Brand',
                    foto: 'img/New Image/Picture Container/DELL XPS 13 L322X.PNG', 
                    name: 'Apple Macbook Air',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/',
},
                    {
                    id: 3,
                    laptopBrand: 'Dell Laptop Brand',
                    foto: 'img/New Image/Picture Container/Lenovo T410.PNG',
                    name: 'Lenovo T410<',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/',
},                  {
                    id: 4,
                    laptopBrand: 'Dell Laptop Brand',
                    foto:'img/New Image/Picture Container/Apple Macbook Air (2020).PNG',
                    name: 'DELL XPS 13 L322X ',
                    processor: '2,6‑GHz 6‑core Intel Core i7, Turbo Boost',
                    memory: '16GB RAM',
                    storage: '512 GB SSD',
                    display:'16 inch scherm',
                    graphics: 'AMD Radeon Pro 5300M',
                    resolution:  '2048x1280(WXGA Wide)',
                    linkLaptop: 'https://www.apple.com/benl/macbook-pro-16/specs/',
}
];

function doChangeCar(laptopBrand2){
   for (i = 0; i < laptopBrand2.length; i++) {
        (function (i) {
          var div = document.createElement('div');
          div.setAttribute('class', 'cardverandering');
          div.innerHTML = `
<!-- Card Narrower -->
<div class="card card-cascade wider flex-fill">
<!-- Card image -->
<div class="view view-cascade overlay">
  <img class="card-img-top" src="${LaptopDellProduct[i].foto}"
    alt="Card image cap">
  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>
<!-- Card content -->
<div class="card-body card-body-cascade">
<!-- Label -->
<h6 class="pink-text pb-2 pt-1"><i class="fas fa-laptop"></i> ${LaptopDellProduct[i].laptopBrand}</h6>
<!-- Title -->
<h5 class="font-weight-bold card-title">${LaptopDellProduct[i].name}</h5>
<!-- Text -->
<p class="card-text">
  <ul>
    <li>
    <h6 class="card-text">${LaptopDellProduct[i].processor}</h6>
    </li>
    <li>
    <h6 class="card-text">${LaptopDellProduct[i].memory}</h6>
    </li>
    <li>
    <p class="card-text">${LaptopDellProduct[i].display}</p>
    </li>
    <li>
    <p class="card-text">${LaptopDellProduct[i].storage}</p>
    </li>
    <li>
    <p class="card-text">${LaptopDellProduct[i].graphics}</p>
    </li>
    <li>
    <p class="card-text">${LaptopDellProduct[i].resolution}</p>
    </li>
  </ul>
</p>
<!-- Button -->
<a class="btn btn-info" onclick="${LaptopDellProduct[i].linkLaptop}">Button</a>

</div>
</div>
 `;
document.getElementById('slides4').appendChild(div);
})(i);
       }
}
doChangeCar(LaptopDellProduct);

var slideDell = document.querySelectorAll('#slides4 .cardverandering');
var slideCurrentDell = 0;
var slideInterval3 = setInterval(nextslideDell, 5000);

function nextslideDell() {
      slideDell[slideCurrentDell].className = 'cardverandering';
      slideCurrentDell = (slideCurrentDell + 1) % slideDell.length;
      slideDell[slideCurrentDell].className = 'cardverandering cardShowing';
}

