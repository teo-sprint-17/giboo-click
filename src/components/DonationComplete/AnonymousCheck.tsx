import Image from 'next/image';
import { ChangeEvent } from 'react';

type Props = {
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AnonymousCheck = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-5 pl-2.5 mt-2.5">
      <label htmlFor="anonymousInput" className={`text-${value ? 'black' : '[#A19999]'} text-sm`}>
        익명으로 기부하기
      </label>

      <div className="relative">
        <input
          type="checkbox"
          id="anonymousInput"
          checked={value}
          onChange={onChange}
          className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-rect(0, 0, 0, 0) text-[1px] whitespace-nowrap border-0"
        />
        <label htmlFor="anonymousInput">
          <Image
            src={value ? '/assets/icons/vuesax/bold/tick-circle.svg' : '/assets/icons/vuesax/linear/tick-circle.svg'}
            width={17}
            height={17}
            alt=""
          />
        </label>
      </div>
    </div>
  );
};

export default AnonymousCheck;
