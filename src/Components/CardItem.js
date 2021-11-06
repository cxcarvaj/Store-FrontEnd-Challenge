import Image from "next/image";
import Link from "next/link";

const CardItem = (props) => {
  const { productId, image, title, variants } = props;
  const { width, height, altText, originalSrc } = image;
  return (
      <Link href={`product/${productId}`}>
    <div
      className="wrapper max-w-xs rounded-b-md shadow-lg overflow-hidden ml-8 my-8 cursor-pointer"
    >
      <div>
        <Image
          src={originalSrc}
          alt={altText}
          width={width}
          height={height}
        />
      </div>
      <div className="pl-2">
        <div className="font-black text-black text-opacity-100">
          {title}
        </div>
        <div className="space-x-4">
            {variants[0].compareAtPrice && (
                <span className="font-light line-through">{`$ ${parseFloat(variants[0].compareAtPrice).toFixed(2)}`}</span>
            )}
          <span className="text-opacity-100 text-pink-500">{`$ ${parseFloat(variants[0].price).toFixed(2)}`}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardItem;
