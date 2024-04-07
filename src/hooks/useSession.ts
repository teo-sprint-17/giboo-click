import type { User } from '@/types/common';

const key = 'giboo_click';

const useSession = () => {
  const session: User | null = JSON.parse(localStorage.getItem(key)!);

  return session;
};

export default useSession;
