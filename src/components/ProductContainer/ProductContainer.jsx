import ProductCard from "../ProductCard";

import PropTypes from 'prop-types';

export default function ProductContainer({products =[],handleAddtoCart=()=>{},cart=[]}) {

    function findCardStatus(product={}){
        return cart.some((d) =>d.name==product.name) 

      }
 
  return (
    <section className="container" id="product-container">
<div className="row">
    {
        products.map((data,index) => (
            <ProductCard key={`${data.name}-${index}`} data={data}
            handleAddtoCart={handleAddtoCart}
            isAddedToCart={findCardStatus(data)}
            />

        ))
    }
</div>
    </section>  )
}

ProductContainer.propTypes = {
    products:PropTypes.array ,
    handleAddtoCart:PropTypes.func,
    cart: PropTypes.array

}