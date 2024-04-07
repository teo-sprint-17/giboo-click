import type { User } from '@/types/common';

import { useEffect, useState } from 'react';

const key = 'giboo_click';

const useSession = () => {
  const [session, setSession] = useState<User | null>(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(key)!);
    setSession(userData);
  }, []);

  return { session };
};

export default useSession;
