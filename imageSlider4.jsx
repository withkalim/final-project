import { Link } from "react-router-dom";

const ImageSlider4 = ()=>{
     const sliderMiniCards4 = [
      {
    id: 73,
    Image:
      "https://media.landmarkshops.in/max-new/1000015608875-Green-DARKGREEN-1000015608875_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 799,
  },
  {
    id: 74,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015608821-Green-DARKGREEN-1000015608821_01-2100.jpg",
    title: "Boys Printed Cargo Joggers",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 75,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84rRn70-P7hDbQMFd_hDHyrT-XNLmx30qTw&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 76,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTya_oNCAZT2rEFTazIfh2sr53CdDJqOCegXg&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 77,
    Image:
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29739380/2024/5/24/ab03a1d9-27b4-4999-998f-80ca0a75ca971716541051586JuniorsbyLifestyleBoysPoloCollarT-shirt1.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 78,
    Image:
      "https://media-ea.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000015580824-OffWhite-IVORY-1000015580824_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 79,
    Image:
      "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/AUGUST/11/X0EZGs3f_86d57ebe43d244d6bff016ec943b4cc9.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 80,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iOAMP3auWoISymBra9l8tpmR8OdgkSsJ3g&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 81,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dn-09YmtdkNE65Qt6KF8y-idZ_nNlCFMaA&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 82,
    Image:
      "https://i5.walmartimages.com/seo/Wonder-Nation-Boys-Pull-On-Jogger-Pants-Sizes-4-18-Husky_cb76e2fd-1e56-4fa5-b6d6-cee9ca765279.6648be8dee7b84a2fa8f696e7989fc86.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 83,
    Image:
      "https://img3.exportersindia.com/product_images/bc-small/2025/5/9000438/boys-fun-balloon-co-ord-set-1748671840-8102955.jpeg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price:899,
  },
  {
    id: 84,
    Image:
      "https://i.pinimg.com/236x/f6/ec/5a/f6ec5a5c2542be366d2fc806a734edc6.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 85,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVYzRPwRLQ9XMR737apAbSyLFc90zQFhZVA&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 86,
    Image:
      "https://media.maxfashion.com/i/max/C24KIGFEKDRESS136PINKMEDIUM-C24KIGFEKDRESS136-MXWN24062624_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 87,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIj2djSvzTpfz-78MXwdK-SHOYonvNsdWfg&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 88,
    Image: "https://cdn.kidre.com/storage/eqbqxs50qnl2gej6ffa8gm1z9v04",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 89,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyFFYqml39l4fa_7RWHLUbAB8n9PvrxXbVQ&s",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 90,
    Image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000014281164-Pink-PEACH-1000014281164_01-2100.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 91,
    Image:
      "https://assets.ajio.com/medias/sys_master/root/20230717/SCNe/64b55704a9b42d15c95a20c4/-473Wx593H-466363845-blue-MODEL.jpg",
    title: "URB_N Men's Checked Regular Fit Shirt",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
  {
    id: 92,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitwx_NnYMmZfaFkjcwTTIOkbZpWJf9504fQ&s",
    title: "Buy Baby Girls Essential Online at Best Prices",
    description:
      "this is look for you awesome and make your aura around circle",
    price: 899,
  },
];
  return (
    <div>
      {/* <h3>Mini Cards Are Loadding....</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-between", gap: "20px", width:"94%", height:"1700px",margin:"3% auto"}}>
      
        {sliderMiniCards4.map((miniCard) => (
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
export default ImageSlider4;