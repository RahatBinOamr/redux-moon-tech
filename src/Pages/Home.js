import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Component/ProductCard";
import { toggleBrand, toggleStock } from "../Redux/ActionCreator/filterAction";

import loadProductData from "../Redux/THUNK/Products/fetchProducts";

const Home = () => {
  const filters = useSelector(state=>state.filter.filters);
  const products = useSelector((state) =>state.product.products);
  console.log(products);
  const {brands, stock}= filters;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProductData())
  }, [dispatch]);
  

  const activeClass = "text-white bg-indigo-500 border-white";
/*   const state = useSelector(state=>state)
  console.log(state); */
  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
    <div className='mb-10 flex justify-end gap-5'>
      <button
        onClick={() => dispatch(toggleStock())}
        className={`border px-3 py-2 rounded-full font-semibold ${
          stock ? activeClass : null
        } `}
      >
        In Stock
      </button>
      <button
        onClick={() => dispatch(toggleBrand("amd"))}
        className={`border px-3 py-2 rounded-full font-semibold ${
          brands.includes("amd") ? activeClass : null
        }`}
      >
        AMD
      </button>
      <button
        onClick={() => dispatch(toggleBrand("intel"))}
        className={`border px-3 py-2 rounded-full font-semibold ${
          brands.includes("intel") ? activeClass : null
        }`}
      >
        Intel
      </button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
   {content}
    </div>
  </div>
    
  );
};

export default Home;
