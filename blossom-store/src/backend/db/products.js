import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title:"",  
    price: "5000",
    categoryName: "Guitar",
  },
  {
    _id: uuid(),
    title:"",
    price: "3000",
    categoryName: "Guitar",
  },
  {
    _id: uuid(),
    title:"",
    price: "1000",
    categoryName: "Guitar",
  },
];
