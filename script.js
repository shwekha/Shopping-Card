const shoppingCart = {
    productList: [
      {
        name: 'Triple Wedding Cake',
        category: 'Cream Cake',
        imgUrl: './images/img-1.png',
        price: 30000,
        quantity: 1,
        totalPrice: 30000,
        currency: 'MMK',
        stockLimit: 3,
      },
      {
        name: 'Triple Choco Cake',
        category: 'Chocolate Cake',
        imgUrl: './images/img-2.png',
        price: 30000,
        quantity: 1,
        totalPrice: 30000,
        currency: 'MMK',
        stockLimit: 3,
      },
      {
        name: 'Triple Butterfly Cake',
        category: 'Cream Cake',
        imgUrl: './images/img-3.png',
        price: 30000,
        quantity: 1,
        totalPrice: 30000,
        currency: 'MMK',
        stockLimit: 3,
      },
      
    ],
    itemsCount: function () {
      let count = 0;
      this.productList.forEach((product) => {
        count += product.quantity;
      });
      return count;
    },
    subTotalPrice: function () {
      let subTotal = 0;
      this.productList.forEach((product) => {
        subTotal += product.price * product.quantity;
      });
      return subTotal;
    },
    totalPrice: null,
    shippingMethod: {
      type: 'Standard Delivery',
      amount: 5000,
      currency: 'MMK ',
    },
    promoCode: null,
    currency: 'MMK ',
  };
  
  const shippingList = [
    {
      type: 'Standard Delivery',
      amount: 5000,
      currency: 'MMK ',
    },
    {
      type: 'Yangon-Express',
      amount: 2000,
      currency: 'MMK ',
    },
    {
      type: 'Mandalay-Express',
      amount: 3000,
      currency: 'MMK ',
    },
  ];
  
  const promoCodeList = [
    {
      code: 'Christmax',
      type: 'fix',
      amount: 1000,
      currency: 'MMK ',
    },
    {
      code: 'newyear',
      type: 'percentage',
      amount: 20,
      currency: 'MMK ',
    },
  ];
  
  const productList = [
    {
      name: 'Triple Wedding Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-1.png',
      price: 30000,
      quantity: 1,
      totalPrice: 30000,
      currency: 'MMK ',
      stockLimit: 3,
    },
    {
      name: 'Triple Choco Cake',
      category: 'Chocolate Cake',
      imgUrl: './images/img-2.png',
      price: 30000,
      quantity: 1,
      totalPrice: 30000,
      currency: 'MMK ',
      stockLimit: 3,
    },
    {
      name: 'Triple Butterfly Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-3.png',
      price: 30000,
      quantity: 1,
      totalPrice: 30000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Triple Waffee Cake',
      category: 'Waffee Cake',
      imgUrl: './images/img-4.png',
      price: 30000,
      quantity: 1,
      totalPrice: 30000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Double Lavandar Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-5.png',
      price: 25000,
      quantity: 1,
      totalPrice: 25000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Double Strawberry Coded Cake',
      category: 'Strawberry Cake',
      imgUrl: './images/img-6.png',
      price: 25000,
      quantity: 1,
      totalPrice: 25000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Double Strawberry cream Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-7.png',
      price: 25000,
      quantity: 1,
      totalPrice: 25000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Double Choco cream Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-8.png',
      price: 25000,
      quantity: 1,
      totalPrice: 25000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Double Blueberry cream Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-9.png',
      price: 25000,
      quantity: 1,
      totalPrice: 25000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Strawberry cream Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-10.png',
      price: 15000,
      quantity: 1,
      totalPrice: 15000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Choco cream Cake',
      category: 'Cream Cake',
      imgUrl: './images/img-11.png',
      price: 15000,
      quantity: 1,
      totalPrice: 15000,
      currency: 'MMK',
      stockLimit: 3,
    },
    {
      name: 'Blueberry cream Cake',
      category: 'Cream Cake',
      price: 15000,
      quantity: 1,
      totalPrice: 15000,
      currency: 'MMK',
      stockLimit: 3,
    },
  ];
  
  const productUl = document.getElementById('products-ul');
  const totalCost = document.getElementById('total-cost');
  const addProductBtn = document.getElementById('add-product-btn');
  
  addProductBtn.addEventListener('click', (e) => {
    const randomIndex = Math.floor(Math.random() * productList.length);
    const randomProduct = productList[randomIndex];
    let index;
    const equalProductInShoppingCart = shoppingCart.productList.filter((v, i) => {
      if (v.name === randomProduct.name) {
        index = i;
        return true;
      }
    });
    if (equalProductInShoppingCart.length > 0) {
      increaseQuantity(index);
    } else {
      shoppingCart.productList.push(randomProduct);
      renderProductList(shoppingCart.productList);
      renderSummary(shoppingCart);
    }
  });
  
  function renderProductItem(product, i) {
    const li = document.createElement('li');
    li.classList = 'flex text-center text-xs sm:text-sm md:text-base';
  
    /*******/
  
    const productDetailDiv = document.createElement('div');
    productDetailDiv.classList =
      'flex flex-[2] md:flex-[3] text-left items-center space-x-2 sm:space-x-5';
  
    const productImg = document.createElement('img');
    productImg.classList = 'w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24';
    productImg.src = product.imgUrl;
  
    const productDetailSubDiv = document.createElement('div');
    productDetailSubDiv.classList = 'flex flex-col justify-between h-full p-1';
  
    const name = document.createElement('h4');
    name.classList = 'font-medium';
    name.textContent = product.name;
  
    const category = document.createElement('span');
    category.classList = 'text-cyan-600';
    category.textContent = product.category;
  
    const remove = document.createElement('span');
    remove.classList = 'text-gray-500 cursor-pointer';
    remove.textContent = 'Remove';
    remove.onclick = () => {
      deleteProduct(i);
    };
  
    productDetailSubDiv.append(name, category, remove);
    productDetailDiv.append(productImg, productDetailSubDiv);
  
    /******/
  
    const quantityDiv = document.createElement('div');
    quantityDiv.classList = 'flex-1 space-x-1';
  
    const minusSpan = document.createElement('span');
    minusSpan.classList = 'text-2xl cursor-pointer';
    minusSpan.textContent = '-';
    minusSpan.onclick = () => {
      decreaseQuantity(i);
    };
  
    const quantitySpan = document.createElement('span');
    quantitySpan.classList = 'border-2 border-gray-300 px-3';
    quantitySpan.textContent = product.quantity;
  
    const plusSpan = document.createElement('span');
    plusSpan.classList = 'text-2xl cursor-pointer';
    plusSpan.textContent = '+';
    plusSpan.onclick = () => {
      increaseQuantity(i);
    };
  
    quantityDiv.append(minusSpan, quantitySpan, plusSpan);
  
    /*****/
  
    const priceDiv = document.createElement('div');
    priceDiv.classList = 'flex-1 hidden sm:block';
    priceDiv.textContent = product.currency + " " + product.price;
  
    /******/
  
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.classList = 'flex-1';
    totalPriceDiv.textContent = product.currency+ " " + product.totalPrice;
  
    ////////////////////////////////
    li.append(productDetailDiv, quantityDiv, priceDiv, totalPriceDiv);
    return li;
  }
  
  function renderProductList(productList) {
    productUl.innerHTML = '';
    productList.forEach((product, i) => {
      const li = renderProductItem(product, i);
  
      productUl.appendChild(li);
    });
  }
  
  function decreaseQuantity(i) {
    if (shoppingCart.productList[i].quantity == 1) {
      if (confirm('Do you want to delete this product?')) {
        deleteProduct(i);
      }
    } else {
      shoppingCart.productList = shoppingCart.productList.map(
        (product, index) => {
          if (i == index) {
            product.quantity--;
            product.totalPrice = product.price * product.quantity;
            return product;
          } else {
            return product;
          }
        }
      );
      renderProductList(shoppingCart.productList);
      renderSummary(shoppingCart);
    }
  }
  
  function increaseQuantity(i) {
    if (
      shoppingCart.productList[i].quantity >=
      shoppingCart.productList[i].stockLimit
    ) {
      alert('Over stock');
      return;
    }
    shoppingCart.productList = shoppingCart.productList.map((product, index) => {
      if (i == index) {
        product.quantity++;
        product.totalPrice = product.price * product.quantity;
        return product;
      } else {
        return product;
      }
    });
  
    renderProductList(shoppingCart.productList);
    renderSummary(shoppingCart);
  }
  
  function deleteProduct(index) {
    shoppingCart.productList = shoppingCart.productList.filter(
      (product, i) => i != index
    );
    renderProductList(shoppingCart.productList);
    renderSummary(shoppingCart);
  }
  
  function renderSummary(shoppingCart) {
    const itemsCountSpan = document.getElementsByClassName('items-count');
    for (let span of itemsCountSpan) {
      span.textContent = shoppingCart.itemsCount();
    }
  
    const subTotalPrice = shoppingCart.subTotalPrice();
    shoppingCart.totalPrice =
      subTotalPrice == 0 ? 0 : subTotalPrice + shoppingCart.shippingMethod.amount;
    totalCost.textContent =
      shoppingCart.currency + shoppingCart.totalPrice;
  
    const subTotalSpan = document.getElementById('sub-total');
    subTotalSpan.textContent =
      shoppingCart.currency + shoppingCart.subTotalPrice();
    renderPromoCode(null, promoCodeList);
  }
  
  function renderShipping(shippingList) {
    const shipping = document.getElementById('shipping');
    const label = document.createElement('label');
    label.textContent = 'SHIPPING';
    label.htmlFor = 'shipping';
  
    const select = document.createElement('select');
    select.id = 'shipping';
    select.classList = 'outline-none p-2';
    select.onchange = (e) => {
      changeShippingMethod(e);
    };
  
    shippingList.forEach((v) => {
      const option = renderOption(v);
      select.append(option);
    });
    shipping.append(label, select);
  
    shoppingCart.totalPrice =
      shoppingCart.subTotalPrice() + shoppingCart.shippingMethod.amount;
  
    totalCost.textContent =
      shoppingCart.currency + shoppingCart.totalPrice;
  }
  
  function renderOption(shipping) {
    const option = document.createElement('option');
    option.value = shipping.type;
    option.textContent =
      shipping.type + ' - ' + shipping.currency + shipping.amount;
    return option;
  }
  
  function changeShippingMethod(e) {
    const { value } = e.target;
    const method = shippingList.filter((v) => v.type === value);
    shoppingCart.shippingMethod = method[0];
  
    shoppingCart.totalPrice =
      shoppingCart.subTotalPrice() + shoppingCart.shippingMethod.amount;
  
    totalCost.textContent =
      shoppingCart.currency + shoppingCart.totalPrice;
  }
  
  const promoForm = document.getElementById('promo-form');
  promoForm.addEventListener('submit', (e) => {
    renderPromoCode(e, promoCodeList);
  });
  
  function renderPromoCode(e, promoCodeList) {
    if (e) {
      e.preventDefault();
    }
  
    const promoInput = document.getElementById('promo');
    const { value } = promoInput;
    if (!shoppingCart.promoCode) {
      const promoCode = promoCodeList.filter((v) => v.code === value)[0];
      shoppingCart.promoCode = promoCode;
    }
    promoInput.value = '';
    if (!shoppingCart.promoCode) {
      return;
    }
  
    const discountCon = document.getElementById('discount-con');
    discountCon.classList.remove('hidden');
    discountCon.classList.add('flex', 'items-center');
    const discount = document.getElementById('discount');
    discount.textContent =
      shoppingCart.promoCode.type == 'fix'
        ? shoppingCart.promoCode.currency + shoppingCart.promoCode.amount
        : shoppingCart.promoCode.amount + '%';
  
    const totalPrice =
      shoppingCart.subTotalPrice() + shoppingCart.shippingMethod.amount;
  
    const beforeCost = document.getElementById('before-cost');
    if (totalPrice > 200) {
      beforeCost.classList.remove('hidden');
      beforeCost.textContent =
        shoppingCart.promoCode.currency + totalPrice;
      let promoteAmount;
      if (shoppingCart.promoCode.type == 'fix') {
        promoteAmount = shoppingCart.promoCode.amount;
      } else {
        promoteAmount = (totalPrice * shoppingCart.promoCode.amount) / 100;
      }
  
      shoppingCart.totalPrice = totalPrice - promoteAmount;
  
      totalCost.textContent =
        shoppingCart.currency + shoppingCart.totalPrice;
    } else {
      beforeCost.classList.add('hidden');
      beforeCost.textContent = '';
    }
  }
  
  const clearPromoBtn = document.getElementById('clear-promo-btn');
  clearPromoBtn.addEventListener('click', () => {
    shoppingCart.promoCode = null;
  
    shoppingCart.totalPrice =
      shoppingCart.subTotalPrice() + shoppingCart.shippingMethod.amount;
  
    totalCost.textContent =
      shoppingCart.currency + shoppingCart.totalPrice;
  
    const beforeCost = document.getElementById('before-cost');
    beforeCost.classList.add('hidden');
    beforeCost.textContent = '';
  
    const discountCon = document.getElementById('discount-con');
    const discount = document.getElementById('discount');
    discountCon.classList.remove('flex', 'items-center');
    discountCon.classList.add('hidden');
    discount.textContent = '';
  });
  
  function initRender() {
    renderProductList(shoppingCart.productList);
    renderSummary(shoppingCart);
    renderShipping(shippingList);
  }
  initRender();
  
  const discount = document.getElementById('discount');