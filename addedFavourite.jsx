import { useNavigate } from "react-router-dom";
import { UseCart } from "./cartContext";
import "./style.css";

const AddedFavourite = ()=>{
    // const takeNav = useNavigate();
    const {favourite, MoveToBasketCard} = UseCart();
    console.log("Favourites from context: ", favourite);

    if(!favourite || favourite.length === 0){
        return <p>Not Favourite Added!!</p>
    }
    return(
        <div className="favMain"> 
            <div className="fav-firstContain">
                <div className="p1">
                    <p>My Account</p>
                </div>
                <div className="p2">
                    <div className="p2-text">
                       <div className="favText1"><h3>Favourites</h3></div> 
                        <div className="favText2">
                            <p>View your most wanted products.</p>
                        </div>
                    </div>
                    <div className="heartIcon">
                    <span>♡</span>
                </div>
                </div>
            </div>

            {favourite.map((item)=> (
            <div className="fav-secondContain">
                <div className="favCard">
                    <div className="favImage" >
                <img src={item.Image} alt={item.title} width="100"/>
                </div>
                <div className="fav-thirdContain">
                    <div className="thirdText1">
                      <div className="thirdTitle">
                        <div className="tit1">
                        <h3>MAX</h3>
                        </div>
                        <div className="tit1">
                        <h3>{item.title}</h3>
                        </div>
                      </div>
                      <div className="thirdsize">
                      <div className="favsize">Size</div>
                      </div>
                    </div>   
                    <div className="thirdText2">
                      <div className="thirdPrice">
                        <p>{item.price}</p>
                      </div>
                      <div className="addToBasket">
                        <a href="#" onClick={() => MoveToBasketCard(item)}>Move to Basket</a>
                      </div>
                    </div>
                </div>
            </div>
            </div>
             ))}
            
        </div>
    )
}
export default AddedFavourite;