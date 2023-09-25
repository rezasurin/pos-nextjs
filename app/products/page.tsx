import { Query } from "appwrite";
import { Server, account, db } from "@/appwrite/config";
import { getDataProducts } from "@/appwrite/functions";
import { useEffect } from "react";
import ProductsCard from "./ProductCards";

export const revalidate = 3600;

const Products = async (props) => {
  const products = await getDataProducts();
  // const productCategories = await

  // useEffect(() => {
  //   if (products === null) {

  //     getDataProducts()
  //   }
  // }, [products])
  console.log(products.documents, "<<< CEKKK");
  return (
    // <div>
    <div className="flex flex-col">
      {products?.documents.map((item) => (
        // <div key={item["$id"]}>
        //   {
        //     item.name
        //   }

        // </div>
        <ProductsCard src={item.img_url} key={item["$id"]} />
      ))}
    </div>
  );
};

export default Products;
