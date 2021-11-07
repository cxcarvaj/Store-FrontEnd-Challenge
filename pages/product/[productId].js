import { connect } from "react-redux";
import Carousel from "../../src/Components/Carousel";
import { addToCart } from "../../src/Redux/Shopping/Shopping-actions";
import { useState } from "react";
const Product = ({ currentProduct, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [qtyProduct, setqtyProduct] = useState(0);
  return (
    <div className="flex">
      <Carousel test={currentProduct} setSelectedItem={setSelectedItem} />
      {/* <button onClick = {()=> addToCart(productData.productId)}>Hasdasdola</button> */}
      {console.log(currentProduct)}
      <div>
        <div>{currentProduct.title}</div>
        <div>{currentProduct.productType}</div>
        <div>{currentProduct.variants[selectedItem].price}</div>
        {currentProduct.variants[selectedItem].title !== "Default Title" ? (
          <div>{currentProduct.variants[selectedItem].title}</div>
        ) : (
          <></>
        )}
      </div>
      {/* <div>
          Quantity
          <button>-</button>
          <div>{qtyProduct}</div>
          <button onClick={()=>dispatch(addToCart(currentProduct.productId))}>+</button>
      </div> */}

      {/* <button onClick={()=>dispatch(addToCart(shoppingCart))}>Hola</button> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId) => dispatch(addToCart(productId)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentProduct: state.shop.currentProduct,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
