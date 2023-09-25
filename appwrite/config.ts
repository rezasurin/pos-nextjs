import { Client, Account, Databases, Storage, ID } from "appwrite";

type ServerProps = {
  endpoint: string;
  projectId: string;
  dbId: string;
  products: string;
};

export const Server: ServerProps = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_ID as string,
  dbId: process.env.NEXT_PUBLIC_DB_ID as string,
  products: process.env.NEXT_PUBLIC_PRODUCTS_COLL_ID as string,
};

const appwrite = new Client()
  .setEndpoint(Server.endpoint)
  .setProject(Server.projectId);
  

export const account = new Account(appwrite);

export const db = new Databases(appwrite);

export const storage = new Storage(appwrite);
