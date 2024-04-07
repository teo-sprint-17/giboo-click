'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {};

const BackButton = (props: Props) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} {...props}>
      <Image src="/assets/icons/vuesax/linear/arrow-left.svg" alt="뒤로 가기" width={24} height={24} />
    </button>
  );
};

export default BackButton;
