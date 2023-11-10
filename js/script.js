
// *About Page Count Increse* //

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, 50);
});


// slick slider 

$('.trending').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1081,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 981,
            settings: {
                // vertical: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

// Why E-sign Mobile view slider 

$(document).ready(function () {
    $('.why-us').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1000,
        vertical: true,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
    });
});

$(document).ready(function () {
    $('#slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1381,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Your code here

    //   Trending place selector 
    const categories = document.querySelectorAll('.categories li');
    const grid = document.querySelector('.pictures-grid');
    // const initialSelected = document.querySelector('.selected');

    const initialSelected = document.querySelector('.selected');
    let selectedCategory;

    if (initialSelected) {
        selectedCategory = initialSelected.innerText.toLowerCase();
    } else {
        // Handle the case where the initialSelected element is not found or is undefined.
        // You can set a default category in this case.
        selectedCategory = 'defaultCategory';
    }

    const pictures = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'indian',
            title: 'Mumbai'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'indian',
            title: 'Bengaluru'
        },

        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'indian',
            title: 'Jaipur'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'indian',
            title: 'Hyderabad'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uae',
            title: 'Abu Dhabi'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uae',
            title: 'Dubai'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uae',
            title: 'Ajman'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uae',
            title: 'Ras Al-Khaimah'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uae',
            title: 'Sharjah'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'singapore',
            title: 'Garden by the Bay'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'singapore',
            title: 'Singapore Flyer'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'singapore',
            title: 'Chinatown'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'singapore',
            title: 'Singapore Zoo'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uk',
            title: 'London'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uk',
            title: 'Liverpool'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uk',
            title: 'Birmingham'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uk',
            title: 'Manchester'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'ksa',
            title: 'Dammam'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'ksa',
            title: 'Kaaba'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'ksa',
            title: 'Abha'
        },
        // ... other pictures with titles
    ];


    // Render pictures based on category
    const renderPictures = category => {
        pictures.forEach(picture => {
            if (picture.category === category) {
                const imgContainer = document.createElement('div');
                const img = document.createElement('img');
                img.src = picture.url;
                img.srcset = picture.url;

                const title = document.createElement('p');
                title.textContent = picture.title;
                title.classList.add('picture-title'); // Add a class to the <p> element

                imgContainer.appendChild(img);
                imgContainer.appendChild(title);
                grid.appendChild(imgContainer);
            }
        });
    };

    // Initial render
    renderPictures(selectedCategory);
    // Menu & Filter
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Update selected category and add 'selected' class
            selectedCategory = category.innerText.toLowerCase();
            category.classList.add('selected');

            // Re-render pictures
            grid.innerHTML = '';
            renderPictures(selectedCategory);

            // Remove 'selected' class from the others
            categories.forEach(categ => {
                if (categ.innerText.toLowerCase() !== selectedCategory) {
                    categ.classList.remove('selected');
                }
            });
        });
    });

});


var cities = L.layerGroup();

var mLittleton = L.marker([11.244478632266546, 75.96044145404203]).bindPopup('TIGRID Technology').addTo(cities);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});


var baseLayers = {
    'OpenStreetMap': osm,
    'Streets': streets
};

var overlays = {
    'Cities': cities,

};

var satellite = L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });



