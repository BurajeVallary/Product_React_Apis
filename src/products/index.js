import React,{useState,useEffect} from "react";
import './style.css';
import{
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom"


const Products = ()=>{
    const [products,setProducts] = useState ([]);
    const [loading,setLoading ] =useState(false)
    useEffect (()=>{
        (async()=>{
            await getProducts()

        })();

    },[]);

    const getProducts = async ()=>{
       try{
        setLoading (true)
        const response = await fetch ('https://dummyjson.com/products');
        const result = await response.json()

        setProducts(result.products);
        setLoading(false);

       }catch (error){
        console.log(error.mesage);
       }



    };

    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }


    return (
        <div className="displayProducts">

         {/* <Link to={`/product/${item.id}`} key={item.id} className="product-link"></Link> */}
        {products.map(item =>(

          <div  key={item.id} className="dis">
          <img  alt="" src ={item.images[1]} className="images" />
          <p className="product-price">Name: &nbsp; &nbsp;{item.title}</p>
          <p className="product-price"> Ksh:&nbsp; &nbsp;{item.price}</p>
          <p className="product-price">{item.discountPercentage} % </p>
          <Link to={`/product/${item.id}` }className="btn">
            <button type="submit" className="view">View</button >

          </Link>
          {/* <Link to ="/productdetails" className="btn"><button type="submit">View</button ></Link> */}

            </div>
        ))}
      </div> 

    )  ;
    };

export default Products;