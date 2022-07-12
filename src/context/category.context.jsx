import { createContext, useState, useEffect } from "react";
import { getCategoryDocuments } from "../utility/firebase/firebase.utils";
// import PRODUCTS from "../../shop-data";
// import {addCollectionAndDocuments} from '../../utility/firebase/firebase.utils'
// getCategoryDocuments

export const CategoryContext = createContext({
  categories: {},
  setCategories: () => null,
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };
  //   useEffect(()=>{

  //     addCollectionAndDocuments('categories',PRODUCTS)

  // })
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoryDocuments();
      // console.log(categoryMap);
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
