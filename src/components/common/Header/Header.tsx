import { HTMLAttributes, ReactNode } from 'react';
import Title from './Title';
import BackButton from './BackButton';

type Props = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
  title?: string;
  disabledBack?: boolean;
  rightButton?: ReactNode;
};

const Header = ({ title, disabledBack, rightButton, className }: Props) => {
  return (
    <div className={'grid grid-cols-[24px_1fr_24px] items-center min-h-6 text-center ' + className}>
      {disabledBack ? null : <BackButton className="col-start-1 col-end-2" />}
      {title ? <Title className="col-start-2 col-end-3">{title}</Title> : null}
      {rightButton ? <div className="flex items-center justify-center col-start-3 col-end-4">{rightButton}</div> : null}
    </div>
  );
};

export default Header;
