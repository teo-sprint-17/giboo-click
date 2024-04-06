import Link from 'next/link';
import { ReactNode } from 'react';

type NavLink = {
  href: string;
  imgUrl: string;
  children: ReactNode;
};

const NavLink = ({ href, imgUrl, children }: NavLink) => {
  return (
    <Link href={href} className={'flex flex-col justify-center items-center gap-1 text-sm'}>
      <img src={imgUrl} alt="" />
      {children}
    </Link>
  );
};

export default NavLink;