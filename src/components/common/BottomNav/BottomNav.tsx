'use client';

import NavLink from './NavLink';

import { useUser } from '@/context/UserContext';
import useSession from '@/hooks/useSession';

const BottomNav = () => {
  const { user } = useUser();
  const { session } = useSession();

  return (
    <nav className={'w-full bottom-0 left-0 px-[46px] pt-3.5 pb-10 text-white bg-black'}>
      <ul className={'flex justify-between'}>
        <li>
          <NavLink href="/" imgUrl="/assets/icons/vuesax/linear/home-2.svg">
            홈
          </NavLink>
        </li>
        <li>
          <NavLink href="/feed" imgUrl="/assets/icons/vuesax/heart.svg">
            피드
          </NavLink>
        </li>
        <li>
          <NavLink href={user ?? session ? '/calendar' : '/sign-in'} imgUrl="/assets/icons/vuesax/linear/calendar.svg">
            달력
          </NavLink>
        </li>
        <li>
          <NavLink href={user ?? session ? '/mypage' : '/sign-in'} imgUrl="/assets/icons/vuesax/linear/grammerly.svg">
            마이
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
