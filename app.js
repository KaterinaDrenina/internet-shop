const categories = ['Mobile phones', 'TV', 'Laptops and computers', 'Home appliances', 'Garden items']

const products = [
    {
        id: '999',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364824466.jpg',
        name: 'Apple iPhone 15 Pro 128GB Black Titanium (MTUV3RX/A)',
        description: 'Stunning',
        category: 'Mobile phones',
        info: '12 megapixel camera / Aperture ƒ/1.9 / Autofocus with Focus Pixels / Retina Flash / Photonic Engine / Deep Synthesis / Smart HDR 5 / Next-generation portraits with focus and depth control / Portrait lighting with six effects / Animoji and Memoji / Night mode / Photo styles / Apple ProRAW / Wide color capture for photos and Live Photos / Lens Correction / Auto Image Stabilization / Burst mode / 4K video recording at 24 fps./s, 25 fps, 30 fps or 60 fps./s / Record 1080p HD video at 25, 30, or 60 frames per second / Cinematic mode up to 4K HDR at 30 fps / Record HDRvideo recording with Dolby Vision up to 4K at 60fps / ProRes video recording up to 4K at 60fps with external recording / Video recording log / Academy color coding system / Slow motion video support for 1080p at 120fps / Frame-by-frame video with stabilization / Night mode / Slow motion / QuickTake video / Cinematic video stabilization (4K, 1080p and 720p)'
    },
    {
        id: '1000',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364834187.jpg',
        name: 'Apple iPhone 15 Pro Max 256GB Black Titanium',
        description: 'Very good',
        category: 'Mobile phones',
        info: '12 megapixel camera / Aperture ƒ/1.9 / Autofocus with Focus Pixels / Retina Flash / Photonic Engine / Deep Synthesis / Smart HDR 5 / Next-generation portraits with focus and depth control / Portrait lighting with six effects / Animoji and Memoji / Night mode / Photo styles / Apple ProRAW / Wide color capture for photos and Live Photos / Lens Correction / Auto Image Stabilization / Burst mode / 4K video recording at 24 fps./s, 25 fps, 30 fps or 60 fps./s / Record 1080p HD video at 25, 30, or 60 frames per second / Cinematic mode up to 4K HDR at 30 fps / Record HDRvideo recording with Dolby Vision up to 4K at 60fps / ProRes video recording up to 4K at 60fps with external recording / Video recording log / Academy color coding system / Slow motion video support for 1080p at 120fps / Frame-by-frame video with stabilization / Night mode / Slow motion / QuickTake video / Cinematic video stabilization (4K, 1080p and 720p)'
    },
    {
        id: '1001',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/388497296.jpg',
        name: 'LG 43UR78006LK',
        description: 'Excellent',
        category: 'TV',
        info: 'Platform WebOS, Digital tuner bands, DVB-C, DVB-S2, DVB-T2, Panel scan frequency, 60 Hz'
    },
    {
        id: '1002',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364929632.jpg',
        name: 'Samsung QE55Q60CAUXUA',
        description: 'Very good',
        category: 'TV',
        info: 'One Billion Color, Quantum HDR, Supreme UHD Dimming, Motion Xcelerator, Brigtness Detection, Filmmaker Mode'
    },
    {
        id: '1003',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/345836846.jpg',
        name: 'LDell Inspiron 3525 (I35716S3NIW-25B) Silver / AMD Ryzen 7 5700U / RAM 16 ГБ / SSD 512 ГБ / Windows 11 Home',
        description: 'Affordable',
        category: 'Laptops and computers',
        info: 'Screen 15.6" WVA (1920x1080) Full HD 120 Hz, matte / AMD Ryzen 7 5700U (1.8 - 4.3 GHz) / RAM 16 GB / SSD 512 GB / AMD Radeon Graphics / without OD / Wi-Fi / Bluetooth / webcam / Windows 11 Home / 1.68 kg / scintillating'
    },
    {
        id: '1004',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg',
        name: 'Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',
        description: 'Light and powerfull',
        category: 'Laptops and computers',
        info: 'HD FaceTime 720p camera, True Tone technology, PCIe SSD drive, Touch ID, Stereo speakers, Wide stereo sound, Supports playback of content in Dolby Atmos format, System of three directional microphones, Magic Keyboard with backlit keyboard, Ambient light sensor, Force Touch trackpad'
    },
    {
        id: '1005',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/286602037.jpg',
        name: 'WHIRLPOOL WRBSB 6228 B UA',
        description: 'Very good',
        category: 'Home appliances',
        info: 'Mixed fabrics, White things, Cotton, Eco cotton, Sports, Down duvet, Spin & Drain, Rinse & Spin, Fast 30 min, Colors 15° and more,  Wool, Delicate, Synthetics'
    },
    {
        id: '1006',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/359825407.jpg',
        name: 'SAMSUNG RB33J3200SA/UA',
        description: 'Insane',
        category: 'Home appliances',
        info: 'Space Max technology, Multi Flow (Multi-flow system), Super freezing mode, Volt Control voltage surge protection system, Open door alarm system'
    },
    {
        id: '1007',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/263295073.jpg',
        name: 'Karcher K 3 HOME (1.601-821.0)',
        description: 'Very good',
        category: 'Garden items',
        info: 'Voltage: 220 - 240 V, Area capacity: 25 m²/h, 12 months additional warranty if registered on the official Karcher website within one month'
    }
];

const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');

showProducts(categories[0]);

function showProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProductList(filteredProducts);
}

function displayProductList(products) {
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
          <img src="${product.image}" width="100">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
        productItem.addEventListener('click', () => showProductInfo(product));
        productList.appendChild(productItem);
    });
}

function showProductInfo(product) {
    productList.innerHTML = ''; 
    const productDetails = document.createElement('div');
    productDetails.innerHTML = `
      <img src="${product.image}" width="200">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>${product.info}</p>
      <button onclick="buyProduct('${product.name}')">Buy</button>
    `;
    productList.appendChild(productDetails);
}

function buyProduct() {
    alert(`Product purchased!`);
    showCategories();
}

function showCategories() {
    productList.innerHTML = ''; 
}
