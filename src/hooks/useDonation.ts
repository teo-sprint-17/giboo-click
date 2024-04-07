import { useRouter } from 'next/navigation';
import useSession from './useSession';

const key = 'giboo_click';

const useDonation = () => {
  const router = useRouter();
  const session = useSession();

  const isDonationComplete = (id: number) => session?.foundationDonation?.includes(id);

  const onDonate = (id: number) => {
    if (!session) return;
    const updatedSession = {
      ...session,
      totalDonationCount: session.totalDonationCount + 1,
      foundationDonation: session.foundationDonation ? [...session.foundationDonation, id] : [id], // Ensure the array exists, then append the ID
    };

    localStorage.setItem(key, JSON.stringify(updatedSession));
    router.push('/donation-complete');
  };

  return { onDonate, isDonationComplete };
};

export default useDonation;
