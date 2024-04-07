import { ReactNode } from 'react';

type Props = {
  title: string;
  description: ReactNode;
};

const DescriptionItem = ({ title, description }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <dt className="font-extrabold">{title}</dt>
      <dd className="text-right">{description}</dd>
    </div>
  );
};

export default DescriptionItem;
