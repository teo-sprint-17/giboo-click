import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LayerLayout = ({ children }: Props) => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full min-h-full h-fit px-[30px] bg-[#F6F4F2]">
      {children}
    </div>
  );
};

export default LayerLayout;
