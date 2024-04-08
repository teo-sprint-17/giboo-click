import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';

import BottomNav from '@/components/common/BottomNav/BottomNav';
import UserProvider from '@/context/UserContext';

const font = localFont({
  src: [
    {
      path: '../../public/assets/fonts/SUITE-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SUITE-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SUITE-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SUITE-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SUITE-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: '기부클릭',
    template: '%s | 기부클릭',
  },
  description: '기부클릭은 기부를 쉽게 할 수 있는 플랫폼입니다.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={font.className + ' flex justify-center'}>
        <UserProvider>
          <div
            id="view"
            className="relative max-w-[432px] min-w-[320px] w-full h-dvh bg-[#F6F4F2] shadow-lg rounded-lg flex flex-col"
          >
            <div className="py-[82px] px-[30px] overflow-scroll grow no-scrollbar">{children}</div>
            <BottomNav />
          </div>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
