import { DonationComment } from '@/types/common';
import { ChangeEvent } from 'react';

type Props = {
  value: DonationComment['content'];
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const CheeringField = ({ value, onChange }: Props) => {
  return (
    <div className="relative h-[100px] mt-[49px] ">
      <textarea
        className="w-full h-full px-5 py-2.5 text-sm rounded-[10px] resize-none placeholder:text-[#A19999]"
        placeholder="응원의 한 마디를 남겨주세요."
        value={value}
        onChange={onChange}
      ></textarea>
      <p className="absolute right-5 bottom-2.5 text-sm text-[#A19999]">
        <span>{value.length}</span>/<span>150</span>
      </p>
    </div>
  );
};

export default CheeringField;
