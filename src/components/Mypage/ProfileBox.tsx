import Image from 'next/image';

const ProfileBox = () => {
  return (
    <div className="bg-[#fff] rounded-[10px] mt-[25px] pt-[22px] pb-[28px] px-[38px] drop-shadow-md">
      <div className="relative w-[120px] h-[120px] mx-auto flex justify-center items-center">
        <Image src="/images/profile_pic.png" width={120} height={120} alt="" />
        <div className="absolute bottom-0 right-0 w-[40px] h-[40px] rounded-full bg-[#000] flex justify-center items-center cursor-pointer">
          <Image src="/assets/icons/vuesax/linear/edit.svg" width={24} height={24} alt="" />
        </div>
      </div>

      <div className="mt-[12px] mb-[33px] font-extrabold text-center">뮤나</div>

      <div className="flex gap-[10px] items-center mb-[12px]">
        <Image
          src="/assets/icons/vuesax/bold/heart.svg"
          alt=""
          width={22}
          height={22}
          style={{
            filter:
              'brightness(0) saturate(100%) invert(47%) sepia(91%) saturate(5999%) hue-rotate(343deg) brightness(108%) contrast(96%)',
          }}
        />

        <span>현재까지 총 41회 기부했어요</span>
      </div>

      <div className="flex gap-[10px] items-center">
        <Image
          src="/assets/icons/vuesax/bold/medal-star.svg"
          width={22}
          height={22}
          alt=""
          className=""
          style={{
            filter:
              'brightness(0) saturate(100%) invert(47%) sepia(91%) saturate(5999%) hue-rotate(343deg) brightness(108%) contrast(96%)',
          }}
        />

        <span>보유한 인증서는 총 5개에요</span>
      </div>
    </div>
  );
};

export default ProfileBox;
