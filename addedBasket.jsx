import { UseCart } from "./cartContext";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const AddedBasketPage = () => {
  const takeNav = useNavigate();
  const { cart, removeCard } = UseCart();
  const [showOrder, setShowOrder] = useState(false);
  const orderSuccess = () =>{
     setShowOrder(true);
  }  
  const closeContent = () =>{
     setShowOrder(false);
  }

  return (
    <div className="fullPage">
      <h2>Your Shopping Basket</h2>
      <hr />
      <div className={`basketMain ${showOrder ? "blur" : ""}`} 
       style={{display: "flex", alignItems: "flex-start" }} >
        <div className="leftCardContainer">
          <p style={{ fontSize: "17px", fontWeight: "700" }}>
            {cart.length} Products
          </p>

          {cart.length === 0 ? (
            <p>No Item in Basket yet...</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index}>
                  <div className="baksetContainer">
                    <div className="cardContain">
                      <div className="basketImages">
                        <img src={item.Image} alt={item.title} />
                      </div>
                      <div className="basketText">
                        <h4>{item.title}</h4>
                        <h4>₹{item.price}</h4>
                        <p>Color: Black</p>
                        <p>Size: 6-20 Y</p>
                      </div>
                    </div>
                    <div className="cardContain2">
                      <p>10 days easy exchange & return</p>
                    </div>
                  </div>

                  <div className="quantity">
                    <h1>
                      Delivery in{" "}
                      <span style={{ color: "#000000" }}>Enter Pincode Above</span>
                    </h1>
                  </div>
                  <div className="cardContain3">
                    <button onClick={() => removeCard(item.id)}>Remove</button>{" "}
                    <span style={{ color: "#ccc", fontSize: "28px" }}>|</span>
                    <button onClick={()=>takeNav('/addedfavourite')}>Back To Favourites</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT SIDE (Order Summary) */}
        <div className="rightBuyProduct">
          <div className="checkoutBox">
            <h3>Order Summary</h3>
            <div className="totalItem">
              <div><p>Total Items: </p></div>
              <div>{cart.length}</div>
            </div>
             <div className="shippingfee">
              <div><p>Shipping fee: </p></div>
              <div><p style={{color:"#5ea326ff"}}>Free</p></div>
            </div>
            <div className="totalPrice">
              <div><p> Total Price: </p></div>
              <div>{cart.reduce((acc, item) => acc + item.price, 0)}</div>
            </div>
           
            <button className="checkoutBtn" onClick={orderSuccess}>Buy Now</button>  
            
          </div>
          <div className="rightBuyProduct2">
           <div className="offerForYou">
            <div className="giftImg">
              <img src="https://www.shutterstock.com/shutterstock/photos/1363324070/display_1500/stock-vector-special-prize-reward-gifts-surprising-present-box-yellow-gifts-with-red-ribbon-bonus-concept-1363324070.jpg" alt="" />
            </div>
            <div className="offerText">
              <div className="offerHeading">
                <p>Offers for you!</p>
                <p>Select</p>
              </div>
              <div className="offerParghph">
                <p>Choose and apply voucher in 2 simple step</p>
              </div>
            </div>
           </div>
       <div className="reward">
        <div className="rewardDiv1">
          <div className="rewardImg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_n0m_VqsI0NCD4oiM5781kkxCLTX0v78nA&s" alt="" />
          </div>
          <div className="reawadParghph">
            <p>Landmark Rewards points</p>
          </div>
        </div>
        <div className="rewardText2">
          <p>Get 3 points with this purchase and redeem on the payment page in next eligible purchase(s)</p>
        </div>
       </div>
         </div>
        </div>
      </div>

        {showOrder && (
        <div className="modal1">
          <div className="mContent">
            <h2>🎉 Order Successful!</h2>
            <p>Your order has been placed successfully.</p>
            <p> Delivery Within 3-5  days</p>
            <button onClick={closeContent}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AddedBasketPage;
