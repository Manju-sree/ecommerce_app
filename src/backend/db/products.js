import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName:"Swiss Beauty Foundation Blender Brush",
    price:500,
    offer:"50% off",
    discount:50,
    rating:3.1,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:15,
    isOffer:true,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/found6.png",
    categoryName: "Foundation-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC Beauty Foundation Brush 254",
    price:900,
    offer:"10% off",
    discount:10,
    rating:2,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:25,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/found8.png",
    categoryName: "Foundation-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC Beauty Foundation Brush 240",
    price:400,
    offer:"20% off",
    discount:20,
    rating:3.1,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:10,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/found2.png",
    categoryName: "Foundation-brushes",
  },
  {
    _id: uuid(),
    productName:"ColorBar Pricture Perfect Foundation Brush",
    price:300,
    offer:"10% off",
    discount:10,
    rating:4.1,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:20,
    isOffer:false,
    isArrivedNew:true,
    brand:"",
    image:"./assets/images/products/found4.png",
    categoryName: "Foundation-brushes",
  },
  {
    _id: uuid(),
    productName:"GUBB MakeUp Foundation Brush",
    price:200,
    offer:"",
    rating:5,
    inStock:false,
    fastDelivery:false,
    ratingbymembers:5,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/found7.png",
    categoryName: "Foundation-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC Eyeliner Brush 371",
    price:300,
    offer:"15% off",
    discount:15,
    rating:4.9,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:15,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/found7.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC Eyeliner Brush 031",
    price:600,
    offer:"10% off",
    discount:10,
    rating:5,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:55,
    isOffer:false,
    isArrivedNew:true,
    brand:"",
    image:"./assets/images/products/eye8.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"MAC Eyeliner Brush 241",
    price:800,
    offer:"15% off",
    discount:15,
    rating:4,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:40,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/eye1.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"Miniso Eyeliner Brush",
    price:850,
    offer:"25% off",
    discount:25,
    rating:3,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:35,
    isOffer:true,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/eye4.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"ColorBar Eyeliner Brush 300",
    price:550,
     offer:"",
    rating:2,
    inStock:false,
    fastDelivery:false,
    ratingbymembers:10,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/eye5.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"Sugar Eyeliner Brush",
    price:250,
    offer:"",
    rating:1,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:25,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/eye9.png",
    categoryName: "Eyeliner-brushes",
  },
  {
    _id: uuid(),
    productName:"ColorBar Concealer Brush",
    price:350,
    offer:"10% off",
    discount:10,
    rating:3,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:15,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/concea.png",
    categoryName: "Concealer-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC Concealer Brush 073",
    price:700,
    offer:"20% off",
    discount:20,
    rating:5,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:25,
    isOffer:true,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/concea1.png",
    categoryName: "Concealer-brushes",
  },
  {
    _id: uuid(),
    productName:"Miniso Concealer Brush",
    price:200,
    offer:"5% off",
    discount:5,
    rating:2,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:35,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/concea2.png",
    categoryName: "Concealer-brushes",
  },
  {
    _id: uuid(),
    productName:"PAC-236 Concealer Brush",
    price:900,
    offer:"10% off",
    discount:10,
    rating:4,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:12,
    brand:"",
    isOffer:false,
    isArrivedNew:false,
    image:"./assets/images/products/concea4.png",
    categoryName: "Concealer-brushes",
  },
  {
    _id: uuid(),
    productName:"MAC Blush MakeUp Brush",
    price:600,
    offer:"",
    rating:5,
    inStock:false,
    fastDelivery:false,
    ratingbymembers:19,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/blush1.png",
    categoryName: "Blush-brushes",
  },
  {
    _id: uuid(),
    productName:"Sugar Blush MakeUp Brush",
    price:400,
    offer:"50% off",
    discount:50,
    rating:4,
    inStock:true,
    fastDelivery:true,
    ratingbymembers:65,
    isOffer:true,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/blush4.png",
    categoryName: "Blush-brushes",
  },
  {
    _id: uuid(),
    productName:"Miniso MakeUp Blush Brush",
    price:500,
    offer:"",
    rating:2,
    inStock:true,
    fastDelivery:false,
    ratingbymembers:11,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/blush5.png",
    categoryName: "Blush-brushes",
  },
  {
    _id: uuid(),
    productName:"ColorBar Blush Brush",
    price:250,
    offer:"",
    rating:3,
    inStock:false,
    fastDelivery:false,
    ratingbymembers:35,
    isOffer:false,
    isArrivedNew:false,
    brand:"",
    image:"./assets/images/products/blush6.png",
    categoryName: "Blush-brushes",
  }
  
];
