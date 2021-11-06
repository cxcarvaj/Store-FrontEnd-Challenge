import Image from "next/image";

const CardItem = (props) => {
  const { key, image, title, variants } = props;
  const { width, height, altText, originalSrc } = image;
  return (
    <div
      key={key}
      className="wrapper max-w-xs rounded-b-md shadow-lg overflow-hidden ml-8 my-8"
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
          <span className="font-light line-through">$300</span>
          <span className="text-opacity-100 text-pink-500">$200</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
