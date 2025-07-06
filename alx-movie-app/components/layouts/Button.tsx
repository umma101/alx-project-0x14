import { ButtonProps } from "@/interfaces";

const LayoutButton: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-[#E2D609] text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300"
    >
      {title}
    </button>
  );
};

export default LayoutButton;
