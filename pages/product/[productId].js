import { connect } from "react-redux";
import { addToCart } from '../../src/Redux/Shopping/Shopping-actions';
const Product = ({currentProduct, addToCart}) => {
    // const shoppingCart = useSelector(state => state.items);
    return(
        <div>
            hola
            {/* <button onClick = {()=> addToCart(productData.productId)}>Hasdasdola</button> */}
            {console.log(currentProduct)}
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

const mapStateToProps = state => {
    return {
        currentProduct: state.shop.currentProduct
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);
