import useSession from './useSession';

const key = 'giboo_click';

const useDonation = () => {
  const session = useSession();

  const isDonationComplete = (name: string) => session?.foundationDonation?.includes(name);
  
  const onDonate = (name: string) => {
    if (!session) return;
    localStorage.setItem(
      key,
      JSON.stringify({
        ...session,
        totalDonationCount: session.totalDonationCount++,
        foundationDonation: [...session.foundationDonation, name],
      })
    );
  };

  return { onDonate, isDonationComplete };
};

export default useDonation;
