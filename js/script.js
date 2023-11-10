
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
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRCHq5sfoZSceeJhBJOlt2YPx6umIaxsHFPTXSMIgqR86RwMXerY7Z4rPL_cKgtf-KH&psig=AOvVaw3O58JuLQQt_sIBVbZApSDp&ust=1698932895555000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjCoLr4ooIDFQAAAAAdAAAAABAh',
            category: 'indian',
            title: 'Mumbai'
        },
        {
            url: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRnSNGlIS6nGciXgK6CTsoffGoySTXHphacLdhb9h4o3BAAUQnusTZ40XD1ELqloNqP',
            category: 'indian',
            title: 'Bengaluru'
        },

        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQPayAFx9Lw3QRFGGzqOaMHSlZEqtuKLgDm2Byi9G8VyrC29uzw9kMut2kXx47fMf0e&psig=AOvVaw3O58JuLQQt_sIBVbZApSDp&ust=1698932895555000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjCoLr4ooIDFQAAAAAdAAAAABA9',
            category: 'indian',
            title: 'Jaipur'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTUB5A2iYC8oAPbLdUYjBZrIU5V3E9O0IBZVQaP2QpZBW5R5r-vgwxDiN0qEc9SliUC&psig=AOvVaw3O58JuLQQt_sIBVbZApSDp&ust=1698932895555000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjCoLr4ooIDFQAAAAAdAAAAABBb',
            category: 'indian',
            title: 'Hyderabad'
        },
        {
            url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQrCDCNAAaQK_s3U3nSB-YsR599ZmxudNoiDQBlzAO1TW-W4BWFczkEX_Eq1MrUFdju',
            category: 'uae',
            title: 'Abu Dhabi'
        },
        {
            url: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTnavcE0R1cW9vbZSJU9A_92W41dYEqmnQRVz51osw9lq-dYLXMRz2uqIIL1LrWzvQN',
            category: 'uae',
            title: 'Dubai'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSp62RfsFVsdDCFiGIap-QKUb18tNtRvEAmzquSFwzLv3djKCdJaXI-UY98qjvaxGFZ&psig=AOvVaw3MHKc4xJwn9X92Gd_ajLxd&ust=1698931087891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDIra30ooIDFQAAAAAdAAAAABAM',
            category: 'uae',
            title: 'Ajman'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcToUOg0f3oa39huiK_Pp4gsel2IqZVPVaUeQkAG1TTOueVBlK2qzUE6O_gdNBAaJL9u&psig=AOvVaw3MHKc4xJwn9X92Gd_ajLxd&ust=1698931087891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDIra30ooIDFQAAAAAdAAAAABAQ',
            category: 'uae',
            title: 'Ras Al-Khaimah'
        }, {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTSc852O_G-mNQCji1Zk8qpoyT9Rp9NlepS24aWFWa76fv2FGfuy9GB6bEvdKvO6EVO&psig=AOvVaw3MHKc4xJwn9X92Gd_ajLxd&ust=1698931087891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDIra30ooIDFQAAAAAdAAAAABAU',
            category: 'uae',
            title: 'Sharjah'
        }, {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRc2vVLxRt1zfPyuDgylOIyZWzfwHmwJSMr087seDgWLN1wLGDpWuujIKgmo9KioaAf&psig=AOvVaw2zO8M7mimhAQo2s-3j1ybi&ust=1698935573770000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNibjq-Co4IDFQAAAAAdAAAAABAX',
            category: 'singapore',
            title: 'Garden by the Bay'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRc9LhzWqCT6zhU7r2COIf-fRK_A1gRYeMGG1cecsywAM6llg7mFZ447FtsUwOpc1om&psig=AOvVaw2zO8M7mimhAQo2s-3j1ybi&ust=1698935573770000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNibjq-Co4IDFQAAAAAdAAAAABAQ',
            category: 'singapore',
            title: 'Singapore Flyer'
        }, {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSExE8swFtui2JBmujqiDqA9CFwZ3G7g34As7emtp7WaJR31T-3n_lSKdEUQu_swmD8&psig=AOvVaw2zO8M7mimhAQo2s-3j1ybi&ust=1698935573770000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNibjq-Co4IDFQAAAAAdAAAAABAg',
            category: 'singapore',
            title: 'Chinatown'
        }, {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSq7cH4eYxOjG0EuO5SOYOyR6diCCdn5GJ7p21j8ZBbvd3vtu_2EatOsukOP6XRkBcy&psig=AOvVaw2zO8M7mimhAQo2s-3j1ybi&ust=1698935573770000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNibjq-Co4IDFQAAAAAdAAAAABAk',
            category: 'singapore',
            title: 'Singapore Zoo'
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1920px-London_Skyline_%28125508655%29.jpeg',
            category: 'uk',
            title: 'London'
        },
        {
            url: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSdac0aJ2r_pf8uHHlggtMxaZ3dLcIskpSFdgVEKzn5y3Uek5t-Btjp9TKI7-IbfDJu',
            category: 'uk',
            title: 'Liverpool'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcR7W59LgKUwu5V9dzgMxjscJ3WbO8_PdXWuxBBajfo7r1z8MdWchQQhUiioSxuLp4hS&psig=AOvVaw1DwZ5do8zsi6M6o47kFDRs&ust=1698936418393000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODl2MGFo4IDFQAAAAAdAAAAABAI',
            category: 'uk',
            title: 'Birmingham'
        },
        {
            url: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT7NdFrWA1QoMPCzuguc4xhhtpU3EMvVg-pXJYZ-BfQnI2o6o9yNjHOb5OnRjo4uoyq',
            category: 'uk',
            title: 'Manchester'
        },
        {
            url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSgbZKsOaKZ7PIILSRuI2ITOFldZQ_QaA5Q0o5UfZWfKQ6q0BgvSroxhsMRTTljDqYq&psig=AOvVaw3149i6V-4ey1iT2VZUYVfS&ust=1698937056933000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIijt_GHo4IDFQAAAAAdAAAAABAE',
            category: 'ksa',
            title: 'Dammam'
        },
        {
            url: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRcKsoWVDpgVvpMii-qap7G9ekBg8Tzo-YhNmA2uTHwU6c0V1MoKDcPljpoVp0-dDY8',
            category: 'ksa',
            title: 'Kaaba'
        },
        {
            url: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRzP4mzazEJGjIYiC9x9C_qavN7sO3QGq49XtkOBkOmTfY555geG_dD1v_Rz8c6xOWo',
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



