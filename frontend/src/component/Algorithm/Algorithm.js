import React from 'react';
import { useSelector } from 'react-redux';

function Algorithm() {
  const { cartItems } = useSelector((state) => state.cart);

  const { products } = useSelector((state) => state.products);

  //store category in an array
  const productKeys = cartItems.map((item) => item.product);

  let category = [];

  // create a category array
  for (let i = 0; i < productKeys.length; i++) {
    let filteredProducts = products.filter(
      (product) => product?._id === productKeys[i]
    );
    category.push(filteredProducts[0]?.category);
  }

  let matchingProducts = [];

  for (let i = 0; i <= category.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (category[i] === products[j].category) {
        matchingProducts.push(products[j]);
      }
    }
  }

  matchingProducts = matchingProducts.filter((product) => {
    return !cartItems.some((cartItem) => cartItem.product === product._id);
  });

  // get item from local storage
  if (localStorage.getItem('user_choice')) {
    const { minPrice, maxPrice, category } = JSON.parse(
      localStorage.getItem('user_choice')
    );

    //filter with the price range
    let customisedProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
      // &&
      //  product.category === category
    );

    //filter with the interests array

    // Convert category string to an array by splitting with space
    const categoryArray = category.split(' ');

    // Filter with the category array
    if (categoryArray.length > 0) {
      customisedProducts = customisedProducts.filter((product) =>
        categoryArray.includes(product.category)
      );
    }

    matchingProducts = [...matchingProducts, ...customisedProducts];
  }

  // LOCAL STORAGE
  const matchingProductsString = JSON.stringify([...new Set(matchingProducts)]);
  localStorage.setItem('recommended_products', matchingProductsString);

  //create a recommendation info for the user
  console.log('Cart Items', cartItems);
  console.log('Products', products);
  console.log('Category', category);
  console.log('matchingProducts', matchingProducts);

  return <></>;
}

export default Algorithm;
