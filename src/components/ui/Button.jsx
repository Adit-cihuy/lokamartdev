// src/components/Button.jsx
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  // Style dasar dan variasi button
  const baseStyle =
    "px-4 py-2 rounded text-white font-semibold focus:outline-none";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  // Gabung style dasar sama varian
  const buttonStyle = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
