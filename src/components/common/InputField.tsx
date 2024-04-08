import Image from 'next/image';
import { InputHTMLAttributes } from 'react';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const InputField = ({ value, onChange, ...props }: Props) => {
  return (
    <div className="relative flex items-center justify-between w-full h-[55px] px-[20px] text-[#A19999] bg-white rounded-[10px]">
      <input
        type="text"
        className="w-[200px] focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        {...props}
      />
      {value.length > 0 ? (
        <button type="button" onClick={() => onChange('')}>
          <Image src="/assets/icons/vuesax/bold/close-circle.svg" alt="작성 내용 초기화" width={20} height={20} />
        </button>
      ) : null}
    </div>
  );
};

export default InputField;
