import DonationFoundations from '@/components/Home/DonationFoundations';
import IntroModal from '@/components/Home/IntroModal';
import Category from '@/components/common/Category/Category';

export default function App() {
  return (
    <>
      <IntroModal />
      <div>
        <div className="whitespace-pre-wrap mb-[50px]">
          기부는 <span className="font-semibold">기부클릭</span>
          이 할게요.
          <br />
          여러분은 <span className="font-semibold">따듯한 마음</span>만 전해주세요.
        </div>
        <div className="overflow-y-scroll">
          <div className="flex gap-[16px]">
            <Category isSelected={true} name={'#아동|청소년'} />
            <Category isSelected={false} name={'#지구촌'} />
            <Category isSelected={false} name={'#실버세대'} />
            <Category isSelected={false} name={'#이주민'} />
            <Category isSelected={false} name={'#이주민'} />
            <Category isSelected={false} name={'#이주민'} />
          </div>
        </div>
        <DonationFoundations />
      </div>
    </>
  );
}
