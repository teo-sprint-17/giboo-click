'use client';

import Header from '@/components/common/Header/Header';
import InputField from '@/components/common/InputField';
import LayerLayout from '@/components/common/LayerLayout';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

const SignUp = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const searchParams = useSearchParams();
  const currentStep = `${searchParams}`.replace('step=', '') || 'id';
  const [step, setStep] = useState<string>(currentStep);
  const router = useRouter();

  const isSamePassword = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

  useEffect(() => {
    if (step !== currentStep) setStep(currentStep);
  }, [currentStep]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <LayerLayout>
      <Header title="회원가입" className="mt-[75px]" />

      <form onSubmit={onSubmit} className="flex flex-col gap-[10px] mt-[50px]">
        {step === 'id' ? (
          <section>
            <strong className="text-xl leading-[35px]">
              로그인에 사용할
              <br />
              아이디를 입력해주세요
            </strong>
            <div className="mt-5">
              <InputField value={userId} onChange={(value) => setUserId(value)} placeholder="아이디 입력" required />
            </div>

            <button
              type="button"
              disabled={userId.length === 0}
              className="w-full h-[55px] mt-10 font-semibold rounded-[10px] text-white bg-[#FF3838] disabled:text-[#A19999] disabled:bg-[#D7D5D5]"
              onClick={() => {
                router.push('/sign-up?step=password');
                setStep('password');
              }}
            >
              다음
            </button>
          </section>
        ) : null}
        {step === 'password' ? (
          <section>
            <strong className="text-xl leading-[35px]">
              로그인에 사용할
              <br />
              비밀번호를 입력해주세요
            </strong>
            <div className="flex flex-col gap-[10px] mt-5">
              <InputField
                type="password"
                value={password}
                onChange={(value) => setPassword(value)}
                placeholder="비밀번호 입력"
                required
              />
              <InputField
                type="password"
                value={confirmPassword}
                onChange={(value) => setConfirmPassword(value)}
                placeholder="비밀번호 확인"
                required
              />
            </div>
            <p className={`flex items-center gap-[3px] mt-[10px] text-[${isSamePassword ? '#FF3838' : '#A19999'}]`}>
              비밀번호 일치{' '}
              <Image
                src={`${
                  isSamePassword
                    ? '/assets/icons/vuesax/linear/tick-circle-red.svg'
                    : '/assets/icons/vuesax/linear/tick-circle.svg'
                }`}
                alt=""
                width={16}
                height={16}
              />
            </p>

            <button
              type="button"
              disabled={password.length === 0 || confirmPassword.length === 0 || password !== confirmPassword}
              className="w-full h-[55px] mt-10 font-semibold rounded-[10px] text-white bg-[#FF3838] disabled:text-[#A19999] disabled:bg-[#D7D5D5]"
              onClick={() => {
                router.push('/sign-up?step=complete');
                setStep('complete');
              }}
            >
              다음
            </button>
          </section>
        ) : null}

        {step === 'complete' ? (
          <section className="mt-[20px] mb-[132px]">
            <div className="text-center">
              <strong className="text-2xl text-semibold leading-[35px]">회원가입 완료!</strong>
              <p className="mt-[10px] text-xl">기부클릭의 회원이 되신 것을 환영합니다</p>
            </div>
            <div className="mt-5 mx-auto">
              <Image src="/assets/sakura.png" alt="" width={1480} height={1480} className="w-[370px] h-auto" />
            </div>

            <button
              type="submit"
              className="w-full h-[55px] mt-10 font-semibold rounded-[10px] text-white bg-[#FF3838] disabled:text-[#A19999] disabled:bg-[#D7D5D5]"
              onClick={() => router.push('/')}
            >
              완료
            </button>
          </section>
        ) : null}
      </form>
    </LayerLayout>
  );
};

export default SignUp;
