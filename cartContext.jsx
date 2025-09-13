import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();
export const UseCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [favourite, setFavourite] = useState(()=>{
    const savedFavourite = localStorage.getItem("myFavourite");
    return savedFavourite ? JSON.parse(savedFavourite) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  },[cart]);  

  useEffect(() => {
    localStorage.setItem("myFavourite", JSON.stringify(favourite));     
  },[favourite]);

  const addToCart = (productIdCheck) => {
    setCart((prevCart) => [...prevCart, productIdCheck]);
  };
  const removeCard = (id)=>{
     setCart((prevCart)=> prevCart.filter((item)=> item.id !== id));
      toast.error("Product removed from basket!");
  }
  const addToFavourite = (productIdCheck)=>{
    setFavourite((prevFav)=>{    
      if(prevFav.find((item)=> item.id === productIdCheck.id)){
        toast.error("Product already in favourires");
        return prevFav;
      }
      toast.success("Product added in favourite");
      return [...prevFav, productIdCheck];
    })  
  }; 
  const MoveToBasketCard = (productIdCheck) =>{
      setCart((prevFav)=> [...prevFav, productIdCheck]);
      setFavourite((prevFav)=> prevFav.filter((fav)=> fav.id !== productIdCheck.id)); 
       
  };

return (
  <CartContext.Provider value={{ cart, favourite, addToCart, removeCard, addToFavourite, MoveToBasketCard}}>
    {children}
  </CartContext.Provider>
);

};
export default CartProvider;   
