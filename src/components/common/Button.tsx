type Props = {
  onClick: () => void;
  text: string;
  positive?: boolean;
};

const Button = ({ onClick, text, positive }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-[20px] rounded-[10px]  text-center cursor-pointer ${
        positive ? 'bg-[#FF6A6A]' : 'bg-[#00000033]'
      }`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Button;
