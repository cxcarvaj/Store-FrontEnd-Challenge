import Image from "next/image";
import { connect } from "react-redux";

const CartItem = ({ cart }) => {
  return (
    <div>
      <h3>Cart</h3>
      <div>
        {console.log(cart)}
        {cart.map((item, index) => {
          return (
            <div key={item.productId}>
              <div>
                <Image
                  src={item.images[0].originalSrc}
                  alt={item.images[0].altText}
                  width={item.images[0].width}
                  height={item.images[0].height}
                />
              </div>
              <div>{item.title}</div>
              <div>{item.variants[0].title}</div>
              <div>
                <div>{`Cantidad: ${item.qty}`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(CartItem);
