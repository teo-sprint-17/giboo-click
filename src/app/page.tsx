import Carousel from '@/components/Home/Carousel';
import Category from '@/components/common/Category/Category';

export default function App() {
  return (
    <div>
      <div className="whitespace-pre-wrap font-['SUITE-Variable'] mb-[50px]">
        기부는 <span className="font-semibold">기부클릭</span>
        이 할게요.
        <br />
        여러분은 <span className="font-semibold">따듯한 마음</span>만 전해주세요.
      </div>
      <div className="flex gap-[16px]">
        <Category isSelected={true} name={'아동|청소년'} />
        <Category isSelected={false} name={'지구촌'} />
        <Category isSelected={false} name={'실버세대'} />
        <Category isSelected={false} name={'이주민'} />
      </div>
      <Carousel />
      <div className="mt-[56px] mx-auto bg-[#D9D9D9] w-[240px] px-[71px] py-[8px] rounded-[60px] text-center text-SUITE font-semibold text-[28px] leading-34.94 cursor-pointer">
        기부하기
      </div>
    </div>
  );
}
