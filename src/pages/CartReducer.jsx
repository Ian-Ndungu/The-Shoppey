export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state || {};

  let updatedShoppingCart = [...shoppingCart]; // Copy existing cart
  let updatedTotalPrice = totalPrice || 0; // Initialize total price
  let updatedTotalQty = totalQty || 0; // Initialize total quantity

  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = shoppingCart.find(item => item.id === action.product.id);
      if (existingItem) {
        existingItem.qty++;
        updatedTotalPrice += action.product.price;
        updatedTotalQty++;
      } else {
        // Add new item with quantity 1
        updatedShoppingCart.push({ ...action.product, qty: 1 });
        updatedTotalPrice += action.product.price;
        updatedTotalQty++;
      }
      break;
    case 'INC':
      const itemToIncrement = updatedShoppingCart.find(item => item.id === action.id);
      itemToIncrement.qty++;
      updatedTotalPrice += itemToIncrement.price;
      updatedTotalQty++;
      break;
    case 'DEC':
      const itemToDecrement = updatedShoppingCart.find(item => item.id === action.id);
      if (itemToDecrement.qty > 1) {
        itemToDecrement.qty--;
        updatedTotalPrice -= itemToDecrement.price;
        updatedTotalQty--;
      }
      break;
    case 'DELETE':
      updatedShoppingCart = updatedShoppingCart.filter(item => item.id !== action.id);
      const removedItem = shoppingCart.find(item => item.id === action.id);
      updatedTotalPrice -= removedItem.price * removedItem.qty;
      updatedTotalQty -= removedItem.qty;
      break;
    default:
      return state;
  }

  return {
    shoppingCart: updatedShoppingCart,
    totalPrice: updatedTotalPrice,
    totalQty: updatedTotalQty,
  };
};
