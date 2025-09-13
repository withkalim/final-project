import { Link } from "react-router-dom";

const ImageSlider2 = ()=>{
    
    const sliderMiniCards2 = [
{
    id: 35,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015586468-Orange-RUST-1000015586468_01-2100.jpg",
    title: "Levis pure jeans for fit men",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 799,
  },
  {
    id: 36,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015585681-Black-BLACK-1000015585681_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 799,
  },
  {
    id: 37,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015484389-Red-MAROON-1000015484389_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 38,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015484389-Blue-NAVY-1000015484389_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 39,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015375947-Beige-BEIGE-1000015375947_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 40,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015483409-Red-MAROON-1000015483409_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 41,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015585707-Black-BLACK-1000015585707_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 42,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015572720-Orange-RUST-1000015572720_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 43,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015572694-White-WHITE-1000015572694_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 44,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014105528-Pink-PINK-1000014105528_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 45,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014559334-Black-BLACK-1000014559334_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 46,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015588510-Beige-BEIGE-1000015588510_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 47,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015588510-Brown-BROWN-1000015588510_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 48,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015600281-Black-BLACK-1000015600281_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 49,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015178747-Black-BLACK-1000015178747_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 50,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015178747-Blue-MIDBLUE-1000015178747_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 51,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015618970-Brown-DARKBROWN-1000015618970_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 52,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015248771-Black-BLACK-1000015248771_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 53,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015248771-Brown-BROWN-1000015248771_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 54,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015585442-OffWhite-WHITE-1000015585442_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 55,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015248771-Grey-GREY-1000015248771_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 56,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015400784-Grey-GREY-1000015400784_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 57,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015327418-Grey-GREY-1000015327418_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
  {
    id: 58,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015439189-Grey-GREY-1000015327418_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "Give your everyday style an upgrade with this T-shirt. It has a crew neck, short sleeves, and a regular-fit profile.",
    price: 899,
  },
     
     
  ]
  return (
    <div>
      {/* <h3>Mini Cards Are Loadding....</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-between", gap: "20px", width:"94%", height:"1700px",margin:"3% auto"}}>
      
        {sliderMiniCards2.map((miniCard) => (
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
export default ImageSlider2;