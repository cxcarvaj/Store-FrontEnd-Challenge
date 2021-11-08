const Badge = (props) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
      <div className="flex items-center">
        <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
          {props.name}
        </span>
      </div>
    </div>
  );
};

export default Badge;
