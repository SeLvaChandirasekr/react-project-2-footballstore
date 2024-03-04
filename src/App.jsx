import "./App.css";
import {useState,useLayoutEffect} from 'react' ;
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./components/ProductContainer/ProductContainer";


function App() {
  
    //for array purose showing we are using UseState
    const [products,setProducts] =useState([]) ;
    const [cart,setCart] =useState([]) ; //foro cart

   
       // Using useEffect instead of useLayoutEffect for fetching data
       useLayoutEffect(() => {
        fetch("http://localhost:5173/products.json")
          .then((response) => response.json())
          .then((result) => {
            if (result.data.length > 0) {
              setProducts(result.data);
            }
          })
          .catch((error) => console.log(error));
        return () => {};
      }, []);
    

         function handleAddtoCart(data={}) {
            let carTcopy=[...cart]
            carTcopy.push(data)
            setCart(carTcopy);


        }
       
  return (
    <div>
      <NavBar quantity={cart.length} />
   <ProductContainer 
   products={products}
   handleAddtoCart={handleAddtoCart}
   cart={cart}
/>
      <Footer />
    </div>
  );
}

export default App;
