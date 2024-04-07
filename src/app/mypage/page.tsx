import DonationStatus from '@/components/Mypage/DonationStatus';
import MyDonation from '@/components/Mypage/MyDonation';
import ProfileBox from '@/components/Mypage/ProfileBox';
import Settings from '@/components/Mypage/Settings';
import SupportAndOther from '@/components/Mypage/SupportAndOther';
import Header from '@/components/common/Header/Header';

const mypage = () => {
  return (
    <>
      <Header disabledBack title="마이" />
      <ProfileBox />
      <div className="mt-[37px] h-[7px] bg-[#D7D5D5] bg-opacity-30 mx-[-30px] my-[20px]" />
      <MyDonation />
      <div className="h-[7px] bg-[#D7D5D5] bg-opacity-30 mx-[-30px] my-[20px]" />
      <DonationStatus />
      <div className="h-[7px] bg-[#D7D5D5] bg-opacity-30 mx-[-30px] my-[20px]" />
      <Settings />
      <div className="h-[7px] bg-[#D7D5D5] bg-opacity-30 mx-[-30px] my-[20px]" />
      <SupportAndOther />
    </>
  );
};

export default mypage;
