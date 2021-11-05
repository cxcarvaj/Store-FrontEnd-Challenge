const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    width={props.width}
    viewBox={props.viewBox}
    className={props.className}
  >
    {props.children}
  </svg>
);

export default Icon;
