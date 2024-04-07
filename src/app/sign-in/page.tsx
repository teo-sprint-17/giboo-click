'use client';

import Header from '@/components/common/Header/Header';
import InputField from '@/components/common/InputField';
import LayerLayout from '@/components/common/LayerLayout';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const SignIn = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!localStorage.getItem('giboo_click')) return alert('등록된 아이디가 없습니다.');
    router.push('/');
  };

  return (
    <LayerLayout>
      <Header title="로그인" className="mt-[75px]" />

      <form onSubmit={onSubmit} className="flex flex-col gap-[10px] mt-[60px]">
        <InputField value={userId} onChange={(value) => setUserId(value)} placeholder="아이디" required />
        <InputField
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          placeholder="비밀번호"
          required
        />

        <button
          type="submit"
          disabled={userId.length === 0 || password.length === 0}
          className="w-full h-[55px] mt-10 font-semibold rounded-[10px] text-white bg-[#FF3838] disabled:text-[#A19999] disabled:bg-[#D7D5D5]"
        >
          로그인하기
        </button>
        <button className="w-full mt-4 text-center text-[#A19999]" onClick={() => router.push('/sign-up')}>
          회원가입
        </button>
      </form>
    </LayerLayout>
  );
};

export default SignIn;
