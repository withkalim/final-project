import { Link } from "react-router-dom";
import "./style.css";
const ImageSlider1 = () =>{
      const sliderMiniCards = [
   {
    id: 15,
    Image:
      "https://media.landmarkshops.in/max-new/1000015586468-Orange-RUST-1000015586468_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Infuse a breezy element of this checked shirt into your wardrobe. It has a spread collar, half sleeves, a button placket.",
    price: 799,
  },
  {
    id: 16,
    Image:
      "https://media.landmarkshops.in/max-new/1000015694970-Beige-ECRU-1000015694970_01-2100.jpg",
    title: "URB_N Men Light color Shirt",
    description:
      "This checked shirt offers a timeless casual look with its classic spread collar and button placket. Designed with half sleeves.",
    price: 950,
  },
  {
    id: 17,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015494978-Blue-BLUE-1000015494978_01-2100.jpg",
    title: "URB_N Men Striped Relaxed Fit Shirt",
    description:
      "This striped relaxed fit shirt features a crisp spread collar, neat button placket, and half sleeves for easy, breathable wear.",
    price: 999,
  },
  {
    id: 18,
    Image:
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013611059-Orange-RUSTCORAL-1000013611059_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "This checked shirt has a spread collar, full sleeves with button cuffs, a button placket, and a curved hem to complement your wardrobe. ",
    price: 699,
  },
  {
    id: 19,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015494965-Red-MAROON-1000015494965_01-2100.jpg",
    title: "URB_N Men Striped Relaxed Fit Resort Shirt",
    description:
      "This striped relaxed fit shirt features a resort collar, neat button placket, and half sleeves for easy, breathable wear. Finished with a handy patch pocket.",
    price: 789,
  },
  {
    id: 20,
    Image:
      " https://media.maxfashion.com/i/max/B23MDNMFSSH302BLUEMEDIUM-B23MDNMFSSH302-MXSPR23190123_01-2100.jpg?$prodimg-d-prt-pdp-2x$&$quality-retina$&fmt=auto&sm=c",
      title:"URB_N Men's Checked Blue Fit Shirt",
    description:
      "Stay timeless with this checked regular fit shirt, featuring a spread collar, button placket, and full sleeves with button cuffs.",
    price: 959,
  },
  {
    id: 21,
    Image:
      "https://media.maxfashion.com/i/max/B24MDNMFSSH202BLUEMEDIUM-B24MDNMFSSH202-MXSPR24281123_01-2100.jpg?$prodimg-d-prt-pdp-2x$&$quality-retina$&fmt=auto&sm=c",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Stay timeless with this checked regular fit shirt, featuring a spread collar, button placket, and full sleeves with button cuffs.",
    price: 809,
  },
  {
    id: 22,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015501267-Red-MAROON-1000015501267_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      ". A functional patch pocket adds a practical touch to its classic design.",
    price: 999,
  },
  {
    id: 23,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015694983-Green-GREEN-1000015694983_01-2100.jpg",
    title:"URB_N Men Textured Regular Fit Shirt", 
      description:
      "Time to give your wardrobe a glow-up with this textured shirt that has a spread collar, full sleeves with button cuffs, a button placket, and a curved hem. ",
    price: 899,
  },
  {
    id: 24,
    Image: "https://m.media-amazon.com/images/I/317rHQEHTsL._SY1000_.jpg",
    title: "URB_N Men simple Regular Fit Shirt",
    description:
      "this is look for you awesome and make you around simple and more formal",
    price: 599,
  },
  {
    id: 25,
    Image:
      "https://media.maxfashion.com/i/max/B24MDNMFSSH403BLUELIGHT-B24MDNMFSSH403-MXSPR24060124_01-2100.jpg?$prodimg-d-prt-pdp-2x$&$quality-retina$&fmt=auto&sm=c",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "This checked shirt offers a timeless casual look with its classic spread collar and button placket. Designed with half sleeves",
    price: 999,
  },
  {
    id: 26,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=1334,w=750,q=85,fit=cover/max-new/1000015704859-Blue-BLUE-1000015704859_04-2100.jpg",
    title: "URB_N Men Printed Resort Shirt",
    description:
      "Add a splash of style to your wardrobe with this printed regular fit shirt. Designed with a resort collar, button placket, and half sleeves.",
    price: 499,  
  },
  {
    id: 27,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015494965-Red-MAROON-1000015494965_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "This striped relaxed fit shirt features a resort collar, neat button placket, and half sleeves for easy, breathable wear.",
    price: 899,
  },
  {
    id: 28,
    Image:
      "https://media.landmarkshops.in/max-new/1000015585429-Orange-ORANGE-1000015585429_02-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "This striped relaxed fit shirt features a resort collar, neat button placket, and half sleeves for easy, breathable wear.",
    price: 899,
  },
  {
    id: 29,
    Image:
      "https://media.landmarkshops.in/max-new/1000015586455-Grey-GREY-1000015586455_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Infuse a breezy element of this printed shirt into your wardrobe. It has a spread collar, half sleeves, a button placket, and a straight hem to complement your next vacation.",
    price: 859,
  },
  {
    id: 30,
    Image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/4/54817faMN-Moye-2301-White_3.jpg?rnd=20200526195200&tr=w-512",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 31,
    Image: "https://m.media-amazon.com/images/I/613zq-YIWAL._SL1500_.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 32,
    Image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19075990/2022/7/12/3897436c-577c-46bd-a7e1-51f6fa30b6791657635706142VMartMenSolidCottonLinenMandarinCollarCasualShirtFs1.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 33,
    Image:
      "https://assets.ajio.com/medias/sys_master/root/20240726/86i5/66a3d18e6f60443f31c336bd/-473Wx593H-700233007-navy-MODEL.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 34,
    Image:
      "https://media.landmarkshops.in/max-new/1000015501280-Blue-NAVY-1000015501280_04-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
];
  return (
    <div>
      {/* <h3>Mini Cards Are Loadding....</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-between", gap: "20px", width:"94%", height:"1700px",margin:"3% auto"}}>
      
        {sliderMiniCards.map((miniCard) => (
           <Link
            key={miniCard.id}
            to={`/singleCardData/${miniCard.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <div
            key={miniCard.id}
            className="mini-card"
            style={{
              // border: "1px solid #ccc",
              width: "260px",
              height:"450px",   
            }}
          >
            <span style={{position:"absolute",display:"block",backgroundColor:"#ffffffff",zIndex:"1",marginTop:"22.5%",fontSize:"12px",fontWeight:"600",padding:"10px",marginLeft:"7px"}}>NEW</span>
            <img
              src={miniCard.Image}
              style={{ width: "100%",height:"86%",
              margin:"0px",}}
            />
            <div style={{height:"60px"}}>
              <div style={{height:"30px",textAlign:"left"}}>
               <h4 style={{ marginTop:"10px", fontSize:"21px"}}>₹{miniCard.price}</h4>
               </div>
               <div>          
               <h5 style={{height:"20px",textAlign:"left",marginTop:"0px"}}>{miniCard.title}</h5>
               </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ImageSlider1;