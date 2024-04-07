import { HTMLAttributes, ReactNode } from 'react';

type Props = Pick<HTMLAttributes<HTMLHeadingElement>, 'className'> & {
  children: ReactNode;
};

const Title = ({ className, children }: Props) => {
  return <h2 className={'text-xl font-bold text-center ' + className}>{children}</h2>;
};

export default Title;
