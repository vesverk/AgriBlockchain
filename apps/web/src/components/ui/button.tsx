type Variant = "primary" | "secondary";

interface ButtonProps {
  content: string;
  variant: Variant;
  className?: string;
  onClick: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-[#1A7F37] to-[#0080FF] rounded p-2 px-4 text-white hover:from-[#1A7F37]/90 hover:to-[#0080FF]/90",
  secondary:
    "border-transparent hover:bg-green-100/65 text-black hover:text-green-400 p-2 px-4 rounded",
};

function Button({ content, variant, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
