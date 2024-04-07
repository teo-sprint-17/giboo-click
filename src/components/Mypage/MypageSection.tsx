import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const MypageSection = ({ children, title }: Props) => {
  return (
    <>
      <div className="font-semibold mb-[20px]">{title}</div>
      <div className="flex flex-col gap-[15px]">{children}</div>
    </>
  );
};

export default MypageSection;
