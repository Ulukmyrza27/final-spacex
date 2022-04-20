import { db } from "../../fire";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productCollectionRef = collection(db, "products");
class ProductDataService {
  addProductsF = (newProduct) => {
    return addDoc(bookCollectionRef, newProduct);
  };

  updateProductsF = (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    return updateDoc(productDoc, updatedProduct);
  };

  deleteProductsF = (id) => {
    const productDoc = doc(db, "products", id);
    return deleteDoc(productDoc);
  };

  getAllProductsF = () => {
    return getDocs(productCollectionRef);
  };

  getProductF = (id) => {
    const productDoc = doc(db, "products", id);
    return getDoc(productDoc);
  };
}

export default new ProductDataService();
