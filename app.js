const categories = ['Mobile phones', 'TV', 'Laptops and computers', 'Home appliances', 'Garden items']

const products = [
    {
        id: '1',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364824466.jpg',
        name: 'Apple iPhone 15 Pro 128GB Black Titanium',
        description: 'Stunning',
        price: '49 999₴',
        category: 'Mobile phones',
        info: '12 megapixel camera / Aperture ƒ/1.9 / Autofocus with Focus Pixels / Retina Flash / Photonic Engine / Deep Synthesis / Smart HDR 5 / Next-generation portraits with focus and depth control / Portrait lighting with six effects / Animoji and Memoji / Night mode / Photo styles / Apple ProRAW / Wide color capture for photos and Live Photos / Lens Correction / Auto Image Stabilization / Burst mode / 4K video recording at 24 fps./s, 25 fps, 30 fps or 60 fps./s / Record 1080p HD video at 25, 30, or 60 frames per second / Cinematic mode up to 4K HDR at 30 fps / Record HDRvideo recording with Dolby Vision up to 4K at 60fps / ProRes video recording up to 4K at 60fps with external recording / Video recording log / Academy color coding system / Slow motion video support for 1080p at 120fps / Frame-by-frame video with stabilization / Night mode / Slow motion / QuickTake video / Cinematic video stabilization (4K, 1080p and 720p)'
    },
    {
        id: '2',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364834187.jpg',
        name: 'Apple iPhone 15 Pro Max 256GB Black Titanium',
        description: 'Very good',
        price: '59 999₴',
        category: 'Mobile phones',
        info: '12 megapixel camera / Aperture ƒ/1.9 / Autofocus with Focus Pixels / Retina Flash / Photonic Engine / Deep Synthesis / Smart HDR 5 / Next-generation portraits with focus and depth control / Portrait lighting with six effects / Animoji and Memoji / Night mode / Photo styles / Apple ProRAW / Wide color capture for photos and Live Photos / Lens Correction / Auto Image Stabilization / Burst mode / 4K video recording at 24 fps./s, 25 fps, 30 fps or 60 fps./s / Record 1080p HD video at 25, 30, or 60 frames per second / Cinematic mode up to 4K HDR at 30 fps / Record HDRvideo recording with Dolby Vision up to 4K at 60fps / ProRes video recording up to 4K at 60fps with external recording / Video recording log / Academy color coding system / Slow motion video support for 1080p at 120fps / Frame-by-frame video with stabilization / Night mode / Slow motion / QuickTake video / Cinematic video stabilization (4K, 1080p and 720p)'
    },
    {
        id: '3',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364623619.jpg',
        name: 'Apple iPhone 15 128GB Pink',
        description: 'Very good',
        price: '39 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / dual main camera: 48MP + 12MP, front camera: 12MP / 128GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17'
    },
    {
        id: '4',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/364827160.jpg',
        name: 'Apple iPhone 15 Pro 256GB Natural Titanium',
        description: 'Very good',
        price: '54 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / main quad camera: 48MP + 12MP + 12MP + 12MP + 12MP, front camera: 12MP / 256GB of internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17'
    },
    {
        id: '5',
        image: 'https://content2.rozetka.com.ua/goods/images/big_tile/284983293.jpg',
        name: 'Apple iPhone 14 Plus 128GB Starlight',
        description: 'Very good',
        price: '35 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.7", OLED (Super Retina XDR), 2778x1284) / Apple A15 Bionic / dual main camera: 12MP + 12MP, front camera: 12MP / 128GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16'
    },
    {
        id: '6',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/364836822.jpg',
        name: 'Apple iPhone 15 Pro Max 512GB Blue Titanium',
        description: 'Very good',
        price: '69 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.7", OLED (Super Retina XDR), 2796x1290) / Apple A17 Pro / main quad camera: 48MP + 12MP + 12MP + 12MP + 12MP, front camera: 12MP / 512GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17'
    },
    {
        id: '7',
        image: 'https://content2.rozetka.com.ua/goods/images/big_tile/364623607.jpg',
        name: 'Apple iPhone 15 256GB Green',
        description: 'Very good',
        price: '44 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / dual main camera: 48MP + 12MP, front camera: 12MP / 256GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17'
    },
    {
        id: '8',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/284913557.jpg',
        name: 'Apple iPhone 14 512GB Purple',
        description: 'Very good',
        price: '43 999₴',
        category: 'Mobile phones',
        info: 'Screen (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / dual main camera: 12MP + 12MP, front camera: 12MP / 512GB internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16'
    },
    {
        id: '9',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/388497296.jpg',
        name: 'LG 43UR78006LK',
        description: 'Excellent',
        price: '16 799₴',
        category: 'TV',
        info: 'Platform WebOS, Digital tuner bands, DVB-C, DVB-S2, DVB-T2, Panel scan frequency, 60 Hz'
    },
    {
        id: '10',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364929632.jpg',
        name: 'Samsung QE55Q60CAUXUA',
        description: 'Very good',
        price: '35 999₴',
        category: 'TV',
        info: 'One Billion Color, Quantum HDR, Supreme UHD Dimming, Motion Xcelerator, Brigtness Detection, Filmmaker Mode'
    },
    {
        id: '11',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/324833808.jpg',
        name: 'Nokia Smart TV QLED 5500D',
        description: 'Very good',
        price: '18 999₴',
        category: 'TV',
        info: 'Dolby Digital 5.1, dts HD 2x 12W + 12W (Subwoofer)'
    },
    {
        id: '12',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/311143129.jpg',
        name: 'Ergo 43GUS6500',
        description: 'Very good',
        price: '10 499₴',
        category: 'TV',
        info: 'Android 11.0, 60 Hz (MEMC)'
    },
    {
        id: '13',
        image: 'https://content2.rozetka.com.ua/goods/images/big_tile/364924761.jpg',
        name: 'Samsung UE43T5300AUXUA',
        description: 'Very good',
        price: '12 999₴',
        category: 'TV',
        info: '43", 1920x1080, 60 Hz, Tizen'
    },
    {
        id: '14',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/345836846.jpg',
        name: 'LDell Inspiron 3525 (I35716S3NIW-25B) Silver / AMD Ryzen 7 5700U / RAM 16 ГБ / SSD 512 ГБ / Windows 11 Home',
        description: 'Affordable',
        price: '26 999₴',
        category: 'Laptops and computers',
        info: 'Screen 15.6" WVA (1920x1080) Full HD 120 Hz, matte / AMD Ryzen 7 5700U (1.8 - 4.3 GHz) / RAM 16 GB / SSD 512 GB / AMD Radeon Graphics / without OD / Wi-Fi / Bluetooth / webcam / Windows 11 Home / 1.68 kg / scintillating'
    },
    {
        id: '15',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg',
        name: 'Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',
        description: 'Light and powerfull',
        price: '38 499₴',
        category: 'Laptops and computers',
        info: 'HD FaceTime 720p camera, True Tone technology, PCIe SSD drive, Touch ID, Stereo speakers, Wide stereo sound, Supports playback of content in Dolby Atmos format, System of three directional microphones, Magic Keyboard with backlit keyboard, Ambient light sensor, Force Touch trackpad'
    },
    {
        id: '16',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/382257302.jpg',
        name: 'Lenovo IdeaPad Gaming 3 15ACH6 (82K20297RA) Shadow Black / 15.6" IPS Full HD 144 Гц / AMD Ryzen 5 5500H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 2050 / 4-Zone RGB',
        description: 'Amazing',
        price: '29 999₴',
        category: 'Laptops and computers',
        info: 'Screen 15.6" IPS (1920x1080) Full HD 144 Hz, matte / AMD Ryzen 5 5500H (3.3 - 4.2 GHz) / RAM 16 GB / SSD 512 GB / nVidia GeForce RTX 2050, 4 GB / without OD / LAN / Wi-Fi / Bluetooth / webcam / without OS / 2.25 kg / black'
    },
    {
        id: '17',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/372795220.png',
        name: 'Acer Aspire 7 A715-76G-560W (NH.QMMEU.002) Charcoal Black / Intel Core i5-12450H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ',
        description: 'Super',
        price: '31 999₴',
        category: 'Laptops and computers',
        info: 'Screen 15.6" IPS (1920x1080) Full HD, matte / Intel Core i5-12450H (2.0 - 4.4 GHz) / RAM 16 GB / SSD 512 GB / nVidia GeForce RTX 3050, 4 GB / without OD / LAN / Wi-Fi / Bluetooth / webcam / without OS / 2.1 kg / Black'
    },
    
    {
        id: '18',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/286602037.jpg',
        name: 'Washing machine WHIRLPOOL WRBSB 6228 B UA',
        description: 'Very good',
        price: '13 999₴',
        category: 'Home appliances',
        info: 'Mixed fabrics, White things, Cotton, Eco cotton, Sports, Down duvet, Spin & Drain, Rinse & Spin, Fast 30 min, Colors 15° and more,  Wool, Delicate, Synthetics'
    },
    {
        id: '19',
        image: 'https://content1.rozetka.com.ua/goods/images/big_tile/359825407.jpg',
        name: 'Refridgerator SAMSUNG RB33J3200SA/UA',
        description: 'Insane',
        price: '23 799₴',
        category: 'Home appliances',
        info: 'Space Max technology, Multi Flow (Multi-flow system), Super freezing mode, Volt Control voltage surge protection system, Open door alarm system'
    },
    {
        id: '20',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/286228885.jpg',
        name: 'Robot-cleaner Rowenta X-PLORER Serie 75 S RR8567WH',
        description: 'Insane',
        price: '11 999₴',
        category: 'Home appliances',
        info: 'Cleaning type: Dry + wet'
    },
    {
        id: '21',
        image: 'https://content2.rozetka.com.ua/goods/images/big/253963077.jpg',
        name: 'Built-in dishwasher BOSCH SPV2XMX01K',
        description: 'Insane',
        price: '20 599₴',
        category: 'Home appliances',
        info: 'Water consumption per cycle/year 9.5/2090 l, Electricity consumption per cycle, kWh 0.831/183'
    },
    {
        id: '22',
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/263295073.jpg',
        name: 'Karcher K 3 HOME (1.601-821.0)',
        description: 'Very good',
        price: '5 899₴',
        category: 'Garden items',
        info: 'Voltage: 220 - 240 V, Area capacity: 25 m²/h, 12 months additional warranty if registered on the official Karcher website within one month'
    },
    {
        id: '23',
        image: 'https://content2.rozetka.com.ua/goods/images/big/342574518.jpg',
        name: 'Metabo RM 36-18 LTX BL 36 lawn mower',
        description: 'Very good',
        price: '14 452₴',
        category: 'Garden items',
        info: 'Type: Cordless, Working width: 36 cm, Number of cutting height levels: 5, Cutting height: 20 - 70 mm'
    },
    {
        id: '24',
        image: 'https://content1.rozetka.com.ua/goods/images/big/319291260.jpg',
        name: 'Bosch UniversalGardenTidy 3000 blower-vacuum cleaner-shredder Bosch UniversalGardenTidy 3000, 3 kW',
        description: 'Very good',
        price: '3 798₴',
        category: 'Garden items',
        info: 'Power, kW 3, Air velocity 79 m/s, Waste bin volume 50 l, Weight 6.7 kg'
    },
];

