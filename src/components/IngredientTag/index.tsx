import { InputHTMLAttributes } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

interface IngredientTagProps extends InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  onClick?: () => void;
  className?: any;
}

export function IngredientTag({ isNew, value, onClick, className, ...rest }: IngredientTagProps) {
  return (
    <Container
      className={`${isNew ? 'bg-transparent border-2 border-dashed border-gray_300' : 'bg-background_700 border-none'} `}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        className={`${className} bg-transparent text-gray_200 w-[160px] px-4 rounded-xl focus:outline-none`}
        // bg-background_700
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={`${className} text-gray_300 absolute right-2 ${isNew ? 'top-[9px]' : 'top-[11px]'} `}
      >
        {isNew ? <FiPlus size={20} /> : <FiX size={20} />}
      </button>
    </Container>
  );
}
