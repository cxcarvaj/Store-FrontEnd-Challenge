import { connect } from "react-redux";
import { addToCart } from '../../src/Redux/Shopping/Shopping-actions';
const Product = ({productData, addToCart}) => {
    // const shoppingCart = useSelector(state => state.items);
    return(
        <div>
            hola
            <button onClick = {()=> addToCart(productData.productId)}>Hasdasdola</button>
            {/* <div>{shoppingCart[0].qty}</div> */}
            {/* <button onClick={()=>dispatch(incrementQty(shoppingCart))}>Hola</button> */}
            {/* {console.log(shoppingCart[0])} */}
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: () => dispatch(addToCart(productId))
    }
}
export default connect(null, mapDispatchToProps)(Product);