const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');

showProducts(categories[0]);

function showProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProductList(filteredProducts);
}

document.querySelectorAll('.product-category').forEach(function(element){
    element.addEventListener('click', function() {
        showProducts(this.innerText);
    });
});

function displayProductList(products) {
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
          <img src="${product.image}" width="100">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <h4>${product.price}</h4>
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
      <h4>${product.price}</h4>
      <button onclick="buyProduct('${product.name}')">Buy</button>
    `;

    productList.appendChild(productDetails);

}

function displayOrderConfirmation(orderData) {
    productList.innerHTML = '';

    const orderInfo = document.createElement('div');
    orderInfo.innerHTML = `
    <h3>Order confirmation</h3>
    <p>Buyer's name: ${orderData.buyerName}</p>
    <p>City: ${orderData.city}</p>
    <p>Nova Poshta warehouse: ${orderData.warehouse}</p>
    <p>Payment method: ${orderData.paymentMethod}</p>
    <p>Quantity: ${orderData.quantity}</p>
    <p>Comment: ${orderData.comment}</p>
    `;
    productList.appendChild(orderInfo);
    
    alert('Order confirmed', orderData);
}

function buyProduct(productName) {
    const product = products.find(p => p.name === productName);
    if(!product) return;
    
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        name: product.name,
        price: product.price,
        details: product.info
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    updateMyOrdersButtonText();
    showCategories();

}

function updateMyOrdersButtonText() {

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const myOrdersButton = document.getElementById('myOrdersButton');
    
    if(orders.length > 0) {
        myOrdersButton.textContent = `My orders (${orders.length})`;

    } else {
        myOrdersButton.textContent = 'My orders';
    }
    
}

window.addEventListener('load', () => {
    updateMyOrdersButtonText();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if(orders.length > 0) {
        showOrders();
    } else {
        showCategories();
    }
});

function showCategories() {
    productList.innerHTML = ''; 
}

document.getElementById('myOrdersButton').addEventListener('click', function() {
    showOrders();
});

function showOrders() {

    categoryList.style.display = 'none';

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    productList.innerHTML = '';

    if (orders.length === 0) {
        productList.innerHTML = '<p class="no-orders">You don\'t have any orders yet.</p>';
    } else {
        
        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order-item');
            orderElement.innerHTML = `
                <div class="order-summary">
                    <p>Date: ${order.date}</p>
                    <p>Price: ${order.price}</p>
                </div>
            `;
    
            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'View details';
            detailsButton.onclick = function(event) {
                event.stopPropagation();
                showOrderDetails(order);
            };
    
            const deleteButtton = document.createElement('button');
            deleteButtton.textContent = 'Delete order';
            deleteButtton.onclick = function(event) {
                event.stopPropagation();
                deleteOrder(order.id);
            };
    
            orderElement.appendChild(detailsButton);
            orderElement.appendChild(deleteButtton);
            productList.appendChild(orderElement);
        });
    }

    updateMyOrdersButtonText();
}

function showOrderDetails(order) {
    const existingDetails = document.querySelector('.order-details');
    if(existingDetails) {
        existingDetails.remove;
    }

    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');
    orderDetails.innerHTML = `
        <p>Order id: ${order.id}</p>
        <p>Date: ${order.date}</p>
        <p>Product: ${order.name}</p>
        <p>Price: ${order.price}</p> 
        <p>Details: ${order.details}</p>
    `;
    productList.appendChild(orderDetails);
}

function showCategories() {
    categoryList.style.display = 'block';

    productList.innerHTML = '';
}

function deleteOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    showOrders();
    updateMyOrdersButtonText();
}

window.addEventListener('load', () => {
    updateMyOrdersButtonText();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if(orders.length > 0) {
        showOrders();
    } else {
        showCategories();
    }
});

function showCheckoutForm(product) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const cities = ['Kyiv', 'Lviv', 'Odesa', 'Dnipro', 'Kharkiv'];

    const priceNumber = parseFloat(product.price.replace(/\s/g, '').replace('₴', ''));    

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">×</span>
            <form id="checkoutForm">
                <h2>Confirm Your Order</h2>
                <label for="buyerName">Name:</label>
                <input type="text" id="buyerName" name="buyerName" placeholder="Enter Your Name and Last Name" required>

                <label for="city">City:</label>
                <select id="city" name="city" required>
                    <option value="">Select a city</option>
                    ${cities.map(city => `<option value="${city}">${city}</option>`).join('')}
                </select>

                <label for="warehouse">Nova Poshta Office:</label>
                <input type="number" id="warehouse" name="warehouse" placeholder="141" required>

                <label>Payment Method:</label>
                <div>
                    <input type="radio" id="cash" name="paymentMethod" value="Cash" required>
                    <label for="cash">Cash</label>
                    <input type="radio" id="card" name="paymentMethod" value="Card" required>
                    <label for="card">Card</label>
                </div>

                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value="1" required>

                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" placeholder="Leave your comment to the order"></textarea>

                <p>Total: <strong>${priceNumber.toFixed(2)}₴</strong></p>

                <button type="submit" class="confirm-btn">Confirm Order</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close-button').addEventListener('click', function() {
        modal.style.display = 'none';
    });


    modal.querySelector('#checkoutForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const validationMessages = modal.querySelectorAll('.validation-message');
        validationMessages.forEach(message => message.remove());

        let formIsValid = true;

        function invalidateInput(input, message) {
            input.style.borderColor = 'red';
            const errorMessage = document.createElement('div');
            errorMessage.textContent = message;
            errorMessage.className = 'validation-message';
            errorMessage.style.color = 'red';
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
            formIsValid = false;
        }

        function resetInput(input) {
            input.style.borderColor = '';
        }

        const buyerNameInput = modal.querySelector('#buyerName');
        resetInput(buyerNameInput);
        if (!buyerNameInput.value.trim()) {
            invalidateInput(buyerNameInput, 'Name is required.');
        }

        const citySelect = modal.querySelector('#city');
        resetInput(citySelect);
        if (!citySelect.value) {
            invalidateInput(citySelect, 'City is required.');
        }

        const warehouseInput = modal.querySelector('#warehouse');
        resetInput(warehouseInput);
        if (!warehouseInput.value.trim()) {
            invalidateInput(warehouseInput, 'Nova Poshta Office number is required.');
        }

        const quantityInput = modal.querySelector('#quantity');
        resetInput(quantityInput);
        if (!quantityInput.value.trim() || parseInt(quantityInput.value, 10) <= 0) {
            invalidateInput(quantityInput, 'Quantity must be greater than 0.');
        }

        if (formIsValid) {
            const buyerName = buyerNameInput.value.trim();
            const city = citySelect.value;
            const warehouse = warehouseInput.value.trim();
            const paymentMethod = modal.querySelector('input[name="paymentMethod"]:checked').value;
            const quantity = quantityInput.value.trim();
            const comment = modal.querySelector('#comment').value.trim();
    
            processOrder({
                product,
                buyerName,
                city,
                warehouse,
                paymentMethod,
                quantity,
                comment
            });
    
           
            modal.style.display = 'none';
        }
    });
}

function processOrder(orderData) {
    
    console.log('Processing order:', orderData);

    displayOrderConfirmation(orderData);
}

function displayOrderConfirmation(orderData) {
    productList.innerHTML = '';

    const orderConfirmation = document.createElement('div');
    orderConfirmation.innerHTML = `
        <h3>Order Confirmation</h3>
        <img src="${orderData.product.image}" alt="${orderData.product.name}" width="100">
        <p>${orderData.product.name}</p>
        <p>Total: ${orderData.product.price}₴</p>
        <p>Your Name: ${orderData.buyerName}</p>
        <p>City: ${orderData.city}</p>
        <p>Nova Poshta office: ${orderData.warehouse}</p>
    `;
    productList.appendChild(orderConfirmation);
}

function buyProduct(productName) {
    const product = products.find(p => p.name === productName);
    if(!product) return;
   
    showCheckoutForm(product);
}
