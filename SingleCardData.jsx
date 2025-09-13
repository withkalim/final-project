import { useNavigate, useParams } from "react-router-dom";
import { UseCart } from "./cartContext";
import toast from "react-hot-toast";

const cardsFromMain = [
  {
    id: 1,
    Image: "/imgi_19_MAX-UberHP-KTZ-Desk-Banner1-30MAY25.png",
    title: "Co-ords",
    price: 890,
    description: "Make a bold statement with this chenille embroidered oversized sports t-shirt featuring a crew neck and half sleeves. The relaxed fit and straight hem offer comfort.",
  },
  {
    id: 2,
    Image: "/imgi_20_MAX-UberHP-KTZ-Desk-Banner2-30MAY25.png",
    title: "Bottom jogers and short",
    price: 1200,
    description: "Function meets comfort in this pair of joggers. It has a drawstring waist for an adjustable fit. With multiple side pockets, a back welt pocket",
  },
  {
    id: 3,
    Image: "/imgi_21_MAX-UberHP-KTZ-Desk-Banner3-30MAY25.png",
    title: "trendy sport jersy",
    price: 600,
    description: "Stay sporty and stylish with this shoulder-striped oversized sports T-shirt, featuring a classic crew neck and half sleeves for a relaxed fit. The bold stripes on the shoulders add a modern, athletic touch.",
  },
  {
    id: 4,
    Image: "/imgi_22_MAX-UberHP-KTZ-Desk-Banner4-30MAY25.png",
    title: "Blouettey tank top",
    price: 360,
    description: "This printed sports tank top combines style and functionality with its racer back design and sleeveless fit. The texture provides extra comfort and flexibility",
  },
  {
    id: 5,
    Image: "/imgi_23_MAX-UberHP-KTZ-Desk-Banner5-30MAY25.png",
    title: " Polo tshirts for wemen",
    price: 499,
    description: "Upgrade your casual essentials with this textured sports polo T-shirt, featuring a sleek Johnny collar and half sleeves",
  },
  {
    id: 6,
    Image: "/imgi_24_MAX-UberHP-KTZ-Desk-Banner6-30MAY25.png",
    title: "Women track pant",
    price: 900,
    description: "These solid wide leg track pants offer a perfect blend of comfort and contemporary style, featuring an elasticated waist for a secure fit.",
  },
  {
    id: 7,
    Image: "/imgi_25_MAX-UberHP-GENZONE-Desk-Banner1-04AUG25.png",
    title: "Women Embroidered Kurta Set",
    price: 400,
    description: "Graceful and elegant, this embroidered kurta set features a notch neck and 3/4th sleeves, with side slits for ease and movement.",
  },
  {
    id: 8,
    Image: "/imgi_26_MAX-UberHP-GENZTWO-Desk-Banner2-04AUG25.png",
    title: "Women Embroidered A-line Kurta Set",
    price: 1000,
    description: "Step into everyday elegance with this embroidered A-line kurta set. The A-line kurta features a notch neck, 3/4th sleeves, and a handy side pocket, while the stra",
  },
  {
    id: 9,
    Image: "/imgi_27_MAX-UberHP-GENZTHREE-Desk-Banner3-04AUG25.png",
    title: "Women Print Straight Short Kurti",
    price: 480,
    description: "Add a touch of flair to your everyday style with this printed straight short kurti. Featuring a band collar and 3/4th sleeves",
  },
  {
    id: 10,
    Image: "/imgi_28_MAX-UberHP-GENZFOUR-Desk-Banner4-04AUG25.png",
    title: "Women Floral Print A-line",
    price: 400,
    description: "Step into effortless elegance with this floral print A-line kurti that blends comfort with charm. Featuring a flattering V-neck, 3/4th sleeves, and a short length",
  },
  {
    id: 11,
    Image: "/imgi_29_MAX-UberHP-MUSTHAV-Desk-Banner1-11AUG25.png",
    title: "ALAYA F x URB_N Women Printed Print",
    price: 200,
    description: "This printed T-shirt offers a fun and vibrant twist to your everyday style. Featuring a round neck and half sleeves",
  },
  {
    id: 12,
    Image: "/imgi_30_MAX-UberHP-MUSTHAV-Desk-Banner2-11AUG25.png",
    title: "URB_N Men Textured T-shirt",
    price: 700,
    description: "Add subtle detail to your casual wardrobe with this textured T-shirt. Featuring a Henley neck and full sleeves, it blends comfort with a touch of rugged charm. ",
  },
  {
    id: 13,
    Image: "/imgi_31_MAX-UberHP-MUSTHAV-Desk-Banner3-11AUG25.png",
    title: "Girls Minnie Mouse Print T-shirt",
    price: 600,
    description: "Let your little one sparkle with this Minnie Mouse print T-shirt! Designed with a classic round neck, half sleeves, and sequinned details, this T-shirt offers a stylish and comfortable fit.",
  },
  {
    id: 14,
    Image: "/imgi_32_MAX-UberHP-MUSTHAV-Desk-Banner4-11AUG25.png",
    title: "Boys Printed Resort Shirt",
    price: 400,
    description: "Bring vacation vibes to your everyday look with this printed resort shirt. Designed with a resort collar, button placket, and half sleeves, it's a breezy choice for laid-back days.",
  },
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
];

const SingleCardData = ({product}) => {
  const { id } = useParams();
  const { addToCart, addToFavourite} = UseCart();
  const takeNav = useNavigate();

  const productIdCheck = cardsFromMain.find(
    (item) => item.id === parseInt(id)
  );

  if (!productIdCheck) {
    return <h3>Card Product Not Found</h3>;
  }

  return (
    <div className="product-container">
      {/* Left Side */}
      <div className="product-left">
        <div className="product-detail-header">
          <h3>Product Detail</h3>
          <p>
            <span>{productIdCheck.title}</span>
          </p>
        </div>
        <div className="product-image-wrapper">
          <img
            src={productIdCheck.Image}
            alt={productIdCheck.title}
            className="product-image"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="product-right">
        <h2>{productIdCheck.title}</h2>
        <p>{productIdCheck.description}</p>
        <h3 className="product-price">₹{productIdCheck.price}</h3>
        <p className="product-tax">Inclusive of all taxes</p>

        <div className="offers">
          <h4>Offers & Discounts</h4>
          <p>
            Extra ₹400 off on orders above ₹1999. Use Code <b>MAX400</b>
          </p>
        </div>

        <div className="size-section">
          <div className="size-header">
            <h4>Size:</h4>
            <a href="#">Size Guide</a>
          </div>
          <div className="size-options">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
              <button
                key={idx}
                className={`size-button ${size === "XXL" ? "disabled" : ""}`}
                disabled={size === "XXL"}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Basket */}
        <button 
          onClick={() => {
            addToCart(productIdCheck);
            toast.success("Nice pick! Product has been added to basket");
            takeNav("/addedbasket");
          }}
          className="add-basket-btn"
          
        >
          ADD TO BASKET
        </button>

        {/* Favourites & Share */}
        <div className="fav-share"> 
          <span onClick={()=> addToFavourite(productIdCheck)
          }><span>♡</span> Add to Favourites</span>
        </div>
      </div>
    </div>
  );
};
export default SingleCardData;
