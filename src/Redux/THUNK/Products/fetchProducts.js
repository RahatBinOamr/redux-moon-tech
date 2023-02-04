
import { loadProduct } from "../../ActionCreator/productsAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
      const res = await fetch("https://redux-moon-tech-server.vercel.app/products");
      const data = await res.json();
        console.log(data,"btro");
      if (data.length) {
        dispatch(loadProduct(data));
      }
    };
  };
  
  export default loadProductData;