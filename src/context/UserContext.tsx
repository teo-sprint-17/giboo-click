'use client';

import type { User } from '@/types/common';

import { useState, createContext, useContext, PropsWithChildren } from 'react';

type UserContextType = {
  user: User | null;
  onSignUp: (username: string) => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const onSignUp = (username: string) => {
    const userSession = { username, issueDate: new Date(), totalDonationCount: 0, foundationDonation: [] };
    localStorage.setItem('giboo_click', JSON.stringify(userSession));
    setUser(userSession);
  };

  const contextValue: UserContextType = {
    user,
    onSignUp,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Error finding user context.');
  }

  return context;
};
