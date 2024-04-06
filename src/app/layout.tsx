import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className + ' flex justify-center'}>
        <div className="relative max-w-[432px] min-w-[320px] w-full h-dvh bg-white shadow-lg rounded-lg p-6">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
