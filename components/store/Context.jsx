import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) ;
  const storedWishList = JSON.parse(localStorage.getItem("wishList"));

  const initialState = storedCartItems ? storedCartItems : [];
  const initialState2 = storedWishList ? storedWishList : [];


  const [cartItems, setCartItems] = useState(initialState);

  const [quantities, setQuantities] = useState(
    cartItems.map((item) => ({ id: item.id, quantity: 1 }))
  );
  
  const [wishList, setWishList] = useState(initialState2);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify( cartItems ));
  }, [cartItems]);

  useEffect(() => {
    setQuantities(cartItems.map((item) => {
      const storedQuantity = JSON.parse(localStorage.getItem(`quantity-${item.id}`));
      const initialQuantity = storedQuantity ? storedQuantity : 1;
      return { id: item.id, quantity: initialQuantity };
    }));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify( wishList ));
  }, [wishList]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
  };

  const updateQuantity = (index, newQuantity) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      if (updatedQuantities[index]) {
        updatedQuantities[index].quantity = newQuantity;
      }
      localStorage.setItem(`quantity-${cartItems[index].id}`, JSON.stringify(newQuantity));
      return updatedQuantities;
    });
  };

  const addWishList = (item) => {
    setWishList([...wishList, item]);
    localStorage.setItem("wishList", JSON.stringify([...wishList, item]));
  }

  const removeItemFromCart = (index) => {
    const updatedCartItems = [...cartItems];

    // das Item wird an der angegebenen Indexposition entfernt
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeItemFromWishList = (index) => {
    const updatedWishList = [...wishList];

    updatedWishList.splice(index, 1);
    setWishList(updatedWishList);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
  }; 

  const value= {
    cartItems, 
    wishList,
    quantities,
    addToCart, 
    setCartItems, 
    addWishList, 
    setWishList,
    removeItemFromCart,
    removeItemFromWishList,
    updateQuantity,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
