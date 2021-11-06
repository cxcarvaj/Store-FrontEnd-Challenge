import Image from "next/image";

const CartItem = ({ item }) => {
  const { product } = item;
  return (
    <div>
      <h3>Cart</h3>
      <div>
        <div>
          <Image
            src={product.images[0].originalSrc}
            alt={product.images[0].altText}
            width={product.images[0].width}
            height={product.images[0].height}
          />
        </div>
        <div>{product.title}</div>
        <div>{product.variants[0].title}</div>
        <div>
          <button>-</button>
          <div>qyt</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
