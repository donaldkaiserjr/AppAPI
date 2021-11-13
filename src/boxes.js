export default function Box({ className = "", style, size, ...rest }) {
  const sizeClassName = size ? `box--${size}` : "box--large";

  const props = {
    className: `box ${sizeClassName}`,
    style: { fontStyle: "normal", fontWeight: "600", color: "#fff", ...style },
    ...rest
  };
  return <div {...props} />;
}
