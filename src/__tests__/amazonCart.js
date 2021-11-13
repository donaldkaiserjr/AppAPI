

const user = {
  name: 'jacob', 
  active: true, 
  cart: [],
  purchases: [],
}

const amazonHistory = []

const compose = (f, g) => (...args) => f(g(...args))
  purchaseItem(
    emptyCart, 
    buyItem, 
    applyTaxToItems,
    addItemToCart
  )(user, {name: "laptop", price: 2000 });

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, {cart: updateCart})
}

const applyTaxToItems() {
  
}