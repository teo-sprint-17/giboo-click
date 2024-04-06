import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';

import BottomNav from '@/components/common/BottomNav/BottomNav';

const font = localFont({ src: '../../public/assets/SUITE-Variable.woff2' });

export const metadata: Metadata = {
  title: '기부클릭',
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
        <div className="max-w-[432px] min-w-[320px] w-full h-dvh bg-white shadow-lg rounded-lg flex flex-col">
          <div className="py-[82px] px-[30px] overflow-scroll grow no-scrollbar">{children}</div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
