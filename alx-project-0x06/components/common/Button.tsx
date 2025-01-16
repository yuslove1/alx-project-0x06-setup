import { ButtonProps } from "@/interface";

// Dynamically determine the background color class based on the buttonBackgroundColor prop
// If buttonBackgroundColor is provided, it uses a lookup table to get the corresponding Tailwind CSS class.
// Defaults to 'bg-slate-500' if no buttonBackgroundColor is provided.
const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor]
    : "bg-slate-500";

  return (
    // Button element with dynamic classes and click handler
    <button
      onClick={action}
      // Construct the className string dynamically using template literals
      // Includes the backgroundColorClass, buttonSize, and default styling classes
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:${backgroundColorClass}/50 transition duration-300 text-white`}
    >
      {/* Display the button label */}
      {buttonLabel}
    </button>
  );
};

export default Button;
