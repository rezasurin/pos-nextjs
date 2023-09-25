import { ID, Query } from "appwrite";
import { Server, account, db } from "./config";

export const anonymousSession = async () => {
  const promise = account.createAnonymousSession();

  return promise.then(
    function (response) {
      // console.log(response, "<< CEKRES");
      return response;
    },
    function (error) {
      console.log(error);
      return error;
    }
  );
};

export const getDataProducts = async () => {
  try {
    // console.log("masukk", Server.products, auth);
    let products = {};
    const data = await db.listDocuments(Server.dbId, Server.products);
    products = data;
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductCategories = async () => {
  try {
    
  } catch (error) {
    return error?.message
  }
}