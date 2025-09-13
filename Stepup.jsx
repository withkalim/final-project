import { Link } from "react-router-dom";

const StepUp = () =>{
    const StepUpCard = [
  {
    id: 93,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015140867-Beige-NUDE-1000015140867_01-2100.jpg",
    title: "Women Textured Ballerinas with Bow",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 94,
    Image:
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000013181689-Black-BLACK-1000013181689_01-2100.jpg",
    title: "Women Quilted Hobo Bag",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 95,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014428422-Brown-DARKBROWN-1000014428422_01-2100.jpg",
    title: "Women Chain-Detailed Belt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 299,
  },
  {
    id: 96,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000013608747-White-WHITE-1000013608747_01-2100.jpg",
    title: "Girls Moulded Charm Wash & Wear Shoes",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 299,
  },
  {
    id: 97,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015164929-OffWhite-IVORY-1000015164929_01-2100.jpg",
    title: "Men Textured Flip Flops",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 399,
  },
  {
    id: 98,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015612832-Blue-BLUE-1000015612832_01-2100.jpg",
    title: "Kids Spider-Man Applique Baseball Cap",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 564,
  },
  {
    id: 100,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014325439-White-WHITE-1000014325439_01-2100.jpg",
    title: "white and brown snickers for kinds",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 101,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014392097-Blue-BLUE-1000014392097_01-2100.jpg",
    title: "Women Wash & Wear Sandals",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 499,
  },
  {
    id: 102,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015165185-Multi-MULTI-1000015165185_01-2100.jpg",
    title: "Boys Printed Ankle Length Socks - Pack of 5",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 299,
  },
  {
    id: 103,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015135819-Black-BLACK-1000015135819_01-2100.jpg",
    title: "Men Mesh Slip-On Athleisure Shoes",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 104,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015239527-White-WHITE-1000015239527_01-2100.jpg",
    title: "Boys Striped Sneakers",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 599,
  },
  {
    id: 105,
    Image:
      "https://media-uk.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000012865539-Brown-BROWN-1000012865539_02-2100.jpg",
    title: "Women Textured Jute Flip-Flops",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 380,
  },
  {
    id: 106,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014390405-Grey-GREY-1000014390405_01-2100.jpg",
    title: "Women Textured Flip Flops",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 420,
  },
  {
    id: 107,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014392097-Beige-CREAM-1000014392097_01-2100.jpg",
    title: "Women Wash & Wear Sandals",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 399,
  },
  {
    id: 108,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015239514-White-WHITE-1000015239514_01-2100.jpg",
    title: "Girls Floral Print Sneakers",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 540,
  },
  {
    id: 109,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000013434036-Beige-BEIGE-1000013434036_01-2100.jpg",
    title: "Women Moulded Wash & Wear Sneakers",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 399,
  },
  {
    id: 110,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014390405-Beige-BEIGE-1000014390405_01-2100.jpg",
    title: "Women Textured Flip Flops",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 299,
  },
  {
    id: 111,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014997980-Green-OLIVEGREEN-1000014997980_01-2100.jpg",
    title: "Boys Clogs with Jibbits",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 499,
  },
  {
    id: 112,
    Image:
      "https://media-us.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000013414331-Blue-NAVY-1000013414331_01-2100.jpg",
    title: "Boys Clogs with Decorative Foxing",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 459,
  },
  {
    id: 113,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014542984-Blue-BLUE-1000014542984_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 299,
  },
  {
    id: 114,
    Image:
      "https://media-ea.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015237241-Beige-BEIGE-1000015237241_01-2100.jpg",
    title: "Women Crochet Knit Flats",
    description: "this i look for you awesome and make your aura around circle",
    price: 799,
  },
  {
    id: 115,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015219846-Brown-KHAKI-1000015219846_01-2100.jpg",
    title: "Women Solid Sling Bag",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 809,
  },
  {
    id: 116,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000015260935-Blue-DENIM-1000015260935_01-2100.jpg",
    title: "Girls Frayed Bucket Hat",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 450,
  },
  {
    id: 117,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=735,w=508,q=85,fit=cover/max-new/1000014687405-Beige-BEIGE-1000014687405_01-2100.jpg",
    title: "Women Macrame Cross Strap Flats",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 699,
  },
     
    ]
  return (
    <div>
      {/* <h3>Mini Cards Are Loadding....</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-between", gap: "20px", width:"94%", height:"1700px",margin:"3% auto"}}>
      
        {StepUpCard.map((miniCard) => (
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
export default StepUp;