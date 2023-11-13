import Axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { useQuery } from 'react-query';
import { ProductsContext } from '../context/ProductsContext';
import { Product } from '../interfaces/index';
// import ProductCard from '../components/ProductCard';

export function useApi(url: string) {
    const { setProducts } = useContext(ProductsContext)
    const [product, setProduct] = useState<Product>()

    const { data, isLoading, error } = useQuery("myQuery", async () => {
        const response = await Axios.get(url)
        return response.data;
    });
   

  

  // const [image, setImage] = useState()
  // const [type, setType] = useState([''])

  // interface Types {
  //     type: {
  //       name: string;
  //     }
  // }



    //     }
    //     setProduct(response.data)
    //     // setImage(response.data)
    //     // setType(response.data.types.map((el: Types) => el.type.name))
    //   })
    //   .catch(err => {
    //     setError(err);
    //   })
    //   .finally(() => {
    //     setInterval(() => {
    //       setIsLoading(false)
    //     }, 2000)
    //   })

  // const mainType = type.shift()

  useEffect(() => {
    setProducts(data)
  }, [data])

  return;
  // return { image, mainType, product, error, isLoading, setIsLoading, getProducts }
}


