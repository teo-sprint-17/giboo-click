'use client';

import Image from 'next/image';
import { useState } from 'react';
import MypageSection from './MypageSection';

const Settings = () => {
  const [pushNotification, setPushNotification] = useState(false);
  const [promotionNotification, setPromotionNotification] = useState(false);

  return (
    <MypageSection title="설정">
      <div className="flex justify-between">
        <div>푸시 알림</div>
        {pushNotification ? (
          <Image
            onClick={() => setPushNotification(false)}
            src="/assets/icons/vuesax/toggle-on.svg"
            width={40}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        ) : (
          <Image
            onClick={() => setPushNotification(true)}
            src="/assets/icons/vuesax/toggle-off.svg"
            width={40}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="flex justify-between">
        <div>프로모션/이벤트 알림 수신</div>
        {promotionNotification ? (
          <Image
            onClick={() => setPromotionNotification(false)}
            src="/assets/icons/vuesax/toggle-on.svg"
            width={40}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        ) : (
          <Image
            onClick={() => setPromotionNotification(true)}
            src="/assets/icons/vuesax/toggle-off.svg"
            width={40}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        )}
      </div>
    </MypageSection>
  );
};

export default Settings;
