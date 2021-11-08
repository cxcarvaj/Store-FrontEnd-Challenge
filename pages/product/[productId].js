import { connect } from "react-redux";
import Carousel from "../../src/Components/Carousel";
import Badge from "../../src/Components/Badge";
import { addToCart } from "../../src/Redux/Shopping/Shopping-actions";
import { useState } from "react";

const Product = ({ currentProduct, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [qtyProduct, setqtyProduct] = useState(1);
  return (
    <div className="grid sm:flex">
      <div className="flex justify-center items-center">
        <Carousel test={currentProduct} setSelectedItem={setSelectedItem} />
      </div>
      <div>
        <div className="ml-8 mt-8 w-1-2 sm:ml-16">
          <div className="font-bold text-2xl">{currentProduct.title}</div>
          <div className="text-sm my-4">{currentProduct.productType}</div>
          <div className="text-opacity-100 text-pink-500 font-bold text-2xl">{`$ ${(currentProduct.variants[selectedItem].price * qtyProduct).toFixed(2)}`}</div>
          <div className="flex space-x-1 mt-4">
            {currentProduct.variants.map((variant) => {
              if (variant.title !== "Default Title") {
                return <Badge name={variant.title} />;
              }
            })}
          </div>
        </div>
        <div className="ml-8 mt-2 w-1-2 sm:ml-16">
          <div className="text-xs font-bold">Quantity</div>
          <div className="flex mt-2">
            <button
              onClick={() => {
                let qty = qtyProduct;
                qty -= 1;
                if (qty > 0) setqtyProduct(qty);
              }}
              className="border-2 sm:w-1/5 sm:h-8 w-6 text-center"
            >
              -
            </button>
            <div className="border-2 sm:w-1/4 sm:h-8 text-center w-6">
              {qtyProduct}
            </div>
            <button
              onClick={() => {
                let qty = qtyProduct;
                qty += 1;
                setqtyProduct(qty);
              }}
              className="border-2 sm:w-1/5 sm:h-8 w-6 text-center"
            >
              +
            </button>
            <button
              onClick={() => {
                  let newItem = {
                      status: 200,
                      data: currentProduct,
                      qty: qtyProduct,
                  }
                  addToCart(newItem)
              }}
              className="bg-pink-500 hover:bg-pink-300 text-white ml-6 sm:w-64 w-56 mr-6"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
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
