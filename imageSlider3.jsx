import { Link } from "react-router-dom";

const ImageSlider3 = () =>{
   const sliderMiniCards3 = [
  {
    id: 59,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015484389-Blue-NAVY-1000015484389_01-2100.jpg",
    title: "Levis pure jeans for fit men",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 60,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015484389-Red-MAROON-1000015484389_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 61,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015572006-Brown-TAN-1000015572006_01-2100.jpg",
    title: "Buy Trendy Shirts for Women ",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 62,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015711142-Black-BLACK-1000015711142_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 63,
    Image:
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013472994-White-WHITE-1000013472994_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 64,
    Image:
      "https://media.landmarkshops.in/max-new/1000015572694-White-WHITE-1000015572694_01-2100.jpg",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 65,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015353067-Black-BLACK-1000015353067_02-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 66,
    Image:
      "https://media.landmarkshops.in/max-new/1000015484389-Blue-NAVY-1000015484389_02-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 67,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7EyvUXywdsrAEE-jWsaLhmTofnb7ZGtQ8g&s",
    title: "Girls Checked Regular Fit Top",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 68,
    Image:
      "https://media.landmarkshops.in/max-new/1000015572720-Orange-RUST-1000015572720_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 69,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015221053-Grey-DARKGREY-1000015221053_01-2100.jpg",
    title: "Buy Stylish T-Shirts for Women",
    description:
        "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 70,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015224542-Black-BLACK-1000015224542_01-2100.jpg",
    title: "Buy Trendy Shirts for Women",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 71,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015494965-Red-MAROON-1000015494965_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 72,
    Image:
      "https://media-ea.landmarkshops.in/max-new/1000015483383-Blue-NAVY-1000015483383_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
     
  ]
  return (
    <div>
      {/* <h3>Mini Cards Are Loadding....</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-between", gap: "20px", width:"94%", height:"1700px",margin:"3% auto"}}>
      
        {sliderMiniCards3.map((miniCard) => (
           <Link
            key={miniCard.id}
            to={`/singleCardData/${miniCard.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <div
            key={miniCard.id}
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
export default ImageSlider3;